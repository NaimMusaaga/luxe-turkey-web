const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  gold: "bg-gold text-navy hover:bg-gold-light",
  dark: "bg-navy text-white hover:bg-navy-700",
  outline:
    "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
  outlineLight:
    "border border-white/35 text-white hover:border-white hover:bg-white hover:text-navy",
  whatsapp: "bg-[#1FA855] text-white hover:bg-[#178a45]",
} as const;

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[15px]",
  lg: "h-14 px-9 text-base",
} as const;

export function buttonClass(
  variant: keyof typeof variants = "gold",
  size: keyof typeof sizes = "md",
  extra = "",
): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}
