"use client";
import useDetectResize from "@/hooks/useDetectResize";
import useSectionStore from "@/hooks/useSectionStore";
import { SECTIONS } from "@/utils/constants";
import { Section } from "@/utils/interface/interface";

const App = () => {
  const sectionRefs = useSectionStore((state: any) => state.sectionRefs);
  const { isMobile } = useDetectResize();

  return (
    <main className={`${isMobile ? "" : "mt-[80px]"}`}>
      <article>
        {SECTIONS.map((d: Section, i: number) => (
          <section key={d.name} id={d.name} ref={sectionRefs[i]}>
            {d.component}
          </section>
        ))}
      </article>
    </main>
  );
};

export default App;
