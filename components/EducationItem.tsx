import Image from "next/image";
import { Education } from "@/data/education";

export default function EducationItem({ education }: { education: Education }) {
  return (
    <li className="education-item">
      <a
        className="school-logo"
        href={education.url}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={education.logo}
          alt={education.school}
          fill
          sizes="48px"
          className="school-logo-image"
          unoptimized
        />
      </a>
      <div className="education-content">
        <div className="education-header">
          <div className="education-header-content">
            <h3 className="education-name">
              {education.url ? (
                <a href={education.url} target="_blank" rel="noreferrer">
                  {education.school}
                </a>
              ) : (
                education.school
              )}
            </h3>
            <p className="degree">{education.degree}</p>
          </div>
          <span className="period">{education.period}</span>
        </div>
      </div>
    </li>
  );
}
