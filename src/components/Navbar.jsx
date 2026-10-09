import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-slate-900">
          My<span className="text-blue-600">Portfolio</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  i === 0
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'hover:text-blue-600 transition-colors'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-800 text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-slate-700 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
