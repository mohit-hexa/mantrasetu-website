import Image from "next/image";

export default function MantraSetu({
  title,
  src = "/images/hanuman.png",
  frame = "/luxury_frame.svg",
  size = 340,
  alt = "Hanuman",
  desc,
}) {
  return (
    <>
      <div>
        <div className="relative mx-auto flex items-center justify-center w-full max-w-[340px] aspect-square">
          {/* Outer decorative frame */}
          <img src={"/luxury_frame.svg"} alt="frame" className="absolute inset-0 h-full w-full object-contain" />

          {/* Inner circle image */}
          <div className="relative overflow-hidden rounded-full border-4 border-white shadow-lg" style={{ width: "68%", height: "68%" }}>
            <Image src={src} alt={alt} fill sizes="100%" className="object-cover" />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[rgba(255,111,0,1)] text-2xl sm:text-[30px] font-semibold text-center">{title}</h3>
          <p className="text-[rgba(0,0,0,0.7)] font-light text-base sm:text-lg text-center leading-6 sm:leading-[24px]">{desc}</p>
        </div>
      </div>
    </>
  );
}
