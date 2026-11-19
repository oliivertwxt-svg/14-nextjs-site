import { Container } from "@/components/container";

export default function LoadingService() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading service"
      className="py-16 sm:py-24"
    >
      <Container>
        <div className="animate-pulse">
          <div className="h-4 w-28 rounded bg-[#dfe5d8]" />
          <div className="mt-12 h-14 max-w-2xl rounded-xl bg-[#e3e9dc] sm:h-20" />
          <div className="mt-6 h-5 max-w-xl rounded bg-[#e3e9dc]" />
          <div className="mt-3 h-5 max-w-lg rounded bg-[#e3e9dc]" />
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div className="h-52 rounded-3xl bg-[#e3e9dc]" />
            <div className="h-52 rounded-3xl bg-[#e3e9dc]" />
          </div>
        </div>
        <p className="sr-only" role="status">
          Loading service details…
        </p>
      </Container>
    </section>
  );
}
