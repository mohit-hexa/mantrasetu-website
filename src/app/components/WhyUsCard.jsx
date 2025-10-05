export default function WhyUsCard({ title, desc, icon }) {
  return (
    <div className="grid place-items-center rounded-2xl border shadow-md p-2 md:p-4 sm:p-5 text-center">
      <div className="h-10 w-10 sm:h-12 sm:w-12">
        <img src={icon} alt="" className="h-full w-full object-contain" />
      </div>
      <p className="mt-2 md:mt-3 font-semibold text-[10px] md:text-base sm:text-lg">{title}</p>
      <p className="text-center text-[8px] md:text-sm sm:text-base font-light text-[rgba(0,0,0,0.7)] mt-1">{desc}</p>
    </div>
  );
}
