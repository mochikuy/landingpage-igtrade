import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
  } from "@/components/ui/navigation-menu";
  import { NavLink } from "react-router";
  import type { ComponentProps } from "react";
  
  export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
    <NavigationMenu {...props}>
      <NavigationMenuList className="!border-none gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink to="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all text-black hover:bg-gray-100 hover:text-black h-9 px-4 py-2">Tentang Kami</NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all text-black bg-white hover:bg-gray-100 hover:text-black data-[state=open]:!bg-gray-100 data-[state=open]:!text-black h-9 px-4 py-2">Produk Kami</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white p-4 shadow-md min-w-72 !border-0 !bg-white bg-white" style={{ border: "none", backgroundColor: "white" }}>
            {/* <div className="rounded-2xl border bg-white p-4 shadow-md min-w-72"> */}
              <ul className="grid gap-2">
                <li>
                  <NavLink to="/coming-soon" className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-blue-50">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-blue-600 text-sm font-medium">1</span>
                    <span className="text-black">Safety Box</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/coming-soon" className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-blue-50">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-blue-600 text-sm font-medium">2</span>
                    <span className="text-black">Financial Tools</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/coming-soon" className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-blue-50">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-blue-600 text-sm font-medium">3</span>
                    <span className="text-black">Pneumatic</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/coming-soon" className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-blue-50">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-blue-600 text-sm font-medium">4</span>
                    <span className="text-black">Padel Racket</span>
                  </NavLink>
                </li>
              </ul>
            {/* </div> */}
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink to="/contact-us" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all text-black hover:bg-gray-100 hover:text-black h-9 px-4 py-2">Hubungi Kami</NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
  