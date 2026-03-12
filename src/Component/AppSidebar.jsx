import { NavLink } from "react-router-dom"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Home, ShoppingBag, Star, Phone } from "lucide-react"

const items = [
  { title: "Home", path: "/", icon: Home },
  { title: "Shop", path: "/shop", icon: ShoppingBag },
  { title: "Feature", path: "/feature", icon: Star },
  { title: "Contact", path: "/contact", icon: Phone },
]

export function AppSidebar({ open, setOpen }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-64 p-6">

        <div className="flex flex-col gap-5 mt-8">
          {items.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-lg hover:text-blue-600"
            >
              <item.icon size={18} />
              {item.title}
            </NavLink>
          ))}
        </div>

      </SheetContent>
    </Sheet>
  )
}
