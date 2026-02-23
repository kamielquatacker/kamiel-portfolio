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
        description: "Built a web application for real-time vehicle valuations, embedded on Autogids.be and Moniteur Automobile websites. Developed multi-step forms with API integrations for vehicle data and pricing calculations.<br>Implemented security measures including rate limiting, bot protection, and IP-based access control to prevent abuse. Added analytics tracking to measure user behavior, API performance, and identify where users drop off in the process.<br> separate databases, reverse proxy setup, and SSL certificates."
      },
      {
        title: "Graduate Associate (SEED Programme)",
        period: "Jul 2023 - Jun 2025",
        description: "Built a Python and SQL automation tool to migrate and configure over 1,000 configuration variants..."
      }
    ]
  },
];