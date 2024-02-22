import { useState, useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CommonNav from "./Components/CommonNav";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [clickCount, setClickCount] = useState(1);

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

  const toggleModal = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 1) {
      setAnimating(true);
      setShowModal(true);
    } else {
      setAnimating(false);
      setClickCount(1);

      setTimeout(() => setShowModal(false), 495);
    }
  };

  return (
    <header
      className={`fixed flex items-center pl-8 justify-between top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out p-2 ${
        scrolled
          ? "bg-neutral-100 text-textColor "
          : "bg-headerColor shadow-lg text-white"
      }`}
    >
      <NavLink to="/">
        <figure area-aria-label="startup_georgia_logo_container">
          <img
            className="h-20 "
            src={scrolled ? "/logo.png" : "/logo_white.png"}
            alt="startup_georgia_logo"
          />
        </figure>
      </NavLink>

      <div className="hidden lg:block">
        <CommonNav />
      </div>

      {showModal && (
        <div
          className={`lg:hidden fixed top-0 right-0 w-2/3 sm:w-1/3 shadow-xl z-50 h-screen transition-all duration-300 ease-in-out ${
            animating ? "open" : "close"
          } ${
            scrolled
              ? "bg-neutral-100 text-textColor"
              : "bg-headerColor text-white"
          }`}
        >
          <CommonNav />
        </div>
      )}

      <div className="xl:flex gap-5 items-center mr-3 hidden">
        <span>
          <FacebookIcon
            sx={{
              fontSize: "2.5rem",
              border: scrolled ? "2px solid #4682b4" : "2px solid white",
              color: scrolled ? "#4682b4" : "white",
              borderRadius: "50%",
              padding: "5px",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </span>
        <span>
          <YouTubeIcon
            sx={{
              fontSize: "2.5rem",
              border: scrolled
                ? "2px solid rgb(215, 43, 43) "
                : "2px solid white",
              color: scrolled ? " rgb(215, 43, 43)" : "white",
              borderRadius: "50%",
              padding: "5px",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </span>
      </div>

      <div
        area-label="menu_open_button"
        onClick={toggleModal}
        className="w-12 relative flex flex-col mr-5 justify-center gap-2 lg:hidden z-50 "
      >
        <span
          className={`w-1/2 h-1 rounded-sm  ${
            scrolled ? "bg-textColor" : "bg-white"
          }`}
        ></span>
        <span
          className={`w-full h-1  rounded-sm ${
            scrolled ? "bg-textColor" : "bg-white"
          }`}
        ></span>
        <span
          className={`w-1/2 h-1 self-end rounded-sm ${
            scrolled ? "bg-textColor" : "bg-white"
          }`}
        ></span>
      </div>

      {showModal && (
        <div className="fixed left-0 top-0 z-40 w-screen h-screen bg-black opacity-50"></div>
      )}
    </header>
  );
};

export default Header;
