import useSectionStore from "@/hooks/useSectionStore";
import { SECTIONS } from "@/utils/constants";
import { scrollToView } from "@/utils/functions";
import { Section } from "@/utils/interface/interface";

interface Props {
  activeIndex: number;
}

const Sidebar = ({ activeIndex }: Props) => {
  const refs = useSectionStore((state: any) => state.sectionRefs);

  return (
    <aside className="flex  fixed top-0 right-0 h-screen justify-center">
      <nav className="flex flex-col p-3 w-12">
        <div className="m-auto space-y-4">
          <div className="flex justify-center">
            <a className="font-semibold text-sm">L</a>
          </div>
          {SECTIONS.map((d: Section, index: number) => (
            <div className="flex justify-center" key={index}>
              <a
                className={
                  activeIndex == index
                    ? "font-semibold text-sm text-vermicelles cursor-pointer"
                    : "font-semibold text-sm cursor-pointer"
                }
                onClick={() => scrollToView(refs[index])}
              >
                {d.name.charAt(0)}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
