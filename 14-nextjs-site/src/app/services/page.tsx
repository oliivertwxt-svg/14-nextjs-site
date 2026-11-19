import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    number: "01",
    title: "Brand strategy & identity",
    description: "Find the signal in the noise. We help you define what makes you different, then build a brand system that makes it unmistakable.",
    offerings: ["Positioning & story", "Naming & verbal identity", "Visual identity systems"],
  },
  {
    number: "02",
    title: "Digital products & platforms",
    description: "Make the complex feel simple. From first sketch to final launch, we create digital experiences people love to use.",
    offerings: ["Product strategy", "UX & interface design", "Web development"],
  },
  {
    number: "03",
    title: "Creative growth",
    description: "Keep the good things growing. We bring creative thinking and practical tools together to help your business build momentum.",
    offerings: ["Campaign concepts", "Content & art direction", "Ongoing optimization"],
  },
];

export const metadata = {
  title: "Services",
  description: "Brand strategy, digital products, and creative growth from Northstar Studio.",
};

export default function ServicesPage() {
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
        <Container>
          {services.map((service) => (
            <article key={service.number} className="grid gap-6 border-b border-[#17231d]/10 py-9 first:pt-0 md:grid-cols-[0.2fr_0.8fr] md:gap-10 md:py-12">
              <p className="text-xs font-bold tracking-[0.18em] text-[#789166]">{service.number} / 03</p>
              <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{service.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#66716a] sm:text-base">{service.description}</p>
                </div>
                <ul className="space-y-3 text-sm font-medium text-[#44534a]">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-[#91bd54]" />
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
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
