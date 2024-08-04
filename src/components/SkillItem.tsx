import { Skill } from "@/utils/interface/interface";
import Image from "next/image";

const SkillItem = ({ name, image }: Skill) => (
  <div className="flex flex-col bg-grayish-blue justify-center items-center rounded-lg h-44 p-5">
    <div className="relative w-16 h-16 md:w-24 md:h-24">
      <Image
        src={image}
        alt={name}
        layout="fill"
        className="rounded-full object-cover"
      />
    </div>
    <div className="mt-2">
      <span className="text-xs font-bold md:text-sm">{name}</span>
    </div>
  </div>
);

export default SkillItem;
