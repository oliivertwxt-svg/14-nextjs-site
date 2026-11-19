import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ServiceIcon } from "@/components/service-icon";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { formatPriceFrom, getServices } from "@/lib/services";

export const metadata = {
  title: "Services",
  description: "Brand strategy, digital products, and creative growth from Northstar Studio.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <section className="bg-[#17231d] py-16 text-white sm:py-24">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#c6f277]">How we help</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.07em] sm:text-7xl">
            The right people for your next big thing.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            From a first spark to a full-scale launch, we connect strategy, design, and technology to make meaningful progress.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex min-h-64 flex-col rounded-3xl border border-[#17231d]/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#91bd54]/60 hover:shadow-xl hover:shadow-[#17231d]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#557c56] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#e9eee2] text-[#557c56] transition-colors group-hover:bg-[#c6f277]">
                  <ServiceIcon name={service.icon} className="size-6" />
                </span>
                <span aria-hidden="true" className="text-xl text-[#8b978e] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </div>
              <h2 className="mt-8 text-xl font-semibold tracking-[-0.04em] text-[#17231d] sm:text-2xl">
                {service.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#66716a]">{service.summary}</p>
              <p className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#557c56]">
                From {formatPriceFrom(service.priceFrom)}
              </p>
            </Link>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeading
            eyebrow="One good conversation"
            title="A clear next step starts with hello."
            description="Tell us what you’re working toward. We’ll bring good questions and an open mind."
          />
          <Button href="/contact">Get in touch</Button>
        </Container>
      </section>
    </>
  );
}
