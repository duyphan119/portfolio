"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderBtns({
  btnClassName = "",
  containerClassName = "",
  iconsClassName = "",
}: {
  containerClassName?: string;
  btnClassName?: string;
  iconsClassName?: string;
}) {
  const swiper = useSwiper();
  return (
    <div className={containerClassName}>
      <button onClick={() => swiper.slidePrev()} className={btnClassName}>
        <PiCaretLeftBold className={iconsClassName} />
      </button>
      <button onClick={() => swiper.slideNext()} className={btnClassName}>
        <PiCaretRightBold className={iconsClassName} />
      </button>
    </div>
  );
}
