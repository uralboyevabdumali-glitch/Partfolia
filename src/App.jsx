import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import Abdumalik from "../src/assets/abdumalik.png";
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
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

/* =========================================================================
   DATA
   ========================================================================= */

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

const ABOUT_CARDS = [
  { icon: <FaLayerGroup />, title: "1.5 Years", subtitle: "Hands-on Experience" },
  { icon: <FaMapMarkerAlt />, title: "Tashkent, Uzbekistan", subtitle: "Based & Remote-Friendly" },
  { icon: <FaCode />, title: "4–6 Hours", subtitle: "Daily Coding Practice" },
  { icon: <FaArrowRight />, title: "Full Stack", subtitle: "Future Career Goal" },
];

const SKILLS = [
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 92 },
  { name: "JavaScript", icon: <FaJs />, level: 88 },
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 93 },
  { name: "Node.js", icon: <FaNodeJs />, level: 78 },
  { name: "Express.js", icon: <SiExpress />, level: 74 },
  { name: "Git", icon: <FaGitAlt />, level: 85 },
];

const SERVICES = [
  { icon: <FaCode />, title: "Frontend Development", desc: "Building fast, clean and maintainable interfaces with modern JavaScript and component-driven architecture." },
  { icon: <FaReact />, title: "React Development", desc: "Developing scalable single-page applications with React, custom hooks and clean state management." },
  { icon: <FaMobileAlt />, title: "Responsive Design", desc: "Designing layouts that look and feel premium on every screen, from mobile to large desktop displays." },
  { icon: <FaPlug />, title: "API Integration", desc: "Connecting frontend applications to REST APIs with proper loading, error and empty states." },
  { icon: <FaTachometerAlt />, title: "Performance Optimization", desc: "Improving load times and rendering performance through code-splitting, lazy loading and best practices." },
];

const PROJECTS = [
  {
    title: "Luxe Commerce UI",
    desc: "A premium e-commerce storefront concept with animated product grids, cart drawer and checkout flow.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    img: "https://www.craveasia.com/assets_hw/images/works/esteelauder-master.jpg",
    tag: "E-Commerce",
  },
  {
    title: "Skyline Weather",
    desc: "A minimalist weather dashboard that pulls live forecasts and visualizes them with smooth transitions.",
    tech: ["React", "REST API", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=550&fit=crop",
    tag: "Web App",
  },
  {
    title: "Flow Task Manager",
    desc: "A drag-and-drop task board for teams, with boards, labels and local persistence.",
    tech: ["React", "JavaScript", "Context API"],
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=550&fit=crop",
    tag: "Productivity",
  },
  {
    title: "Pulse Admin Dashboard",
    desc: "An analytics dashboard with animated charts, tables and a responsive sidebar navigation system.",
    tech: ["React", "Tailwind CSS", "Chart.js"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=550&fit=crop",
    tag: "Dashboard",
  },
  {
    title: "Savory Recipe Finder",
    desc: "A recipe discovery app with search, filters and saved favorites backed by a public food API.",
    tech: ["React", "REST API", "CSS"],
    img: "https://images.unsplash.com/photo-1466637574441-749b8f6b7d4e?w=800&h=550&fit=crop",
    tag: "Web App",
  },
  {
    title: "Studio Portfolio Kit",
    desc: "A reusable portfolio template system for developers, with theme tokens and animated sections.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=550&fit=crop",
    tag: "Template",
  },
];

const EXPERIENCE = [
  { year: "2024 — Present", role: "Freelance Frontend Developer", place: "Self-employed · Remote", desc: "Building responsive websites and web applications for clients using React, JavaScript and Tailwind CSS." },
  { year: "2023 — 2024", role: "Frontend Development Bootcamp", place: "Intensive Practical Training", desc: "Completed deep, project-based training in HTML, CSS, JavaScript and React fundamentals." },
  { year: "2023", role: "Started Web Development Journey", place: "Self-Taught Foundations", desc: "Began learning web development from scratch, building small projects daily to sharpen core skills." },
];

const CONTACT_INFO = [
  { icon: <FaEnvelope />, label: "Email", value: "uralboyevabdumali@gmail.com", href: "mailto:uralboyevabdumali@gmail.com" },
  { icon: <FaPhoneAlt />, label: "Phone", value: "+998 94 527 13 80", href: "tel:+998945271380" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Tashkent, Uzbekistan", href: null },
];

const SOCIAL_LINKS = [
  { icon: <FaGithub />, href: "https://github.com/uralboyevabdumali", label: "GitHub" },
  { icon: <FaTelegramPlane />, href: "https://t.me/Abdumalik_Uralboyev", label: "Telegram" },
  { icon: <FaEnvelope />, href: "mailto:uralboyevabdumali@gmail.com", label: "Email" },
];

/* =========================================================================
   SMALL REUSABLE PIECES
   ========================================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 0.8, 0.24, 1] } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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
    <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.22em] uppercase text-primary mb-4">
      <span className="w-5 h-px bg-primary" />
      {children}
    </span>
  );
}

function GradientBlobs({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[110px] animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-[440px] h-[440px] rounded-full bg-secondary/25 blur-[110px] animate-blob [animation-delay:3s]" />
    </div>
  );
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

/* =========================================================================
   MAIN APP
   ========================================================================= */

export default function App() {
  return (
    <div className="relative bg-bg text-ink font-body min-h-screen selection:bg-primary selection:text-bg">
      <div className="noise" />
      <ScrollProgressBar />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
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
        toastStyle={{ background: "#171717", color: "#E7E5DF", border: "1px solid rgba(231,229,223,0.08)" }}
      />
    </div>
  );
}

/* =========================================================================
   SCROLL PROGRESS BAR
   ========================================================================= */

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-primary to-secondary z-[300]"
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 0.8, 0.24, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-[200] w-[min(94%,900px)] flex items-center justify-between gap-4 rounded-full glass px-4 py-3 transition-all duration-500 ${
          scrolled ? "top-3 shadow-glowSoft" : "top-5"
        }`}
      >
        <button onClick={() => scrollTo("home")} className="font-display text-lg font-semibold pl-2 tracking-tight">
          Abdumalik<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                active === l.id ? "text-bg" : "text-ink/60 hover:text-ink"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex items-center gap-2 bg-primary text-bg text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-transform duration-300 hover:scale-[1.04] hover:shadow-glow"
        >
          Let's talk <FaArrowRight size={12} />
        </button>

        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-card"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[199] w-[90%] glass rounded-3xl p-3 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  active === l.id ? "bg-primary text-bg" : "text-ink/70 hover:bg-white/5"
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================================
   HERO
   ========================================================================= */

function Hero() {
  const typed = useTypingEffect(TYPED_ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-36 overflow-hidden">
      <GradientBlobs />
      <div className="container mx-auto max-w-6xl px-6 relative z-10 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div initial="hidden" animate="show" variants={staggerParent}>
          <motion.p variants={fadeUp} className="text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-5">
            Hello, I'm
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-display font-semibold text-[42px] sm:text-6xl lg:text-7xl leading-[1.03] mb-5">
            Abdumalik <span className="gradient-text">Uralboyev</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="h-9 mb-6">
            <span className="text-xl sm:text-2xl font-medium text-ink/85">
              {typed}
              <span className="inline-block w-[2px] h-6 bg-primary ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-ink/60 text-[15.5px] sm:text-base max-w-xl mb-3 font-medium">
            Crafting Modern Web Experiences &amp; Cyber UI Designs
          </motion.p>

          <motion.p variants={fadeUp} className="text-ink/55 text-[15px] leading-relaxed max-w-xl mb-10">
            Salom! Men Abdumalik Uralboyev, Frontend Developer. React, JavaScript, Tailwind CSS
            va zamonaviy web texnologiyalari yordamida tez, responsive va professional web
            ilovalar yarataman.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-primary text-bg font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-glow"
            >
              View Projects <FaArrowRight size={13} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-transparent border border-secondary text-ink font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:bg-secondary hover:text-bg hover:-translate-y-1 hover:scale-[1.03]"
            >
              Contact Me
            </a>
            <a
              href="/Abdumalik_Uralboyev_CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-white/5 border border-line text-ink font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-1"
            >
              Download CV <FaDownload size={13} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 0.8, 0.24, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-primary/25 to-secondary/25 blur-2xl animate-float" />
          <div className="relative aspect-[4/5] rounded-[32px] glass overflow-hidden shadow-glowSoft border border-line">
            <img
              src={Abdumalik}
              alt="Abdumalik Uralboyev"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-ink/50 uppercase tracking-wide">Available for</p>
                <p className="text-sm font-semibold">Freelance Projects</p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_#96BB73]" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40 text-[11px] tracking-[0.2em] uppercase"
      >
        Scroll
        <span className="w-[22px] h-9 rounded-full border border-line flex justify-center pt-1.5">
          <motion.span
            animate={{ y: [0, 9, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-[3px] h-[7px] rounded-full bg-primary"
          />
        </span>
      </motion.div>
    </section>
  );
}

/* =========================================================================
   ABOUT
   ========================================================================= */

function About() {
  return (
    <section id="about" className="relative py-32 bg-section">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          <Reveal variants={{ hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7 } } }}>
            <div className="relative aspect-square rounded-[32px] glass border border-line overflow-hidden">
              <img
                src={Abdumalik}
                alt="Abdumalik Uralboyev"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>About Me</Eyebrow>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-6 leading-tight">
                Turning ideas into <span className="gradient-text">clean, functional</span> interfaces.
              </h2>
              <p className="text-ink/60 text-[15.5px] leading-relaxed max-w-xl mb-4">
                I'm a frontend developer based in Tashkent, Uzbekistan, focused on building fast
                and responsive web applications with React and modern JavaScript. I care about
                writing readable code and designing interfaces that feel intentional.
              </p>
              <p className="text-ink/60 text-[15.5px] leading-relaxed max-w-xl mb-10">
                Every day I dedicate 4 to 6 hours to coding — building small projects, refining my
                fundamentals and exploring new tools. My long-term goal is to grow into a
                confident Full Stack Developer.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {ABOUT_CARDS.map((c, i) => (
                <Reveal key={c.title} transition={{ delay: i * 0.08 }}>
                  <div className="group rounded-2xl bg-card border border-line p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glowSoft">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg mb-4 transition-transform duration-300 group-hover:scale-110">
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
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>What I Work With</Eyebrow>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">Skills &amp; technologies.</h2>
          <p className="text-ink/60 text-[15.5px]">
            The core stack I use to design, build and ship modern web applications.
          </p>
        </Reveal>

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
              className="group relative overflow-hidden rounded-3xl bg-card border border-line p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glowSoft"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_80%_0%,rgba(191,187,90,0.18),transparent_60%)]" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-5 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  {s.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-[15px]">{s.name}</p>
                  <span className="text-xs text-ink/50 font-medium">{s.level}%</span>
                </div>
                <div className="h-[5px] rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 0.8, 0.24, 1], delay: 0.15 }}
                    className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                  />
                </div>
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
    <section id="services" className="relative py-32 bg-section">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>Services</Eyebrow>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">How I can help.</h2>
          <p className="text-ink/60 text-[15.5px]">
            Focused frontend services for teams and founders who care about quality.
          </p>
        </Reveal>

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
              className="group rounded-[28px] bg-gradient-to-b from-card to-[#121212] border border-line p-8 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-glowSoft"
            >
              <span className="text-xs text-ink/30 tracking-widest">{String(i + 1).padStart(2, "0")}</span>
              <div className="w-[52px] h-[52px] rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-xl my-5 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-ink/55 text-[14.5px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================================
   PROJECTS  ← rasmlar shu yerda chiqadi
   ========================================================================= */

function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">Recent projects.</h2>
          <p className="text-ink/60 text-[15.5px]">
            A collection of projects that reflect my frontend craft and attention to detail.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerParent}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group rounded-[28px] bg-card border border-line overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glowSoft"
            >
              {/* RASM — endi ishlaydi */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#171717]">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-sm tracking-widest uppercase text-ink/30">
                      {p.tag}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <span className="text-xs text-ink/80">{p.tech.join(" · ")}</span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-secondary mb-2 inline-block">
                  {p.tag}
                </span>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-ink/55 text-[14px] leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-3 py-1 rounded-full border border-line text-ink/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/uralboyevabdumali"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-[13px] font-semibold px-4 py-2.5 rounded-full border border-line transition-all duration-300 hover:border-primary hover:bg-primary/10"
                  >
                    <FaGithub size={13} /> Code
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-[13px] font-semibold px-4 py-2.5 rounded-full border border-line transition-all duration-300 hover:border-secondary hover:bg-secondary/10"
                  >
                    <FaExternalLinkAlt size={12} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
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
    <section id="experience" className="relative py-32 bg-section">
      <div className="container mx-auto max-w-4xl px-6">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">My journey so far.</h2>
          <p className="text-ink/60 text-[15.5px]">A short, honest timeline of how I got here.</p>
        </Reveal>

        <div className="relative pl-10 sm:pl-14">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent" />

          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} className="relative mb-12 last:mb-0" transition={{ delay: i * 0.1 }}>
              <span className="absolute -left-10 sm:-left-14 top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-primary shadow-[0_0_12px_rgba(191,187,90,0.5)]" />
              <div className="rounded-2xl bg-card border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glowSoft">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary">{e.year}</span>
                <h3 className="font-display font-semibold text-lg mt-2">{e.role}</h3>
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
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.", {
        icon: () => <FaCheckCircle color="#96BB73" />,
      });
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl mb-16">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">Let's build something great.</h2>
          <p className="text-ink/60 text-[15.5px]">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </Reveal>

        <Reveal
          variants={{ hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7 } } }}
          className="grid md:grid-cols-[0.8fr_1.2fr] rounded-[32px] overflow-hidden border border-line bg-gradient-to-br from-card to-[#101010]"
        >
          <div className="p-10 sm:p-12 border-b md:border-b-0 md:border-r border-line">
            <h3 className="font-display font-semibold text-2xl mb-3">Get in touch.</h3>
            <p className="text-ink/55 text-[14.5px] mb-8 max-w-xs">
              Reach out directly, or send a message using the form and I'll respond within a day.
            </p>

            {CONTACT_INFO.map((c) => (
              <a
                key={c.label}
                href={c.href || undefined}
                className={`flex items-center gap-4 py-4 border-t border-line ${
                  c.href ? "hover:text-primary transition-colors duration-300" : "cursor-default"
                }`}
              >
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  {c.icon}
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-ink/40">{c.label}</span>
                  <span className="text-[14px] font-medium">{c.value}</span>
                </span>
              </a>
            ))}
            <div className="border-t border-line pt-6 mt-2 flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-line flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-10 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-line text-ink placeholder:text-ink/30 text-sm outline-none transition-all duration-300 focus:border-primary focus:bg-primary/5"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-line text-ink placeholder:text-ink/30 text-sm outline-none transition-all duration-300 focus:border-primary focus:bg-primary/5"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full mb-6 px-5 py-4 rounded-2xl bg-white/[0.03] border border-line text-ink placeholder:text-ink/30 text-sm outline-none resize-none transition-all duration-300 focus:border-primary focus:bg-primary/5"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-bg font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-glow disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100"
            >
              {sending ? "Sending..." : "Send Message"} <FaPaperPlane size={13} />
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
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-line py-16 bg-section">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <button onClick={() => scrollTo("home")} className="font-display text-2xl font-semibold mb-6 inline-block">
          Abdumalik<span className="text-primary">.</span>
        </button>

        <div className="flex justify-center gap-3 mb-8">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-11 h-11 rounded-full border border-line flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-1"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-ink/55 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-ink/35">© {new Date().getFullYear()} Abdumalik Uralboyev. All rights reserved.</p>
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
          className="fixed bottom-8 right-8 z-[200] w-12 h-12 rounded-full bg-primary text-bg flex items-center justify-center shadow-glow transition-transform duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}