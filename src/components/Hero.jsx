export default function Hero() {
  return (
    <section id="home" className="bg-brand-light">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg text-slate-700">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
            Arnav <span className="text-blue-600">Srivastava</span>
          </h1>
          <p className="text-xl text-slate-700 mt-3">A Full Stack Web Developer</p>
          <p className="text-slate-500 mt-4 max-w-md leading-relaxed">
            I am passionate about building simple, clean and responsive
            websites and applications using modern tools like React,
            Node.js and Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-md transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-white overflow-hidden shadow-xl flex items-center justify-center">
            {/* Replace /profile.jpg in the public folder with your own photo */}
            <img
              src="/profile.jpg"
              alt="Arnav Srivastava"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div
              className="w-full h-full hidden items-center justify-center bg-blue-100 text-blue-600 text-6xl font-bold"
              style={{ display: 'none' }}
            >
              AS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
