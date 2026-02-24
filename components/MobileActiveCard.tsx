"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CARD_SELECTOR = ".project-card, .contact-card";

export default function MobileActiveCard() {
  const pathname = usePathname();

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 799px)");

    const getCards = () =>
      Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR));

    const clearActive = () => {
      getCards().forEach((card) => card.classList.remove("is-active"));
    };

    const updateActiveCard = () => {
      if (!mobileQuery.matches) {
        clearActive();
        return;
      }

      const cards = getCards();
      if (cards.length === 0) {
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let nearestCard: HTMLElement | null = null;
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (const card of cards) {
        const rect = card.getBoundingClientRect();

        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          continue;
        }

        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestCard = card;
        }
      }

      cards.forEach((card) => card.classList.remove("is-active"));
      if (nearestCard) {
        nearestCard.classList.add("is-active");
      }
    };

    let rafId = 0;
    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActiveCard();
      });
    };

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("orientationchange", scheduleUpdate);
    mobileQuery.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("orientationchange", scheduleUpdate);
      mobileQuery.removeEventListener("change", scheduleUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      clearActive();
    };
  }, [pathname]);

  return null;
}
