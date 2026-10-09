const rows = [
  { course: 'MCA', school: 'AKTU', year: '2026' },
  { course: 'B.Sc. Mathematics', school: 'Prof. Rajendra Singh University', year: '2024' },
]

export default function Education() {
  return (
    <section id="education" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Education</h2>
          <div className="w-14 h-1 bg-blue-600 mt-3 mb-8" />

          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-600 text-sm">
                <tr>
                  <th className="px-4 py-3 font-medium">Course</th>
                  <th className="px-4 py-3 font-medium">College / School</th>
                  <th className="px-4 py-3 font-medium">Year</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {rows.map((row) => (
                  <tr key={row.course} className="border-t border-slate-200">
                    <td className="px-4 py-3">{row.course}</td>
                    <td className="px-4 py-3">{row.school}</td>
                    <td className="px-4 py-3">{row.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Simple CSS illustration standing in for the "books & desk" image */}
        <div className="bg-slate-100 rounded-2xl h-72 flex items-end justify-center gap-6 p-8">
          <div className="w-24 h-16 bg-blue-500 rounded-sm shadow-md -rotate-2" />
          <div className="w-24 h-16 bg-orange-400 rounded-sm shadow-md rotate-2 -mt-2" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-12 bg-green-600 rounded-t-full" />
            <div className="w-12 h-10 bg-white border-2 border-slate-300 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
