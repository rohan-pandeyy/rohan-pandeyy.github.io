import { Icons } from "@/components/icons";
import {
  BotIcon,
  BrainIcon,
  CloudIcon,
  FileTextIcon,
  HomeIcon,
  NotebookIcon,
  SparklesIcon,
} from "lucide-react";
import {
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiGooglecolab,
  SiHuggingface,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOnnx,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

export const DATA = {
  name: "Rohan Pandey",
  initials: "RP",
  url: "https://rohan-pandeyy.github.io",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "AI Intern at HERE, GSoC '26 contributor at AOSSIE. I build in public.",
  summary:
    "I'm a computer science student at [Bennett University](/#education) (B.Tech, class of 2027) working on applied AI. I'm currently an AI Intern at HERE Technologies and a [Google Summer of Code '26](/#work) contributor at AOSSIE, where I work on PictoPy, a privacy-first gallery manager for desktop. Previously, I [compressed LeNet-5 in C++ for FPGA inference](/#work) as a Machine Learning Intern at KeenSemi, and I served as Head of Tech and then Vice Chairperson of the Data Science Society at Bennett. I build in public.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Agentic AI Development", icon: BotIcon },
    { name: "Deep Learning", icon: BrainIcon },
    { name: "Large Language Models", icon: SparklesIcon },
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "PyTorch", icon: SiPytorch },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Keras", icon: SiKeras },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
    { name: "ONNX", icon: SiOnnx },
    { name: "Hugging Face", icon: SiHuggingface },
    { name: "Google Colab", icon: SiGooglecolab },
    { name: "FastAPI", icon: SiFastapi },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "AWS", icon: CloudIcon },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Git", icon: SiGit },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resume", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rohan-pandeyy",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohanpandeyy",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rohan_pandeyy",
        icon: Icons.x,
        navbar: true,
      },
      YouTube: {
        name: "YouTube",
        url: "https://www.youtube.com/@rushwithronnie",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "HERE Technologies",
      href: "https://www.here.com",
      location: "Mumbai, India",
      logoUrl: "/logos/here.png",
      logoBg: "dark",
      roles: [
        {
          title: "Agentic AI Intern",
          start: "July 2026",
          end: undefined,
          points: [
            "Expanded and optimized an agentic AI workflow for business operations by developing a new automation module and implementing prompt caching, reducing LLM workflow costs by 39% (from $33 to $20 per run)",
            "Automated a multi-source map-content freshness evaluation pipeline to benchmark HERE's map data against licensed third-party and open-source sources, including OpenStreetMap",
          ],
        },
      ],
    },
    {
      company: "Google Summer of Code",
      href: "https://summerofcode.withgoogle.com/programs/2026/projects/kjHV1ROH",
      location: "Remote",
      logoUrl: "/logos/gsoc.svg",
      logoBg: undefined,
      roles: [
        {
          title: "GSoC 2026 Contributor @ AOSSIE",
          start: "May 2026",
          end: "November 2026",
          points: [
            "Selected as a contributor for GSoC 2026 under AOSSIE (top ~4.88% of 23K+ applications) to expand PictoPy, an on-device AI-powered desktop image gallery",
            "Implemented proposed work focused on Visual Semantic Intelligence, smart Memories, video handling, and secure sharing",
            "Implemented Quality Gate checks and an Adaptive Density-Aware Face Clustering pipeline from recent research papers, enhancing face detection and clustering by 4x",
          ],
        },
      ],
    },
    {
      company: "AOSSIE",
      href: "https://aossie.org",
      location: "Remote",
      logoUrl: "/logos/aossie.svg",
      logoBg: undefined,
      roles: [
        {
          title: "Open Source Contributor",
          start: "July 2025",
          end: undefined,
          points: [
            "Contributed 10,000+ lines of code across 15+ merged PRs to PictoPy, optimizing ML pipelines and CI/CD workflows and improving both frontend and backend systems",
          ],
        },
      ],
    },
    {
      company: "KeenHeads Semiconductors",
      href: "",
      location: "Greater Noida, India",
      logoUrl: "/logos/keensemi.png",
      logoBg: undefined,
      roles: [
        {
          title: "Machine Learning Intern",
          start: "June 2025",
          end: "July 2025",
          points: [
            "Compressed the original LeNet architecture in C++, achieving 94.84% model compression via pruning and quantization",
            "Achieved a 1.7x reduction in LeNet-5 inference latency with less than 3% accuracy trade-off",
            "Reached a peak throughput of 33 FPS on ultra-low-power FPGA simulation, enabling real-time inference",
          ],
        },
      ],
    },
  ],
  positions: [
    {
      company: "Data Science Society BU",
      href: "https://dss-bu.vercel.app",
      location: "Bennett University",
      logoUrl: "/logos/dss.svg",
      logoBg: "dark" as string | undefined,
      roles: [
        {
          title: "Vice Chairperson",
          start: "September 2025",
          end: "August 2026" as string | undefined,
          points: [
            "Hosted hackathons, talk sessions and competitions on AI training",
            "Ran career guidance sessions on data science as a career path",
            "Hosted a Machine Learning workshop teaching 200+ students about CNNs and Computer Vision",
          ],
        },
        {
          title: "Head of Tech",
          start: "September 2024",
          end: "August 2025" as string | undefined,
          points: [] as string[],
        },
      ],
    },
  ],
  education: [
    {
      school: "Bennett University",
      href: "https://www.bennett.edu.in",
      degree: "B.Tech Computer Science, CGPA 8.25/10.0",
      logoUrl: "/logos/bennett.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Amity International School, Vasundhara (Sector-6)",
      href: "",
      degree: "High School Diploma, Science",
      logoUrl: "/logos/amity.jpg",
      start: "March 2009",
      end: "May 2023",
    },
  ],
  projects: [
    {
      title: "PictoPy",
      href: "https://github.com/AOSSIE-Org/PictoPy",
      dates: "July 2025 - Present",
      active: true,
      description:
        "A fully offline, privacy-first desktop image gallery by AOSSIE. It groups faces across your library, tags photos with detected objects, and supports semantic search, all with on-device AI models. As a contributor and GSoC 2026 participant, I worked on ML pipelines, CI/CD, face clustering and Visual Semantic Intelligence.",
      technologies: [
        "Rust",
        "Python",
        "React",
        "TypeScript",
        "Tauri",
        "FastAPI",
        "SQLite",
        "ONNX Runtime",
        "OpenCV",
      ],
      links: [
        {
          type: "Website",
          href: "https://pictopy.aossie.org/en",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AOSSIE-Org/PictoPy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Drive Guardian",
      href: "https://github.com/rohan-pandeyy/drive-guardian",
      dates: "April 2024",
      active: true,
      description:
        "A real-time Automatic Braking System pipeline merging object detection and lane segmentation under 1.1GB of VRAM. Decouples PyTorch and ONNX Runtime execution environments to optimize GPU use, reaching under 30ms inference and 20 FPS across two neural networks.",
      technologies: [
        "Python",
        "PyTorch",
        "YOLO",
        "ONNX",
        "OpenCV",
        "Pillow",
        "NumPy",
        "CustomTkinter",
      ],
      links: [
        {
          type: "Website",
          href: "https://rohan-pandeyy.github.io/drive-guardian/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rohan-pandeyy/drive-guardian",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Arogya for Maternal Health",
      href: "https://github.com/rohan-pandeyy/arogya-for-maternal-health",
      dates: "April 2026",
      active: true,
      description:
        "An AI-powered infant care tracking application with text and voice support and responses in under 5 seconds. Uses a Retrieval-Augmented Generation pipeline on a local Gemma model, indexing 10,000+ WHO guidelines, pediatric care documents and infant health records to reduce hallucinated responses by 60%.",
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "PostgreSQL",
        "NeonDB",
        "Ollama",
        "RAG",
        "LLMs",
        "Telegram API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rohan-pandeyy/arogya-for-maternal-health",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    win?: string;
    links: { title: string; href: string; icon?: React.ReactNode }[];
  }[],
} as const;
