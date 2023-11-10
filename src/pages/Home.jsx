import { BsLinkedin, BsGithub, BsCloudDownload } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { VscSearch } from "react-icons/vsc";
import SvgImage from "../assets/SvgImage";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { MaterialSymbolsCloudDownloadRounded } from "../assets/icons/frontendIcon";

const IconButton = ({ children, style }) => {
  return (
    <Button
      style={twMerge(
        `border border-blue-600 rounded-lg p-3 mr-2 md:mr-5 hover:bg-blue-600 hover:text-white ${style} dark:text-white `
      )}
    >
      {children}
    </Button>
  );
};

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-center px-5 pt-5 lg:mx-12 h-[calc(100vh-90px)] dark:bg-zinc-900 rounded-lg">
        <div className="md:flex">
          <div className="flex flex-col">
            <p className="text-xl text-slate-800 dark:text-[whitesmoke]">
              Hello, <span className="text-3xl">👋</span>
            </p>
            <p className="font-black  text-2xl dark:text-shadow dark:text-[whitesmoke]">
              I am <span className="text-blue-600">Aung Mon</span>
              {/* <span className="text-slate-800 dark:text-[whitesmoke] text-l mt-1">
                , a Frontend Developer
              </span> */}
            </p>
            <p className="my-3 dark:text-[whitesmoke]">
              a dedicated front-end developer with a profound passion for web
              development.{" "}
            </p>
            <div className="flex">
              <Link to={"https://shorturl.at/lqEK3"}>
                <IconButton style="bg-blue-600 text-white transition hover:bg-white hover:text-black">
                  Download CV
                  <MaterialSymbolsCloudDownloadRounded className="inline ml-3 text-xl" />
                </IconButton>
              </Link>
              <Link to="./projects">
                <IconButton>
                  Explore Projects
                  <VscSearch className="inline ml-3 text-xl" />
                </IconButton>
              </Link>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <SvgImage />
          </div>
        </div>
        <div className="flex justify-center text-2xl rounded-full">
          <Button style="bg-blue-600 text-white flex p-3 rounded-full shadow-lg">
            <BsGithub />
            <BsLinkedin className="mx-10" />
            <TfiEmail />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
