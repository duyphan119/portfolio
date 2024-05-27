"use client";

import { cn } from "@/lib/utils";
import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years of experience",
  },
  {
    num: 26,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-8 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-srap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ num, text }) => {
            return (
              <div
                key={text}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-semibold"
                />
                <p
                  className={cn(
                    "leading-snug text-white/80",
                    text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  )}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
