import { useState } from 'react'
import GitHubStats from './components/GitHubStats'
import Achievements from './components/Achievements'
import ExperienceTimeline from './components/ExperienceTimeline'
import Certifications from './components/Certifications'

function App() {
  const [username, setUsername] = useState('rayhan')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-bold tracking-tight text-lg">Rayhan · Portfolio</div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-600">
            <a href="#github" className="hover:text-slate-900">GitHub</a>
            <a href="#achievements" className="hover:text-slate-900">Achievements</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#certifications" className="hover:text-slate-900">Certifications</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 flex flex-col md:flex-row md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Modern Portfolio Add-ons</h1>
            <p className="text-slate-600">GitHub Stats widget, Achievements, Experience Timeline, and Certifications</p>
          </div>
          <div className="md:ml-auto flex items-center gap-2">
            <label className="text-sm text-slate-600">GitHub Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="your-github"
              className="px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
      </section>

      <GitHubStats username={username} />
      <Achievements />
      <ExperienceTimeline />
      <Certifications />

      <footer className="mt-12 border-t border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Rayhan</div>
          <div className="space-x-4">
            <a href="/test" className="hover:text-slate-900">System Test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
