import { Portfolio } from "@/utils/interface/interface";
import ImageWithFallback from "./ImageWithFallback";
import ExpandableText from "./ExpandableText";
import Badge from "./Badge";
import FloatingIcon from "./FloatingIcon";
import QuestionMarkIcon from "./icons/QuestionMarkIcon";

interface Props {
  projects: Portfolio[];
}

const Masonry = ({ projects }: Props) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="md:gap-4 md:columns-3">
        {projects.map((d: Portfolio, i: number) => (
          <div
            key={i}
            className={`relative ${
              i == 0 ? "mt-0" : "mt-4"
            } overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out`}
          >
            {/* <FloatingIcon position="top-right">
              <QuestionMarkIcon className="size-6 cursor-pointer" />
            </FloatingIcon> */}
            <ImageWithFallback
              src={d.image}
              alt="Card Image"
              width={400}
              height={200}
              className="object-cover w-full"
            />
            <div className="p-4 bg-grayish-blue space-y-1">
              <div className="space-x-2 space-y-1">
                {d.techs.length &&
                  d.techs.map((d: string, index: number) => (
                    <Badge key={index} text={d} />
                  ))}
              </div>
              <h3 className="text-sm md:text-xl font-bold">{d.title}</h3>
              <ExpandableText
                className="w-full text-xs text-left md:text-sm"
                length={80}
              >
                {d.description}
              </ExpandableText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
