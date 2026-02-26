export interface Project {
  slug: string;  // of slug - voor de URL bijv. "tesla-dashboard"
  title: string;
  description: string;
  images?: string[];  // Array ipv string! Eerste is thumbnail
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  // Extra velden voor detail pagina:
  longDescription?: string | string[];  // Uitgebreide beschrijving
  date?: string;  // Wanneer gemaakt
}

export const projects: Project[] = [
  {
    slug: "valuecheck",
    title: "ValueCheck",
    description: "A web application that provides real-time vehicle valuations, embedded on autogids.be and moniteurautomobile.be.",
    images: ["/projects/valuecheck/main.png", "/projects/valuecheck/detail1.png", "/projects/valuecheck/detail2.png", "/projects/valuecheck/detail3.png"],
    technologies: ["Next.js", "TypeScript", "tailwindcss", "docker", "portainer", "apache", "mysql", "prisma"],
    featured: true,
    liveUrl: "https://www.autogids.be/hoeveel-is-mijn-auto-waard.html",
    date: "2026-01-04",
    longDescription: "A full-stack web application that enables users to get instant market valuations for their vehicles. The platform guides users through a multi-step process where they select their vehicle brand, model, fuel type, and specifications, then receive real-time pricing data including retail value, trade-in value, and current mileage.<br>Built with Next.js and TypeScript, the application integrates with the ResidualValueBox API to fetch accurate vehicle data and pricing information. It supports three languages (Dutch, French, English) and is embedded via iframe on Autogids.be and Moniteur Automobile websites.<br>Security features include Cloudflare Turnstile bot protection, IP-based rate limiting (10 requests per 24 hours), and a comprehensive blacklist/whitelist system. An analytics system tracks user journey timing, API performance metrics, and conversion funnel drop-off points to provide business intelligence.<br>The infrastructure uses Docker for containerization with separate development and production environments, both managed through Portainer. Deployment is automated via Bitbucket Pipelines with builds triggered on git pushes. The application runs behind an Apache reverse proxy with SSL certificates and uses MySQL for data persistence, including request logging and automated log archiving via cron jobs."
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "The website you're on right now!",
    images: ["/projects/portfolio/main.png", "/projects/portfolio/detail1.png", "/projects/portfolio/detail2.png"],
    technologies: ["Next.js", "TypeScript", "CSS", "Vercel"],
    liveUrl: "https://kamielquatacker.dev",
    githubUrl: "https://github.com/kamielquatacker/kamiel-portfolio",
    featured: true,
    longDescription: "This project is my personal portfolio website, built to showcase my skills, experience, and projects. I chose Next.js for its powerful features like server-side rendering and static site generation, which help improve performance and SEO.",
    date: "2026-02-24"
  },
  {
    slug: "vinyl-streamer",
    title: "Vinyl Streamer",
    description: "A Python app that streams USB vinyl audio to AirPlay speakers with device discovery and volume control.",
    images: ["/projects/vinyl-streamer/main.JPG", "/projects/vinyl-streamer/detail1.png", "/projects/vinyl-streamer/detail2.png"],
    technologies: ["Python", "FastAPI", "Airplay", "Raspberry Pi", "RAOP"],
    githubUrl: "https://github.com/kamielquatacker/Vinyl-Streamer",
    featured: false,
    longDescription: "A FastAPI service running on a Raspberry Pi that captures analog audio from a vinyl turntable through a cheap USB capture card and streams it in real time to AirPlay/RAOP speakers (e.g. Bose SoundTouch) using PipeWire/PulseAudio. It exposes a minimal web UI for selecting audio input/output devices, adjusting latency, and controlling volume, while persisting stream state across restarts.",
    date: "2026-05-15"
  }
];