import Image from "next/image";

export default function PujaCard({ title, image, cta = "Book now" }) {
  return (
    <div className="relative group bg-white rounded-2xl p-3 sm:p-4 transition flex flex-col items-center text-center w-full">
      {/* Frame area */}
      <div className="flex justify-center items-center bg-[url(/puja_frame.svg)] bg-cover bg-center relative h-[220px] w-[180px] sm:h-[260px] sm:w-[220px] md:h-[345px] md:w-[300px] rounded-full overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="h-[65%] w-[65%] sm:h-[70%] sm:w-[70%] md:h-[72%] md:w-[72%] object-contain" />
        ) : null}
      </div>

      {/* Title badge */}
      <div className="px-2 text-[12px] sm:text-lg font-semibold absolute -bottom-3 sm:-bottom-4 md:bottom-0 shadow-md flex items-center justify-center mt-2 rounded-[999px] bg-orange-500 text-white h-[60px] w-[110px] sm:h-[72px] sm:w-[120px] md:h-[96px] md:w-[150px]">
        {title}
      </div>
    </div>
  );
}
