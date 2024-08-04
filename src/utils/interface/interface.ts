import { ReactNode } from "react";

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
}

export interface Event {
  date: string;
  title: string;
  company: string;
  description: string;
}
