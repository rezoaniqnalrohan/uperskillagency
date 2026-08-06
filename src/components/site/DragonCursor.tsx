import { useEffect, useRef } from "react";

const SEGMENTS = 14;

/** A small dragon that trails the mouse cursor. Desktop / fine-pointer only. */
export function DragonCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;
    const parts = Array.from(container.children) as HTMLElement[];

    const points = Array.from({ length: SEGMENTS }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let raf = 0;
    let idleFrames = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      container.style.opacity = "1";
      idleFrames = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      let px = target.x;
      let py = target.y;
      let moved = 0;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const ease = i === 0 ? 0.28 : 0.34;
        const dx = (px - p.x) * ease;
        const dy = (py - p.y) * ease;
        p.x += dx;
        p.y += dy;
        moved += Math.abs(dx) + Math.abs(dy);
        const angle = Math.atan2(py - p.y, px - p.x);
        const scale = 1 - i / (SEGMENTS + 3);
        const el = parts[i];
        if (el) {
          el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${scale})`;
        }
        px = p.x;
        py = p.y;
      }
      // Park the animation loop once the dragon has caught up with the
      // cursor — an always-on rAF keeps the main thread and GPU busy.
      idleFrames = moved < 0.25 ? idleFrames + 1 : 0;
      raf = idleFrames > 8 ? 0 : requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden opacity-0 transition-opacity duration-500 md:block"
    >
      {Array.from({ length: SEGMENTS }).map((_, i) => {
        if (i === 0) {
          return (
            <span key={i} className="absolute left-0 top-0 will-change-transform">
              {/* Dragon head: snout, jaw, horns, crest, eye */}
              <svg width="52" height="40" viewBox="0 0 52 40" className="text-primary drop-shadow-lg">
                {/* back horns */}
                <path d="M18 12c-4-3-8-5-12-9 1 5 4 9 8 12z" fill="currentColor" opacity="0.75" />
                <path d="M20 9c-2-4-3-7-3-9 4 2 6 5 7 9z" fill="currentColor" opacity="0.75" />
                {/* neck crest fins */}
                <path d="M12 22c-4 1-7 3-9 6 4 1 8 0 11-2z" fill="currentColor" opacity="0.55" />
                {/* skull + snout */}
                <path
                  d="M8 20c2-8 9-13 18-13 8 0 14 4 18 9-3 1-6 2-9 2l7 4c-2 3-6 5-11 5-3 3-8 4-13 2-6-2-9-5-10-9z"
                  fill="currentColor"
                />
                {/* lower jaw */}
                <path d="M22 26c6 2 12 2 17 0-2 4-7 6-12 6-3 0-5-2-5-6z" fill="currentColor" opacity="0.8" />
                {/* teeth */}
                <path d="M36 24l2 3-4-1zM41 23l1 3-3-1z" className="fill-background" opacity="0.9" />
                {/* eye */}
                <circle cx="26" cy="17" r="3.2" className="fill-background" />
                <ellipse cx="26.6" cy="17" rx="1" ry="2.4" fill="currentColor" />
                {/* nostril */}
                <circle cx="40" cy="18" r="1" className="fill-background" opacity="0.7" />
              </svg>
            </span>
          );
        }
        const isTail = i >= SEGMENTS - 2;
        const size = Math.max(5, 20 - i * 1.2);
        return (
          <span
            key={i}
            className="absolute left-0 top-0 flex items-center justify-center will-change-transform"
          >
            {/* wings near the shoulders */}
            {(i === 2 || i === 3) && (
              <svg
                width="62"
                height="46"
                viewBox="0 0 62 46"
                className="absolute text-accent"
                style={{ opacity: i === 2 ? 0.75 : 0.45 }}
              >
                <path
                  d="M31 23C22 8 12 2 2 2c3 10 6 17 12 22-5 1-9 3-12 7 10 3 20 1 29-8z"
                  fill="currentColor"
                />
                <path
                  d="M31 23c9-15 19-21 29-21-3 10-6 17-12 22 5 1 9 3 12 7-10 3-20 1-29-8z"
                  fill="currentColor"
                />
              </svg>
            )}
            {/* body scale */}
            <span
              className="block rounded-full bg-primary"
              style={{
                width: `${size}px`,
                height: `${size * 0.82}px`,
                opacity: 0.92 - i * 0.045,
              }}
            />
            {/* dorsal spikes */}
            {!isTail && (
              <span
                className="absolute"
                style={{
                  transform: `translateY(-${size * 0.7}px)`,
                  width: 0,
                  height: 0,
                  borderLeft: `${size * 0.28}px solid transparent`,
                  borderRight: `${size * 0.28}px solid transparent`,
                  borderBottom: `${size * 0.55}px solid var(--accent)`,
                  opacity: 0.7 - i * 0.035,
                }}
              />
            )}
            {/* tail fin */}
            {i === SEGMENTS - 1 && (
              <svg width="26" height="20" viewBox="0 0 26 20" className="absolute text-accent" style={{ opacity: 0.6 }}>
                <path d="M26 10L6 0c2 4 3 7 3 10s-1 6-3 10z" fill="currentColor" />
              </svg>
            )}
          </span>
        );
      })}
    </div>
  );
}