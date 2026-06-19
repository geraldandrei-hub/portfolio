// ─────────────────────────────────────────────────────────────────────────
// All placeholder content lives here. To make the site "real", edit this file
// (and the few strings in the page hero/intro sections) — nothing else.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Gerald Villa',
  role: 'Computer Science Student',
  location: 'Philippines',
  timezone: 'UTC+8',
  email: 'geraldandreiv@gmail.com', // ← change if you want a different contact email
  availability: 'Open to internships & collaboration — 2026',
};

export const nav = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'work', label: 'Work', href: '/work' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

export const projects = [
  {
    no: '01',
    name: 'Brute-Force Login Simulation',
    desc: 'Discrete-event simulation (SimPy) of a brute-force attack on a login system, with a Streamlit explorer for testing lockout policies and the trade-off between security and keeping real users logged in.',
    tags: 'Python · SimPy · Streamlit',
    year: '2026',
    shot: 'PYTHON',
    href: 'https://github.com/geraldandrei-hub/Brute-Force-Simulation',
    tint: 'linear-gradient(135deg, #1e2a4a 0%, #3954c9 100%)',
  },
  {
    no: '02',
    name: 'URL Analysis',
    desc: 'Machine-learning web app that groups URLs by structure and flags anomalies using hierarchical clustering and Isolation Forest — aimed at spotting suspicious links.',
    tags: 'Python · ML · Flask',
    year: '2026',
    shot: 'ML',
    href: 'https://github.com/geraldandrei-hub/URL-Analysis',
    tint: 'linear-gradient(135deg, #2c2150 0%, #6d4bd6 100%)',
  },
  {
    no: '03',
    name: 'FarmDashr',
    desc: 'Cross-platform farm management dashboard built with Flutter — the app behind my login-security simulations.',
    tags: 'Dart · Flutter',
    year: '2025',
    shot: 'FLUTTER',
    href: 'https://github.com/geraldandrei-hub/FarmDashr',
    tint: 'linear-gradient(135deg, #123b3a 0%, #2f9e8f 100%)',
  },
  {
    no: '04',
    name: 'JJ Clover SMS Dispatch',
    desc: 'Android-first Flutter app for SMS-based water-delivery booking and dispatch — it parses customer SMS commands, validates delivery zones, and tracks orders with encrypted storage.',
    tags: 'Dart · Flutter · Android',
    year: '2025',
    shot: 'FLUTTER',
    href: 'https://github.com/geraldandrei-hub/JJ-Clover-SMS-Booking---Dispatch-System',
    tint: 'linear-gradient(135deg, #10314e 0%, #2f86c5 100%)',
  },
];

// Framed as education + self-learning, which is right for a student portfolio.
// Replace [Your University] with your school's name.
export const experience = [
  { role: 'BS Computer Science — Cybersecurity Track', company: 'UM Tagum College', years: '2023 — Present' },
  { role: 'Self-directed learning', company: 'Flutter · Python · Machine Learning', years: 'Ongoing' },
];

export const socials = [
  { label: 'GH', handle: 'github.com/geraldandrei-hub', href: 'https://github.com/geraldandrei-hub' },
  // Add when ready, e.g.:
  // { label: 'IN', handle: 'linkedin.com/in/your-handle', href: 'https://linkedin.com/in/your-handle' },
];
