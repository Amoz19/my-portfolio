import { BsLinkedin, BsGithub,BsCloudDownload,BsSearch} from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { VscSearch } from "react-icons/vsc";

import phtoto from '../assets/programming.svg' 

const Icon = (props) => {
    return(
        <button className="border-2 border-blue-900 rounded-full p-2 ml-2 md:ml-5 bg-yellow-300">
            {props.children}
        </button>
    )
}

const Home = () => {
    return ( 
       <>
            <section className="flex flex-col justify-center mx-5 pt-5 lg:mx-12 sm:h-[calc(100vh-100px)]">
                <div className="md:flex">
                    <div className="flex flex-col items-center">
                        <p className="">
                            <span className="text-l text-slate-800">Hello, I Am</span>
                            <span className="text-xl p-2 text-shadow">Aung Mon</span>
                        </p>
                        <p className="text-slate-800 text-l mt-1 px-8">Specializes in PERN, MERN stack, NEXTJS and can easily adapt to new technologies.</p>
                        <p className="text-2xl my-4 mb-4 text-center">Full-Stack Developer</p>
                        <div className="flex">
                            <Icon>Download Cv<BsCloudDownload className="inline ml-1 text-xl"/></Icon>
                            <Icon>Explore Projects<VscSearch className="inline ml-1 text-xl"/></Icon>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={phtoto} alt="logo" className="max-w-sm"/>
                    </div>
                </div>
                <div className="flex justify-center text-2xl my-5 rounded-full">
                    <div className="bg-yellow-300 flex p-3 rounded-full shadow-lg">
                        <BsGithub />
                        <BsLinkedin className="mx-10"/>
                        <TfiEmail />
                    </div>
                </div>

            </section>
       </>
     );
}
 
export default Home;