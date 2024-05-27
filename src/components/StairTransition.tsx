"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// components
import Stairs from "./Stairs";

export default function StairTransition() {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="" key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="pointer-events-none h-screen w-screen fixed top-0 bg-primary"
            initial={{ opacity: 1 }}
            animate={{
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeInOut",
              },
              opacity: 0,
            }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}
