import { useEffect, useState } from 'react'

export default function GitHubStats({ username }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true)
        setError(null)
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const r = await fetch(`${base}/github/stats?username=${encodeURIComponent(username)}`)
        if (!r.ok) throw new Error(`Failed to load stats: ${r.status}`)
        const j = await r.json()
        setData(j)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    if (username) run()
  }, [username])

  if (loading) {
    return (
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">GitHub Stats</h2>
        <div className="h-24 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse" />
      </section>
    )
  }
  if (error) {
    return (
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">GitHub Stats</h2>
        <p className="text-red-600">{error}</p>
      </section>
    )
  }

  const { repoCount, totalStars, totalForks, mostStarred, topRepos, topLanguages } = data || {}
  const langEntries = Object.entries(topLanguages || {})
    .sort((a,b) => b[1]-a[1])
    .slice(0,6)

  return (
    <section id="github" className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">GitHub Stats</h2>
        <p className="text-slate-600">Aggregated from public repositories for @{username}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <StatCard label="Repositories" value={repoCount} />
        <StatCard label="Total Stars" value={totalStars} />
        <StatCard label="Total Forks" value={totalForks} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="p-5 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur">
          <h3 className="font-semibold mb-3">Top Languages</h3>
          <div className="flex flex-wrap gap-2">
            {langEntries.map(([lang, count]) => (
              <span key={lang} className="px-3 py-1 rounded-full bg-slate-100 text-sm">
                {lang} · {count}
              </span>
            ))}
            {langEntries.length === 0 && <p className="text-slate-500">No language data</p>}
          </div>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur">
          <h3 className="font-semibold mb-3">Top Repositories</h3>
          <ul className="space-y-3">
            {topRepos?.map((r) => (
              <li key={r.name} className="flex items-center justify-between">
                <a href={r.html_url} target="_blank" rel="noreferrer" className="font-medium hover:underline">{r.name}</a>
                <div className="text-sm text-slate-600">⭐ {r.stars} · 🍴 {r.forks}</div>
              </li>
            ))}
            {(!topRepos || topRepos.length === 0) && (
              <li className="text-slate-500">No repositories found.</li>
            )}
          </ul>
          {mostStarred && (
            <div className="mt-4 text-sm text-slate-600">Most starred: <a className="underline" href={mostStarred.html_url} target="_blank" rel="noreferrer">{mostStarred.name}</a> ({mostStarred.stars}★)</div>
          )}
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6">
      <div className="text-slate-600 text-sm">{label}</div>
      <div className="text-3xl font-bold mt-1">{value ?? '—'}</div>
    </div>
  )
}
