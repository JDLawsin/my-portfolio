"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import useSectionStore from "@/hooks/useSectionStore";
import { SECTIONS } from "@/utils/constants";
import { Section } from "@/utils/interface/interface";

const App = () => {
  const sectionRefs = useSectionStore((state: any) => state.sectionRefs);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <main className={`${isDesktop ? "mt-[80px]" : ""}`}>
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
