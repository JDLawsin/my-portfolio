import contentfulClient from "@/lib/contentful";
import Masonry from "./Masonry";
import { Portfolio } from "@/utils/interface/interface";

const getProjects = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "project",
    order: ["sys.createdAt"],
  });

  const projects: Portfolio[] = res.items.map((d: any) => {
    const project: Portfolio = {
      title: d.fields.projectName?.toString() || "",
      description: d.fields.details?.toString() || "",
      image: "image" in d.fields ? d.fields.image?.toString() || "" : "",
      techs: d.fields.tech || [],
    };

    return project;
  });

  return projects;
};

const MyProjects = async () => {
  const projects: Portfolio[] = await getProjects();

  return (
    <div className="mt-5 px-10 md:px-[20vw]">
      <h1 className="font-bold text-base md:text-lg lg:text-xl text-center">
        Portfolio
      </h1>
      <div>
        <Masonry projects={projects} />
      </div>
    </div>
  );
};

export default MyProjects;
