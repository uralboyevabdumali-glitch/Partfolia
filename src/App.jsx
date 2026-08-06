import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// --- REACT ICONS / LUCIDE EQUIVALENTS VIA SVG ---
const Icons = {
  Github: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Telegram: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.88 8.01-3.44 3.81-1.58 4.6-1.86 5.12-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.16-.04.29z"/>
    </svg>
  ),
  Email: (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Phone: (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Location: (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  ExternalLink: (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-4 h-4" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Code: (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Download: (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  Menu: (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};

// --- DATA DEFINITIONS ---
const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = [
  { name: 'HTML5', level: '95%', icon: '🌐', category: 'Frontend' },
  { name: 'CSS3 / SCSS', level: '90%', icon: '🎨', category: 'Styling' },
  { name: 'JavaScript (ES6+)', level: '88%', icon: '⚡', category: 'Language' },
  { name: 'React.js', level: '85%', icon: '⚛️', category: 'Framework' },
  { name: 'Tailwind CSS', level: '92%', icon: '💨', category: 'Styling' },
  { name: 'Node.js', level: '65%', icon: '🟢', category: 'Backend' },
  { name: 'Express.js', level: '60%', icon: '🛠️', category: 'Backend' },
  { name: 'Git / GitHub', level: '80%', icon: '📦', category: 'Tools' },
];

const SERVICES = [
  {
    title: 'Frontend Development',
    desc: 'Building performant, scalable, and modular web applications using modern HTML, CSS, and JavaScript standards.',
    icon: '💻'
  },
  {
    title: 'React Development',
    desc: 'Creating dynamic Single Page Applications (SPAs) with state management, custom hooks, and seamless component architecture.',
    icon: '⚛️'
  },
  {
    title: 'Responsive Design',
    desc: 'Crafting pixel-perfect layouts optimized across desktop, tablet, and mobile browsers with fluid Tailwind systems.',
    icon: '📱'
  },
  {
    title: 'API Integration',
    desc: 'Connecting RESTful APIs and asynchronous backend microservices with robust error handling and loading states.',
    icon: '🔌'
  },
  {
    title: 'Performance Optimization',
    desc: 'Accelerating page load times, optimizing Core Web Vitals, and implementing lazy loading and clean bundle code.',
    icon: '🚀'
  }
];

const PROJECTS = [
  {
    title: 'Cyber Dashboard Pro',
    desc: 'An enterprise-grade analytics dashboard with real-time data visualization, dark glass UI, and customized charting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
    github: 'https://github.com/uralboyevabdumali',
    demo: 'https://github.com/uralboyevabdumali'
  },
  {
    title: 'Modern E-Commerce Engine',
    desc: 'A futuristic shopping experience featuring instant filtering, cart state retention, dynamic search, and seamless checkout UI.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Context API', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/uralboyevabdumali',
    demo: 'https://github.com/uralboyevabdumali'
  },
  {
    title: 'TaskFlow Cyber PM',
    desc: 'A drag-and-drop productivity suite engineered for visual project organization, agile sprints, and real-time task sync.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    github: 'https://github.com/uralboyevabdumali',
    demo: 'https://github.com/uralboyevabdumali'
  },
  {
    title: 'Next-Gen Crypto Tracker',
    desc: 'Live cryptocurrency market tracker monitor providing interactive charts, price alert indicators, and historical logs.',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Tailwind CSS', 'CoinGecko API'],
    github: 'https://github.com/uralboyevabdumali',
    demo: 'https://github.com/uralboyevabdumali'
  },
  {
    title: 'SaaS AI Content Generator',
    desc: 'Minimalist web tool UI designed for generating dynamic copy and managing digital assets with sleek dark-mode aesthetic.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Express.js', 'Tailwind CSS', 'OpenAI API'],
    github: 'https://github.com/uralboyevabdumali',
    demo: 'https://github.com/uralboyevabdumali'
  },
  {
    title: 'Developer Portfolio V1',
    desc: 'Apple-inspired glassmorphic personal showcase highlighting interactive elements, smooth scrolling, and dark aesthetics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/uralboyevabdumali',
    demo: 'https://github.com/uralboyevabdumali'
  }
];

const EXPERIENCES = [
  {
    period: '2023 - Present',
    role: 'Frontend Developer',
    company: 'Freelance & Private Clients',
    location: 'Tashkent, Uzbekistan',
    details: [
      'Developed 10+ responsive user interfaces with React and Tailwind CSS.',
      'Refactored legacy UI code bases, improving Core Web Vitals and load performance by up to 30%.',
      'Collaborated directly with product owners to convert Figma blueprints into interactive web experiences.'
    ]
  },
  {
    period: '2023',
    role: 'Junior Web Developer',
    company: 'Tech Learning & Project Labs',
    location: 'Tashkent, Uzbekistan',
    details: [
      'Mastered core web fundamentals, DOM manipulation, asynchronous JavaScript, and Git workflows.',
      'Created modular React UI libraries and reusable components for internal web applications.',
      'Integrated backend REST APIs using Axios and standard Fetch interfaces.'
    ]
  }
];

// --- TYPING EFFECT HOOK ---
function useTypingEffect(words, speed = 100, delay = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  return words[index].substring(0, subIndex);
}

// --- MAIN APPLICATION CONTENT ---
function PortfolioContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const typedRole = useTypingEffect([
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Cyber UI Designer'
  ]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Iltimos, barcha maydonlarni toldiring!', {
        theme: 'dark'
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success('Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beraman.', {
        theme: 'dark'
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      <ToastContainer position="bottom-right" />

      {/* --- BACKGROUND ANIMATED BLOBS & GLOWS --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[130px] animate-pulse delay-700" />
        {/* Subtle grid pattern background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* --- NAVBAR --- */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 p-[2px]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-between px-2 font-bold text-cyan-400 group-hover:bg-transparent group-hover:text-white transition-all">
                AU
              </div>
            </div>
            <span className="font-bold text-xl tracking-wider text-white">
              uralbayev<span className="text-cyan-400">.uz</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/Abdumalik_Uralboyev"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 text-sm font-medium text-slate-200 hover:text-white transition-all"
            >
              <Icons.Telegram className="text-cyan-400" />
              <span>Telegram</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-6 flex flex-col gap-4"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-cyan-400 py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://t.me/Abdumalik_Uralboyev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium"
              >
                <Icons.Telegram />
                <span>Contact via Telegram</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300">Available for Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              Abdumalik <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Uralboyev
              </span>
            </h1>

            <div className="h-12 text-xl sm:text-2xl font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <span>Role:</span>
              <span className="text-cyan-400 underline decoration-cyan-500/40">{typedRole}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              Salom! Men Abdumalik Uralboyev, Frontend Developer. React, JavaScript, Tailwind CSS va zamonaviy web texnologiyalari yordamida tez, responsive va professional web ilovalar yarataman.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-200 text-center w-full sm:w-auto"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 text-center w-full sm:w-auto"
              >
                Contact Me
              </a>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  toast.info('CV downloading placeholder triggered.', { theme: 'dark' });
                }}
                className="px-6 py-3.5 rounded-xl bg-slate-900/50 border border-cyan-500/30 text-cyan-300 font-medium hover:bg-cyan-500/10 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Icons.Download />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Decorative Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="w-full max-w-md p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-500 font-mono">DeveloperProfile.jsx</span>
              </div>
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-green-400">'Abdumalik Uralboyev'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span> <span className="text-green-400">'Frontend Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experience:</span> <span className="text-cyan-400">1.5</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">location:</span> <span className="text-green-400">'Tashkent, Uzbekistan'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">dailyCoding:</span> <span className="text-green-400">'4–6 Hours'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">futureGoal:</span> <span className="text-green-400">'Full Stack Developer'</span>
                </div>
                <div>&#125;;</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md text-center hover:border-cyan-500/50 transition-all"
          >
            <div className="text-4xl mb-4">⏳</div>
            <h3 className="text-3xl font-bold text-white mb-2">1.5 Years</h3>
            <p className="text-slate-400 text-sm">Professional Web Experience</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md text-center hover:border-cyan-500/50 transition-all"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Tashkent</h3>
            <p className="text-slate-400 text-sm">Uzbekistan (GMT+5)</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md text-center hover:border-cyan-500/50 transition-all"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">4–6 Hours</h3>
            <p className="text-slate-400 text-sm">Daily Dedicated Coding</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md text-center hover:border-cyan-500/50 transition-all"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Full Stack</h3>
            <p className="text-slate-400 text-sm">Primary Future Goal</p>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Skills & Stack</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Technologies I use daily to shape modern web products.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-cyan-400">{skill.category}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full"
                  style={{ width: skill.level }}
                />
              </div>
              <div className="text-right text-xs text-slate-400 mt-2 font-mono">{skill.level} Proficiency</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Services Offered</h2>
          <p className="text-slate-400 max-w-xl mx-auto">High-quality frontend engineering customized for web solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl relative group hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{srv.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto">A showcase of personal projects, client UI components, and real-world experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md overflow-hidden flex flex-col group hover:border-slate-700 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-slate-900 text-white hover:bg-cyan-500 hover:text-black transition-colors"
                  >
                    <Icons.Github />
                  </a>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-slate-900 text-white hover:bg-cyan-500 hover:text-black transition-colors"
                  >
                    <Icons.ExternalLink />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2 border-t border-slate-800/60">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 rounded-xl bg-slate-800 text-center text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Icons.Github /> GitHub
                  </a>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 rounded-xl bg-cyan-500/20 text-center text-xs font-semibold text-cyan-300 hover:bg-cyan-500 hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    <Icons.ExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Experience Timeline</h2>
          <p className="text-slate-400">My developer journey and key milestones.</p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-6 md:pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-md shadow-cyan-500" />
              
              <span className="md:absolute md:-left-36 md:top-1 font-mono text-xs font-bold text-cyan-400 mb-2 block md:mb-0">
                {exp.period}
              </span>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all">
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <div className="text-sm text-cyan-400 font-medium mb-4">{exp.company} • {exp.location}</div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {exp.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Have a project or opportunity? Send me a message!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Icons.Email />
              </div>
              <div>
                <div className="text-xs text-slate-400">Email</div>
                <a href="mailto:uralboyevabdumali@gmail.com" className="text-white font-medium hover:text-cyan-400">
                  uralboyevabdumali@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Icons.Phone />
              </div>
              <div>
                <div className="text-xs text-slate-400">Phone</div>
                <a href="tel:+998945271380" className="text-white font-medium hover:text-cyan-400">
                  +998 94 527 13 80
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Icons.Telegram />
              </div>
              <div>
                <div className="text-xs text-slate-400">Telegram</div>
                <a href="https://t.me/Abdumalik_Uralboyev" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-cyan-400">
                  @Abdumalik_Uralboyev
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Icons.Location />
              </div>
              <div>
                <div className="text-xs text-slate-400">Location</div>
                <div className="text-white font-medium">Tashkent, Uzbekistan</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleContactSubmit} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500 p-[2px]">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center font-bold text-xs text-cyan-400">
                AU
              </div>
            </div>
            <span className="font-bold text-white">Abdumalik Uralboyev</span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-cyan-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/uralboyevabdumali"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 transition-all"
            >
              <Icons.Github />
            </a>
            <a
              href="https://t.me/Abdumalik_Uralboyev"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 transition-all"
            >
              <Icons.Telegram />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Abdumalik Uralboyev. All rights reserved. Built with React & Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

// --- MAIN WRAPPER APP COMPONENT ---
export default function App() {
  return (
    <BrowserRouter>
      <PortfolioContent />
    </BrowserRouter>
  );
}