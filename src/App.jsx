import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  AnimatePresence,
  animate,
} from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
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
  FaArrowRight,
  FaArrowUp,
  FaDownload,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
  FaCode,
  FaMobileAlt,
  FaPlug,
  FaTachometerAlt,
  FaLayerGroup,
  FaPaperPlane,
  FaGraduationCap,
  FaRocket,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiVite, SiFramer, SiVercel } from "react-icons/si";
import mentoraImg from "./assets/projects/mentora.png";
import vitrinaImg from "./assets/projects/vitrina.png";
import taskflowImg from "./assets/projects/taskflow.png";
import budulnikImg from "./assets/projects/budulnik.png";
import tasbehImg from "./assets/projects/tasbeh.png";

/* =========================================================================
   DATA
   ========================================================================= */

const GITHUB_USER = "uralboyevabdumali-glitch";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const TYPED_ROLES = [
  "Frontend Developer",
  "React Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

const HERO_STATS = [
  { value: 17, suffix: "+", label: "GitHub repos" },
  { value: 7, suffix: "", label: "Live projects" },
  { value: 1.5, suffix: "y", label: "Experience", decimals: 1 },
  { value: 6, suffix: "h", label: "Coding / day" },
];

const ABOUT_CARDS = [
  { icon: <FaLayerGroup />, title: "1.5 Years", subtitle: "Hands-on Experience" },
  { icon: <FaMapMarkerAlt />, title: "Tashkent, UZ", subtitle: "Based & Remote-Friendly" },
  { icon: <FaCode />, title: "4–6 Hours", subtitle: "Daily Coding Practice" },
  { icon: <FaRocket />, title: "Full Stack", subtitle: "Future Career Goal" },
];

const SKILLS = [
  { name: "HTML", icon: <FaHtml5 />, level: 95, color: "#F97316" },
  { name: "CSS", icon: <FaCss3Alt />, level: 92, color: "#3B82F6" },
  { name: "JavaScript", icon: <FaJs />, level: 88, color: "#FACC15" },
  { name: "React", icon: <FaReact />, level: 90, color: "#22D3EE" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 93, color: "#38BDF8" },
  { name: "Node.js", icon: <FaNodeJs />, level: 78, color: "#4ADE80" },
  { name: "Express.js", icon: <SiExpress />, level: 74, color: "#E5E7EB" },
  { name: "Git", icon: <FaGitAlt />, level: 85, color: "#F87171" },
];

const MARQUEE = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Git & GitHub", icon: <FaGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
];

const SERVICES = [
  { icon: <FaCode />, title: "Frontend Development", desc: "Building fast, clean and maintainable interfaces with modern JavaScript and component-driven architecture." },
  { icon: <FaReact />, title: "React Development", desc: "Developing scalable single-page applications with React, React Router, custom hooks and clean state management." },
  { icon: <FaMobileAlt />, title: "Responsive Design", desc: "Designing layouts that look and feel premium on every screen, from mobile to large desktop displays." },
  { icon: <FaPlug />, title: "API Integration", desc: "Connecting frontend applications to REST APIs with axios and proper loading, error and empty states." },
  { icon: <FaTachometerAlt />, title: "Performance Optimization", desc: "Improving load times and rendering performance through code-splitting, lazy loading and best practices." },
  { icon: <FaRocket />, title: "Deploy & Launch", desc: "Shipping projects to production on Vercel with clean builds, custom domains and continuous deployment from GitHub." },
];

// Real projects from github.com/uralboyevabdumali-glitch — all deployed on Vercel
const PROJECTS = [
  {
    title: "TJ Language School",
    desc: "Website for an English & IELTS education center in Tashkent — courses, teachers, small-group schedules and enrollment.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Axios"],
    live: "https://tj-language-school.vercel.app",
    repo: "tj-Language-school-",
    category: "Education",
    featured: true,
  },
  {
    title: "Mentora",
    desc: "“Bilimingizga mos yo‘lni toping” — a learning platform that helps students find the right path and mentor for their level.",
    tech: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
    live: "https://mentora-olive.vercel.app",
    repo: "mentora",
    img: mentoraImg,
    category: "Education",
    featured: true,
  },
  {
    title: "Vitrina",
    desc: "A product showcase platform with sign-up / login flow, API-driven data and a sleek dark gradient UI.",
    tech: ["React", "Tailwind CSS", "Axios"],
    live: "https://vitrina-snowy.vercel.app",
    repo: "vitrina",
    img: vitrinaImg,
    category: "E-Commerce",
  },
  {
    title: "TaskFlow",
    desc: "“Stay in flow” — a premium productivity todo app with smooth animations, filters and a polished UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://todo-ten-sand.vercel.app",
    repo: "todo",
    img: taskflowImg,
    category: "Productivity",
  },
  {
    title: "Budulnik",
    desc: "“Vaqt boshqaruv paneli” — counter, live clock, stopwatch with laps and an alarm, all in one dashboard (useRef + useMemo).",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "https://budulnik-two.vercel.app",
    repo: "budulnik",
    img: budulnikImg,
    category: "Productivity",
  },
  {
    title: "Islamic Companion",
    desc: "A calm, mobile-first app with a digital tasbeh, Quran guidance, daily duas and prayer times — with an onboarding flow.",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "https://tasbeh-teal.vercel.app",
    repo: "tasbeh",
    img: tasbehImg,
    category: "Utility",
  },
];

const PROJECT_FILTERS = ["All", "Education", "E-Commerce", "Productivity", "Utility"];

const EXPERIENCE = [
  { year: "2024 — Present", role: "Freelance Frontend Developer", place: "Self-employed · Remote", desc: "Building responsive websites and web applications for clients using React, JavaScript and Tailwind CSS — including TJ Language School and Mentora.", icon: <FaRocket /> },
  { year: "2023 — 2024", role: "Frontend Development Bootcamp", place: "Intensive Practical Training", desc: "Completed deep, project-based training in HTML, CSS, JavaScript and React fundamentals, plus team projects with Git.", icon: <FaGraduationCap /> },
  { year: "2023", role: "Started Web Development Journey", place: "Self-Taught Foundations", desc: "Began learning web development from scratch, building small projects daily to sharpen core skills.", icon: <FaCode /> },
];

const CONTACT_INFO = [
  { icon: <FaEnvelope />, label: "Email", value: "uralboyevabdumali@gmail.com", href: "mailto:uralboyevabdumali@gmail.com" },
  { icon: <FaPhoneAlt />, label: "Phone", value: "+998 94 527 13 80", href: "tel:+998945271380" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Tashkent, Uzbekistan", href: null },
];

const SOCIAL_LINKS = [
  { icon: <FaGithub />, href: GITHUB_URL, label: "GitHub" },
  { icon: <FaTelegramPlane />, href: "https://t.me/Abdumalik_Uralboyev", label: "Telegram" },
  { icon: <FaEnvelope />, href: "mailto:uralboyevabdumali@gmail.com", label: "Email" },
];

/* =========================================================================
   SMALL REUSABLE PIECES
   ========================================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 0.8, 0.24, 1] } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// Feeds the mouse position into the .spotlight CSS variables
const trackSpotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

function Reveal({ children, className = "", variants = fadeUp, ...props }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] uppercase text-primary mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_#22D3EE]" />
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, highlight, text, center = false }) {
  return (
    <Reveal className={`max-w-2xl mb-16 ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold text-4xl sm:text-5xl mb-4 leading-[1.08]">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {text && <p className="text-ink/60 text-[15.5px] leading-relaxed">{text}</p>}
    </Reveal>
  );
}

function CountUp({ end, decimals = 0, duration = 2 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, end, { duration, ease: [0.16, 0.8, 0.24, 1], onUpdate: setValue });
    return () => controls.stop();
  }, [end, duration]);

  return value.toFixed(decimals);
}

function useTypingEffect(words, typingSpeed = 90, deletingSpeed = 45, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
      }, deleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

// Live numbers from the GitHub API, with the values above as a fallback
function useGithubStats() {
  const [stats, setStats] = useState({ repos: 17, latest: null, since: 2026 });

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      axios.get(`https://api.github.com/users/${GITHUB_USER}`),
      axios.get(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=1`),
    ])
      .then(([user, repos]) => {
        if (cancelled) return;
        setStats({
          repos: user.data.public_repos,
          since: new Date(user.data.created_at).getFullYear(),
          latest: repos.data[0] ? { name: repos.data[0].name, pushed: repos.data[0].pushed_at } : null,
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
}

/* =========================================================================
   MAIN APP
   ========================================================================= */

export default function App() {
  return (
    <div className="relative bg-bg text-ink font-body min-h-screen selection:bg-primary selection:text-bg">
      <Aurora />
      <CursorGlow />
      <div className="noise" />
      <ScrollProgressBar />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="relative z-[2]">
              <Hero />
              <TechMarquee />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Experience />
              <Contact />
            </main>
          }
        />
      </Routes>
      <Footer />
      <BackToTop />
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastStyle={{
          background: "rgba(14,16,32,0.8)",
          backdropFilter: "blur(16px)",
          color: "#EEF0FF",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      />
    </div>
  );
}

/* =========================================================================
   BACKGROUND: AURORA + CURSOR GLOW
   ========================================================================= */

function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-primary/30 blur-[140px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-secondary/20 blur-[140px] animate-blob [animation-delay:4s]" />
      <div className="absolute -bottom-40 left-1/4 w-[520px] h-[520px] rounded-full bg-accent/20 blur-[150px] animate-blob [animation-delay:8s]" />
    </div>
  );
}

function CursorGlow() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.14),transparent_65%)] hidden md:block"
    />
  );
}

/* =========================================================================
   SCROLL PROGRESS BAR
   ========================================================================= */

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-primary via-secondary to-accent z-[300]"
    />
  );
}

/* =========================================================================
   NAVBAR
   ========================================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "home";
      NAV_LINKS.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && window.scrollY + 180 >= el.offsetTop) current = l.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    // The full-width flex wrapper does the centering, so framer-motion's
    // transform on <nav> can't knock it off-center.
    <header
      className={`fixed inset-x-0 z-[200] flex justify-center px-4 transition-all duration-500 ${
        scrolled ? "top-3" : "top-5"
      }`}
    >
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 0.8, 0.24, 1] }}
        className={`relative w-full max-w-[1120px] flex items-center justify-between gap-4 rounded-full px-3 py-2.5 transition-all duration-500 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 pl-1.5 shrink-0">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center font-display font-bold text-bg text-sm shadow-glow">
            AU
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Abdumalik<span className="text-secondary">.</span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300 ${
                active === l.id ? "text-ink" : "text-ink/55 hover:text-ink"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:flex w-10 h-10 rounded-full glass items-center justify-center transition-all duration-300 hover:text-secondary hover:-translate-y-0.5"
          >
            <FaGithub />
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-bg text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.04] hover:shadow-glow"
          >
            Let's talk <FaArrowRight size={12} />
          </button>
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full glass"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="absolute top-[calc(100%+12px)] inset-x-0 glass-strong rounded-3xl p-3 lg:hidden"
            >
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-medium transition-colors ${
                    active === l.id ? "bg-white/10 text-ink" : "text-ink/70 hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-bg text-sm font-semibold px-5 py-3 rounded-2xl"
              >
                Let's talk <FaArrowRight size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

/* =========================================================================
   HERO
   ========================================================================= */

function Hero() {
  const typed = useTypingEffect(TYPED_ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-36 pb-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <motion.div initial="hidden" animate="show" variants={staggerParent} className="min-w-0">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 glass rounded-full pl-2 pr-4 py-1.5 mb-7">
            <span className="relative flex w-2.5 h-2.5 ml-1">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[12.5px] font-medium text-ink/80">Available for freelance projects</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display font-semibold text-[46px] sm:text-6xl lg:text-[76px] leading-[1.02] mb-5 tracking-tight">
            Abdumalik
            <br />
            <span className="gradient-text">Uralboyev</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="h-9 mb-6 font-mono">
            <span className="text-lg sm:text-xl text-ink/85">
              <span className="text-secondary">&gt;</span> {typed}
              <span className="inline-block w-[9px] h-5 bg-primary ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-ink/60 text-[15.5px] leading-relaxed max-w-xl mb-10">
            Salom! Men Abdumalik Uralboyev, Frontend Developer. React, JavaScript, Tailwind CSS
            va zamonaviy web texnologiyalari yordamida tez, responsive va professional web
            ilovalar yarataman.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-bg font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              View Projects <FaArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center gap-2 glass text-ink font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              Contact Me
            </button>
            <a
              href="/Abdumalik_Uralboyev_CV.pdf"
              download
              className="inline-flex items-center gap-2 text-ink/70 font-semibold text-sm px-4 py-4 transition-colors duration-300 hover:text-secondary"
            >
              <FaDownload size={13} /> Download CV
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-3.5">
                <p className="font-display text-2xl font-semibold">
                  <CountUp end={s.value} decimals={s.decimals || 0} duration={2.2} />
                  <span className="text-secondary">{s.suffix}</span>
                </p>
                <p className="text-[11.5px] text-ink/50 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink/40 text-[11px] tracking-[0.2em] uppercase"
      >
        Scroll
        <span className="w-[22px] h-9 rounded-full border border-line flex justify-center pt-1.5">
          <motion.span
            animate={{ y: [0, 9, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-[3px] h-[7px] rounded-full bg-secondary"
          />
        </span>
      </motion.div>
    </section>
  );
}

/* ---------- Hero visual: tilting glass code editor + orbiting tech ---------- */

const CODE_LINES = [
  [["kw", "const "], ["var", "developer"], ["p", " = {"]],
  [["p", "  "], ["key", "name"], ["p", ": "], ["str", '"Abdumalik"'], ["p", ","]],
  [["p", "  "], ["key", "role"], ["p", ": "], ["str", '"Frontend Dev"'], ["p", ","]],
  [["p", "  "], ["key", "city"], ["p", ": "], ["str", '"Tashkent"'], ["p", ","]],
  [["p", "  "], ["key", "stack"], ["p", ": ["], ["str", '"React"'], ["p", ", "], ["str", '"Tailwind"'], ["p", "],"]],
  [["p", "  "], ["key", "hoursPerDay"], ["p", ": "], ["num", "6"], ["p", ","]],
  [["p", "  "], ["key", "coffee"], ["p", ": "], ["num", "Infinity"], ["p", ","]],
  [["p", "  "], ["key", "hireable"], ["p", ": "], ["kw", "true"], ["p", ","]],
  [["p", "};"]],
];

const TOKEN_COLORS = {
  kw: "text-accent",
  var: "text-secondary",
  key: "text-primary",
  str: "text-emerald-300",
  num: "text-amber-300",
  p: "text-ink/60",
};

const CODE_TOTAL = CODE_LINES.flat().reduce((n, [, t]) => n + t.length, 0);

const ORBIT_ICONS = [
  { icon: <FaReact />, color: "#22D3EE", start: "0deg" },
  { icon: <FaJs />, color: "#FACC15", start: "72deg" },
  { icon: <SiTailwindcss />, color: "#38BDF8", start: "144deg" },
  { icon: <FaGitAlt />, color: "#F87171", start: "216deg" },
  { icon: <FaNodeJs />, color: "#4ADE80", start: "288deg" },
];

function useCodeTyping() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const done = count >= CODE_TOTAL;
    const t = setTimeout(() => setCount(done ? 0 : count + 1), done ? 4500 : 28);
    return () => clearTimeout(t);
  }, [count]);

  return count;
}

function HeroVisual() {
  const count = useCodeTyping();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  let remaining = count;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 0.8, 0.24, 1], delay: 0.25 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-[460px] aspect-square flex items-center justify-center"
    >
      {/* orbit rings */}
      <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
      <div className="absolute inset-[14%] rounded-full border border-dashed border-white/[0.08] animate-spinSlow" />
      <div className="absolute inset-[22%] rounded-full bg-gradient-to-br from-primary/40 via-secondary/25 to-accent/30 blur-3xl" />

      {ORBIT_ICONS.map((o) => (
        <div
          key={o.start}
          className="orbit-item hidden sm:block"
          style={{ "--start": o.start, "--r": "min(230px, 46vw)", "--dur": "26s" }}
        >
          <div
            className="w-11 h-11 rounded-2xl glass-strong flex items-center justify-center text-xl"
            style={{ color: o.color, boxShadow: `0 0 24px -6px ${o.color}` }}
          >
            {o.icon}
          </div>
        </div>
      ))}

      {/* the editor card */}
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative w-[88%] sm:w-[78%] rounded-3xl glass-strong conic-border overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-[11.5px] font-mono text-ink/45">developer.js</span>
          <FaReact className="ml-auto text-secondary animate-spinSlow" />
        </div>
        <pre className="font-mono text-[11.5px] sm:text-[13px] leading-[1.75] px-4 sm:px-5 py-4 min-h-[250px] whitespace-pre overflow-x-auto">
          {CODE_LINES.map((line, i) => {
            if (remaining <= 0) return null;
            return (
              <div key={i} className="flex">
                <span className="w-6 shrink-0 text-ink/20 select-none">{i + 1}</span>
                <span>
                  {line.map(([type, text], j) => {
                    if (remaining <= 0) return null;
                    const shown = text.slice(0, remaining);
                    remaining -= text.length;
                    return (
                      <span key={j} className={TOKEN_COLORS[type]}>
                        {shown}
                      </span>
                    );
                  })}
                  {remaining <= 0 && <span className="inline-block w-[7px] h-[14px] bg-secondary align-middle animate-pulse" />}
                </span>
              </div>
            );
          })}
        </pre>
      </motion.div>

      {/* floating badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute z-10 top-[6%] right-0 sm:-right-4 glass-strong rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
      >
        <FaGithub className="text-lg" />
        <div>
          <p className="text-[10.5px] text-ink/50 leading-none">GitHub</p>
          <p className="text-[13px] font-semibold">17+ repos</p>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute z-10 bottom-[6%] left-0 sm:-left-4 glass-strong rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
      >
        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-bg">
          <FaRocket size={13} />
        </span>
        <div>
          <p className="text-[10.5px] text-ink/50 leading-none">Shipped on</p>
          <p className="text-[13px] font-semibold">Vercel · 7 live</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================================
   TECH MARQUEE
   ========================================================================= */

function TechMarquee() {
  return (
    <div className="relative py-8 border-y border-line bg-white/[0.02] backdrop-blur-sm marquee-mask overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...MARQUEE, ...MARQUEE].map((m, i) => (
          <div key={i} className="flex items-center gap-3 px-8 text-ink/50 hover:text-ink transition-colors">
            <span className="text-2xl">{m.icon}</span>
            <span className="font-display text-lg font-medium whitespace-nowrap">{m.name}</span>
            <span className="ml-8 text-primary/50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   ABOUT
   ========================================================================= */

function About() {
  const gh = useGithubStats();

  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          {/* Terminal card instead of a photo */}
          <Reveal variants={{ hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7 } } }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-secondary/25 via-primary/20 to-accent/25 blur-2xl" />
              <div className="relative rounded-[28px] glass-strong overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[11.5px] font-mono text-ink/45">~/abdumalik — zsh</span>
                </div>
                <div className="font-mono text-[13px] leading-[1.9] p-6">
                  <p><span className="text-emerald-300">➜</span> <span className="text-secondary">~</span> whoami</p>
                  <p className="text-ink/70 mb-2">Abdumalik Uralboyev — Frontend Developer</p>
                  <p><span className="text-emerald-300">➜</span> <span className="text-secondary">~</span> cat focus.txt</p>
                  <p className="text-ink/70">React · Tailwind CSS · Framer Motion</p>
                  <p className="text-ink/70 mb-2">Clean UI · Responsive · Fast</p>
                  <p><span className="text-emerald-300">➜</span> <span className="text-secondary">~</span> gh stats</p>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                      <FaCodeBranch className="text-primary mb-2" />
                      <p className="font-display text-2xl font-semibold text-ink">{gh.repos}</p>
                      <p className="text-[11px] text-ink/45 font-body">public repos</p>
                    </div>
                    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                      <FaStar className="text-amber-300 mb-2" />
                      <p className="font-display text-2xl font-semibold text-ink">7</p>
                      <p className="text-[11px] text-ink/45 font-body">deployed apps</p>
                    </div>
                  </div>
                  {gh.latest && (
                    <p className="text-[12px] text-ink/45 mt-4">
                      latest push → <span className="text-secondary">{gh.latest.name}</span> ·{" "}
                      {new Date(gh.latest.pushed).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  )}
                  <p className="mt-2">
                    <span className="text-emerald-300">➜</span> <span className="text-secondary">~</span>{" "}
                    <span className="inline-block w-2 h-4 bg-ink/70 align-middle animate-pulse" />
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>About Me</Eyebrow>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl mb-6 leading-[1.08]">
                Turning ideas into <span className="gradient-text">clean, functional</span> interfaces.
              </h2>
              <p className="text-ink/60 text-[15.5px] leading-relaxed max-w-xl mb-4">
                I'm a frontend developer based in Tashkent, Uzbekistan, focused on building fast
                and responsive web applications with React and modern JavaScript. I care about
                writing readable code and designing interfaces that feel intentional.
              </p>
              <p className="text-ink/60 text-[15.5px] leading-relaxed max-w-xl mb-10">
                Every day I dedicate 4 to 6 hours to coding — building real projects like an
                IELTS school website, a learning platform and productivity tools, all shipped to
                production on Vercel. My long-term goal is to grow into a confident Full Stack
                Developer.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {ABOUT_CARDS.map((c, i) => (
                <Reveal key={c.title} transition={{ delay: i * 0.08 }}>
                  <div
                    onMouseMove={trackSpotlight}
                    className="spotlight group rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-secondary/20 border border-white/10 text-secondary flex items-center justify-center text-lg mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {c.icon}
                    </div>
                    <p className="font-display font-semibold text-lg">{c.title}</p>
                    <p className="text-ink/50 text-[13px] mt-1">{c.subtitle}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SKILLS
   ========================================================================= */

function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills &"
          highlight="technologies."
          text="The core stack I use to design, build and ship modern web applications."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerParent}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SKILLS.map((s) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              onMouseMove={trackSpotlight}
              className="spotlight group rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110"
                style={{ color: s.color, boxShadow: `0 0 30px -10px ${s.color}` }}
              >
                {s.icon}
              </div>
              <div className="flex items-center justify-between mb-2.5">
                <p className="font-semibold text-[15px]">{s.name}</p>
                <span className="text-xs text-ink/50 font-mono">{s.level}%</span>
              </div>
              <div className="h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: [0.16, 0.8, 0.24, 1], delay: 0.15 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================================
   SERVICES
   ========================================================================= */

function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I can"
          highlight="help you."
          text="Focused frontend services for teams and founders who care about quality."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerParent}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              onMouseMove={trackSpotlight}
              className="spotlight group rounded-[28px] glass p-8 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between">
                <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-primary to-secondary text-bg flex items-center justify-center text-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 shadow-glow">
                  {s.icon}
                </div>
                <span className="font-display text-4xl font-semibold text-white/[0.06] group-hover:text-white/[0.12] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl mt-6 mb-2">{s.title}</h3>
              <p className="text-ink/55 text-[14.5px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================================
   PROJECTS
   ========================================================================= */

// Screenshot of the live site (src/assets/projects), or a branded gradient tile
function ProjectPreview({ project }) {
  if (project.img) {
    return (
      <img
        src={project.img}
        alt={`${project.title} preview`}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/35 via-secondary/15 to-accent/30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute w-48 h-48 rounded-full bg-secondary/30 blur-3xl animate-blob" />
      <span className="relative w-16 h-16 rounded-2xl glass-strong flex items-center justify-center text-3xl text-ink">
        <FaGraduationCap />
      </span>
      <span className="relative font-display text-3xl font-semibold text-ink">{project.title}</span>
      <span className="relative text-xs tracking-[0.2em] uppercase text-ink/60">English · IELTS</span>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <Reveal className="max-w-2xl">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl mb-4 leading-[1.08]">
              Recent <span className="gradient-text">projects.</span>
            </h2>
            <p className="text-ink/60 text-[15.5px] leading-relaxed">
              Real projects from my GitHub — built with React and Tailwind CSS and deployed live
              on Vercel.
            </p>
          </Reveal>
          <Reveal>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <FaGithub /> All repositories <FaArrowRight size={11} />
            </a>
          </Reveal>
        </div>

        <Reveal className="flex flex-wrap gap-2 mb-10">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
                filter === f ? "text-bg" : "glass text-ink/60 hover:text-ink"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 0.8, 0.24, 1] }}
                onMouseMove={trackSpotlight}
                className="spotlight group rounded-[28px] glass p-3 transition-all duration-300 hover:-translate-y-2"
              >
                {/* browser-style preview */}
                <div className="rounded-[20px] overflow-hidden border border-white/10 bg-card">
                  <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-white/[0.04] border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-3 flex-1 truncate rounded-md bg-white/[0.05] px-3 py-0.5 text-[11px] font-mono text-ink/45">
                      {p.live.replace("https://", "")}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ProjectPreview project={p} />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 glass-strong rounded-full px-5 py-2.5 text-[13px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        Open live site <FaExternalLinkAlt size={11} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="px-3 pt-5 pb-3">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-secondary">{p.category}</span>
                    {p.featured && (
                      <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-2xl mb-2">{p.title}</h3>
                  <p className="text-ink/55 text-[14px] leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-ink/60">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-[13px] font-semibold px-4 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-bg transition-all duration-300 hover:shadow-glow"
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                    <a
                      href={`${GITHUB_URL}/${p.repo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-[13px] font-semibold px-4 py-3 rounded-full glass transition-all duration-300 hover:bg-white/10"
                    >
                      <FaGithub size={13} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================================
   EXPERIENCE
   ========================================================================= */

function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="My journey"
          highlight="so far."
          text="A short, honest timeline of how I got here."
        />

        <div className="relative pl-14 sm:pl-20">
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary/60 to-transparent" />

          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} className="relative mb-10 last:mb-0" transition={{ delay: i * 0.1 }}>
              <span className="absolute -left-14 sm:-left-20 top-4 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-strong flex items-center justify-center text-secondary shadow-glowCyan">
                {e.icon}
              </span>
              <div
                onMouseMove={trackSpotlight}
                className="spotlight rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                  {e.year}
                </span>
                <h3 className="font-display font-semibold text-xl mt-3">{e.role}</h3>
                <p className="text-secondary text-[13px] font-medium mb-2">{e.place}</p>
                <p className="text-ink/55 text-[14.5px] leading-relaxed">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   CONTACT
   ========================================================================= */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's mail app with the message pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio: message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:uralboyevabdumali@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-ink placeholder:text-ink/30 text-sm outline-none transition-all duration-300 focus:border-secondary/60 focus:bg-white/[0.07] focus:shadow-glowCyan";

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          highlight="great."
          text="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <Reveal
          variants={{ hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7 } } }}
          className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] rounded-[32px] overflow-hidden glass-strong"
        >
          <div className="relative p-10 sm:p-12 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/25 blur-[90px]" />
            <div className="relative">
              <h3 className="font-display font-semibold text-3xl mb-3">Get in touch.</h3>
              <p className="text-ink/55 text-[14.5px] mb-8 max-w-xs">
                Reach out directly, or send a message using the form and I'll respond within a day.
              </p>

              {CONTACT_INFO.map((c) => (
                <a
                  key={c.label}
                  href={c.href || undefined}
                  className={`flex items-center gap-4 py-4 border-t border-white/10 ${
                    c.href ? "hover:text-secondary transition-colors duration-300" : "cursor-default"
                  }`}
                >
                  <span className="w-11 h-11 rounded-xl glass flex items-center justify-center text-secondary flex-shrink-0">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-ink/40">{c.label}</span>
                    <span className="text-[14px] font-medium break-all">{c.value}</span>
                  </span>
                </a>
              ))}
              <div className="border-t border-white/10 pt-6 mt-2 flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full glass flex items-center justify-center transition-all duration-300 hover:text-secondary hover:-translate-y-1 hover:shadow-glowCyan"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-10 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className={inputClass} />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={7}
              className={`${inputClass} mb-6 resize-none`}
            />
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] hover:bg-right text-bg font-semibold text-sm px-7 py-4 rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              Send Message <FaPaperPlane size={13} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   FOOTER
   ========================================================================= */

function Footer() {
  return (
    <footer className="relative z-[2] border-t border-white/10 py-16 bg-white/[0.02] backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <button onClick={() => scrollToId("home")} className="font-display text-3xl font-semibold mb-6 inline-block">
          Abdumalik<span className="text-secondary">.</span>
        </button>

        <div className="flex justify-center gap-3 mb-8">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-11 h-11 rounded-full glass flex items-center justify-center transition-all duration-300 hover:text-secondary hover:-translate-y-1"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="text-sm text-ink/55 hover:text-secondary transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-ink/35">
          © {new Date().getFullYear()} Abdumalik Uralboyev · Built with React, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}

/* =========================================================================
   BACK TO TOP
   ========================================================================= */

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-[200] w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-bg flex items-center justify-center shadow-glow transition-transform duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
