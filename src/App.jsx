import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-300 antialiased font-sans selection:bg-purple-600 selection:text-white relative overflow-x-hidden bg-[#020007]">
      
      {/* Super Premium Vizual Kosmik Effektlar */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .space-stars {
          background-image: 
            radial-gradient(1px 1px at 25px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 70px 120px, rgba(255,255,255,0.9), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 150px 200px, rgba(168, 85, 247, 0.45), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 280px 90px, #fff, rgba(0,0,0,0)),
            radial-gradient(2.5px 2.5px at 350px 350px, rgba(59, 130, 246, 0.35), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 500px 180px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 600px 600px;
        }
        .text-glow-purple {
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
        }
        .text-glow-blue {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
      `}</style>

      {/* Orqa fondagi kiber neon bulutlar */}
      <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none mix-blend-screen animate-[pulse-glow_8s_infinite]" />
      <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none mix-blend-screen animate-[pulse-glow_10s_infinite]" />

      <div className="space-stars min-h-screen w-full">
        
        {/* HEADER */}
        <header className="sticky top-0 z-50 w-full bg-[#020007]/70 backdrop-blur-md border-b border-purple-950/20 px-6 lg:px-16 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:rotate-6 transition-transform">
              AU
            </div>
            <div>
              <h1 className="font-bold text-base text-white tracking-wide">Abdumalik Uralboyev</h1>
              <span className="text-[9px] font-black text-purple-400 uppercase tracking-widest block">FRONTEND DEV</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>

          <div>
            <a href="#contact" className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs transition-all shadow-[0_0_15px_rgba(255,255,255,0.03)]">
              Contact ✦
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 lg:px-16 pt-24 pb-16 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span> Premium Developer Profile
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            Crafting Next-Gen <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-glow-purple">Web Experiences</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Noodatiy animatsiyalar, to'q kiber mavzular va mukammal arxitekturaga ega bo'lgan zamonaviy veb-ilovalarni yarataman.
          </p>
          <div className="pt-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-bold text-white text-xs shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all">
              Loyihalarni Ko'rish →
            </a>
          </div>
        </section>

        {/* RASM 2: ABOUT ME SECTION (WHO AM I?) */}
        <section id="about" className="max-w-6xl mx-auto px-6 lg:px-16 py-20 relative z-10">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-[10px] uppercase font-bold tracking-widest">
              ABOUT ME
            </span>
            <h3 className="text-4xl font-black text-white tracking-tight mt-3">
              Who Am <span className="text-blue-500 text-glow-blue">I?</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Chap tomon: Matnli ma'lumotlar */}
            <div className="md:col-span-6 space-y-6 text-gray-400 text-sm leading-relaxed">
              <p>
                I'm <span className="text-white font-bold">Abdumalik Uralboyev</span>, a 15-year-old Frontend Developer from Uzbekistan. With over <span className="text-purple-400 font-bold text-glow-purple">1 year of hands-on experience</span>, I build everything from pixel-perfect UIs to high-performance responsive web applications.
              </p>
              <p>
                My journey spans learning modern frontend practices, building clean UI layouts, and shipping products that feature smooth animations and advanced CSS styles. I'm deeply passionate about web interface design, clean architecture, and product aesthetics.
              </p>
              <p>
                When I'm not shipping code, I'm studying the latest in user experience designs, contributing to frontend learning communities, and pushing boundaries with modern web tech.
              </p>

              {/* Kichik info kartochkalar (Aynan rasmdagi ko'rinishda) */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#070314]/40 border border-white/5 rounded-xl p-3">
                  <span className="text-[10px] text-gray-500 block uppercase font-bold">EMAIL</span>
                  <span className="text-xs text-white font-mono break-all">uralboyevabdumali@gmail.com</span>
                </div>
                <div className="bg-[#070314]/40 border border-white/5 rounded-xl p-3">
                  <span className="text-[10px] text-gray-500 block uppercase font-bold">PHONE</span>
                  <span className="text-xs text-white font-mono">+998 93 605 13 80</span>
                </div>
                <div className="bg-[#070314]/40 border border-white/5 rounded-xl p-3">
                  <span className="text-[10px] text-gray-500 block uppercase font-bold">LOCATION</span>
                  <span className="text-xs text-white">Uzbekistan uz</span>
                </div>
                <div className="bg-[#070314]/40 border border-white/5 rounded-xl p-3">
                  <span className="text-[10px] text-gray-500 block uppercase font-bold">AGE</span>
                  <span className="text-xs text-white">15 years old</span>
                </div>
              </div>
            </div>

            {/* O'ng tomon: Kasbiy yo'nalishlar kartalari (Aynan rasmdagi kabi) */}
            <div className="md:col-span-6 space-y-3">
              {[
                { title: 'Frontend Dev', desc: 'Pixel-perfect apps — HTML5, CSS3, JavaScript, Tailwind CSS', icon: '🚀' },
                { title: 'UI/UX Engineering', desc: 'Modern animations, sleek interfaces, component building', icon: '🤖' },
                { title: 'Responsive Builder', desc: 'Fast execution, fully optimized interfaces for all device scales', icon: '⚡' },
                { title: 'System Design', desc: 'Scalable structures, clean code formatting, performance-first layouts', icon: '🏗️' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#09051c]/50 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:border-purple-500/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#140e32] flex items-center justify-center text-lg shadow-[inset_0_0_10px_rgba(168,85,247,0.2)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RASM 3: MY SKILLS SECTION (TECH STACK) */}
        <section id="skills" className="max-w-6xl mx-auto px-6 lg:px-16 py-20 relative z-10 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-[10px] uppercase font-bold tracking-widest">
              TECH STACK
            </span>
            <h3 className="text-4xl font-black text-white tracking-tight mt-3">
              My <span className="text-purple-500 text-glow-purple">Skills</span>
            </h3>
            <p className="text-gray-500 text-xs mt-2 font-mono">Technologies I craft production-grade products with</p>
          </div>

          <div className="space-y-8">
            {/* FRONTEND SATRI */}
            <div className="relative border-t border-purple-500/10 pt-4">
              <span className="absolute -top-2.5 left-4 bg-[#020007] px-2 text-[9px] font-black uppercase tracking-widest text-purple-400">FRONTEND</span>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {['HTML5 / CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive Layouts', 'DOM Manipulation'].map((tech, i) => (
                  <span key={i} className="px-3.5 py-2 bg-[#09051c]/60 border border-white/5 rounded-full text-xs font-medium font-mono text-gray-300 flex items-center gap-2 hover:border-purple-500/30 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DEV TOOLS & REPOSITORIES */}
            <div className="relative border-t border-blue-500/10 pt-4">
              <span className="absolute -top-2.5 left-4 bg-[#020007] px-2 text-[9px] font-black uppercase tracking-widest text-blue-400">DEVOPS & TOOLS</span>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {['Git / GitHub', 'VS Code IDE', 'Vite Bundler', 'NPM Package Management'].map((tech, i) => (
                  <span key={i} className="px-3.5 py-2 bg-[#09051c]/60 border border-white/5 rounded-full text-xs font-medium font-mono text-gray-300 flex items-center gap-2 hover:border-blue-500/30 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS POLIGONI */}
        <section id="projects" className="max-w-6xl mx-auto px-6 lg:px-16 py-20 relative z-10 border-t border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white tracking-tight">Featured Projects</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Team-project', desc: 'Jamoaviy front-end tizimi. Git oqimlari va mukammal taqsimlangan tuzilma.', tags: ['HTML5', 'CSS3'] },
              { title: 'todoList App', desc: 'Dinamik va yuqori tezlikda ishlovchi operatsiyalar boshqaruvi tizimi.', tags: ['JavaScript', 'Tailwind'] },
              { title: 'alone', desc: 'Mustaqil premium UI tajribalari va noodatiy kiber dizaynlar poligoni.', tags: ['HTML5', 'Tailwind'] }
            ].map((proj, i) => (
              <div key={i} className="bg-[#08041d]/50 border border-white/5 rounded-2xl p-5 hover:border-purple-500/30 transition-all flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{proj.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white/5 rounded text-[10px] font-mono text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RASM 1: CALL TO ACTION BOX (Ready to build something amazing?) */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-10 relative z-10">
          <div className="bg-gradient-to-b from-[#110a30]/80 to-[#060314]/90 border border-purple-500/10 rounded-3xl p-10 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-purple-600/10 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="text-4xl mb-4 animate-bounce">👋</div>
            <h3 className="text-3xl font-black text-white tracking-tight">
              Ready to build something <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-glow-purple">amazing?</span>
            </h3>
            <p className="text-gray-400 text-xs max-w-md mx-auto mt-3 leading-relaxed">
              Whether you're a startup, a company, or an investor — let's talk about how I can help you ship faster and smarter.
            </p>
            
            <div className="mt-6">
              <a href="mailto:uralboyevabdumali@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold text-white text-xs shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all transform hover:scale-[1.02]">
                ✉️ Send me an email
              </a>
            </div>
          </div>
        </section>

        {/* RASM 0: FULL PREMIUM CYBER FOOTER */}
        <footer className="w-full bg-[#03000a]/95 border-t border-purple-950/20 relative z-10 pt-20 pb-12 mt-16 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
            
            {/* BRENDING */}
            <div className="md:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(168,85,247,0.45)]">
                  AU
                </div>
                <div>
                  <h5 className="font-bold text-base text-white tracking-wide">Abdumalik Uralboyev</h5>
                  <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest block">FRONTEND DEVELOPER</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Building exceptional digital products with HTML5, CSS3, JavaScript and Tailwind CSS. Available for exciting projects worldwide.
              </p>
              {/* Ijtimoiy Tugmalar */}
              <div className="flex flex-wrap gap-2">
                {['GitHub', 'LinkedIn', 'Telegram', 'Twitter / X'].map((s, idx) => (
                  <a key={idx} href="#" className="px-3.5 py-1.5 text-xs font-semibold text-gray-400 bg-[#0c0724] border border-white/5 rounded-xl hover:text-white hover:border-purple-500/30 transition-all">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="md:col-span-2 md:col-start-6 space-y-4">
              <h5 className="text-xs font-black tracking-widest text-white uppercase font-mono">NAVIGATION</h5>
              <ul className="space-y-2.5 text-xs text-gray-500">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Companies</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* STACK */}
            <div className="md:col-span-2 space-y-4">
              <h5 className="text-xs font-black tracking-widest text-white uppercase font-mono">STACK</h5>
              <ul className="space-y-2.5 text-xs text-gray-500 font-mono">
                <li>HTML5 / CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS</li>
                <li>Responsive Web</li>
                <li>Git Matrix</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="text-xs font-black tracking-widest text-white uppercase font-mono">CONTACT</h5>
              <div className="space-y-2 text-xs text-gray-400 font-mono">
                <p className="break-all">uralboyevabdumali@gmail.com</p>
                <p>+998 93 605 13 80</p>
              </div>
              <div className="pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Available for hire
                </div>
              </div>
            </div>
          </div>

          {/* PASTI */}
          <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-black border border-white/10 flex items-center justify-center font-bold text-white text-[9px] font-mono">A</div>
              <p>© 2026 Abdumalik Uralboyev. Crafted with ❤️ & ☕</p>
            </div>
            <div className="font-medium text-gray-400 font-mono">
              Built with <span className="text-purple-400">HTML5</span> + <span className="text-blue-400">JavaScript</span> + <span className="text-orange-400">Tailwind v4</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}