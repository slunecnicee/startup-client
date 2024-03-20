import { useState, useEffect } from "react";
import CommonBtn from "../../../Components/commonBtn";
import ChatIcon from "@mui/icons-material/Chat";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { useNavigate } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const VideoCont = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
      className={`w-full p-2 flex flex-col h-fit justify-start items-center transition-all duration-300 ease-in-out  ${
        scrolled ? "bg-neutral-100" : "bg-neutral-100 lg:bg-headerColor"
      } `}
    >
      <div className="shadow-lg w-full lg:w-2/3 mt-5 ">
        <video className="w-full  " autoPlay muted loop>
          <source src="/startupVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full h-fit p-5 flex flex-col  md:flex-row items-center justify-center gap-3 lg:gap-24 mr-10 mt-5">
        <CommonBtn
          scrolled={scrolled}
          text=" შეავსე განაცხადი"
          icon={
            <BorderColorIcon sx={{ color: scrolled ? "#4682b4" : "#22435e" }} />
          }
          handleNavigate={() => navigate("/application")}
        />
        <CommonBtn
          scrolled={scrolled}
          text="მოითხოვე ზარი"
          icon={
            <PhoneCallbackIcon sx={{ color: scrolled ? "#4682b4" : "#22435e" }} />
          }
        />
        <CommonBtn
          scrolled={scrolled}
          text="მოგვწერე მეილი "
          icon={<ChatIcon sx={{ color: scrolled ? "#4682b4" : "#22435e" }} />}
          handleNavigate={() => navigate("/contact")}
        />
      </div>
    </div>
  );
};

export default VideoCont;
