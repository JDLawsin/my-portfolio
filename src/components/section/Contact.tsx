import Link from "next/link";
import EnvelopeIcon from "../icons/EnvelopeIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MessengerIcon from "../icons/MessengerIcon";
import TelegramIcon from "../icons/TelegramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="relative mt-10 px-10 md:px-[20vw] bg-grayish-blue min-h-96 border-y-2 border-y-vermicelles z-10 flex flex-col space-y-6 justify-center">
        <h1 className="font-bold text-base md:text-3xl text-center">
          Contact Me
        </h1>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-4 place-content-center max-w-lg">
            <div className="flex space-x-2 bg-main rounded-lg	 items-center p-3">
              <EnvelopeIcon />
              <span className="text-xs text-vermicelles md:text-lg">
                {"jdlawsin@gmail.com"}
              </span>
            </div>
            <div className="flex space-x-2 bg-main rounded-lg	 items-center p-3">
              <PhoneIcon />
              <span className="text-xs text-vermicelles md:text-lg">
                {"(+63) 0995-382-7955"}
              </span>
            </div>
            <div className="md:col-span-2 md:flex md:justify-center">
              <div className="flex space-x-2 bg-main rounded-lg	 items-center p-3">
                <LocationIcon />
                <span className="text-xs text-vermicelles md:text-lg">
                  {"Cebu, Philippines"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <Link
            href={"https://www.facebook.com/JoshDanLaw"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon className="size-8 hover:stroke-vermicelles hover:fill-vermicelles" />
          </Link>
          <Link
            href={"https://m.me/JoshDanLaw"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MessengerIcon className="size-8 hover:stroke-vermicelles hover:fill-vermicelles" />
          </Link>
          <Link
            href={"https://t.me/JoshDanLaw"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TelegramIcon className="size-8 hover:stroke-vermicelles hover:fill-vermicelles" />
          </Link>
          <Link
            href={"www.linkedin.com/in/joshua-daniel-lawsin-21a826208"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedinIcon className="size-8 hover:stroke-vermicelles hover:fill-vermicelles" />
          </Link>
        </div>
      </div>
      <div className="relative px-10 md:px-[20vw] min-h-96 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-vermicelles text-base md:text-2xl">
            {"Thanks for"}
          </span>
          <Image
            src="/avatar/pixie.png"
            alt="my pixie gurl"
            width={200}
            height={200}
            className="aspect-square object-cover rounded-full my-3"
          />
          <span className="text-vermicelles text-base md:text-2xl">
            {"Visiting!"}
          </span>
        </div>
        <Image
          src="/avatar/skye.png"
          alt="my skye gurl"
          width={200}
          height={200}
          className="aspect-square object-cover absolute -top-11 left-0 rotate-180 z-0"
        />
        <Image
          src="/avatar/phanter.png"
          alt="my phanter boi"
          width={200}
          height={200}
          className="aspect-square object-cover absolute -top-11 right-0 rotate-180 z-0"
        />
        <Image
          src="/avatar/choco.png"
          alt="my choco boi"
          width={200}
          height={200}
          className="aspect-square object-cover absolute bottom-0 right-0"
        />
        <Image
          src="/avatar/mavis.png"
          alt="my mavis gurl"
          width={200}
          height={200}
          className="aspect-square object-cover absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default Contact;
