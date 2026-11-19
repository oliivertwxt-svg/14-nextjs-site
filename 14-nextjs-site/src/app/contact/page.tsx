import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const metadata = {
  title: "Contact",
  description: "Start a conversation with Northstar Studio.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#557c56]">Contact</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.07em] sm:text-7xl">
              Tell us what you’re dreaming up.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#66716a] sm:text-lg sm:leading-8">
              This is a placeholder for our contact form. In the meantime, drop us a note and tell us a little about what’s next for you.
            </p>
            <Button href="mailto:hello@northstar.studio" className="mt-8">
              hello@northstar.studio
            </Button>
          </div>
          <aside className="self-end rounded-3xl bg-[#e9eee2] p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#557c56]">A good place to start</p>
            <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em]">What are you hoping to make possible?</h2>
            <p className="mt-3 text-sm leading-6 text-[#66716a]">
              A bit of context is all we need to get the conversation going. No pitch deck required.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
