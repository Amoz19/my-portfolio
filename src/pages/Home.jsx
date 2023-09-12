import { BsLinkedin, BsGithub, BsCloudDownload } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { VscSearch } from "react-icons/vsc";
import SvgImage from "../assets/SvgImage";
import Button from "../components/Button";

const IconButton = ({ children }) => {
  return (
    <Button style='className="border-2 border-blue-700 rounded-full p-2 ml-2 md:ml-5 bg-blue-900 text-white'>
      {children}
    </Button>
  );
};

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-center mx-5 pt-5 lg:mx-12 h-[calc(100vh-90px)] dark:bg-zinc-900 rounded-lg">
        <div className="md:flex">
          <div className="flex flex-col">
            <p>
              <span className="text-l text-slate-800 dark:text-[whitesmoke]">
                Hello, I Am
              </span>
              <span className="text-blue-600 font-bold  text-xl p-2  dark:text-shadow dark:text-[whitesmoke]">
                Aung Mon
              </span>
            </p>
            <p className="text-slate-800 dark:text-[whitesmoke] text-l mt-1">
              Specializes in PERN, MERN stack, NEXTJS and can easily adapt to
              new technologies.
            </p>
            <p className="text-2xl text-center underline my-4 dark:text-[whitesmoke]">
              Frontend Developer
            </p>
            <div className="flex">
              <IconButton>
                Download CV
                <BsCloudDownload className="inline ml-1 text-xl" />
              </IconButton>
              <IconButton>
                Explore Projects
                <VscSearch className="inline ml-1 text-xl" />
              </IconButton>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <SvgImage />
          </div>
        </div>
        <div className="flex justify-center text-2xl rounded-full">
          <Button style="bg-blue-900 text-white flex p-3 rounded-full shadow-lg">
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
