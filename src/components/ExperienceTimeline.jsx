export default function ExperienceTimeline({ items = [] }) {
  const data = items.length ? items : [
    { period: '2024 — Present', role: 'Blockchain Developer', org: 'Freelance', bullets: ['Solidity smart contracts', 'DeFi protocol integrations', 'Audits & security reviews'] },
    { period: '2023 — 2024', role: 'AI/ML Engineer', org: 'Startup X', bullets: ['LLM fine-tuning', 'Computer vision pipelines', 'MLOps on cloud'] },
    { period: '2021 — 2023', role: 'Software Engineer', org: 'Company Y', bullets: ['Full-stack web apps', 'Microservices', 'CI/CD & testing'] },
  ]

  return (
    <section id="experience" className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Experience Timeline</h2>
        <p className="text-slate-600">Journey and roles</p>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 to-slate-300" />
        <ul className="space-y-6">
          {data.map((item, idx) => (
            <li key={idx} className="relative">
              <div className="absolute -left-1 top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,.15)]" />
              <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-5">
                <div className="text-xs uppercase tracking-wide text-blue-600 font-semibold">{item.period}</div>
                <div className="mt-1 text-lg font-semibold">{item.role} · <span className="text-slate-600 font-normal">{item.org}</span></div>
                <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1 text-sm">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
