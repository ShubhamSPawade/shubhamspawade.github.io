import { DATA } from "@/data/resume";
import VisitorCounter from "@/components/visitor-counter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col items-center justify-center gap-3">
      {/* Real-time Unique People Visited Counter */}
      <VisitorCounter />

      {/* Copyright */}
      <p className="text-xs text-muted-foreground">
        © {currentYear} {DATA.name}
      </p>
    </footer>
  );
}
