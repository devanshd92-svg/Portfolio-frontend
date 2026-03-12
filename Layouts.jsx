import { Outlet, useLocation } from "react-router-dom"
import { AppSidebar } from "./src/Component/AppSidebar"
// import Navbar from "./src/Component/Navbar"
import {
  SidebarProvider,
  SidebarInset
} from "./src/components/ui/sidebar"
import Navbar from "./src/Component/Navbar"
import Footer from "./pages/Footer"

export default function Layout() {
  const location = useLocation()

  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    ["/login", "/register", "/admin-login"].includes(location.pathname)

  return (
   <SidebarProvider>
  <div className="flex w-full">

    <div className="md:hidden">
      <AppSidebar />
    </div>

    <div className="flex-1">
      {!hideNavbar && <Navbar  /> }
      <Outlet />
      {<Footer/>}
    </div>

  </div>
</SidebarProvider>

  )
}
