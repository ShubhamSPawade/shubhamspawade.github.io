import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Trophy, Rocket, Lightbulb, Code, GitPullRequestArrow } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Expressjs } from "@/components/ui/svgs/expressjs";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Aws } from "@/components/ui/svgs/aws";
import { Linux } from "@/components/ui/svgs/linux";
import { Git } from "@/components/ui/svgs/git";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { SpringBoot } from "@/components/ui/svgs/springboot";
import { Java } from "@/components/ui/svgs/java";


export const DATA = {
  name: "Shubham Pawade",
  initials: "SP",
  url: "https://shubhampawade.vercel.app",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Software Engineer focused on backend development, cloud infrastructure, DevOps, and full-stack applications.",
  summary:
    "Computer Engineering student with a strong focus on backend engineering, cloud infrastructure, and scalable software architecture. Experienced in building production-grade applications with Java, Spring Boot, Node.js, React, AWS, Docker, and modern DevOps workflows. Interested in system design, distributed systems, developer tooling, and high-performance applications.",
  avatarUrl: "/me-new.png",
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: SpringBoot },

    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Expressjs },

    { name: "React.js", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },

    { name: "C++", icon: Cpp },
    { name: "Python", icon: Python },

    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Mysql },
    { name: "MongoDB", icon: Mongodb },

    { name: "AWS", icon: Aws },
    { name: "Docker", icon: Docker },
    { name: "Linux", icon: Linux },

    { name: "Git", icon: Git },

    { name: "Competitive Programming", icon: Icons.codechef },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shubhamspawade@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShubhamSPawade",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubhampawade/",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/shubhamspawde/",
        icon: Icons.leetcode,
        navbar: true,
      },
      CodeChef: {
        name: "CodeChef",
        url: "https://www.codechef.com/users/shubhamsp07",
        icon: Icons.codechef,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shubhamspawade@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Cisco Networking Academy",
      href: "https://www.netacad.com",
      badges: ["AICTE Virtual Internship"],
      location: "Remote",
      title: "Cisco Networking Trainee",
      logoUrl: "/cisco.png",
      start: "May 2025",
      end: "Jul 2025",
      description:
        "Designed and configured enterprise network topologies using Cisco Packet Tracer. Implemented granular access control through standard and extended ACLs, and built secure network architectures applying cybersecurity best practices including VLAN segmentation and firewall rules.",
    },
    {
      company: "Meta Craftlab",
      href: "https://metacraftlab.com",
      badges: [],
      location: "Remote",
      title: "Web Development Intern",
      logoUrl: "/metacraftlab.png",
      start: "2024",
      end: "2024",
      description:
        "Built and shipped production web applications using Svelte & SvelteKit. Improved UI responsiveness by 15% through component optimization and lazy loading. Reduced merge conflicts by 30% by establishing structured Git branching workflows. Debugged and validated REST APIs using Postman across staging and production environments.",
    },
  ],
  education: [
    {
      school: "MIT Academy of Engineering, Alandi",
      href: "https://mitaoe.ac.in",
      degree:
        "Bachelor of Engineering in Computer Engineering (Software Engineering)",
      logoUrl: "/mitaoe.png",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "FESTOS",
      href: "https://festos.shubhamsp.site/",
      dates: "Jun 2026 – Ongoing",
      active: true,
      description:
        "Multi-tenant SaaS platform for managing college clubs, events, and fests with role-based access, Razorpay payments, QR tickets, and analytics dashboards.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "React",
        "Tailwind CSS",
        "AWS",
        "Docker",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://festos.shubhamsp.site/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/festos.png",
      video: "",
    },
    {
      title: "VisiVerify",
      href: "https://visiverify.shubhamsp.site/",
      dates: "Feb 2026 – Apr 2026",
      active: true,
      description:
        "Production SaaS verification platform with automated document validation pipelines and an admin dashboard for managing requests.",
      technologies: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "TailwindCSS",
        "AWS",
        "Machine Learning",
      ],
      links: [
        {
          type: "Website",
          href: "https://visiverify.shubhamsp.site/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/visiverify.png",
      video: "",
    },
    {
      title: "Do Or Die",
      href: "https://doordie.shubhamsp.site/",
      dates: "Jan 2026 – Feb 2026",
      active: true,
      description:
        "Daily habit and task accountability platform with prioritized routines, automated morning & evening email reminders via cron jobs, and an admin dashboard.",
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "JavaScript",
        "JWT",
        "Nodemailer",
        "Cron Scheduler",
      ],
      links: [
        {
          type: "Website",
          href: "https://doordie.shubhamsp.site/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/doordie.png",
      video: "",
    },
    {
      title: "Code-E-Pariksha",
      href: "https://code-e-pariksha.vercel.app/",
      dates: "Aug 2025 – Ongoing",
      active: true,
      description:
        "Online coding assessment platform with live coding tests, MCQ evaluations, Judge0 sandboxed execution, and anti-cheating proctoring.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Judge0 API",
        "AWS S3",
      ],
      links: [
        {
          type: "Website",
          href: "https://code-e-pariksha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/code-e-pariksha.png",
      video: "",
    },
    {
      title: "Segre - File Organizer CLI",
      href: "https://www.npmjs.com/package/segre",
      dates: "Aug 2025 – Dec 2025",
      active: false,
      description:
        "Open-source CLI tool that organizes files by type, date, or custom rules. Published on NPM with 200+ downloads and 40% faster via async batched I/O.",
      technologies: ["Node.js", "NPM", "CLI", "Async I/O"],
      links: [
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/segre",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShubhamSPawade",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/segre.png",
      video: "",
    },
    {
      title: "Shetkari Sahayak",
      href: "#",
      dates: "Dec 2024 – Feb 2025",
      active: false,
      description:
        "AI-powered agriculture app detecting plant diseases from leaf images using ResNet-50 (92% accuracy) with a Flask API and Android companion.",
      technologies: [
        "Python",
        "Flask",
        "MongoDB",
        "ResNet-50",
        "AWS EC2",
        "Android",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Heart Disease Prediction",
      href: "#",
      dates: "Sept 2024 – Feb 2025",
      active: false,
      description:
        "ML pipeline for heart disease detection achieving 94% accuracy using XGBoost with SMOTE-ENN resampling and grid search tuning.",
      technologies: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "SMOTE-ENN",
        "Pandas",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "MaTPO Programming Idol 2024",
      dates: "2024",
      location: "National Level",
      description:
        "Secured Rank 1 among participants nationwide in an intensive competitive programming contest testing algorithmic problem-solving and speed.",
      image: "",
      icon: <Trophy className="size-4" />,
      win: "Rank 1",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/shubhampawade_programming-coding-mitaoe-ugcPost-7303863226373414912-BKsl",
        },
      ],
    },
    {
      title: "PICT IMPETUS & Concepts INC 2025",
      dates: "2025",
      location: "International",
      description:
        "Won 2nd place at the international-level hackathon organized by PICT, Pune — competing against teams from across the globe on a full-stack project built within a 24-hour sprint.",
      image: "",
      icon: <Rocket className="size-4" />,
      win: "2nd Place",
      links: [{
        title: "LinkedIn",
        icon: <Icons.linkedin className="h-4 w-4" />,
        href: "https://www.linkedin.com/posts/shubhampawade_pictinc2025-impetus-innovation-ugcPost-7312107991762178048-HI8u",
      }],
    },
    {
      title: "Technodium 2025",
      dates: "2025",
      location: "Pune, India",
      description:
        "Secured 2nd place by building and presenting a working prototype under tight time constraints, evaluated on innovation, technical depth, and impact.",
      image: "",
      icon: <Lightbulb className="size-4" />,
      win: "2nd Place",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/shubhampawade_technodium2025-2ndplacewinner-innovation-ugcPost-7323776558442119171-oSat",
        },
      ],
    },
    {
      title: "Competitive Programming",
      dates: "2023 – Present",
      location: "Online",
      description:
        "Active competitive programmer — CodeChef 3★ (1630 rating), Codeforces Pupil (1281 rating), and HackerRank 5★ in both C++ and Python. Regularly solving problems across data structures, algorithms, and graph theory.",
      image: "",
      icon: <Code className="size-4" />,
      links: [
        {
          title: "CodeChef",
          icon: <Icons.codechef className="h-4 w-4" />,
          href: "https://www.codechef.com/users/shubhamsp07",
        },
        {
          title: "LeetCode",
          icon: <Icons.leetcode className="h-4 w-4" />,
          href: "https://leetcode.com/u/shubhamspawde/",
        },
      ],
    },
    {
      title: "Hacktoberfest 2025 – Open Source",
      dates: "October 2025",
      location: "Global",
      description:
        "Contributed meaningful pull requests to 7+ open-source repositories during Hacktoberfest 2025 — including bug fixes, feature additions, and documentation improvements across diverse projects in the JavaScript and Python ecosystems.",
      image: "",
      icon: <GitPullRequestArrow className="size-4" />,
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShubhamSPawade",
        },
      ],
    },
  ],
  certifications: [
    {
      title: "Red Hat System Administration I (RH124)",
      issuer: "Red Hat",
      date: "2024",
      description:
        "Enterprise Linux system administration covering user management, file systems, networking, SELinux, and shell scripting on RHEL.",
      logoUrl: "/redhat.png",
    },
    {
      title: "C++ Programming",
      issuer: "GeeksforGeeks",
      date: "2024",
      description:
        "Comprehensive C++ certification covering OOP, STL, memory management, pointers, and multithreading fundamentals.",
      logoUrl: "/gfg.png",
      href: "https://www.geeksforgeeks.org/profile/shubhamsp?tab=activity",
    },
  ],
} as const;
