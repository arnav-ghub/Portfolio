import { FaCode, FaDesktop, FaCog } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode />,
    iconBg: 'bg-blue-100 text-blue-600',
    title: 'Website Development',
    desc: 'I build responsive websites and web apps using React, Node.js and modern tooling.',
  },
  {
    icon: <FaDesktop />,
    iconBg: 'bg-purple-100 text-purple-600',
    title: 'Landing Pages',
    desc: 'I design and build clean, conversion-focused landing page layouts.',
  },
  {
    icon: <FaCog />,
    iconBg: 'bg-green-100 text-green-600',
    title: 'Website Maintenance',
    desc: 'I update, fix and maintain website content, pages and features.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900">
          My <span className="text-blue-600">Services</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6 ${service.iconBg}`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
