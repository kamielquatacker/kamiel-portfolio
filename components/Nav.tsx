"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return { label: decodeURIComponent(segment), href };
  });

  // close sidebar on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles["nav-brand"]} aria-label="Home">
          <Link href="/" className={styles["nav-prompt-link"]}>
            <span className={styles["nav-prompt"]}>kamiel@portfolio</span>
          </Link>
          <span className={styles["nav-sep"]}>:</span>
          <span className={styles["nav-path"]}>~</span>
          <span className={styles["nav-current-path"]}>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <span key={crumb.href}>
                  <span>/</span>
                  {isLast ? (
                    <span>{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className={styles["nav-crumb"]}>
                      {crumb.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </span>
          <span className={styles["nav-caret"]}>$</span>
          <span className={styles["nav-command"]} aria-hidden="true">cd ~</span>
          <span className={styles["nav-cursor"]} aria-hidden="true" />
        </div>

        {/* desktop links */}
        <div className={styles["nav-links"]}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>

        {/* hamburger button — mobile only */}
        <button
          className={styles["nav-hamburger"]}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`${styles["ham-line"]} ${open ? styles["ham-line--top-open"] : ""}`} />
          <span className={`${styles["ham-line"]} ${open ? styles["ham-line--mid-open"] : ""}`} />
          <span className={`${styles["ham-line"]} ${open ? styles["ham-line--bot-open"] : ""}`} />
        </button>
      </nav>

      {/* overlay */}
      <div
        className={`${styles.overlay} ${open ? styles["overlay--open"] : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles["sidebar--open"] : ""}`}>
        <nav className={styles["sidebar-links"]}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={styles["sidebar-link"]}>
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
