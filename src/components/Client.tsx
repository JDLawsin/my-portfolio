"use client";
import Header from "@/components/layout/Header";
import { useScrollspy } from "@/hooks/useScrollSpy";
import { createRef, useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/utils/constants";
import Sidebar from "@/components/layout/Sidebar";
import useSectionStore from "@/hooks/useSectionStore";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  children: React.ReactNode;
}

const Client = ({ children }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [elements, setElements] = useState<Element[]>([]);
  const [root, setRoot] = useState<Nullable<Element>>(null);
  const [currentActiveIndex] = useScrollspy(elements, {
    root: root,
    offset: isDesktop ? 800 : 80,
  });
  const inputRef = SECTIONS.map(() => createRef());
  const setSectionRefs = useSectionStore((state: any) => state.setSectionRefs);

  useEffect(() => {
    const widgetElements = SECTIONS.map(
      (d) => document.querySelector(`section[id="${d.name}"]`)!
    );

    setRoot(document.querySelector("#main"));
    setElements(widgetElements);
  }, []);

  useEffect(() => {
    setSectionRefs(inputRef);
  }, []);

  return (
    <>
      {/* explicitly comparing the value since useMediaQuery returns unknown */}
      {isDesktop == true && <Header activeIndex={currentActiveIndex} />}
      {isDesktop == false && <Sidebar activeIndex={currentActiveIndex} />}
      {children}
    </>
  );
};

export default Client;
