"use client";
import useSectionStore from "@/hooks/useSectionStore";
import { SECTIONS } from "@/utils/constants";
import { Section } from "@/utils/interface/section";

const App = () => {
  const sectionRefs = useSectionStore((state: any) => state.sectionRefs);

  return (
    <main className="px-3 mt-[80px]">
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
