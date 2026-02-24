import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileArrowDown,
  faLocationDot,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  const contactItems = [
    {
      icon: faEnvelope,
      title: "Email",
      value: "kamiel.quatacker@gmail.com",
      href: "mailto:kamiel.quatacker@gmail.com",
      meta: "Best for direct contact",
    },
    {
      icon: faLinkedinIn,
      title: "LinkedIn",
      value: "linkedin.com/in/kamiel-quatacker",
      href: "https://www.linkedin.com/in/kamiel-quatacker",
      meta: "Professional profile",
    },
    {
      icon: faGithub,
      title: "GitHub",
      value: "github.com/kamielquatacker",
      href: "https://github.com/kamielquatacker",
      meta: "Code and projects",
    },
    {
      icon: faFileArrowDown,
      title: "Resume",
      value: "Download PDF",
      href: "/resume.pdf",
      meta: "Updated CV",
      download: true,
    },
    {
      icon: faLocationDot,
      title: "Location / Timezone",
      value: "Belgium · CET",
      meta: "Open to remote and hybrid",
    },
    {
      icon: faBriefcase,
      title: "Availability",
      value: "Open to opportunities",
      meta: "Software development roles",
    },
  ];

  return (
    <main className="container">
      <h1>Contact</h1>
      <p className="contact-intro">Reach out through one of the options below.</p>

      <section className="contact-grid" aria-label="Contact options">
        {contactItems.map((item) => {
          const content = (
            <>
              <div className="contact-card-icon" aria-hidden="true">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="contact-card-body">
                <h2 className="contact-card-title">{item.title}</h2>
                <div className="contact-card-value-wrapper">
                  <p className="contact-card-value">{item.value}</p>
                </div>
                <p className="contact-card-meta">{item.meta}</p>
              </div>
            </>
          );

          if (item.href) {
            return (
              <a
                key={item.title}
                className="contact-card"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                download={item.download}
              >
                {content}
              </a>
            );
          }

          return (
            <article key={item.title} className="contact-card" aria-label={item.title}>
              {content}
            </article>
          );
        })}
      </section>
    </main>
  );
}