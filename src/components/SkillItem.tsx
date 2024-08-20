import { Skill } from "@/utils/interface/interface";
import ImageWithFallback from "./ImageWithFallback";

const SkillItem = ({ name, image }: Skill) => (
  <div className="flex flex-col bg-grayish-blue justify-center items-center rounded-lg h-44 p-5 hover:bg-vermicelles">
    <ImageWithFallback
      src={image}
      alt={name}
      width={500}
      height={500}
      className="aspect-square object-cover w-12 h-12 md:w-12 md:h-12"
    />
    <div className="mt-2">
      <span className="text-xs font-bold md:text-sm">{name}</span>
    </div>
  </div>
);

export default SkillItem;
