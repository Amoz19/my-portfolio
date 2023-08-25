import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCaretDown, faSun,faXmark } from '@fortawesome/free-solid-svg-icons';
import { BiSun,BiChevronDown } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";



import { NavLink } from "react-router-dom";
import { ModelContext } from '../context/ModelContext';
import { useContext } from 'react';

const navigation = [
    ['Home', '/',],
    ['Experience', '/experience',],
    ['Projects', '/projects',],
    ['Contact', '/contact',],
];


const Logo = () => {
    return (  
        <h2 className="font-Galada text-2xl text-bold border-2 border-black rounded-[50%] px-3 hover:bg-yellow-300">Amoz</h2>
    );
}

const MenuIcon = () => { 
    const {setIsOpen} = useContext(ModelContext);
    return(
        <div 
            className='flex md:hidden items-center bg-white rounded-full py-2 px-4 shadow-sm mr-4'
            onClick={() => setIsOpen(true)}
         >
            <button className="mr-3">Menu</button>
            <BiChevronDown />
        </div>
    )
}

const LightDarkIcon = () => {
    return(
        <button className='bg-white rounded-full px-4 py-2 shadow-sm text-stone-950'><BiSun /></button>
    )
}

const Menu = ({item,style}) => {
    const {setIsOpen} = useContext(ModelContext);
    const Menus = item.map(([title, url]) => (
        <NavLink 
        to={url} 
        key={title}
        className={style}
        onClick={() => setIsOpen(false)}
        >{title}</NavLink>
    ))

    return Menus;
}

const DesktopMenu = () => {
    const activeClass = ({isActive}) => `
         py-2 px-5 text-center font-medium rounded-full
        ${isActive ? 'bg-white text-black' : 'text-white'}
        `;
    return(
        <>
            <div className='w-auto bg-black py-3 px-4 rounded-full'>
                <Menu item={navigation} style={activeClass}/>
            </div>
        </>
       
    )
}

const MobileMenu = () => {
    const {setIsOpen} = useContext(ModelContext);
    const activeClass = ({isActive}) => `
        px-8 py-3 border-b-2 hover:text-yellow-800 last:border-b-0
        ${isActive ? 'text-yellow-800' : 'text-black'}
        `;
        
    return(
        <>
            <div className='px-8 py-5 opacity-60 flex justify-between'>
                <p>Menu</p>
                <RxCross2 onClick={() => setIsOpen(false)}/>
            </div>
            <Menu item={navigation} style={activeClass}/>
        </>
        
    )
}
 
 
const Header = () => {
   const {isOpen} = useContext(ModelContext);
   console.log(isOpen);
    return ( 
        <nav className="flex items-center justify-between bg-[whitesmoke] px-5 lg:px-12 py-3">
            <Logo />
            <div className='flex justify-between items-center xl:w-2/4 md:w-3/4'>
                <div className="hidden md:flex  bg-black rounded-full">
                   <DesktopMenu />
                </div>
                <div className='flex text-stone-950'>
                    <MenuIcon />
                    <LightDarkIcon />
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'flex flex-col'  : 'hidden' } fixed inset-0 backdrop-blur-sm w-full h-screen bg-zinc-800/40`}>
                <div className='mx-5 mt-5 flex flex-col bg-[whitesmoke] rounded-lg'>
                    <MobileMenu />
                </div>
               
            </div>
        </nav>
        
     );
}
 
export default Header;