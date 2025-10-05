import Image from "next/image";

export default function MantraSetu({
  title,
  src = "/images/hanuman.png",
  frame = "/luxury_frame.svg",
  alt = "Hanuman",
  desc,
}) {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[180px] sm:max-w-[220px] md:max-w-[400px] mx-auto">
      {/* Outer decorative frame */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        <img
          src={ "/luxury_frame.svg"}
          alt="frame"
          className="absolute inset-0 h-full w-full object-contain"
        />

        {/* Inner circular image */}
        <div className="relative overflow-hidden rounded-full border-2 sm:border-4 border-white shadow-lg w-[68%] h-[68%]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-[#ff6f00] text-[8px] sm:text-sm md:text-xl font-semibold leading-tight">
        {title}
      </h3>

      {/* Description (visible on larger screens only) */}
      <p className="hidden sm:block text-[rgba(0,0,0,0.7)] font-light text-[8px] sm:text-sm md:text-lg leading-snug sm:leading-relaxed mt-2">
        {desc}
      </p>
    </div>
  );
}
