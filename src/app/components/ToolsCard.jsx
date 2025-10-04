import Image from "next/image";

export default function ToolsCard({ title, image }) {
  return (
    <div className="relative h-[72px] sm:h-[80px] w-full md:w-[230px] rounded-2xl border-2 border-[#ff7916] bg-white">
      {/* Title */}
      <p className="text-[15px] sm:text-[17px] mt-3 mx-3 text-center font-semibold text-black leading-[22px] sm:leading-[24px]">
        {title}
      </p>

      {/* Bottom circle image */}
      <div className="absolute flex justify-center items-center -bottom-10 sm:-bottom-11 left-1/2 -translate-x-1/2 h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full border-4 border-[#ff7916] bg-white overflow-hidden">
        {image && (
          <Image src={image} alt={title} width={46} height={46} className="object-cover h-[40px] w-[40px] sm:h-[46px] sm:w-[46px] mt-1.5" />
        )}
      </div>
    </div>
  );
}
