import Image from "next/image";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import fixelFont from "./fonts";

export default function Home() {
  return (
    <main className="w-full max-w-6xl mx-auto pb-24">
      <div className="relative w-full h-[522px] pt-20">
        <img
          className="w-full h-full absolute top-0 left-0"
          src="/landing_page_1.svg"
          alt="graphics"
        />
        <h2
          className={`${fixelFont.className} max-w-[50%] font-semibold text-[40px] leading-[55px]`}
        >
          Impacting people & industries through technology
        </h2>
        <h2
          className={`${fixelFont.className} mt-6 max-w-[50%] font-semibold text-[40px] leading-[55px]`}
        >
          Experience Aeona.  
        </h2>
      </div>

      {/* section 2 */}
      <div className="relative bg-black w-full h-[400px] rounded-[35px] flex items-center pl-20 mt-20">
        <div className="z-30">
          <div className="flex items-center">
            <img src="/custom_arrow_white.svg" className="w-[104px] " />
            <text
              className={`ml-2 capitalize text-white text-[16px] ${fixelFont} font-medium`}
            >
              T r a c k b u d i 
            </text>
          </div>

          <div className="flex flex-col mt-13 mb-6">
            <text className={`text-white ${fixelFont} text-[42px] font-normal`}>
              The all-in-one
            </text>
            <text className={`text-white ${fixelFont} text-[42px] font-normal`}>
              solution for logistics management
            </text>
          </div>

          <div className="max-w-lg">
            <text
              className={`text-white ${fixelFont} font-medium text-[16px] leading-[30px] `}
            >
              Enabling businesses to streamline their logistics operations and
              enhance their overall efficiency.
            </text>
          </div>

          <div className="border-b-4 mt-9 border-[rgba(150, 150, 150, 0.70)] flex items-center w-max">
            <text
              className={`text-[16px] text-white leading-[32px] ${fixelFont.className} mr-1 cursor-pointer font-semibold capitalize`}
            >
              Experience Trackbudi
            </text>
            <HiOutlineArrowSmallRight fontSize={"16px"} color="white" />
          </div>
        </div>

        <img
          src="/cars_map.png"
          className="w-[45%] h-full absolute top-0 right-0"
        />
      </div>

      <div className="flex items-center w-full justify-between mt-[80px]">
        <div className="max-w-[50%]">
          <div className="flex items-center mb-3">
            <img src="/custom_arrow.svg" className="w-[104px] " />
            <text
              className={`ml-2 uppercase text-black tracking-[0.2em] text-[16px] ${fixelFont} font-medium`}
            >
              About Aeona
            </text>
          </div>

          <text
            className={`text-black ${fixelFont} text-[42px] leading-[55px] font-semibold`}
          >
            Working together to create and deliver products that meet the
            evolving needs of today's world. 
          </text>

          <div className="mt-6">
            <text
              className={`${fixelFont} font-medium text-[16px] leading-[30px]`}
              style={{ color: "rgba(0, 0, 0, 0.70)" }}
            >
              Enabling businesses to streamline their logistics operations and
              enhance their overall efficiency.
            </text>
          </div>

          <div className="border-b-4 mt-9 border-[#969696B2] flex items-center w-max">
            <text
              className={`text-[16px] text-black leading-[32px] ${fixelFont.className} mr-1 cursor-pointer font-semibold capitalize`}
            >
              More About Aeona
            </text>
            <HiOutlineArrowSmallRight fontSize={"16px"} />
          </div>
        </div>

        <img src="/landing_Page_2.svg" className="w-[450px] h-[450px] " />
      </div>
    </main>
  );
}
