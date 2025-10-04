import Link from "next/link";

export default function SectionHeading({ title, href, hrefLabel }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
      {href && hrefLabel ? (
        <Link href={href} className="text-sm sm:text-[15px] text-orange-700 hover:underline self-start sm:self-auto">
          {hrefLabel}
        </Link>
      ) : null}
    </div>
  );
}
