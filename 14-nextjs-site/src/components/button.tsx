import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "bg-[#c6f277] text-[#14211c] hover:bg-[#d6ff91] focus-visible:outline-[#c6f277]",
  secondary:
    "border border-white/30 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white",
};

export function Button({
  children,
  className = "",
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
