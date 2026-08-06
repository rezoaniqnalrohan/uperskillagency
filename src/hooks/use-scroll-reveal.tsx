import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Global scroll-reveal effect.
 *
 * Auto-tags common content elements with `data-reveal` and toggles
 * `.is-visible` when they enter the viewport. Runs on every route
 * change so newly-mounted pages animate in as well.
 */
export function useScrollReveal() {
  const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    let io: IntersectionObserver | undefined;
    let mo: MutationObserver | undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Selectors we consider "revealable" content blocks.
    const SELECTOR = [
      "section",
      "header > div",
      "footer",
      "[data-animate]",
      ".reveal-scroll",
      "h1",
      "h2",
      "h3",
      ".card-3d",
    ].join(",");

    const tag = () => {
      const nodes = document.querySelectorAll<HTMLElement>(SELECTOR);
      nodes.forEach((el, i) => {
        if (el.hasAttribute("data-reveal")) return;
        // Skip fixed / sticky bars so nav doesn't flash.
        const pos = getComputedStyle(el).position;
        if (pos === "fixed" || pos === "sticky") return;
        const kind = el.dataset.animate || "up";
        el.setAttribute("data-reveal", kind);
        el.style.transitionDelay = `${Math.min(i, 6) * 60}ms`;
        if (prefersReduced) el.classList.add("is-visible");
      });
    };

    const start = () => {
      if (cancelled) return;
      tag();
      if (prefersReduced) return;

      io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      const observeAll = () =>
        document
          .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
          .forEach((el) => io?.observe(el));

      observeAll();

      // Watch for late-mounted content (client-side navigations, async data).
      // Coalesce bursts of mutations into one rAF so we don't run a
      // full-document querySelectorAll per DOM change.
      let scheduled = 0;
      mo = new MutationObserver(() => {
        if (scheduled) return;
        scheduled = requestAnimationFrame(() => {
          scheduled = 0;
          tag();
          observeAll();
        });
      });
      mo.observe(document.body, { childList: true, subtree: true });
    };

    // Wait until React has finished hydrating before mutating the DOM.
    // Tagging server-rendered nodes mid-hydration makes React report an
    // attribute mismatch and bail out of patching that subtree.
    if (document.readyState === "complete") {
      requestAnimationFrame(() => requestAnimationFrame(start));
    } else {
      window.addEventListener(
        "load",
        () => requestAnimationFrame(() => requestAnimationFrame(start)),
        { once: true },
      );
    }

    return () => {
      cancelled = true;
      io?.disconnect();
      mo?.disconnect();
    };
  }, [location]);
}