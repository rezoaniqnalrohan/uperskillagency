import { type ReactNode } from "react";

export function Hero3D({
  eyebrow,
  title,
  subtitle,
  children,
  theme,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  theme?: "default" | "wordpress";
}) {
  if (theme === "wordpress") {
    return (
      <section className="relative overflow-hidden bg-wp-hero">
        {/* WordPress admin grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-wp-grid opacity-[0.35]" />
        {/* WP admin sidebar rail */}
        <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-24 border-r border-wp-line/40 bg-wp-rail md:block">
          <div className="mt-24 space-y-4 px-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-2 rounded-full bg-wp-line/60"
                style={{ width: `${45 + ((i * 17) % 50)}%` }}
              />
            ))}
          </div>
        </div>
        {/* giant WordPress "W" mark */}
        <svg
          viewBox="0 0 122.5 122.5"
          className="pointer-events-none absolute -right-24 -top-16 -z-10 h-[560px] w-[560px] text-wp-mark opacity-[0.12] animate-spin-slow"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3L13.2 39.9a52 52 0 0 0-4.5 21.4zm88 -2.7c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.3 9.9h3.4c5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19 56.6 11.5-34.3-8.2-22.3c-2.8-.2-5.5-.5-5.5-.5-2.8-.2-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l18.9 56.2 5.2-17.4c2.3-7.2 4-12.4 4-16.7zm-34.4 7.2-15.7 45.6a52.4 52.4 0 0 0 32.2-.8 4.6 4.6 0 0 1-.4-.7L62.3 65.8zm44.9-29.6a40.3 40.3 0 0 1 .4 5.4c0 5.3-1 11.3-4 18.8l-16 46.3a52.4 52.4 0 0 0 19.6-70.5zM61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z" />
        </svg>
        {/* floating gutenberg blocks */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[12%] top-24 h-16 w-28 rounded-xl border border-wp-line/60 bg-card/60 backdrop-blur animate-float" />
          <div className="absolute right-[16%] top-40 h-20 w-20 rounded-xl border border-wp-line/60 bg-card/60 backdrop-blur animate-float [animation-delay:1.5s]" />
          <div className="absolute bottom-24 left-[22%] h-12 w-40 rounded-xl border border-wp-line/60 bg-card/60 backdrop-blur animate-float [animation-delay:3s]" />
          <div className="absolute bottom-40 right-[10%] h-24 w-24 rounded-full border border-wp-line/60 bg-card/50 backdrop-blur animate-float [animation-delay:2.2s]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-wp-line bg-card/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-wp-mark animate-pulse" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">{subtitle}</p>
          {children && <div className="mt-10">{children}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      {/* floating 3D orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-16 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-accent/25 blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-float [animation-delay:4s]" />
      </div>
      {/* rotating grid ring */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-primary/20 animate-spin-slow" />
      <div className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-accent/20 animate-spin-slow [animation-direction:reverse]" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </p>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}