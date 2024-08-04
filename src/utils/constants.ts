import Portfolio from "@/components/section/Portfolio";
import { Section } from "./interface/interface";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";

export const SECTIONS: Section[] = [
  {
    name: "About",
    component: About(),
  },
  {
    name: "Portfolio",
    component: Portfolio(),
  },
  {
    name: "Contact",
    component: Contact(),
  },
];
