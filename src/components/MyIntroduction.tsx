import DownloadIcon from "./icons/DownloadIcon";
import ImageWithFallback from "./ImageWithFallback";

const MyIntroduction = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-5 px-5 md:px-[20vw]">
      <div className="flex flex-1 order-2 justify-center lg:justify-end items-center mt-5 lg:order-1">
        <div>
          <p className="text-xs md:text-sm lg:text-lg text-center">
            {"I'M "}
            <span className="font-bold text-lg md:text-4xl text-vermicelles">
              {"Joshua Daniel Lawsin"}
            </span>
          </p>
          <p className="font-bold text-sm md:text-base lg:text-lg text-center">
            {"Web Developer (Frontend and Backend)"}
          </p>
          <div className="flex justify-center items-center p-3">
            <a
              type="button"
              className="flex items-center rounded bg-vermicelles px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white cursor-pointer"
              href="/resume/Joshua_Daniel_Lawsin_Resume.pdf"
              download="Joshua_Daniel_Lawsin_Resume"
            >
              <DownloadIcon />
              {"Download Resume"}
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center order-1 mt-5 lg:order-2 lg:justify-start px-10">
        <ImageWithFallback
          src="/avatar/me.png"
          alt="me as a 2d character"
          width={1080}
          height={1080}
          className="rounded-full aspect-square object-cover h-[15rem] w-[15rem] lg:h-[30rem] lg:w-[30rem] md:pl-5"
        />
      </div>
    </div>
  );
};

export default MyIntroduction;
