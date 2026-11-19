"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";
import { Container } from "./container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-20 border-b border-[#17231d]/8 bg-[#f7f8f2]">
      <Container className="flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold tracking-[-0.04em] text-[#17231d]"
          aria-label="Northstar Studio home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-full bg-[#c6f277] text-sm">N</span>
          northstar<span className="text-[#718078]">®</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-[#557c56] ${
                isActive(href) ? "text-[#17231d]" : "text-[#66716a]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="min-h-11 px-5">
            Let’s talk
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-[#17231d]/10 text-[#17231d] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-[#17231d]/10 bg-[#f7f8f2] px-5 pb-6 pt-2 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`border-b border-[#17231d]/8 py-4 text-base font-medium ${
                  isActive(href) ? "text-[#17231d]" : "text-[#66716a]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button href="/contact" className="mt-5 w-full" onClick={() => setMenuOpen(false)}>
              Let’s talk
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
