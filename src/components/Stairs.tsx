"use client";

import { motion } from "framer-motion";

const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse indev for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
export default function Stairs() {
  return (
    <>
      {/* render 6 motion divs, each represent a step of stairs.
  Each div will have the same animation defined by the stairsAnimation object.
  The delay for each div is calculated dynamically based on it's reversed index, creating a staggered effect width decreasing delay for each subsequent step.
  */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease: "easeInOut",
          }}
          className="h-full w-full bg-white relative"
        ></motion.div>
      ))}
    </>
  );
}
