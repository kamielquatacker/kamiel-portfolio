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
  longDescription?: string;  // Uitgebreide beschrijving
  date?: string;  // Wanneer gemaakt
}

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Cool Project",
    description: "Short desc for card",
    images: ["/projects/project-1/main.jpg", "/projects/project-1/detail1.jpg", "/projects/project-1/detail2.jpg"],
    technologies: ["React", "TypeScript"],
    featured: true,
    liveUrl: "https://youtube.com",
    githubUrl: "https://github.com/example/project-1",
    date: "2026-01-01",
    longDescription: "Dit is een uitgebreidere beschrijving van het project. Hier kan ik dieper ingaan op de uitdagingen, oplossingen, gebruikte technologieën en het resultaat van het project. Ik kan ook vertellen over mijn rol in het project, wat ik heb geleerd en eventuele interessante anekdotes of feedback die ik heb ontvangen."
  },
  {
    slug: "project-2",
    title: "Another Project",
    description: "Short desc for card",
    images: ["/projects/project-2/main.jpg"],
    technologies: ["Node.js", "Express"],
    liveUrl: "https://example.com",
    featured: true,
    longDescription: "Veel meer details hier...",
    date: "2026-03-07"
  },
  {
    slug: "project-3",
    title: "Third Project",
    description: "Short desc for card",
    images: ["/projects/project-3/main.jpg"],
    technologies: ["Python", "Django"],
    githubUrl: "https://github.com/example/project-3",
    featured: false,
    longDescription: "Veel meer details hier...",
    date: "2026-05-15"
  }
];