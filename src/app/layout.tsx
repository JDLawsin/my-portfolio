"use client";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/Header";
import { useScrollspy } from "@/hooks/useScrollSpy";
import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/utils/constants";
import Sidebar from "@/components/layout/Sidebar";
import useSectionStore from "@/hooks/useSectionStore";
import useMediaQuery from "@/hooks/useMediaQuery";

const roboto = Roboto({ subsets: ["cyrillic"], weight: "300" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [elements, setElements] = useState<Element[]>([]);
  const [root, setRoot] = useState<Nullable<Element>>(null);
  const [currentActiveIndex] = useScrollspy(elements, {
    root: root,
    offset: 700,
  });
  const inputRef = SECTIONS.map(() => useRef(null));
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
    <html lang="en" id="#main">
      <body className={roboto.className}>
        {/* explicitly comparing the value since useMediaQuery returns unknown */}
        {isDesktop == true && <Header activeIndex={currentActiveIndex} />}
        {isDesktop == false && <Sidebar activeIndex={currentActiveIndex} />}
        {children}
      </body>
    </html>
  );
}
