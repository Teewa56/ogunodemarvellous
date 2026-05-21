"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

const skillBlocks = [
  {
    category: "Blockchain Development",
    items: [
      "Solidity",
      "Rust",
      "Clarity",
      "Move",
      "Python",
      "Noir",
      "Circom",
      "Substrate SDK",
      "ZK systems",
      "Blockchain infrastructure",
    ],
  },
  {
    category: "Fullstack Development",
    items: [
      "JavaScript",
      "Python",
      "ReactJS",
      "NodeJS",
      "FastAPI",
      "SQL",
      "MongoDB",
      "AWS",
      "Azure",
      "GCP",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Neural networks",
      "Transformers",
      "Hugging Face",
      "LangChain",
      "Agents",
      "Data analysis",
      "Model training",
    ],
  },
];

const codeProjects = [
  {
    title: "LaunchPad Dashboard",
    description:
      "A high-performance SaaS analytics dashboard built for product teams to visualize engagement and conversion metrics.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "SignalFlow",
    description:
      "A real-time data monitoring interface featuring live charts, alert workflows, and dark-mode-first design.",
    stack: ["React", "Vercel", "Framer Motion"],
  },
  {
    title: "NexusForms",
    description:
      "A component-driven form builder with validation rules, conditional logic, and reusable UI patterns.",
    stack: ["Next.js", "React Hook Form", "Tailwind CSS"],
  },
  {
    title: "InsightHub",
    description:
      "A portfolio tracker that combines market data feeds with clean visuals and custom metric dashboards.",
    stack: ["TypeScript", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "StudioGrid",
    description:
      "A responsive design system and style guide for teams building consistent experiences across products.",
    stack: ["React", "Storybook", "CSS Modules"],
  },
  {
    title: "AetherCMS",
    description:
      "A lightweight content manager that helps creators publish fast, accessible landing pages and docs.",
    stack: ["Next.js", "Markdown", "Vercel"],
  },
  {
    title: "PulseChat",
    description:
      "A chat application with smooth animations, responsive UI, and message state persistence.",
    stack: ["React", "Firebase", "Framer Motion"],
  },
  {
    title: "MarketWatch",
    description:
      "A market intelligence portal built to surface trading opportunities and risk signals in a clean dashboard.",
    stack: ["Next.js", "Tailwind CSS", "APIs"],
  },
  {
    title: "TrendLens",
    description:
      "A data storytelling experience that makes research findings easy to scan, share, and act on.",
    stack: ["React", "TypeScript", "Animations"],
  },
  {
    title: "Voyager UI Kit",
    description:
      "A curated component library supporting modern layouts, accessible controls, and fluid motion.",
    stack: ["Tailwind CSS", "Radix UI", "Next.js"],
  },
];

const researchProjects = [
  {
    title: "Signal Attribution Study",
    description:
      "Analyzed the impact of macro and micro signals on portfolio performance using experimental research methods.",
    stack: ["Python", "Pandas", "Jupyter"],
  },
  {
    title: "Behavioral Decision Modeling",
    description:
      "Researched investor behavior across market regimes and translated findings into model-informed features.",
    stack: ["R", "Statistical Analysis", "Data Visualization"],
  },
  {
    title: "AI Explainability Framework",
    description:
      "Built a reproducible framework to evaluate model interpretability and transparency in predictive systems.",
    stack: ["Python", "SHAP", "MLFlow"],
  },
  {
    title: "Sustainability Signal Research",
    description:
      "Investigated ESG signal integration for long-term alpha generation and risk control.",
    stack: ["Python", "Quant Research", "Reporting"],
  },
  {
    title: "Market Microstructure Analysis",
    description:
      "Examined liquidity behavior and order flow dynamics to improve execution strategies.",
    stack: ["SQL", "Python", "Quantitative Research"],
  },
  {
    title: "Collaborative Knowledge System",
    description:
      "Designed a research sharing platform to accelerate cross-team insights and documentation workflows.",
    stack: ["Next.js", "GraphQL", "UX"],
  },
];

const quantProjects = [
  {
    title: "Volatility Arbitrage Engine",
    description:
      "Prototype system that identifies relative value trades and monitors portfolio vega exposure.",
    stack: ["Python", "NumPy", "Backtesting"],
  },
  {
    title: "Momentum Factor Strategy",
    description:
      "Backtested a multi-asset momentum strategy with dynamic position sizing and risk overlays.",
    stack: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "Liquidity Stress Test",
    description:
      "Built scenario-driven simulations to quantify liquidity risk across credit and equities exposures.",
    stack: ["Python", "Simulation", "Risk Metrics"],
  },
  {
    title: "Crypto Signal Backtest",
    description:
      "Evaluated alternative crypto signals across multiple exchanges and trade execution models.",
    stack: ["Python", "API Integration", "Statistical Modeling"],
  },
  {
    title: "Alpha Harvest Framework",
    description:
      "A modular alpha research system designed to capture persistent signals in fast-moving markets.",
    stack: ["Python", "Machine Learning", "Portfolio Construction"],
  },
  {
    title: "Risk Parity Explorer",
    description:
      "Interactive risk parity analysis tool with custom scenario controls and allocation visualization.",
    stack: ["Python", "Dash", "Risk Analysis"],
  },
  {
    title: "Scenario Allocation Engine",
    description:
      "A flexible allocation engine that stress-tests portfolios against macroeconomic scenarios.",
    stack: ["Python", "Quant Research", "Automation"],
  },
];

const experience = [
  {
    role: "Backend Instructor",
    company: "Connectus Labs",
    dates: "Jan 2026 — Apr 2026",
    details:
      "Delivered backend instruction, mentored students on practical FastAPI and NodeJS workflows, and supported capstone project delivery.",
  },
  {
    role: "Founder",
    company: "AviraX Tech",
    dates: "Jan 2025 — Apr 2026",
    details:
      "Built AviraX Tech Community from the ground up, leading community direction, mentoring, and team development.",
  },
  {
    role: "Blockchain Developer Intern",
    company: "Web3Nova",
    dates: "Mar 2025 — Dec 2025",
    details:
      "Worked on blockchain development, smart contract implementation, and end-to-end Web3 infrastructure in Akure, Nigeria.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "CodeAlpha",
    dates: "Feb 2025 — Mar 2025",
    details:
      "Delivered full-stack features with React, Python, and deployment workflows.",
  },
  {
    role: "Frontend Developer",
    company: "Brain Bench Technology",
    dates: "Oct 2024 — Jan 2025",
    details:
      "Built responsive frontend experiences and polished interfaces for web applications.",
  },
];

const socials = [
  {
    href: "mailto:ogunodemarvellous@gmail.com",
    icon: AiOutlineMail,
    label: "Email",
  },
  {
    href: "https://github.com/ogunodemarvellous",
    icon: AiFillGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/marvellous-ogunode-77062a306/",
    icon: AiFillLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/SegunM35",
    icon: AiFillTwitterCircle,
    label: "X",
  },
  {
    href: "https://researchgate.net/profile/Marvellous-Ogunode",
    icon: AiOutlineFundProjectionScreen,
    label: "ResearchGate",
  }
];

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-100 via-transparent to-transparent" />
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8">
          <nav className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50/90 px-3 py-2 shadow-sm shadow-slate-200/80">
            <a href="#hero" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
              <AiOutlineHome className="h-5 w-5" />
            </a>
            <a href="#about" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
              <AiOutlineUser className="h-5 w-5" />
            </a>
            <a href="#skills" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
              <AiOutlineFundProjectionScreen className="h-5 w-5" />
            </a>
            <a href="#projects" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
              <AiOutlineProject className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
              <AiOutlineMail className="h-5 w-5" />
            </a>
          </nav>
          <a
            href="/MARVELLOUS-OGUNODE-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700 transition hover:bg-blue-100 sm:inline-flex"
          >
            <BsDownload className="h-4 w-4" />
            CV
          </a>
        </div>
      </header>

      <section id="hero" className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-14 sm:px-8 lg:flex-row lg:items-center lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1"
        >
          <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-2xl">
            I’m a software engineer specializing in building scalable, user-centric applications and systems.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
            Over the past 3 years, I’ve focused heavily on web, blockchain, infrastructure, and AI, bridging complex logic with smooth real-world experiences.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:ogunodemarvellous@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-blue-400"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-blue-400 hover:text-blue-700"
            >
              View projects
            </a>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Email</p>
              <a href="mailto:ogunodemarvellous@gmail.com" className="mt-4 block text-sm font-semibold text-slate-950 hover:text-blue-700">
                ogunodemarvellous@gmail.com
              </a>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Location</p>
              <p className="mt-4 text-lg font-semibold text-slate-950">Akure, Nigeria</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex-1"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-slate-100 p-1 shadow-[0_40px_120px_-50px_rgba(59,130,246,0.15)]">
            <div className="rounded-[2.25rem] bg-white p-6 sm:p-8">
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                Data, design, and product systems.
              </span>
              <div className="mt-8 flex items-center gap-6 sm:gap-8">
                <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-500 to-slate-500 p-1 shadow-xl shadow-blue-500/20">
                  <Image
                    src="/Marvelllous_Ogunode_image.png"
                    alt="Marvellous Ogunode"
                    width={160}
                    height={160}
                    className="h-full w-full rounded-3xl object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">About me</p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-950">Marvellous Ogunode</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-700">
                    A multidisciplinary builder with a strong focus on modern web experiences, research-driven strategy, and quantitative systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-[0_40px_120px_-55px_rgba(15,23,42,0.08)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-blue-300">About me</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950">I’m a software engineer specializing in building scalable, user-centric applications and systems.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-700">
              Over the past 3 years, I’ve focused heavily on web, blockchain, infrastructure, and AI. I love bridging the gap between complex code logic and smooth real world experiences, building production-grade solutions, novel mechanisms, and research-backed systems.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-16"
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Skills</p>
            <h2 className="text-4xl font-semibold text-slate-950">Tools that shape the work.</h2>
          </div>
          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {skillBlocks.map((section) => (
              <div key={section.category} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-700">{section.category}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-100 p-10 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Projects</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950">Code, research, quant — all sections ready.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Placeholder cards are ready for your project names, descriptions, and technology stacks.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-950">Code Projects</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {codeProjects.map((project) => (
                  <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-md">
                    <p className="text-sm uppercase tracking-[0.24em] text-blue-700">Code</p>
                    <h4 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tool) => (
                        <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-950">Research Projects</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {researchProjects.map((project) => (
                  <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-md">
                    <p className="text-sm uppercase tracking-[0.24em] text-blue-700">Research</p>
                    <h4 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tool) => (
                        <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-950">Quant Projects</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {quantProjects.map((project) => (
                  <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-md">
                    <p className="text-sm uppercase tracking-[0.24em] text-blue-700">Quant</p>
                    <h4 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tool) => (
                        <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Work experience</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950">Where I’ve delivered impact.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              A selection of roles where I’ve contributed to projects, products, and teams with code, research, and strategy.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            {experience.map((item) => (
              <div key={item.role} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-400/30 hover:bg-blue-50">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-slate-950">{item.role}</p>
                    <p className="text-sm text-slate-500">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                    {item.dates}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">{item.details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.08)]"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Contact me</p>
              <h2 className="text-4xl font-semibold text-slate-950">Let’s build your next idea together.</h2>
              <p className="max-w-xl text-base leading-8 text-slate-700">
                I’m available for freelance work, product partnerships, and research collaborations. Reach out and let’s create something memorable.
              </p>
              <a
                href="mailto:ogunodemarvellous@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-blue-400"
              >
                Say hello
              </a>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-200 bg-slate-100 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,255,0.18),_transparent_35%)]" />
              <div className="relative z-10 h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <div className="flex h-full items-center justify-center">
                  <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-50 p-6">
                    <div className="absolute inset-y-0 left-0 right-0 top-0 opacity-10 bg-[radial-gradient(circle_at_left,_rgba(15,23,42,0.08),_transparent_35%)]" />
                    <div className="pointer-events-none absolute inset-0" />
                    <div className="relative overflow-hidden">
                      <div className="animate-marquee whitespace-nowrap text-[4rem] font-vt323 uppercase tracking-[0.18em] text-slate-600 opacity-50 will-change-transform sm:text-[5rem] md:text-[6rem]">
                        MARVELLOUS OGUNODE — MARVELLOUS OGUNODE — MARVELLOUS OGUNODE —
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="mt-16 border-t border-slate-200 py-10 text-slate-500">
          <div className="mx-auto flex flex-col gap-8 text-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-slate-950">Marvellous Ogunode</p>
              <p className="mt-1">Full-stack builder, researcher, and quantitative thinker.</p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <p className="text-sm uppercase tracking-[0.24em] text-blue-700">Let’s connect</p>
              <a href="mailto:ogunodemarvellous@gmail.com" className="transition hover:text-blue-700">
                ogunodemarvellous@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Marvellous Ogunode.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
