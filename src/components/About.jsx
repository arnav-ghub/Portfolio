import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-sky-500" /> },
]

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-14 h-1 bg-blue-600 mt-3 mb-6" />
          <p className="text-slate-500 leading-relaxed max-w-md">
            I am a full stack web developer who enjoys turning ideas into
            working products. I like building clean, user-friendly
            interfaces and pairing them with reliable backends, and I am
            always looking for new technologies to learn.
          </p>

          <div className="flex flex-wrap gap-8 mt-8 text-slate-700">
            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-blue-600" />
              <span>MCA Graduate (2026)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Based in Lucknow, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <span>Open to Opportunities</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">My Skills</h3>
          <ul className="mt-6 space-y-5">
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-4 text-lg text-slate-700">
                <span className="text-2xl">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
