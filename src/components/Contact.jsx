import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'

const socials = [
  { icon: <FaFacebookF />, href: '#', bg: 'bg-blue-600' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/arnav-srivastava224', bg: 'bg-sky-700' },
  { icon: <FaGithub />, href: 'https://github.com/arnav-ghub', bg: 'bg-slate-800' },
  { icon: <FaTwitter />, href: '#', bg: 'bg-sky-400' },
  { icon: <FaInstagram />, href: '#', bg: 'bg-pink-500' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to an email service (e.g. EmailJS, Formspree) or your own API
    console.log('Form submitted:', form)
    alert('Thanks for reaching out! This form is a UI demo — connect it to Formspree/EmailJS to receive real messages.')
  }

  return (
    <section id="contact" className="bg-brand-light">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-14 h-1 bg-blue-600 mt-3 mb-8" />

          <ul className="space-y-4 text-slate-700">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              Lucknow, Uttar Pradesh, India
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              arnavsrivastava224@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              +91 88408 96375
            </li>
          </ul>

          <div className="flex gap-3 mt-8">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${s.bg} hover:opacity-90 transition-opacity`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-600">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={4}
              className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
