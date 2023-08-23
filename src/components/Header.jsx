import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretDown, faSun } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";
import { text } from '@fortawesome/fontawesome-svg-core';
const Header = () => {
    const navigation = [
        ['Home', '/',],
        ['Experience', '/experience',],
        ['Projects', '/projects',],
        ['Contact', '/contact',],
    ];

    const activeClass = ({isActive}) => `
    w-30 p-2 px-5  text-center font-medium border-r-2 border-slate-200 last:border-0 hover:text-yellow-300
    ${isActive ? 'text-yellow-300' : 'text-white'}
`;

    return ( 
        <nav className="flex items-center justify-between bg-[whitesmoke] px-10 py-3">
            <div>
                <h2 className="font-Galada text-2xl text-bold border-2 border-black rounded-[50%] px-3 hover:bg-yellow-300">Amoz</h2>
            </div>
            <div className='flex justify-between items-center xl:w-2/4 md:w-3/4'>
                <div className="hidden md:flex  bg-black rounded-full">
                    {navigation.map(([title, url]) => (
                        <NavLink 
                        to={url} 
                        key={title}
                        className={activeClass}
                        >{title}</NavLink>
                    ))}
                </div>
                <div className='flex text-stone-950'>
                    <div className='flex md:hidden items-center bg-white rounded-full py-2 px-4 shadow-sm mr-4'>
                        <button className="mr-3">Menu</button>
                        <FontAwesomeIcon icon={faCaretDown}/>
                    </div>
                    <div>
                        <button className='bg-white rounded-full px-4 py-2 shadow-sm text-stone-950'><FontAwesomeIcon icon={faSun}/></button>
                    </div>
                </div>
            </div>
            
                
            
            
        </nav>
        
     );
}
 
export default Header;