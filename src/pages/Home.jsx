import { BsLinkedin, BsGithub,BsCloudDownload,BsSearch} from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { VscSearch } from "react-icons/vsc";

import phtoto from '../assets/programming.svg' 

const Icon = (props) => {
    return(
        <button className="border-2 border-black rounded-full p-2 ml-2 md:ml-5 bg-yellow-300">
            {props.children}
        </button>
    )
}

// const ContactIcon = (props) => {
//     return(
//         <button className="">
//             {props.children}
//         </button>
//     )
// }
  
const Home = () => {
    return ( 
       <>
            <section className="flex flex-col m-5">
                <p>
                    <span className="text-l text-slate-800">Hello, I am</span>
                    <span className="ml-2 text-black text-l bg-yellow-300 rounded-full p-2 shadow-lg shadow-slate-500/40">Aung Mon</span>
                </p>
                <p className="text-slate-800 text-l my-4">Super confident in javascript, passionate in Open-source trending languages such as React JS, Nextjs and more...</p>
                <p className="text-2xl text-center mb-3">Full-stack developer</p>
                <div className="flex mb-4">
                    <Icon>Download Cv<BsCloudDownload className="inline ml-1 text-xl"/></Icon>
                    <Icon>Explore Projects<VscSearch className="inline ml-1 text-xl"/></Icon>
                </div>
                
                <div>
                    <img src={phtoto} alt="logo" className="w-42"/>
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