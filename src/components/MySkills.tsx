import { Skill } from "@/utils/interface/interface";
import SkillItem from "./SkillItem";

const sampleData = [
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
  {
    name: "Javascript",
    image: "/avatar/me.png",
  },
];

interface SkillItemListProp {
  skills: Skill[];
}
const SkillItemList = ({ skills }: SkillItemListProp) =>
  skills.map((d: Skill) => <SkillItem name={d.name} image={d.image} />);

const MySkills = () => {
  return (
    <div className="mt-5 px-10 md:px-[20vw]">
      <h1 className="font-bold text-base md:text-lg lg:text-xl text-center">
        My Skills
      </h1>
      <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4 md:gap-4">
        <SkillItemList skills={sampleData} />
      </div>
    </div>
  );
};

export default MySkills;
