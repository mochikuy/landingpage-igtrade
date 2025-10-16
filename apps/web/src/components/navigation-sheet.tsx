import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="!text-black !bg-white !border-gray-300 hover:!bg-gray-100">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3 !bg-white bg-white !text-black" style={{ backgroundColor: "white" }}>
        <Logo />
        <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
      </SheetContent>
    </Sheet>
  );
};
