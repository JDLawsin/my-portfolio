import Masonry from "./Masonry";

const sampleData = [
  {
    title: "Test 1",
    description:
      "test 1 test 1 test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1",
    image: "/avatar/me.png",
  },
  {
    title: "Test 1",
    description:
      "test 1 test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1",
    image: "/avatar/me.png",
  },
  {
    title: "Test 1",
    description:
      "test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1",
    image: "/avatar/me.png",
  },
  {
    title: "Test 1",
    description: "test 1",
    image: "/avatar/me.png",
  },
  {
    title: "Test 1",
    description: "test 1",
    image: "/avatar/me.png",
  },
  {
    title: "Test 1",
    description: "test 1",
    image: "/avatar/me.png",
  },
];

const MyProjects = () => {
  return (
    <div className="mt-5 px-10 md:px-[20vw]">
      <h1 className="font-bold text-base md:text-lg lg:text-xl text-center">
        Portfolio
      </h1>
      <div>
        <Masonry projects={sampleData} />
      </div>
    </div>
  );
};

export default MyProjects;
