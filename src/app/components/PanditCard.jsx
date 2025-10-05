export default function PanditCard({ name, rating = 5, subtitle = "Vedik puja" }) {
  const filled = Math.round(Math.min(Math.max(rating, 0), 5));

  return (
    <div className="md:grid flex items-center md:justify-center justify-between border-2 border-[#ff7916] rounded-[14px] bg-white px-[7px] py-3 sm:px-6 sm:py-4 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Left - Avatar + Info */}
      <div className="flex md:grid items-center md:place-items-center gap-[7px] sm:gap-4 flex-1">
        {/* Avatar */}
        <div className="relative h-[30px] w-[30px] sm:h-14 sm:w-14 rounded-full bg-gradient-to-b from-[#f89f34] to-[#ff7916] grid place-items-center flex-shrink-0">
          <div className="absolute -inset-[1.5px] rounded-full border border-black/30 pointer-events-none" />
          <UserIcon />
        </div>

        {/* Text Content */}
        <div className="min-w-0 md:place-items-center md:grid">
          <p className="text-[7px] sm:text-base font-bold text-black leading-none">{name}</p>
          <p className="text-[6px] sm:text-sm text-gray-600 mt-1 leading-none">{subtitle}</p>
          {/* Stars */}
          <div className="mt-1 flex items-center gap-[2px] sm:gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < filled} />
            ))}
          </div>
        </div>
      </div>

      {/* Right - CTA */}
      <button className="h-[13px] w-10 md:w-auto md:h-auto md:ml-0 sm:ml-6 flex-shrink-0 inline-flex items-center justify-center rounded-full bg-[#ff7916] text-white text-[5px] sm:text-sm font-semibold px-1 py-1.5 sm:px-5 sm:py-2 hover:brightness-95 transition mt-2">
        Book now
      </button>
    </div>
  );
}

function Star({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-1.5 w-1.5 sm:h-4 sm:w-4"
      fill={filled ? "#ffb300" : "none"}
      stroke={filled ? "#ffb300" : "#ffb300"}
      strokeWidth="1.2"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 text-white">
      <circle cx="12" cy="7.5" r="3.5" fill="currentColor" />
      <path d="M4 19.5c0-3.314 3.134-6 7-6s7 2.686 7 6v.5H4v-.5z" fill="currentColor" />
    </svg>
  );
}
