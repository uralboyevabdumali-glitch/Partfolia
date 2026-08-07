import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
  FaCode,
  FaMobileAlt,
  FaPlug,
  FaTachometerAlt,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const ROLES = ["Frontend Developer", "React.js Engineer", "UI Craftsman", "Cyber UI Designer"];

const ABOUT_STATS = [
  { label: "Years of Experience", value: "1.5+", icon: FaLaptopCode },
  { label: "Based In", value: "Tashkent, UZ", icon: FaMapMarkerAlt },
  { label: "Daily Coding", value: "4–6 Hours", icon: FaCode },
  { label: "Future Goal", value: "Full Stack Dev", icon: FaArrowRight },
];

const SKILLS = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#2965F1" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Express.js", icon: SiExpress, color: "#E9EDF2" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const SERVICES = [
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    desc: "Building fast, scalable and maintainable user interfaces with clean component architecture and modern best practices.",
  },
  {
    icon: FaReact,
    title: "React Development",
    desc: "Crafting dynamic single-page applications with React — reusable components, hooks, and efficient state management.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    desc: "Designing pixel-perfect layouts that adapt beautifully across desktop, tablet and mobile devices.",
  },
  {
    icon: FaPlug,
    title: "API Integration",
    desc: "Connecting frontend applications to REST APIs and third-party services with clean, reliable data handling.",
  },
  {
    icon: FaTachometerAlt,
    title: "Performance Optimization",
    desc: "Improving load speed, rendering performance and Core Web Vitals for a smoother user experience.",
  },
];

const PROJECTS = [
  {
    title: "NovaCart — E-Commerce Platform",
    desc: "A full-featured online store with product filtering, cart management, and a secure checkout flow built for speed.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "MongoDB"],
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    github: "https://github.com/uralboyevabdumali/novacart",
    demo: "https://novacart-demo.vercel.app",
  },
  {
    title: "FlowBoard — Kanban Task Manager",
    desc: "A drag-and-drop task management app with real-time boards, labels and deadlines for teams and freelancers.",
    stack: ["React", "Tailwind CSS", "Firebase", "Framer Motion"],
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    github: "https://github.com/uralboyevabdumali/flowboard",
    demo: "https://flowboard-demo.vercel.app",
  },
  {
    title: "HomeNest — Real Estate Listings",
    desc: "A property listing platform with advanced search, map view and agent dashboards for managing listings.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    github: "https://github.com/uralboyevabdumali/homenest",
    demo: "https://homenest-demo.vercel.app",
  },
  {
    title: "SkyCast — Weather Forecast App",
    desc: "A clean weather dashboard with live forecasts, hourly charts and location search powered by a public API.",
    stack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    github: "https://github.com/uralboyevabdumali/skycast",
    demo: "https://skycast-demo.vercel.app",
  },
  {
    title: "CoinPulse — Crypto Price Tracker",
    desc: "A real-time cryptocurrency tracker with animated price cards, sparkline charts and watchlist support.",
    stack: ["React", "CoinGecko API", "Framer Motion", "Tailwind CSS"],
    gradient: "from-emerald-500 via-lime-500 to-yellow-500",
    github: "https://github.com/uralboyevabdumali/coinpulse",
    demo: "https://coinpulse-demo.vercel.app",
  },
  {
    title: "Aurora CMS — Portfolio Dashboard",
    desc: "A lightweight admin dashboard for managing portfolio content, projects and messages with secure auth.",
    stack: ["React", "Node.js", "Express.js", "JWT", "Tailwind CSS"],
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    github: "https://github.com/uralboyevabdumali/aurora-cms",
    demo: "https://aurora-cms-demo.vercel.app",
  },
];

const EXPERIENCE = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed · Remote",
    period: "2024 — Present",
    desc: "Designing and building responsive web applications for clients using React and Tailwind CSS, from landing pages to full product dashboards.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Local Web Studio · Tashkent",
    period: "2023 — 2024",
    desc: "Developed and maintained UI components, integrated REST APIs, and collaborated with designers to ship pixel-accurate interfaces.",
  },
  {
    role: "Frontend Development — Intensive Training",
    company: "Self-Taught · Online",
    period: "2023",
    desc: "Mastered HTML, CSS, JavaScript and React fundamentals through daily practice, building dozens of small projects along the way.",
  },
];

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/uralboyevabdumali", label: "GitHub" },
  { icon: FaTelegramPlane, href: "https://t.me/Abdumalik_Uralboyev", label: "Telegram" },
  { icon: FaEnvelope, href: "mailto:uralboyevabdumali@gmail.com", label: "Email" },
];

/* ------------------------------------------------------------------ */
/*  SHARED UI PRIMITIVES                                               */
/* ------------------------------------------------------------------ */

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mb-14 text-center"
  >
    <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">
      {eyebrow}
    </span>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const GradientBlobs = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="blob-anim absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-indigo-600/30 blur-[110px]" />
    <div className="blob-anim-delay absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-cyan-500/20 blur-[120px]" />
    <div className="blob-anim-slow absolute bottom-0 left-1/4 w-[26rem] h-[26rem] rounded-full bg-fuchsia-600/20 blur-[110px]" />
  </div>
);

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                             */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#home" className="font-display text-xl font-bold tracking-tight text-white">
            AU<span className="text-gradient">.dev</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            >
              Let's Talk <FaArrowRight className="text-xs" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white text-xl p-2"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <div className="flex flex-col p-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 btn-glow text-center rounded-xl px-4 py-3 text-sm font-semibold text-white"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (typing) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1400);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 35);
      } else {
        setTyping(true);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <GradientBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-white">
            Hi, I'm <span className="text-gradient">Abdumalik Uralboyev</span>
          </h1>

          <div className="mt-4 h-10 flex items-center">
            <span className="font-display text-xl sm:text-2xl font-semibold text-slate-200">
              {displayText}
              <span className="inline-block w-[2px] h-6 bg-cyan-400 ml-1 align-middle animate-pulse" />
            </span>
          </div>

          <p className="mt-6 text-lg sm:text-xl font-medium text-slate-300 max-w-xl">
            Crafting Modern Web Experiences &amp; Cyber UI Designs
          </p>

          <p className="mt-5 text-slate-400 leading-relaxed max-w-xl">
            Salom! Men Abdumalik Uralboyev, Frontend Developer. React, JavaScript, Tailwind CSS
            va zamonaviy web texnologiyalari yordamida tez, responsive va professional web
            ilovalar yarataman.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white">
              View Projects <FaArrowRight className="text-xs" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/Abdumalik_Uralboyev_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
            >
              <FaDownload className="text-xs" /> Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative w-[26rem] h-[26rem]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-cyan-400/10 to-fuchsia-500/20 blur-2xl" />
            <div className="glass-panel relative w-full h-full rounded-[2.5rem] p-8 flex flex-col justify-between glow-border">
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-300/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">status.tsx</span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <p className="text-slate-500">// developer profile</p>
                <p className="text-slate-300">
                  <span className="text-fuchsia-400">const</span> dev = &#123;
                </p>
                <p className="text-slate-300 pl-4">
                  name: <span className="text-cyan-300">"Abdumalik"</span>,
                </p>
                <p className="text-slate-300 pl-4">
                  role: <span className="text-cyan-300">"Frontend Dev"</span>,
                </p>
                <p className="text-slate-300 pl-4">
                  stack: <span className="text-emerald-300">["React","Tailwind","Node"]</span>,
                </p>
                <p className="text-slate-300 pl-4">
                  location: <span className="text-cyan-300">"Tashkent, UZ"</span>,
                </p>
                <p className="text-slate-300">&#125;;</p>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                <span className="text-xs text-slate-400">Build status</span>
                <span className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Passing
                </span>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel absolute -top-8 -right-8 rounded-2xl px-4 py-3 flex items-center gap-3 glow-border"
            >
              <FaReact className="text-cyan-300 text-2xl" />
              <div className="leading-tight">
                <p className="text-xs text-slate-400">Experience</p>
                <p className="text-sm font-semibold text-white">1.5 Years</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel absolute -bottom-6 -left-8 rounded-2xl px-4 py-3 flex items-center gap-3 glow-border"
            >
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold">
                6+
              </span>
              <div className="leading-tight">
                <p className="text-xs text-slate-400">Projects</p>
                <p className="text-sm font-semibold text-white">Shipped</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into interfaces"
          subtitle="A closer look at who I am, how I work, and where I'm headed."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 glass-panel rounded-3xl p-8 glow-border"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Frontend developer with a passion for detail
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I'm Abdumalik, a frontend developer based in Tashkent, Uzbekistan. Over the past
              1.5 years I've focused on building fast, accessible and visually refined web
              interfaces with React and Tailwind CSS. I care about the small details — spacing,
              motion, and the way an interface feels to use, not just how it looks.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              I spend 4 to 6 hours coding every single day, learning new patterns and refining my
              craft. My long-term goal is to grow into a full stack developer, combining strong
              frontend design skills with solid backend engineering.
            </p>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {ABOUT_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-2xl p-6 glow-border card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 flex items-center justify-center text-cyan-300 text-lg mb-4">
                  <stat.icon />
                </div>
                <p className="text-2xl font-bold text-white font-display">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SKILLS                                                             */
/* ------------------------------------------------------------------ */

function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          subtitle="A focused toolkit for building modern, performant web applications end to end."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center gap-3 glow-border card-hover"
            >
              <div
                className="text-4xl transition-transform duration-300"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </div>
              <p className="text-sm font-semibold text-slate-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES                                                           */
/* ------------------------------------------------------------------ */

function Services() {
  return (
    <section id="services" className="relative py-28">
      <GradientBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          subtitle="From first pixel to production deploy — end-to-end frontend craftsmanship."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass-panel rounded-3xl p-8 glow-border card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */

function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of personal builds and client-style projects showcasing my frontend range."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-panel rounded-3xl overflow-hidden glow-border card-hover flex flex-col"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <span className="font-display text-4xl font-bold text-white/90 tracking-tight">
                  {project.title.split(" ")[0]}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                    aria-label="GitHub repository"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold border border-white/10 text-slate-200 hover:bg-white/5 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 btn-glow inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */

function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="My journey so far"
          subtitle="A timeline of where I've worked, learned and grown as a developer."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent" />

          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 ring-4 ring-[#05060A] shadow-[0_0_16px_rgba(56,189,248,0.6)]" />

              <div className="glass-panel rounded-2xl p-6 sm:p-7 glow-border card-hover">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-bold text-white">{item.role}</h3>
                  <span className="text-xs font-semibold text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-3">{item.company}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const CONTACT_INFO = [
    { icon: FaEnvelope, label: "Email", value: "uralboyevabdumali@gmail.com", href: "mailto:uralboyevabdumali@gmail.com" },
    { icon: FaPhoneAlt, label: "Phone", value: "+998 94 527 13 80", href: "tel:+998945271380" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Tashkent, Uzbekistan", href: null },
    { icon: FaTelegramPlane, label: "Telegram", value: "@Abdumalik_Uralboyev", href: "https://t.me/Abdumalik_Uralboyev" },
  ];

  return (
    <section id="contact" className="relative py-28">
      <GradientBlobs />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {CONTACT_INFO.map((info) => (
              <div
                key={info.label}
                className="glass-panel rounded-2xl p-5 flex items-center gap-4 glow-border"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 flex items-center justify-center text-cyan-300 text-lg">
                  <info.icon />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-200">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-panel rounded-3xl p-7 sm:p-9 glow-border"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-medium text-slate-400 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileTap={{ scale: 0.97 }}
              className="btn-glow w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-70"
            >
              {sending ? "Sending..." : "Send Message"}
              {!sending && <FaPaperPlane className="text-xs" />}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#home" className="font-display text-2xl font-bold text-white">
              AU<span className="text-gradient">.dev</span>
            </a>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Frontend Developer crafting modern web experiences and cyber-inspired UI design
              from Tashkent, Uzbekistan.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-cyan-400" /> uralboyevabdumali@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-cyan-400" /> +998 94 527 13 80
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400" /> Tashkent, Uzbekistan
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Abdumalik Uralboyev. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">Designed &amp; built with React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PORTFOLIO PAGE                                                     */
/* ------------------------------------------------------------------ */

function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[#05060A] text-white overflow-x-hidden selection:bg-cyan-400/30">
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastClassName="!bg-[#0B0E17] !border !border-white/10 !rounded-xl"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GLOBAL STYLES (fonts, blobs, glass, glow)                          */
/* ------------------------------------------------------------------ */

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

      * { font-family: 'Inter', sans-serif; }
      .font-display { font-family: 'Space Grotesk', sans-serif; }

      body {
        background-color: #05060A;
      }

      .text-gradient {
        background: linear-gradient(90deg, #818CF8, #22D3EE);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .glass-panel {
        background: rgba(255, 255, 255, 0.045);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .glow-border {
        position: relative;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .glow-border:hover {
        border-color: rgba(56, 189, 248, 0.35);
        box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.1), 0 20px 45px -20px rgba(99, 102, 241, 0.45);
      }

      .card-hover {
        transition: transform 0.35s ease, box-shadow 0.35s ease;
      }

      .btn-glow {
        background: linear-gradient(90deg, #6366F1, #22D3EE);
        box-shadow: 0 8px 24px -8px rgba(99, 102, 241, 0.6);
        transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
      }
      .btn-glow:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 32px -8px rgba(34, 211, 238, 0.55);
        filter: brightness(1.08);
      }

      @keyframes blobFloat1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(40px, 30px) scale(1.1); }
        66% { transform: translate(-20px, 50px) scale(0.95); }
      }
      @keyframes blobFloat2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-50px, 40px) scale(1.12); }
      }
      @keyframes blobFloat3 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(30px, -40px) scale(1.08); }
      }

      .blob-anim { animation: blobFloat1 14s ease-in-out infinite; }
      .blob-anim-delay { animation: blobFloat2 18s ease-in-out infinite; }
      .blob-anim-slow { animation: blobFloat3 20s ease-in-out infinite; }

      ::-webkit-scrollbar { width: 10px; }
      ::-webkit-scrollbar-track { background: #05060A; }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #6366F1, #22D3EE);
        border-radius: 10px;
      }

      @media (prefers-reduced-motion: reduce) {
        .blob-anim, .blob-anim-delay, .blob-anim-slow { animation: none; }
        * { scroll-behavior: auto !important; }
      }

      html { scroll-behavior: smooth; }
    `}</style>
  );
}

/* ------------------------------------------------------------------ */
/*  APP ROOT                                                           */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="*" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}