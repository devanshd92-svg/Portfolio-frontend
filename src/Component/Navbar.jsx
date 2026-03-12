import React, {  useState } from "react";
import { NavLink, } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SiApachesolr } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, SearchX } from "lucide-react";
import { AppSidebar } from "./AppSidebar";
import { FaCartShopping } from "react-icons/fa6";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Project", path: "/Project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
//   const [opendown, setOpendown] = useState(false);
//   const [search, setSearch] = useState("");
//   const [show, setShow] = useState(false);



 



  return (
    <>
      <nav className="w-full h-18 xl:h-22  bg-transparent backdrop-blur-sm fixed z-50">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 xl:px-0 flex h-full flex-row items-center justify-between w-full">
          {/* LEFT NAV LINKS */}
          <NavigationMenu>
            <NavigationMenuList className="hidden lg:flex gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-2xl font-medium transition-colors ${
                          isActive
                            ? "text-black"
                            : "text-gray-500 hover:text-black"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* LOGO */}
          <div>
            
          <SiApachesolr className="text-blue-500 text-4xl " />
         
          </div>

         

          

          {/* MOBILE MENU BUTTON */}
         
           
          
            <Menu className="lg:hidden" onClick={() => setOpen(true)} />
         
        </div>

        <AppSidebar open={open} setOpen={setOpen} />
      </nav>
    </>
  );
};

export default Navbar;
