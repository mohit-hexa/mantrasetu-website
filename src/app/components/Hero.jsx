import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-[20px]">
      <div className="container mx-auto px-4 py-8 md:py-10 grid md:grid-cols-2 items-center gap-8">
        <div>
          <p className="uppercase tracking-wide text-white/90 text-xs sm:text-sm">
            Access Aartis, Mantras, Punchang, and Puja Booking - Anytime, Anywhere
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            Your Spiritual Companion <br /> Always in your pocket
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#journey"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white text-orange-700 font-semibold hover:shadow"
            >
              Book a Puja
            </Link>
            <Link
              href="#library"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-orange-700/30 border border-white/40 hover:bg-orange-700/40"
            >
              Explore Library
            </Link>
          </div>
        </div>
        <div className="relative h-60 sm:h-72 md:h-96 mt-6 md:mt-0">
          <div className="absolute right-4 top-2 h-56 w-36 sm:right-8 sm:top-4 sm:h-64 sm:w-40 md:right-16 md:top-6 md:h-[400px] md:w-[375px] rounded-3xl bg-[url('/assets/heroFrame.png')] bg-contain bg-no-repeat grid place-items-center">
            <img src="/logo.svg" alt="MantraSetu" className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
