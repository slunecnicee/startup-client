import VideoCont from "./Components/video";
import NewsSlider from "./Components/NewsSlider";
import { useNavigate } from "react-router-dom";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InsightsIcon from "@mui/icons-material/Insights";
import SchoolIcon from "@mui/icons-material/School";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useRef,useEffect,useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (inView && !hasPlayed) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
      setHasPlayed(true);
    }
  }, [inView, controls, hasPlayed]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();


  return (
    <main className="min-h-screen bg-neutral-100 ">
      <VideoCont />

      
<AnimatedComponent>
<div
       className="w-full bg-white p-4 sm:py-10 flex flex-col sm:flex-row sm:gap-5 sm:mt-12 ">
        <div className="flex gap-8 text-gray-400 text-base lg:text-xl font-bold items-center p-3 w-full sm:w-1/2 justify-between sm:justify-center ">
          <SignalCellularAltIcon
            sx={{ color: "lightgray", fontSize: "90px" }}
          />
          <h2>2800+ შემოსული პროექტი </h2>
        </div>

        <div className="flex gap-8 text text-gray-400 text-base lg:text-xl w-full sm:w-1/2  font-bold items-center p-3 justify-between sm:justify-center">
          <InsightsIcon sx={{ color: "lightgray", fontSize:  "90px" }} />
          <h2> 93+ გამრჯვებული პროექტები </h2>
        </div>
      </div>
      <div className="w-full bg-white p-4 sm:py-10 flex flex-col sm:flex-row gap-5 ">
        <div className="flex gap-8 text-gray-400 text-base lg:text-xl font-bold items-center p-3 w-full sm:w-1/2 justify-between sm:justify-center ">
          <SchoolIcon sx={{ color: "lightgray", fontSize: "90px" }} />
          <h2>პროფესიული ტრენინგები </h2>
        </div>

        <div className="flex gap-8 text text-gray-400 text-base lg:text-xl w-full sm:w-1/2 font-bold items-center p-3 justify-between sm:justify-center">
          <PaymentsIcon sx={{ color: "lightgray", fontSize: "90px" }} />
          <h2> 100,000 ლარამდე დაფინანსება </h2>
        </div>
      </div>

</AnimatedComponent>


<AnimatedComponent>
<NewsSlider />
</AnimatedComponent>
  

<AnimatedComponent>
<div className="p-10 md:pb-16 md:pt-16 bg-neutral-100 mt-24 flex flex-col md:flex-row justify-center items-center mb-20">
        <div
          onClick={() => navigate("/winners")}
          className="w-full md:w-1/2 flex flex-col justify-center pb-5 md:pb-0 items-center gap-5 border-b-2 md:border-b-0 md:border-r-2 border-gray-300 rounded-sm"
        >
          <h2 className="text-base sm:text-2xl lg:text-3xl text-textColor">
            გამარჯვებული პროექტები
          </h2>
          <figure>
            <img src="/icon_12.png" alt="" />
          </figure>
        </div>

        <div className=" w-full md:w-1/2 pt-5 md:pt-0  flex flex-col justify-center items-center gap-5">
          <h2 className="text-base sm:text-2xl lg:text-3xl text-textColor">
            პრიორიტეტული დარგები
          </h2>
          <figure>
            <img src="/icon_14.png" alt="" />
          </figure>
        </div>
      </div>
</AnimatedComponent>
    </main>
  );
};

export default HomePage;
