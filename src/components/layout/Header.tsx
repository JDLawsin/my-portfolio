import useSectionStore from "@/hooks/useSectionStore";
import { SECTIONS } from "@/utils/constants";
import { scrollToView } from "@/utils/functions";
import { Section } from "@/utils/interface/interface";

interface Props {
  activeIndex: number;
}

const Header = ({ activeIndex }: Props) => {
  const refs = useSectionStore((state: any) => state.sectionRefs);

  return (
    <header className="fixed top-0 w-full bg-main z-50">
      <nav className="flex flex-row p-10 items-center justify-between h-20 md:px-[20vw]">
        {/* Logo */}
        <div>
          <a className="font-bold text-xl text-vermicelles">JD</a>
        </div>
        {/* Menu */}
        <div className="space-x-4">
          {SECTIONS.map((d: Section, index: number) => (
            <a
              className={
                activeIndex == index
                  ? "font-semibold text-sm text-vermicelles cursor-pointer"
                  : "font-semibold text-sm cursor-pointer"
              }
              key={index}
              onClick={() => scrollToView(refs[index])}
            >
              {d.name}
            </a>
          ))}
        </div>
        {/* Hamburger */}
        <div className="space-x-4"></div>
      </nav>
    </header>
  );
};

export default Header;
