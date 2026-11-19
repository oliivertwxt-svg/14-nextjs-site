type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-[#c6f277]" : "text-[#557c56]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#17231d]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${light ? "text-white/65" : "text-[#66716a]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
