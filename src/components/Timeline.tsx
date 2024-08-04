import { Event } from "@/utils/interface/interface";

interface Props {
  events: Event[];
}

const Timeline = ({ events }: Props) => {
  return (
    <ol className="relative border-s border-white">
      {events.map((d: Event, i: number) => (
        <li
          key={i}
          className={`${i == events.length - 1 ? "mb-0" : "mb-10"}  ms-6`}
        >
          <span className="absolute flex items-center justify-center w-6 h-6 bg-sandybrown rounded-full -start-3 shadow-[0px_0px_30px_#FFA400]"></span>
          <h3 className="flex items-center mb-1 text-lg font-semibold">
            {d.title}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {d.date}
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {d.description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
