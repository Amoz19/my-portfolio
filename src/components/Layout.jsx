import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
    return ( 
        <div className="bg-[whitesmoke] dark:bg-zinc-800">
            <Header />
            <Outlet />
        </div>
     );
}
 
export default Layout;