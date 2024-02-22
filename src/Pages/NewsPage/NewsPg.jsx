import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseAPI } from "../../services/baseApi";
import { ErrorPage } from "../../Components/Loader";
import Loader from "../../Components/Loader";

const NewsPage = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState({
    loading: true,
    data: [],
    error: false,
  });

  useEffect(() => {
    baseAPI
      .get("/news/allnews")
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNews({
          loading: false,
          data: sorted,
          error: false,
        });
      })
      .catch((err) => {
        setNews({
          loading: false,
          data: [],
          error: true,
        });
      });
  }, []);

  const handleNavigate = (id) => {
    navigate(`/news/${id}`);
  };

  if (news.error || !news.data) {
    return <ErrorPage />;
  }

  if (news.loading) {
    return <Loader loading={news.loading} />;
  }

  return (
    <>
      <section className="w-full grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10  mt-5 xl:pl-14 custom-padding2">
        {news.data.map((item) => (
          <article
            onClick={() => handleNavigate(item._id)}
            className="flex-1 w-full xl:w-11/12 min-h-72   rounded-xl cursor-pointer"
            key={item._id}
          >
            <img
              className="w-full h-52 rounded-xl"
              src={item.img}
              alt={`${item.title}_img`}
            />
            <div className=" p-3 h-1/3 flex  w-full  font-normal text-lg rounded-b-xl">
              <h2>{item.title}</h2>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default NewsPage;
