import { useParams } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState, useEffect } from "react";
import { baseAPI } from "../../services/baseApi";
import { ErrorPage } from "../../Components/Loader";
import Loader from "../../Components/Loader";

const SingleNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState({
    loading: true,
    data: {},
    error: false,
  });

  useEffect(() => {
    baseAPI
      .get(`/news/${id}`)
      .then((res) => {
        setNews({
          loading: false,
          data: res.data,
          error: false,
        });
      })
      .catch((err) => {
        setNews({
          loading: false,
          data: {},
          error: true,
        });
      });
  }, [id]);

  if (!news.data || news.error) {
    return <ErrorPage />;
  }

  if (news.loading) {
    return <Loader loading={news.loading} />;
  }

  return (
    <>
      <div className="w-full flex-col lg:flex-row  flex gap-5 lg:p-10 p-3">
        <div className="lg:w-5/12 lg:h-imageHeight flex self-center lg:self-start lg:mt-4 sm:w-imageWidth sm:h-imageHeight">
          <img
            className="w-full h-full rounded-2xl "
            src={news.data.img}
            alt={`${news.data.title}_img`}
          />
        </div>

        <div className="lg:w-7/12 h-fit w-full ">
          <div className="text-sm sm:text-lg lg:text-2xl border-b p-2 font-medium pl-4  flex items-center justify-between ">
            <h2 className="  text-textColor">{news.data.title}</h2>
          </div>

          <p className="flex gap-5 border-b text-xl ml-2 items-center p-2">
            <span className="text-red-600">
              <DateRangeIcon />{" "}
            </span>
            {news.data.date}
          </p>

          <div className="w-full p-4 gap-5 border-b ">
            <p>{news.data.desc}</p>
          </div>

          {news.data.desc2 && (
            <div className="w-full p-4 gap-5 border-b ">
              <p>{news.data.desc2}</p>
            </div>
          )}

          {news.data.desc3 && (
            <div className="w-full p-4 gap-5 border-b ">
              <p>{news.data.desc3}</p>
            </div>
          )}

          {news.data.more && (
            <div className="w-full p-4 gap-2 border-b flex items-center ">
              <p className="font-bold text-sm">ვრცლად:</p>{" "}
              <a
                className="text-red-400 hover:text-red-500 transition-colors duration-200 ease"
                href={news.data.more}
              >
                ლინკი
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleNews;
