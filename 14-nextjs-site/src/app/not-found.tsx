import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you’re looking for has wandered off.",
};

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#557c56]">
            404 / Off the map
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.07em] sm:text-7xl">
            This page took a different turn.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#66716a]">
            The page you’re looking for doesn’t exist, but there’s plenty more
            to discover from here.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <Button href="/">Back home</Button>
            <Link
              href="/services"
              className="text-sm font-semibold text-[#17231d] transition-colors hover:text-[#557c56]"
            >
              Explore services <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
