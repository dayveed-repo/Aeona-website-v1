import fixelFont from "./fonts";

const Footer = () => {
  return (
    <div className="bg-black w-full flex flex-col">
      <div className="max-w-6xl w-full my-28 mx-auto">
        <div className="mb-[170px]">
          <h3
            className={`${fixelFont} font-bold text-[40px] leading-[70px] mb-5 text-white`}
          >
            Creating the software of tomorrow, today.
          </h3>
          <div className="max-w-xl">
            <text
              className={`${fixelFont} font-normal text-[16px] leading-[30px]  text-white`}
            >
              By harnessing the potential of code, Aeona, a software company, is
              paving the way for a brighter future, one line of code at a time.
            </text>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <img
            src="/aeona_logo_white.svg"
            loading="lazy"
            className="h-11 object-contain"
          />

          <div className="flex items-center w-[50%] justify-between">
            <div>
              <text
                className={`${fixelFont} font-semibold text-[16px] text-white leading-[25px]`}
              >
                Contact Info
              </text>
              <div className="border-b-4 mt-3 border-[#969696B2] flex items-center w-max">
                <text
                  style={{ color: "rgba(255, 255, 255, 0.70)" }}
                  className={`text-[16px] leading-[25px] ${fixelFont.className} cursor-pointer font-normal`}
                >
                  info@joinaeona.com
                </text>
              </div>
            </div>

            <div>
              <text
                className={`${fixelFont} font-semibold text-[16px] text-white leading-[25px]`}
              >
                Product
              </text>
              <div className="border-b-4 mt-3 border-[#969696B2] flex items-center w-max">
                <text
                  style={{ color: "rgba(255, 255, 255, 0.70)" }}
                  className={`text-[16px] leading-[25px] ${fixelFont.className} cursor-pointer font-normal`}
                >
                  Trackbudi
                </text>
              </div>
            </div>

            <div>
              <text
                className={`${fixelFont} font-semibold text-[16px] text-white leading-[25px]`}
              >
                Legal
              </text>
              <div className="border-b-4 mt-3 border-[#969696B2] flex items-center w-max">
                <text
                  style={{ color: "rgba(255, 255, 255, 0.70)" }}
                  className={`text-[16px] leading-[25px] ${fixelFont.className} cursor-pointer font-normal`}
                >
                  Privacy Policy
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
