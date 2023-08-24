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
            <section className="h- inset-0 flex flex-col m-5 md:mx-10 md:items-center">
                <p>
                    <span className="text-l text-slate-800">Hello, I Am</span>
                    <span className="ml-2 text-black text-l bg-yellow-300 border-2 border-blue-900 rounded-full p-2 shadow-lg shadow-slate-500/40">Aung Mon</span>
                </p>
                <p className="text-slate-800 text-l my-4">Full-Stack developer who specializes in PERN, MERN stack, NEXTJS and can easily adapt to new technologies.</p>
                <p className="text-2xl text-center mb-3">Full-Stack Developer</p>
                <div className="flex mb-4 justify-center">
                    <Icon>Download Cv<BsCloudDownload className="inline ml-1 text-xl"/></Icon>
                    <Icon>Explore Projects<VscSearch className="inline ml-1 text-xl"/></Icon>
                </div>
                
                <div className="flex justify-center">
                    <img src={phtoto} alt="logo" className="w-42 md:w-96"/>
                </div>
                <div className="flex text-2xl justify-center my-5 rounded-full">
                    <div className="bg-yellow-300 flex p-3 rounded-full">
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