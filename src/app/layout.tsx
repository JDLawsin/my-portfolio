"use client";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import useDetectResize from "@/hooks/useDetectResize";
import { useScrollspy } from "@/hooks/useScrollSpy";
import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/utils/constants";
import Sidebar from "@/components/layout/Sidebar";
import useSectionStore from "@/hooks/useSectionStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMobile, isDesktop } = useDetectResize();
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
      <body className={inter.className}>
        {isDesktop && <Header activeIndex={currentActiveIndex} />}
        {isMobile && <Sidebar activeIndex={currentActiveIndex} />}
        {children}
      </body>
    </html>
  );
}
