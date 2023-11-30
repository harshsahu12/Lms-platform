import { SidebarRoutes } from "./SidebarRoutes";
import { Logo } from "./logo";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex items-center text-2xl gap-1.5 text-[#0369a1] cursor-pointer font-medium">
        <Logo /> Learnhub
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
