# Arnav Srivastava — Portfolio (React + Tailwind + Vite)

## Setup

1. Install dependencies:
   npm install

2. Add your photo:
   Put a photo named `profile.jpg` inside the `public/` folder.
   (If it's missing, the hero section shows an "AS" placeholder automatically.)

3. Run locally:
   npm run dev
   Open http://localhost:5173

4. Build for production:
   npm run build
   The output goes to the `dist/` folder — deploy that to Vercel, Netlify, or any static host.

## Structure

- src/App.jsx — page layout, imports all sections
- src/components/Navbar.jsx — sticky nav with mobile menu
- src/components/Hero.jsx — intro + photo
- src/components/About.jsx — bio + skills list
- src/components/Services.jsx — 3 service cards
- src/components/Education.jsx — education table
- src/components/Contact.jsx — contact info + form
- src/components/Footer.jsx — footer bar

## Notes

- The contact form currently just shows an alert on submit. To receive real
  messages, connect it to a service like Formspree or EmailJS (a few lines
  inside `handleSubmit` in Contact.jsx).
- Social links for LinkedIn and GitHub are already filled in with your
  profile URLs — update Facebook, Twitter and Instagram links in Contact.jsx.
