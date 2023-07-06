import Image from "next/image";
import fixelFont from "./fonts";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="w-full p-4 flex items-center justify-between max-w-6xl mx-auto border-b-[0.6px] border-[#D9D9D9]">
      <Image width={151} height={32} src="/Aenona_logo.svg" alt="aenona logo" />

      <div className="flex items-center">
        <text
          style={{ color: "rgba(0, 0, 0, 0.7)" }}
          className={`text-base ${fixelFont.className} cursor-pointer font-normal capitalize mr-12`}
        >
          About Us
        </text>
        <text
          style={{ color: "rgba(0, 0, 0, 0.7)" }}
          className={`text-base ${fixelFont.className} cursor-pointer font-normal capitalize mr-12`}
        >
          Road Map
        </text>
        <text
          style={{ color: "rgba(0, 0, 0, 0.7)" }}
          className={`text-base ${fixelFont.className} cursor-pointer font-normal capitalize mr-20`}
        >
          Careers
        </text>

        <div className="border-b-4 border-[rgba(150, 150, 150, 0.70)] flex items-center">
          <text
            className={`text-base text-[rgba(0, 0, 0, 1)] ${fixelFont.className} cursor-pointer font-medium capitalize mr-1`}
          >
            Partner with us
          </text>
          <HiOutlineArrowSmallRight fontSize={"16px"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
