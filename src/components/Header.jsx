import { BiSun, BiChevronDown, BiSolidMoon } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ModelContext } from "../context/ModelContext";

const Logo = () => {
  return (
    <h2 className="font-Galada text-2xl text-bold border-2 border-black rounded-[50%] px-3 hover:bg-yellow-300 dark:border-[whitesmoke] dark:text-[whitesmoke] dark:hover:bg-black">
      Amoz
    </h2>
  );
};

const MenuIcon = () => {
  const { setIsOpen } = useContext(ModelContext);
  return (
    <div
      className="flex md:hidden items-center bg-white rounded-full py-2 px-4 shadow-sm mr-4"
      onClick={() => setIsOpen(true)}
    >
      <button className="mr-3">Menu</button>
      <BiChevronDown />
    </div>
  );
};

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    const themeToSet = newIsDark ? "dark" : "light";
    window.localStorage.setItem("theme", themeToSet);
    document.documentElement.classList.toggle("dark", newIsDark);
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (localTheme === "light") {
      setIsDark(false);
    }
  }, []);

  return (
    <div className="flex items-center">
      <button
        className="bg-white rounded-full px-4 py-2 shadow-sm text-stone-950"
        onClick={toggleTheme}
      >
        {isDark ? <BiSolidMoon /> : <BiSun />}
      </button>
    </div>
  );
};

const navigation = [
  ["Home", "/"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const Menu = ({ style }) => {
  const { setIsOpen } = useContext(ModelContext);
  const Menus = navigation.map(([title, url]) => (
    <NavLink
      to={url}
      key={title}
      className={style}
      onClick={() => setIsOpen(false)}
    >
      {title}
    </NavLink>
  ));

  return Menus;
};

const Navigator = ({ style, children }) => {
  return (
    <>
      {children}
      <Menu style={style} />
    </>
  );
};

const DesktopNavigation = () => {
  const style = ({ isActive }) => `
         py-2 px-5 text-center font-medium rounded-full
        ${isActive ? "bg-white text-black" : "text-white"}
        `;
  return (
    <>
      <div className="w-auto bg-black py-3 px-4 rounded-full">
        <Navigator style={style} />
      </div>
    </>
  );
};

const MobileNavigation = () => {
  const { setIsOpen } = useContext(ModelContext);
  const style = ({ isActive }) => `
        px-8 py-3 border-b-2 dark:border-indigo-500/100 hover:text-yellow-800 last:border-b-0 flex 
        ${
          isActive
            ? "dark:text-yellow-500 text-yellow-800"
            : "dark:text-white text-black"
        }
        `;

  return (
    <>
      <div className="dark:bg-zinc-900 dark:text-white rounded-lg">
        <Navigator style={style}>
          <div className="px-8 py-5 opacity-60 flex justify-between">
            <p>Menu</p>
            <RxCross2 onClick={() => setIsOpen(false)} />
          </div>
        </Navigator>
      </div>
    </>
  );
};

const Header = () => {
  const { isOpen } = useContext(ModelContext);
  return (
    <nav className="h-[90px] flex items-center justify-between bg-slate-200 px-5 lg:px-12 py-3 dark:bg-zinc-800">
      <Logo />
      <div className="flex justify-between items-center xl:w-2/4 md:w-3/4">
        <div className="hidden md:flex  bg-black rounded-full">
          <DesktopNavigation />
        </div>
        <div className="flex text-stone-950">
          <MenuIcon />
          <ThemeSwitcher />
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "flex flex-col" : "hidden"
        } fixed z-50 inset-0 backdrop-blur-sm w-full h-screen bg-zinc-800/40`}
      >
        <div className="mx-5 mt-5 flex flex-col bg-[whitesmoke] rounded-lg">
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Header;
