export interface Position {
  title: string;
  period: string;  // "Jul 2025 - Present"
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  logo: string;
  url?: string;
  location?: string;
  positions: Position[];
}

export const experiences: Experience[] = [
  {
    id: "qpq",
    company: "Quid Pro Quo",
    logo: "/logos/qpq.png",
    url: "https://new.restwaardebox.com/",
    positions: [
      {
        title: "Full Stack Developer",
        period: "Oct 2025 - Jan 2026",
        description: "Built a web application for real-time vehicle valuations, embedded on <a class=\"text-link\" href=\"https://www.autogids.be\" target=\"_blank\" rel=\"noreferrer\">autogids.be</a> and <a class=\"text-link\" href=\"https://www.moniteurautomobile.be\" target=\"_blank\" rel=\"noreferrer\">moniteurautomobile.be</a>. Developed multi-step forms with API integrations for vehicle data and pricing calculations.<br>Implemented security measures including rate limiting, bot protection, and IP-based access control to prevent abuse. Added analytics tracking to measure user behavior, API performance, and identify where users drop off in the process.<br> separate databases, reverse proxy setup, and SSL certificates."
      },
      {
        title: "Job Student (Backend Developer)",
        period: "Aug 2024",
        description: "Built a Python API so clients could securely access recurring data with login credentials, replacing a manual CSV download flow."
      }
    ]
  },
];