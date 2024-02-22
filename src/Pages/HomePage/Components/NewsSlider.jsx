import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { baseAPI } from "../../../services/baseApi";
const NewsSlider = () => {
  const sliderRef = useRef(null);

  const [news, setNews] = useState([]);

  useEffect(() => {
    baseAPI
      .get("/news/allnews")
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNews(sorted);
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const scrollNext = () => {
    sliderRef.current.slickNext();
  };

  const scrollPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="mt-10">
      <div className="w-full title2 pl-3 pr-3 flex justify-center items-center mb-5">
        <h2 className="text-textColor text-2xl  w-fit bg-neutral-100 z-20 pl-2 pr-2">
          სიახლეები
        </h2>
      </div>

      <div className="w-screen h-fit relative  ">
        <Slider ref={sliderRef} {...settings}>
          {news.slice(0, 6).map((item) => (
            <article
              key={item.id}
              className="flex-1  w-full  min-h-72 rounded-xl p-3"
            >
              <img
                className="w-full h-52 rounded-xl"
                src={item.img}
                alt={`${item.title}_img`}
              />
              <div className="p-3 h-1/3 flex w-full font-normal text-lg rounded-b-xl">
                <h2>{item.title}</h2>
                <p>{item.id}</p>
              </div>
            </article>
          ))}
        </Slider>

        <button
          className="text-5xl text-black opacity-80 rounded-xl p-2 absolute top-1/4 left-2 text-shadow-sm"
          onClick={scrollPrev}
        >
          &lt;
        </button>
        <button
          className="text-5xl text-black opacity-80 rounded-xl p-2 absolute top-1/4 right-2 text-shadow-sm"
          onClick={scrollNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
