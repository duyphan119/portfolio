"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map(({ name, path }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            href={path}
            className={cn(
              "capitalize font-medium hover:text-accent transition-all",
              isActive && "text-accent border-b-2 border-b-accent"
            )}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
