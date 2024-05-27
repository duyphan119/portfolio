"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function MobibleNav() {
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  const onOpenChange = (state: boolean) => {
    setOpen(state);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col">
          {/* logo */}
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Dusk<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          {/* nav */}
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map(({ name, path }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "text-xl capitalize hover:text-accent transition-all",
                    isActive && "text-accent border-b-2 border-b-accent"
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
