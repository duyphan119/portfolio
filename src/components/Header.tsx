import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

// components
import Nav from "./Nav";
import MobibleNav from "./MobibleNav";
export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Dusk<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact" role="button" className={buttonVariants({})}>
            Hire Me
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobibleNav />
        </div>
      </div>
    </header>
  );
}
