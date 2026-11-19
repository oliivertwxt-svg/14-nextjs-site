import type { ServiceIconName } from "@/lib/services";

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

const paths: Record<ServiceIconName, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2.5 4.5-4.5 2.5 2.5-4.5 4.5-2.5Z" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z" />
      <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
    </>
  ),
  window: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9h17M8 6.8h.1M11 6.8h.1M8 13h8M8 16h5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h17" />
      <path d="m7 15 4-4 3 2 6-7M16 6h4v4" />
    </>
  ),
};

export function ServiceIcon({ name, className = "" }: ServiceIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
