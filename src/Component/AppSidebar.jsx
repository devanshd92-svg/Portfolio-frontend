import { NavLink } from "react-router-dom"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Home, ShoppingBag, Star, Phone } from "lucide-react"

const items = [
  { title: "Home", path: "/", icon: Home },
  
  { title: "About", path: "/about", icon: Star },
  { title: "Project", path: "/Project", icon: ShoppingBag },
  { title: "Contact", path: "/contact", icon: Phone },
]

export function AppSidebar({ open, setOpen }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-64 p-6 bg-white">

        <div className="flex flex-col gap-5 mt-8">

          {items.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-lg text-black hover:text-blue-600"
              >
                <Icon size={20} />
                {item.title}
              </NavLink>
            )
          })}

        </div>

      </SheetContent>
    </Sheet>
  )
}