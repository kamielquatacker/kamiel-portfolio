import { Education } from "@/data/education";

export default function EducationItem({ education }: { education: Education }) {
  return (
    <div className="education-item">
      {/* Logo, school name, degree, period */}
        <div className="education-header">
            <img src={education.logo}
                alt={education.school}
                width={48}
                height={48}
                className="school-logo"
            />
            <div className="education-header-content">
                <h3 className="school-name">
                    {education.url ? ( 
                        <a href={education.url} target="_blank" rel="noreferrer">
                            {education.school}
                        </a>
                    ) : (
                        education.school
                    )}
                </h3>
                <p className="degree">Degree: {education.degree}</p>
                <p className="field">Field: {education.field}</p>
            </div>
            <span className="period">{education.period}</span>
        </div>
    </div>
  );
}