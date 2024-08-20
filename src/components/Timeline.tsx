import { Event } from "@/utils/interface/interface";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";

interface Props {
  events: Event[];
}

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {children}
        </p>
      );
    },
  },
};

const Timeline = ({ events }: Props) => {
  return (
    <ol className="relative border-s border-white">
      {events.map((d: Event, i: number) => (
        <li
          key={i}
          className={`${i == events.length - 1 ? "mb-0" : "mb-10"}  ms-6`}
        >
          <span className="absolute flex items-center justify-center w-6 h-6 bg-sandybrown rounded-full -start-3 shadow-[0px_0px_30px_#FFA400]"></span>
          <div className="flex items-center mb-1">
            <span className="text-sm md:text-lg">
              {`${d.title} at`}{" "}
              <span className="text-base md:text-lg font-bold text-vermicelles">
                {d.company}
              </span>
            </span>
          </div>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {d.date}
          </time>
          {documentToReactComponents(d.description, options)}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
