export default function Certifications({ items = [] }) {
  const data = items.length ? items : [
    { name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', year: '2024', id: 'ABC-1234' },
    { name: 'TensorFlow Developer Certificate', org: 'Google', year: '2023', id: 'TF-5678' },
    { name: 'Blockchain Developer Nanodegree', org: 'Udacity', year: '2022', id: 'UD-9012' },
  ]

  return (
    <section id="certifications" className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
        <p className="text-slate-600">Credly/Badge-ready achievements</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((c, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:-translate-y-0.5 transition">
            <div className="font-semibold">{c.name}</div>
            <div className="text-slate-600 text-sm">{c.org}</div>
            <div className="mt-2 text-sm">Year: <span className="font-medium">{c.year}</span></div>
            {c.id && <div className="text-xs text-slate-500 mt-1">Credential ID: {c.id}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
