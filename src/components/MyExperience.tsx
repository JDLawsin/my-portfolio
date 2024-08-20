import contentfulClient from "@/lib/contentful";
import Timeline from "./Timeline";
import { Event } from "@/utils/interface/interface";
import { useEffect, useState } from "react";

const MyExperience = () => {
  const [experiences, setExperiences] = useState<Event[]>([]);

  const getExperiences = async () => {
    const res = await contentfulClient.getEntries({
      content_type: "experience",
      order: ["sys.createdAt"],
    });

    const experiences: Event[] = res.items.map((d: any) => {
      const experience: Event = {
        title: d.fields.title?.toString() || "",
        description: d.fields.description || "",
        date: d.fields.date?.toString() || "",
        company: d.fields.company?.toString() || "",
      };

      return experience;
    });

    setExperiences(experiences);
  };

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <div className="mt-10 py-5 px-10 md:px-[30vw] bg-grayish-blue flex flex-col space-y-6 justify-center">
      <h1 className="font-bold text-base md:text-3xl text-center">
        Experience
      </h1>
      <Timeline events={experiences} />
    </div>
  );
};

export default MyExperience;
