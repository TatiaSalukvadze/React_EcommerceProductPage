import React, { useState } from "react";
import p1 from "../assets/image-product-1.jpg";
import p1t from "../assets/image-product-1-thumbnail.jpg";
import p2 from "../assets/image-product-2.jpg";
import p2t from "../assets/image-product-2-thumbnail.jpg";
import p3 from "../assets/image-product-3.jpg";
import p3t from "../assets/image-product-3-thumbnail.jpg";
import p4 from "../assets/image-product-4.jpg";
import p4t from "../assets/image-product-4-thumbnail.jpg";
import Next from "../assets/icon-next.svg";
import Prev from "../assets/icon-previous.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pics = [p1, p2, p3, p4];
const thumbs = [p1t, p2t, p3t, p4t];

function Pics() {
  const [npic, setnpic] = useState(p1);
  const PrevArrow = (props) => (
    <img
      src={Prev}
      alt="previous"
      className="absolute top-2/4 z-10 pl-[16px] -translate-y-2/4"
      onClick={props.onClick}
    />
  );

  const NextArrow = (props) => (
    <img
      src={Next}
      alt="next"
      className="absolute top-2/4 right-0 pr-[16px] z-10 -translate-y-2/4"
      onClick={props.onClick}
    />
  );
  return (
    <div className="xl:w-445 lg:w-96 md:w-80 sm:w-445 w-[375px] flex flex-col gap-8 md:mt-20">
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        prevArrow={<PrevArrow />} // Custom Previous Arrow Component
        nextArrow={<NextArrow />} // Custom Next Arrow Component
        className="relative md:hidden"
      >
        {pics.map((el, ind) => (
          <img src={el} className="w-screen" />
        ))}
      </Slider>
      <img
        src={npic}
        alt="main pic"
        className="hidden md:inline-flex w-full md:rounded-xl hover:cursor-pointer"
      />
      <div className="w-full flex justify-between hidden md:inline-flex">
        {thumbs.map((el, ind) => (
          <div
            className={`w-20 h-20 bg-white rounded-lg  ${
              npic == pics[ind]
                ? "border-2 border-orange-500 border-solid "
                : ""
            }`}
          >
            <img
              src={el}
              alt="thumbnail"
              className={`w-20 h-20 rounded-lg  ${
                npic == pics[ind] ? `opacity-50` : ""
              } hover:bg-white hover:opacity-70 hover:cursor-pointer`}
              onClick={() => setnpic(pics[ind])}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pics;
