import React, { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileDown, Sparkles, Star, GitFork, ChevronDown } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function useTyping(words, speed = 100, pause = 1200) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [direction, setDirection] = useState(1) // 1 typing, -1 deleting

  useEffect(() => {
    const word = words[index % words.length]
    let i = 0
    let typing = true

    const interval = setInterval(() => {
      if (typing) {
        setDisplay(word.slice(0, i + 1))
        i++
        if (i === word.length) {
          typing = false
          setTimeout(() => setDirection(-1), pause)
        }
      } else if (direction === -1) {
        setDisplay((prev) => prev.slice(0, -1))
        if (i === 0) {
          setDirection(1)
          setIndex((prev) => (prev + 1) % words.length)
          typing = true
        } else {
          i--
        }
      }
    }, speed)

    return () => clearInterval(interval)
  }, [index, direction])

  return display
}

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative py-24 md:py-28 ${className}`}>
    <div className="container mx-auto px-6 max-w-7xl">{children}</div>
  </section>
)

const GlassCard = ({ className = '', children }) => (
  <div className={`glass rounded-xl border border-white/10 ${className}`}>{children}</div>
)

const Hero = () => {
  const typing = useTyping([
    'Blockchain Developer',
    'AI/ML Engineer',
    'Software Developer'
  ], 90, 1200)

  return (
    <div className="relative min-h-[92vh] neon-gradient overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/50 via-[#0b0f1a]/60 to-[#0b0f1a] pointer-events-none" />

      <header className="relative z-10 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f1a]/40">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/90">
            <Sparkles className="text-neon-blue" />
            <span className="font-semibold">Rayhan</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-white transition-colors">{n.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="/cv.pdf" className="glass px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <FileDown size={16} /> Download CV
            </a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 items-center gap-10">
          <div className="md:col-span-7">
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Hi, I'm Rayhan
            </motion.h1>
            <p className="mt-3 text-lg md:text-xl text-white/80">
              a 3rd semester Informatics Engineering student passionate about Software Development, Blockchain, Web3, and AI/ML.
            </p>
            <p className="mt-2 text-white/70">
              I enjoy building real-world projects including cryptocurrency systems, smart contracts, P2P blockchain architecture, machine learning applications, advanced backend systems, and modern web applications.
            </p>
            <div className="mt-6">
              <span className="text-neon-blue">{typing}</span>
              <span className="animate-pulse">|</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="bg-primary-600 hover:bg-primary-700 px-5 py-2.5 rounded-lg text-sm">View Projects</a>
              <a href="/cv.pdf" className="glass px-5 py-2.5 rounded-lg text-sm flex items-center gap-2"><FileDown size={16}/> Download CV</a>
              <a href="https://github.com/zhao-leihan" target="_blank" className="glass px-4 py-2 rounded-lg text-sm flex items-center gap-2"><Github size={16}/> GitHub</a>
            </div>
          </div>

          <div className="md:col-span-5">
            <GlassCard className="p-6">
              <p className="text-white/80">
                I can speak Indonesian and English fluently, and I love learning new technologies to solve real-world problems.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="https://www.linkedin.com/in/rayhan-aziel-abbrar-71773b34a" target="_blank" className="glass px-3 py-2 rounded-lg text-sm flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a>
                <a href="https://www.instagram.com/rayhannzhao/" target="_blank" className="glass px-3 py-2 rounded-lg text-sm flex items-center gap-2">IG</a>
                <a href="mailto:rayhan@example.com" className="glass px-3 py-2 rounded-lg text-sm flex items-center gap-2"><Mail size={16}/> Email</a>
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <ChevronDown className="animate-bounce text-white/60" />
        </div>
      </div>
    </div>
  )
}

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-10">
    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
    {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
  </div>
)

const Badge = ({ children }) => (
  <span className="px-2.5 py-1 rounded-md text-xs glass border border-white/10">{children}</span>
)

const skills = {
  Languages: ['Go','Rust','Python','Java','C++','JavaScript','TypeScript','Solidity','Kotlin'],
  Blockchain: ['Ethereum','Cosmos SDK','PoW','PoS','Smart Contracts','P2P Networking'],
  'Web Dev': ['React','Next.js','Vite','Tailwind CSS','Flask'],
  'AI/ML': ['TensorFlow','PyTorch','Scikit-learn','Jupyter'],
  Tools: ['Git','Docker','Linux','Hardhat','Foundry']
}

const Skills = () => (
  <Section id="skills">
    <SectionTitle title="Skills" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(skills).map(([k, items]) => (
        <GlassCard key={k} className="p-5">
          <h3 className="font-semibold mb-3">{k}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map(i => <Badge key={i}>{i}</Badge>)}
          </div>
        </GlassCard>
      ))}
    </div>
  </Section>
)

const projects = [
  { title: 'Anime Explorer', repo: 'zhao-leihan/anime-explorerr', desc: 'Interactive anime database search website', tech: ['React','Tailwind','API'] },
  { title: 'Zytherion Blockchain', repo: 'zhao-leihan/Zytherion-Blockchain', desc: 'Hybrid PoW + PoS blockchain with TensorFlow validator', tech: ['Python','TensorFlow','Blockchain'] },
  { title: 'ExploreMate Blockchain', repo: 'zhao-leihan/ExploreMate-Blockchain', desc: 'Tour guide booking platform powered by Ethereum smart contract', tech: ['Solidity','Hardhat','Web3'] },
  { title: 'mini-consensus-true-rng', repo: 'zhao-leihan/mini-consensus-true-rng', desc: 'Rust blockchain backend with true RNG + deterministic consensus', tech: ['Rust','Blockchain'] },
  { title: 'BI-Suite-AI-Platform', repo: 'zhao-leihan/BI-Suite-AI-Platform', desc: 'AI-powered business intelligence platform', tech: ['Python','ML','Web'] },
  { title: 'Zythex Language', repo: 'zhao-leihan/zythex-language-beta-v0.1', desc: 'Custom smart contract language in Go', tech: ['Go','Compiler'] },
  { title: 'Zytherion', repo: 'zhao-leihan/Zytherion', desc: 'Cryptocurrency development', tech: ['Python','Crypto'] },
  { title: 'E-voting with Zytherion', repo: 'zhao-leihan/E-voting-with-Zytherion-v0.12', desc: 'Blockchain-based secure e-voting system', tech: ['Rust','PoW','P2P'] },
]

const ProjectCard = ({ p }) => {
  const [stats, setStats] = useState({ stars: 0, forks: 0 })
  useEffect(() => {
    const [owner, repo] = p.repo.split('/')
    fetch(`${backend}/github/stats`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ owner, repo }) })
      .then(r => r.json()).then(setStats).catch(()=>{})
  }, [p.repo])
  return (
    <GlassCard className="p-5 hover:translate-y-[-2px] transition-transform">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <p className="text-white/70 text-sm mt-1">{p.desc}</p>
        </div>
        <a href={`https://github.com/${p.repo}`} target="_blank" className="text-white/70 hover:text-white"><Github size={18}/></a>
      </div>
      <div className="mt-3 flex items-center gap-3 text-white/70 text-sm">
        <span className="flex items-center gap-1"><Star size={16}/> {stats.stars}</span>
        <span className="flex items-center gap-1"><GitFork size={16}/> {stats.forks}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map(t => <Badge key={t}>{t}</Badge>)}
      </div>
    </GlassCard>
  )
}

const Projects = () => (
  <Section id="projects">
    <SectionTitle title="Projects" subtitle="Highlighted builds with live GitHub stats" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map(p => <ProjectCard key={p.repo} p={p} />)}
    </div>
  </Section>
)

const About = () => (
  <Section id="about">
    <SectionTitle title="About Me" />
    <GlassCard className="p-6">
      <p className="text-white/80">
        Hi, I'm Rayhan — a 3rd semester Informatics Engineering student passionate about Software Development, Blockchain, Web3, and AI/ML. I enjoy building real-world projects including cryptocurrency systems, smart contracts, P2P blockchain architecture, machine learning applications, advanced backend systems, and modern web applications.
      </p>
    </GlassCard>
  </Section>
)

const Experience = () => (
  <Section id="experience">
    <SectionTitle title="Experience" subtitle="Selected work and learning milestones" />
    <div className="grid md:grid-cols-2 gap-4">
      <GlassCard className="p-5"><h3 className="font-semibold">Open-source Contributions</h3><p className="text-white/70 text-sm mt-2">Active across blockchain and ML repos.</p></GlassCard>
      <GlassCard className="p-5"><h3 className="font-semibold">Academic Projects</h3><p className="text-white/70 text-sm mt-2">Built systems in Rust, Python, and Go.</p></GlassCard>
    </div>
  </Section>
)

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${backend}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source: 'portfolio' }) })
      if (res.ok) setSent(true)
    } catch {}
    setLoading(false)
  }

  return (
    <Section id="contact">
      <SectionTitle title="Contact" subtitle="Let's build something together" />
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <form onSubmit={submit} className="grid gap-3">
            <input required placeholder="Name" className="glass px-4 py-3 rounded-lg bg-white/5" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
            <input required type="email" placeholder="Email" className="glass px-4 py-3 rounded-lg bg-white/5" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
            <textarea required placeholder="Message" rows="5" className="glass px-4 py-3 rounded-lg bg-white/5" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} />
            <button disabled={loading} className="bg-primary-600 hover:bg-primary-700 px-5 py-2.5 rounded-lg text-sm disabled:opacity-60">{loading ? 'Sending...' : 'Send Message'}</button>
            {sent && <p className="text-emerald-400 text-sm">Thanks! I will get back to you soon.</p>}
          </form>
        </GlassCard>
        <div className="grid gap-3 h-fit">
          <a href="https://www.linkedin.com/in/rayhan-aziel-abbrar-71773b34a" target="_blank" className="glass p-4 rounded-lg flex items-center gap-3"><Linkedin/> LinkedIn</a>
          <a href="https://github.com/zhao-leihan" target="_blank" className="glass p-4 rounded-lg flex items-center gap-3"><Github/> GitHub</a>
          <a href="https://www.instagram.com/rayhannzhao/" target="_blank" className="glass p-4 rounded-lg flex items-center gap-3">Instagram</a>
        </div>
      </div>
    </Section>
  )
}

const Footer = () => (
  <footer className="py-12 text-center text-white/60">
    <div className="container mx-auto px-6">
      <p>© {new Date().getFullYear()} Rayhan. Built with love • Auto dark/light toggle supported.</p>
    </div>
  </footer>
)

export default function App() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
