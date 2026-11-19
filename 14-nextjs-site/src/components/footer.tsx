import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="bg-[#17231d] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c6f277]">
              Have a good one in mind?
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Let’s make it mean something.
            </h2>
          </div>
          <Button href="/contact">Start a conversation</Button>
        </div>
        <div className="flex flex-col gap-8 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-base font-bold tracking-[-0.04em] text-white">
            northstar<span className="text-[#c6f277]">®</span>
          </Link>
          <nav aria-label="Footer navigation" className="flex gap-6">
            <Link className="transition-colors hover:text-white" href="/about">About</Link>
            <Link className="transition-colors hover:text-white" href="/services">Services</Link>
            <Link className="transition-colors hover:text-white" href="/contact">Contact</Link>
          </nav>
          <p>© Northstar Studio</p>
        </div>
      </Container>
    </footer>
  );
}
