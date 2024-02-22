import { useState, useEffect } from "react";

const VideoCont = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      area-aria-label="startup-georgia-official-video"
      className={`w-full p-2 flex justify-center items-center transition-all duration-300 ease-in-out ${
        scrolled ? "bg-neutral-100" : "bg-neutral-100 lg:bg-headerColor"
      } `}
    >
      <div className="shadow-lg w-full lg:w-2/3 mt-5">
        <video className="w-full" autoPlay muted loop>
          <source src="/startupVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoCont;
