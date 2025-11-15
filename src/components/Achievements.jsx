export default function Achievements({ items = [] }) {
  const presets = items.length ? items : [
    { title: 'Open-source Contributions', desc: '50+ PRs merged across 10+ repos', icon: '🌟' },
    { title: 'Hackathon Winner', desc: '1st place in Web3 Build Sprint 2024', icon: '🏆' },
    { title: 'Publications', desc: '2 AI papers presented at local meetups', icon: '📄' },
  ]
  return (
    <section id="achievements" className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
        <p className="text-slate-600">Milestones and recognitions</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {presets.map((a, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:-translate-y-0.5 transition">
            <div className="text-3xl mb-3">{a.icon}</div>
            <div className="font-semibold">{a.title}</div>
            <p className="text-slate-600 text-sm mt-1">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
