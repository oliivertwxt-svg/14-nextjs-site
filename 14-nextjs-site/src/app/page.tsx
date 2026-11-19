import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const services = [
  { number: "01", title: "Brand strategy", detail: "Find your point of view and give it a voice." },
  { number: "02", title: "Digital experiences", detail: "Turn complex ideas into intuitive products." },
  { number: "03", title: "Creative growth", detail: "Build momentum with work that keeps working." },
];

const stats = [
  { value: "12+", label: "years making a difference" },
  { value: "48", label: "brands moved forward" },
  { value: "8", label: "countries reached" },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pt-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="relative z-10">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#17231d]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#557c56]">
                <span className="size-2 rounded-full bg-[#91bd54]" />
                Independent digital agency
              </p>
              <h1 className="max-w-3xl text-[clamp(3.5rem,9vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
                Make room for <span className="text-[#6b8f5b]">what’s next.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-[#66716a] sm:text-lg sm:leading-8">
                We bring clarity to ambitious ideas—shaping brands and digital experiences that move people forward.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button href="/contact">Let’s build something</Button>
                <Link href="/services" className="text-sm font-semibold text-[#17231d] hover:text-[#557c56]">
                  Explore what we do <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto aspect-[0.98] w-full max-w-[560px]" aria-label="Abstract green and cream shapes representing new ideas" role="img">
              <div className="absolute inset-[8%] rotate-[-8deg] rounded-[2rem] bg-[#e6ebdb]" />
              <div className="absolute inset-[11%_8%_7%_12%] overflow-hidden rounded-[2rem] bg-[#d2e7a9]">
                <div className="absolute -left-[20%] top-[10%] size-[78%] rounded-full border-[34px] border-[#f7f8f2] sm:border-[48px]" />
                <div className="absolute -bottom-[14%] -right-[6%] size-[68%] rounded-full bg-[#76975e]" />
                <div className="absolute right-[20%] top-[17%] size-[21%] rounded-full bg-[#f1a37c]" />
                <div className="absolute left-[13%] top-[58%] h-[28%] w-[56%] -rotate-[28deg] rounded-full bg-[#f7f8f2]" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-[#17231d] px-4 py-2 text-xs font-medium text-white sm:bottom-8 sm:left-8 sm:text-sm">
                  <span className="size-2 rounded-full bg-[#c6f277]" />
                  Ideas in motion
                </div>
              </div>
              <div className="absolute right-[3%] top-[12%] grid size-16 rotate-12 place-items-center rounded-2xl bg-[#17231d] text-2xl text-[#c6f277] shadow-xl sm:size-20 sm:text-3xl">
                ✳
              </div>
              <div className="absolute bottom-[8%] right-[4%] rounded-full border border-[#17231d]/15 bg-[#f7f8f2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#17231d]">
                Since 2012
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Good work starts with a better question."
              description="We connect sharp thinking with thoughtful making to help ambitious teams find their next."
            />
            <Link href="/services" className="shrink-0 pb-1 text-sm font-semibold text-[#557c56] hover:text-[#17231d]">
              All services <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="mt-12 grid border-t border-[#17231d]/10 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="border-b border-[#17231d]/10 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#8b978e]">{service.number}</p>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">{service.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[#66716a]">{service.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#17231d] py-16 text-white sm:py-20">
        <Container className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-white/20 pl-5">
              <p className="text-4xl font-semibold tracking-[-0.06em] text-[#c6f277] sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/65">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Kind words"
            title="A good partner makes the hard things feel possible."
            align="center"
          />
          <figure className="mx-auto mt-12 max-w-4xl rounded-[2rem] bg-[#e9eee2] px-6 py-10 text-center sm:px-14 sm:py-16">
            <blockquote className="text-2xl font-medium leading-snug tracking-[-0.04em] text-[#26372c] sm:text-4xl">
              “Northstar helped us see our brand with fresh eyes—and gave us the confidence to take it somewhere new.”
            </blockquote>
            <figcaption className="mt-8 text-sm font-semibold text-[#17231d]">
              Maya Chen <span className="font-normal text-[#66716a]">· CEO, Fieldnote</span>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#c6f277] px-7 py-10 sm:px-12 sm:py-14 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#526c3c]">Your next starts here</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#17231d] sm:text-5xl">
                There’s a better way forward. Let’s find it.
              </h2>
            </div>
            <Button href="/contact" className="bg-[#17231d] text-white hover:bg-[#2b4033] focus-visible:outline-[#17231d]">
              Tell us what you’re thinking
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
