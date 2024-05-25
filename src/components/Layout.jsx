import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <div className="bg-slate-100 dark:bg-zinc-900">
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
