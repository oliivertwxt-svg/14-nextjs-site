import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const values = [
  { number: "01", title: "Stay curious", detail: "We listen closely, ask better questions, and keep learning as we go." },
  { number: "02", title: "Make it matter", detail: "We care about the impact of the work, not just how it looks in a deck." },
  { number: "03", title: "Better together", detail: "The best outcomes come from generous collaboration and shared ownership." },
];

const team = [
  { name: "Riley Morgan", role: "Co-founder, Strategy", initials: "RM", color: "bg-[#d6e8be]" },
  { name: "Jordan Lee", role: "Co-founder, Creative", initials: "JL", color: "bg-[#f3c7ac]" },
  { name: "Avery Patel", role: "Digital Director", initials: "AP", color: "bg-[#d4d8ec]" },
  { name: "Sam Rivera", role: "Design Lead", initials: "SR", color: "bg-[#efdfa1]" },
];

export const metadata = {
  title: "About",
  description: "Meet Northstar Studio: an independent creative team helping good ideas find their way forward.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#557c56]">A little about us</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
            We help good ideas find their way <span className="text-[#6b8f5b]">forward.</span>
          </h1>
          <div className="mt-12 grid gap-8 border-t border-[#17231d]/10 pt-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b978e]">Our story / 2012—today</p>
            <div className="space-y-5 text-base leading-7 text-[#66716a] sm:text-lg sm:leading-8">
              <p>Northstar began with a simple belief: the most useful creative work helps people see what’s possible.</p>
              <p>We’re an independent team of strategists, designers, and digital makers who partner with people building a more thoughtful future. Small enough to stay close, curious enough to see the bigger picture.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="A few things we’ll never outgrow."
            description="These are more than nice words on a wall. They shape how we show up, make decisions, and work with you."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="rounded-3xl bg-[#f4f6ef] p-7 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#789166]">{value.number}</p>
                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em]">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#66716a]">{value.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The people behind the work"
            title="Small team. Big-hearted thinkers."
            description="A close-knit crew of strategists, makers, and very enthusiastic note-takers."
          />
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
            {team.map((person) => (
              <article key={person.name}>
                <div className={`grid aspect-[0.88] place-items-center overflow-hidden rounded-3xl ${person.color}`}>
                  <div className="grid size-28 place-items-center rounded-full border border-white/70 text-3xl font-medium tracking-[-0.06em] text-[#26372c]/70 sm:size-36 sm:text-4xl">
                    {person.initials}
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm text-[#66716a]">{person.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
