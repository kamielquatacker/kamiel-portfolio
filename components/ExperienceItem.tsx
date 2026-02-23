import Image from 'next/image';
import { Experience } from '@/data/experience';

export default function ExperienceItem({ experience }: { experience: Experience }) {
  // Safety check
  if (!experience.positions || experience.positions.length === 0) {
    return null;
  }

  const firstPosition = experience.positions[0];

  return (
    <div className="experience-item">
      <div className="experience-header">
        <Image 
          src={experience.logo} 
          alt={experience.company}
          width={48}
          height={48}
          className="company-logo"
        />
        <div className="experience-header-content">
          <h3 className="company-name">
            {experience.url ? (
              <a href={experience.url} target="_blank" rel="noreferrer">
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h3>
          <p className="role-title">{firstPosition.title}</p>
        </div>
        <span className="period">{firstPosition.period}</span>
      </div>

      <div className="position-details">
        <ul>
          {firstPosition.description.split('<br>').map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item.trim() }} />
          ))}
        </ul>
      </div>

      {experience.positions.slice(1).map((pos, i) => (
        <div key={i} className="additional-position">
          <div className="position-header">
            <p className="role-title">{pos.title}</p>
            <span className="period">{pos.period}</span>
          </div>
          <ul>
            {pos.description.split('<br>').map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.trim() }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}