import ImageWithFallback from "./ImageWithFallback";

const MyIntroduction = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 order-2 justify-center md:justify-end items-center mt-5 md:order-1">
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
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center order-1 mt-5 md:order-2 md:justify-start px-10">
        <ImageWithFallback
          src="/avatar/me.png"
          alt="me as a 2d character"
          width={1080}
          height={1080}
          className="rounded-full aspect-square object-cover sm:h-[2rem] sm:w-[2rem] md:h-[20rem] md:w-[20rem] lg:h-[30rem] lg:w-[30rem] md:pl-5"
        />
      </div>
    </div>
  );
};

export default MyIntroduction;
