import { Outlet } from "react-router-dom";

//* COMPONENTS *//
import { SideMenu } from "../components";

export const DashboardLayout = () => {
  return (
    <div className="w-screen h-screen overflow-y-scroll antialiased bg-slate-200 text-slate-900 selection:bg-blue-900 selection:text-white">
      <div className="relative flex flex-row w-screen">
        <SideMenu />

        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
