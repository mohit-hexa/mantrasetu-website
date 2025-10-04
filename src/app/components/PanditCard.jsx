export default function PanditCard({ name, rating = 5, exp, subtitle = "Vedic puja" }) {
  const filled = Math.round(Math.min(Math.max(rating, 0), 5));

  return (
    <div className="rounded-2xl border-2 border-[#ff7916] bg-white p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition">
      {/* Avatar */}
      <div className="mx-auto mb-3 sm:mb-4 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-b from-[#f89f34] to-[#ff7916] grid place-items-center relative">
        <div className="absolute -inset-[2px] rounded-full border border-black/20"></div>
        <UserIcon />
      </div>

      {/* Name + subtitle */}
      <p className="text-base sm:text-lg font-bold text-black">{name}</p>
      <p className="mt-1 text-xs sm:text-sm text-gray-600">{subtitle}</p>

      {/* Stars */}
      <div className="mt-2 sm:mt-3 flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < filled} />
        ))}
      </div>

      {/* CTA */}
      <button className="mx-auto mt-4 sm:mt-5 inline-flex items-center justify-center rounded-xl bg-[#ff7916] px-5 py-2.5 sm:px-8 sm:py-3 text-white text-sm sm:text-base font-semibold hover:brightness-95 w-full sm:w-auto">
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
      className="h-5 w-5"
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-9 w-9 text-white">
      <circle cx="12" cy="7.5" r="3.5" fill="currentColor" />
      <path
        d="M4 19.5c0-3.314 3.134-6 7-6s7 2.686 7 6v.5H4v-.5z"
        fill="currentColor"
      />
    </svg>
  );
}
