import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-left"]}>
        <span>&copy; {new Date().getFullYear()} Kamiel Quatacker</span>
      </div>
      <div className={styles["footer-links"]}>
        <a
          className="btn"
          href="https://github.com/kamielquatacker"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="btn"
          href="https://www.linkedin.com/in/kamiel-quatacker"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className="btn" href="mailto:kamiel.quatacker@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
}
