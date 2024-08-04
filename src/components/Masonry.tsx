import { Portfolio } from "@/utils/interface/interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  projects: Portfolio[];
}

const Masonry = ({ projects }: Props) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="gap-4 columns-2 md:columns-3">
        {projects.map((d: Portfolio, i: number) => (
          <div
            key={i}
            className={`relative ${
              i == 0 ? "mt-0" : "mt-4"
            } overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out`}
          >
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <Image
              src={d.image}
              alt="Card Image"
              width={400}
              height={200}
              className="object-cover w-full"
            />
            <div className="p-4 bg-grayish-blue">
              <h3 className="text-xl font-bold">{d.title}</h3>
              <p className="text-sm text-muted-foreground">{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
