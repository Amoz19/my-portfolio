import { projectsData } from "../data/data";
import Button from "../components/Button";

const Projects = () => {
  return (
    <>
      <h1 className="dark:text-white text-primary font-black text-3xl dark:text-shadow my-5 text-center ">
        Project Showcase
      </h1>
      <div className="w-3/4 m-auto grid lg:grid-cols-2 grid-cols-1  gap-8 ">
        {projectsData.map((data) => (
          <div
            key={data.projectName}
            className="mb-4 border border-blue-100  rounded-md shadow-lg bg-white  py-7 "
          >
            <div className="flex flex-col items-center rounded-t-lg">
              <img
                src={data.projectImage}
                className="rounded-t-md object-cover w-3/4"
              />
            </div>
            <div className="w-3/4  m-auto flex justify-center flex-wrap text-xs mt-2  ">
              {data.stack.map((stack) => (
                <div key={stack} className="">
                  <div>
                    <button className=" text-white bg-slate-800 rounded-full px-2 py-1 m-2">{`${stack}`}</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-3/4 mx-auto mt-3">
              <div className="">
                <h1 className="text-l font-semibold">{data.projectName}</h1>
                <p className="text-sm text-secondary my-1">
                  {data.projectDescription.title}
                </p>
              </div>
              <div className="mt-3">
                {data.projectDescription.features.map((feature) => (
                  <ul
                    key={feature.feature}
                    className="list-disc list-outside text-sm"
                  >
                    <li>{feature.feature}</li>
                  </ul>
                ))}
              </div>

              <div className="flex justify-between w-full lg:w-2/3 m-auto text-white mt-6">
                <Button
                  style="bg-primary rounded px-2   lg:px-3 py-1"
                  handleClick={() => window.open(data.url, "_blank")}
                >
                  LIVE
                </Button>
                <Button
                  style="bg-secondary rounded px-2 lg:px-3 py-1"
                  handleClick={() => window.open(data.githubUrl, "_blank")}
                >
                  Source Code
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
