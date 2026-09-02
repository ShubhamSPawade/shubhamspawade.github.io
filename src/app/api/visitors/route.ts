import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import fs from "fs/promises";
import path from "path";

// Initialize Redis if credentials exist (Upstash Redis or Vercel KV)
const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

const redis =
  redisUrl && redisToken
    ? new Redis({
        url: redisUrl,
        token: redisToken,
      })
    : null;

// File fallback path for local development
const LOCAL_DATA_PATH = path.join(process.cwd(), "data", "visitors.json");

// In-memory fallback in case of read-only disk in serverless without Redis
let memoryFallback = {
  uniqueVisitors: new Set<string>(),
  totalViews: 0,
};

interface LocalData {
  uniqueVisitors: string[];
  totalViews: number;
}

async function getLocalData(): Promise<LocalData> {
  try {
    const raw = await fs.readFile(LOCAL_DATA_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      uniqueVisitors: Array.isArray(parsed.uniqueVisitors) ? parsed.uniqueVisitors : [],
      totalViews: typeof parsed.totalViews === "number" ? parsed.totalViews : 0,
    };
  } catch {
    return {
      uniqueVisitors: Array.from(memoryFallback.uniqueVisitors),
      totalViews: memoryFallback.totalViews,
    };
  }
}

async function saveLocalData(data: LocalData): Promise<void> {
  try {
    const dir = path.dirname(LOCAL_DATA_PATH);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(LOCAL_DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch {
    // If disk write is blocked (e.g. read-only serverless container), store in memory
    memoryFallback.uniqueVisitors = new Set(data.uniqueVisitors);
    memoryFallback.totalViews = data.totalViews;
  }
}

export async function GET() {
  try {
    if (redis) {
      const [uniqueCount, totalViews] = await Promise.all([
        redis.scard("portfolio:unique_visitors"),
        redis.get<number>("portfolio:total_views"),
      ]);

      return NextResponse.json(
        {
          uniqueVisitors: Math.max(Number(uniqueCount) || 0, 1),
          totalViews: Math.max(Number(totalViews) || 0, 1),
          source: "redis",
        },
        {
          headers: {
            "Cache-Control": "no-store, max-age=0, must-revalidate",
          },
        }
      );
    }

    // Local file fallback
    const local = await getLocalData();
    return NextResponse.json(
      {
        uniqueVisitors: Math.max(local.uniqueVisitors.length, 1),
        totalViews: Math.max(local.totalViews, 1),
        source: "local",
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("[Visitors API] Error getting counts:", error);
    return NextResponse.json(
      {
        uniqueVisitors: 1,
        totalViews: 1,
        error: "Failed to retrieve count",
      },
      { status: 200 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawVisitorId = typeof body.visitorId === "string" ? body.visitorId.trim() : "";
    const isNewSession = Boolean(body.isNewSession);

    // Sanitize visitorId (max 128 chars, alphanumeric & dashes/underscores)
    const visitorId = rawVisitorId.slice(0, 128).replace(/[^a-zA-Z0-9_-]/g, "") || "anon";

    if (redis) {
      // SADD returns 1 if member was newly added, 0 if it already existed
      const isNew = await redis.sadd("portfolio:unique_visitors", visitorId);

      if (isNewSession) {
        await redis.incr("portfolio:total_views");
      }

      const [uniqueCount, totalViews] = await Promise.all([
        redis.scard("portfolio:unique_visitors"),
        redis.get<number>("portfolio:total_views"),
      ]);

      return NextResponse.json(
        {
          uniqueVisitors: Math.max(Number(uniqueCount) || 0, 1),
          totalViews: Math.max(Number(totalViews) || 0, 1),
          isNewVisitor: isNew === 1,
          source: "redis",
        },
        {
          headers: {
            "Cache-Control": "no-store, max-age=0, must-revalidate",
          },
        }
      );
    }

    // Local file fallback
    const local = await getLocalData();
    let isNew = false;

    if (!local.uniqueVisitors.includes(visitorId)) {
      local.uniqueVisitors.push(visitorId);
      isNew = true;
    }

    if (isNewSession) {
      local.totalViews += 1;
    }

    await saveLocalData(local);

    return NextResponse.json(
      {
        uniqueVisitors: Math.max(local.uniqueVisitors.length, 1),
        totalViews: Math.max(local.totalViews, 1),
        isNewVisitor: isNew,
        source: "local",
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("[Visitors API] Error recording visit:", error);
    return NextResponse.json(
      {
        uniqueVisitors: 1,
        totalViews: 1,
        isNewVisitor: false,
        error: "Failed to record visit",
      },
      { status: 200 }
    );
  }
}
