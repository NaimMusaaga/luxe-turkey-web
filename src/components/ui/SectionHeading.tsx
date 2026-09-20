interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "center" | "start";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold ${
            dark ? "text-gold" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-3xl font-bold leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-base leading-8 sm:text-lg ${
            dark ? "text-slate-300" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
