import { Skill } from "@/utils/interface/interface";
import SkillItem from "./SkillItem";
import contentfulClient from "@/lib/contentful";

interface SkillItemListProp {
  skills: Skill[];
}
const SkillItemList = ({ skills }: SkillItemListProp) =>
  skills.map((d: Skill, i: number) => (
    <SkillItem name={d.name} image={d.image} key={i} />
  ));

const getSkills = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "skill",
    order: ["sys.createdAt"],
  });

  const skills: Skill[] = res.items.map((d: any, i) => {
    const skill: Skill = {
      name: d.fields.name?.toString() || "",
      image: "https:" + d.fields.image.fields.file.url,
    };

    return skill;
  });

  return skills;
};

const MySkills = async () => {
  const skills: Skill[] = await getSkills();

  return (
    <div className="mt-5 px-10 md:px-[20vw]">
      <h1 className="font-bold text-base md:text-lg lg:text-xl text-center">
        My Skills
      </h1>
      <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4 md:gap-4">
        <SkillItemList skills={skills} />
      </div>
    </div>
  );
};

export default MySkills;
