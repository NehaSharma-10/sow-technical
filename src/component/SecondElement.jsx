import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow shadow`}
      style={{
        ...style,
        background: "#F6F6F6",
        height: "50px",
        width: "50px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 4px 4px 0px #00000040",
        justifyContent: "center",
        borderRadius: "0px",
        right: "-30px",
      }}
      onClick={onClick}
    >
      <span
        style={{
          fontSize: "25px",
          display: "flex",
          color: "#64615B",
        }}
      >
        <FaAngleRight />
      </span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        background: "#F6F6F6",
        height: "50px",
        width: "50px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 4px 4px 0px #00000040",
        justifyContent: "center",
        borderRadius: "0px",
        left: "-30px",
      }}
      onClick={onClick}
    >
      <span
        class="material-symbols-outlined"
        style={{
          fontSize: "25px",
          color: "#64615B",
        }}
      >
        <FaAngleLeft />
      </span>
    </div>
  );
};

const SecondElement = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          PrevArrow: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.12,
          slidesToScroll: 1,
          nextArrow: false,
          PrevArrow: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full my-10">
        <h2 className="text-[#887C68] uppercase text-center text-[28px] text-martel font-semibold my-20">
          OUR SERVICES
        </h2>
        <div className="slider-container relative">
          <Slider {...settings}>
            {[
              { id: "dubai-hills", name: "Dubai Hills Estate" },
              { id: "dubai-marina", name: "Dubai Marina" },
              { id: "emirates-living", name: "Emirates Living " },
              { id: "arabian-r", name: "Arabian Ranches " },
              { id: "arabian-r2", name: "Arabian Ranches II " },
              { id: "downtown-dubai", name: "Downtown Dubai" },
            ].map((index) => (
              <div key={index} className="px-2">
                <div className={`gradient-box index-1 bg-${index.id}`}>
                  <div
                    className={`flex flex-col justify-end gradient-box h-[552px]  bg-[linear-gradient(180.21deg,rgba(255,255,255,0) 61.75%,rgba(0,0,0,0.8) 99.82%)] `}
                  >
                    <p className="text-martel text-white font-semibold uppercase text-center text-[28px] mb-10">
                      {index.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SecondElement;
