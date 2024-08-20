import { ReactNode } from "react";
import { Document } from "@contentful/rich-text-react-renderer/node_modules/@contentful/rich-text-types/dist/types/types";

export interface Section {
  name: string;
  component: ReactNode;
}

export interface Skill {
  name: string;
  image: string;
}

export interface Portfolio {
  title: string;
  description: string;
  image: string;
  techs: string[];
}

export interface Event {
  date: string;
  title: string;
  company: string;
  description: Document;
}
