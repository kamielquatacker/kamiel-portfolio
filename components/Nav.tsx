"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const getPathLabel = (pathname: string) => (pathname === "/" ? "" : pathname);

export default function Nav() {
  const pathname = usePathname();
  const pathLabel = getPathLabel(pathname);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles["nav-brand"]} aria-label="Home">
        <span className={styles["nav-prompt"]}>kamiel@portfolio</span>
        <span className={styles["nav-sep"]}>:</span>
        <span className={styles["nav-path"]}>~{pathLabel}</span>
        <span className={styles["nav-caret"]}>$</span>
        <span className={styles["nav-cursor"]} aria-hidden="true" />
      </Link>
      <div className={styles["nav-links"]}>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
