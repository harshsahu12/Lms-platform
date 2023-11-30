import { NavbarRoutes } from "@/components/NavbarRoutes";
import { MobileSiderbar } from "./MobileSiderbar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSiderbar />
      <NavbarRoutes />
    </div>
  );
};
