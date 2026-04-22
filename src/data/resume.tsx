import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
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

export const DATA = {
  name: "Shubham Pawade",
  initials: "SP",
  url: "https://shubhampawade.vercel.app",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Backend & Full-Stack Developer focused on building scalable systems with Node.js, AWS, and DevOps - turning ideas into production-ready applications.",
  summary:
    "I'm a Computer Engineering (Software Engineering) student at [MIT Academy of Engineering](/#education), ranked in the **top 1% of my batch**. I specialize in backend engineering with Node.js and Express, cloud infrastructure on AWS (EC2, S3, RDS, Auto Scaling), and containerized deployments with Docker. From architecting [REST APIs and full-stack platforms](/#projects) to delivering client-facing products, I build systems designed for performance and scale. I've earned **Rank 1 at MaTPO Programming Idol** (National) and **2nd place at PICT IMPETUS & Concepts INC** (International), and I'm an active open-source contributor with [7+ repositories contributed during Hacktoberfest](https://github.com/ShubhamSPawade).",
  avatarUrl: "/me.png",
  skills: [
    { name: "C++", icon: Cpp },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Expressjs },
    { name: "React.js", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "MongoDB", icon: Mongodb },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Mysql },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: Aws },
    { name: "Linux", icon: Linux },
    { name: "Git", icon: Git },
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
      title: "Code-E-Pariksha",
      href: "https://code-e-pariksha.vercel.app/",
      dates: "Aug 2025 – Ongoing",
      active: true,
      description:
        "Full-stack online coding assessment platform supporting live coding tests and MCQ evaluations. Built the backend with Node.js & Express, integrated Judge0 API for secure, sandboxed multi-language code execution, and implemented anti-cheating measures including proctoring, fullscreen enforcement, and clipboard restrictions. Optimized file handling with AWS S3 pre-signed URLs for scalable storage.",
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
      title: "VisiVerify",
      href: "https://visiverify.com/",
      dates: "Feb 2026 - April 2026",
      active: true,
      description:
        "Client-commissioned verification platform engineered to streamline identity and document verification workflows. Built as a production SaaS with end-to-end document upload, automated validation pipelines, and a clean admin dashboard for managing verification requests — designed for reliability and quick turnaround on real-world compliance needs.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://visiverify.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/visiverify.png",
      video: "",
    },
    {
      title: "Segre – File Organizer CLI",
      href: "https://www.npmjs.com/package/segre",
      dates: "Aug 2025 – Dec 2025",
      active: false,
      description:
        "Open-source Node.js CLI tool that automatically organizes files by type, date, or custom rules. Published on NPM with 200+ downloads. Processes 1000+ files efficiently using async I/O streams, achieving a 40% performance improvement through batched operations and optimized directory traversal.",
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
        "AI-powered agriculture web app that detects plant diseases from leaf images using a ResNet-50 CNN model with 92% accuracy. Features a Flask REST API backend with MongoDB, multilingual interface support, AWS EC2 deployment, offline-capable Android companion app, an agriculture chatbot for farmer assistance, and heatmap-based disease visualization.",
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
        "Machine learning pipeline for early heart disease detection achieving 94% accuracy. Used XGBoost with SMOTE-ENN resampling to handle class imbalance, and applied systematic feature engineering and hyperparameter tuning via grid search to maximize prediction reliability.",
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
      win: "Rank 1",
      links: [],
    },
    {
      title: "PICT IMPETUS & Concepts INC 2025",
      dates: "2025",
      location: "International",
      description:
        "Won 2nd place at the international-level hackathon organized by PICT, Pune — competing against teams from across the globe on a full-stack project built within a 24-hour sprint.",
      image: "",
      win: "2nd Place",
      links: [],
    },
    {
      title: "Technodium 2025",
      dates: "2025",
      location: "Pune, India",
      description:
        "Secured 2nd place by building and presenting a working prototype under tight time constraints, evaluated on innovation, technical depth, and impact.",
      image: "",
      win: "2nd Place",
      links: [],
    },
    {
      title: "PICT Techfiesta Hackathon 2025",
      dates: "2025",
      location: "Pune, India",
      description:
        "Selected as a finalist among hundreds of teams at one of Pune's most competitive inter-college hackathons.",
      image: "",
      win: "Finalist",
      links: [],
    },
    {
      title: "Competitive Programming",
      dates: "2023 – Present",
      location: "Online",
      description:
        "Active competitive programmer — CodeChef 3★ (1630 rating), Codeforces Pupil (1281 rating), and HackerRank 5★ in both C++ and Python. Regularly solving problems across data structures, algorithms, and graph theory.",
      image: "",
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
