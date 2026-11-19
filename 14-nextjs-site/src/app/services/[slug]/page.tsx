import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ServiceIcon } from "@/components/service-icon";
import {
  formatPriceFrom,
  getService,
  getServices,
} from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServices().map(({ slug }) => ({ slug }));
}

async function getServiceFromParams(params: ServicePageProps["params"]) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return service;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = await getServiceFromParams(params);

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: `${service.title} | Northstar Studio`,
      description: service.summary,
      type: "website",
      locale: "en_US",
      url: absoluteUrl(`/services/${service.slug}`),
      siteName: "Northstar Studio",
      images: [
        {
          url: "/northstar-og.png",
          width: 1200,
          height: 630,
          alt: "Northstar Studio — Make room for what’s next.",
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getServiceFromParams(params);

  return (
    <>
      <section className="bg-[#17231d] py-14 text-white sm:py-20">
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span> All services
          </Link>
          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-white/10 text-[#c6f277]">
                <ServiceIcon name={service.icon} className="size-7" />
              </span>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c6f277]">
                Northstar services
              </p>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                {service.summary}
              </p>
            </div>
            <div className="border-l border-white/20 pl-5 md:min-w-48">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                Engagements from
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#c6f277]">
                {formatPriceFrom(service.priceFrom)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#557c56]">
              The opportunity
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
              Make your next move with clarity.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#66716a]">
              {service.description}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-[-0.03em]">
              What’s included
            </h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-6 text-[#526057]"
                >
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#e9eee2] text-xs text-[#557c56]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#c6f277] px-7 py-9 sm:flex-row sm:items-center sm:px-12 sm:py-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#526c3c]">
                Ready when you are
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Let’s talk about {service.title.toLowerCase()}.
              </h2>
            </div>
            <Button
              href="/contact"
              className="bg-[#17231d] text-white hover:bg-[#2b4033] focus-visible:outline-[#17231d]"
            >
              Start a conversation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
