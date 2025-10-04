import Image from "next/image";

export default function Hero2() {
  return (
    <section
      className="relative bg-cover bg-center text-black my-10 sm:my-16 md:my-20"
      style={{ backgroundImage: "url(/assets/hero2_bg.jpg)" }}
    >
      <div className="absolute top-[-120px] hidden sm:block">
        <img src="/assets/deep.png" alt="decor" />
      </div>
      <div className="absolute bottom-[-70px] rotate-12 hidden sm:block">
        <img src="/assets/flower.png" alt="flower" />
      </div>
      <div className="absolute right-0 top-[-70px] rotate-[255deg] hidden sm:block">
        <img src="/assets/flower.png" alt="flower" />
      </div>

      {/* overlay for subtle dim */}
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
        {/* Guru Image */}
        <div className="mx-auto flex justify-center">
          <div className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56">
            <Image src="/assets/guru.svg" alt="Guru Illustration" fill className="object-contain" />
          </div>
        </div>

        {/* Text */}
        <div className="mx-auto max-w-4xl space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed">
          <p>
            At <span className="font-bold">Mantra Setu</span>, we understand that every spiritual journey begins with a sacred ritual. Be it a new beginning, a life milestone, or a moment of remembrance – Puja is not just a ceremony; it’s a path to inner peace, blessings, and divine connection.
          </p>
          <p>
            We offer end-to-end Pandit services for every occasion, guided by authentic scriptures and performed by qualified, experienced, and disciplined Vedic Pandits.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a href="/bookings" className="rounded-md bg-red-600 px-5 py-2.5 sm:px-6 sm:py-3 text-white font-semibold shadow hover:bg-red-700 transition">
            Book Online Pandit Now
          </a>
        </div>
      </div>
    </section>
  );
}
