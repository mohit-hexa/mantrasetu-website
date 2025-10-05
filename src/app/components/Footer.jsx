import Link from "next/link";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-4 md:mt-16 text-black relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover pointer-events-none bg-[url('/assets/footer_bg.png')] bg-repeat"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-4 md:py-10 sm:py-12 flex md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left - Logo + Description */}
        <div
         className="lg:col-span-6 sm:col-span-2 text-center lg:text-left">
          <div className="inline mx-auto lg:mx-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full md:grid place-items-center text-white font-bold text-lg mb-4 scale-150">
            <img
              src="/logo.svg"
              alt="MantraSetu"
              className="h-10 w-10 sm:h-12 sm:w-12 scale-150 md:scale-200"
            />
          </div>
          <p className="text-left text-[8px] sm:text-lg lg:text-[23px] font-[Source_Serif_Pro] leading-[10px] sm:leading-7 lg:leading-[24px] mt-2 sm:mt-8 lg:mt-10">
            From birth to wedding to spiritual cleansing every Hindu ritual has
            deep meaning. But finding a qualified, trustworthy pandit can be a
            challenge. That’s where we step in. <br />
            Our online pandit service makes it easy to book experienced priests
            for every kind of puja — whether Vedic, regional, or custom.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="lg:col-span-3 sm:col-span-1 text-center">
          <h4 className="font-bold text-[11px] sm:text-lg text-red-700 underline underline-offset-4 mb-2 min-w-[64px]">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-1 sm:space-y-3 text-[8px] sm:text-base">
            <li>
              <Link
                href="/"
                className="inline-block font-bold text-[8px] sm:text-base hover:text-red-700 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#journey"
                className="inline-block font-bold text-[8px] sm:text-base hover:text-red-700 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-block font-bold text-[8px] sm:text-base hover:text-red-700 transition-colors"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Address */}
        <div className="lg:col-span-3 sm:col-span-1 text-center">
          <h4 className="font-bold text-[11px] sm:text-lg text-red-700 underline underline-offset-4 mb-2">
            Address
          </h4>
          <ul className="mt-4 space-y-1 md:space-y-3 text-[5px] sm:text-base">
            <li className="flex items-start justify-start md:justify-center lg:justify-start gap-3">
              {/* <FaMapMarkerAlt className="text-black mt-1" /> */}
              <span className="text-left">
                123, Anywhere, Any City <br /> 156 343
              </span>
            </li>
            <li className="flex items-center justify-start md:justify-center lg:justify-start gap-3">
              {/* <FaEnvelope className="text-black" /> */}
              <span className="text-left">Mantrasetu01@gmail.com</span>
            </li>
            <li className="flex items-center justify-start md:justify-center lg:justify-start gap-3">
              {/* <FaPhone className="text-black" /> */}
              <span className="text-left">+97 xxxxx xxxxx</span>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/contact"
              className="text-[6px] md:text-2xl inline-flex w-full sm:w-auto items-center justify-center px-1 py-1 md:px-6 md:py-3 rounded-md bg-[#C00F0C] text-white font-semibold hover:bg-red-700 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center text-[11px] sm:text-xs text-black/70 pb-6">
        © {new Date().getFullYear()} MantraSetu
      </div>
    </footer>
  );
}
