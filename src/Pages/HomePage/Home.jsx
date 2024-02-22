import CommonBtn from "../../Components/commonBtn";
import VideoCont from "./Components/video";
import ChatIcon from "@mui/icons-material/Chat";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import NewsSlider from "./Components/NewsSlider";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-neutral-100 mt-10">
      <VideoCont />

      <div className="w-full h-fit p-5 flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-24 mr-10">
        <CommonBtn
          text=" შეავსე განაცხადი"
          icon={<BorderColorIcon sx={{ color: "red" }} />}
          handleNavigate={() => navigate("/application")}
        />
        <CommonBtn
          text="მოითხოვე ზარი"
          icon={<PhoneCallbackIcon sx={{ color: "red" }} />}
        />
        <CommonBtn
          text="მოგვწერე მეილი "
          icon={<ChatIcon sx={{ color: "red" }} />}
          handleNavigate={() => navigate("/contact")}
        />
      </div>

      <NewsSlider />

      <div className="p-10 md:pb-16 md:pt-16 bg-textColor mt-14 flex flex-col md:flex-row justify-center items-center">
        <div
          onClick={() => navigate("/winners")}
          className="w-full md:w-1/2 flex flex-col justify-center pb-5 md:pb-0 items-center gap-5 border-b-2 md:border-b-0 md:border-r-2 border-gray-300 rounded-sm"
        >
          <h2 className="text-base sm:text-2xl lg:text-3xl text-white">
            გამარჯვებული პროექტები
          </h2>
          <figure>
            <img src="/icon_12.png" alt="" />
          </figure>
        </div>

        <div className=" w-full md:w-1/2 pt-5 md:pt-0  flex flex-col justify-center items-center gap-5">
          <h2 className="text-base sm:text-2xl lg:text-3xl text-white">
            პრიორიტეტული დარგები
          </h2>
          <figure>
            <img src="/icon_14.png" alt="" />
          </figure>
        </div>
      </div>

      <div className="mt-10  p-1 sm:p-3 w-full mb-10 flex justify-center">
        <CommonBtn
          text="შემოსული პროექტები 2800 გამრჯვებული პროექტები 93 "
          color="font-medium "
          borderColor="sm:text-base text-sm lg:text-xl"
          bg="sm:p-5 pl-0 border-r-0 border-l-0 border-t-0 border-b-2 rounded-sm"
        />
      </div>
    </main>
  );
};

export default HomePage;
