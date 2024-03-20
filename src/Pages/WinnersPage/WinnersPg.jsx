import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseAPI } from "../../services/baseApi";
import Loader, { ErrorPage } from "../../Components/Loader";

const WinnersPage = () => {
  const navigate = useNavigate();
  const [winners, setWinners] = useState({
    loading: true,
    data: [],
    error: false,
  });

  useEffect(() => {
    baseAPI
      .get("/winners/allwinners")
      .then((res) => {
        const sortedData = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setWinners({
          loading: false,
          data: sortedData,
          error: false,
        });
      })
      .catch((err) => {
        setWinners({
          loading: false,
          data: [],
          error: true,
        });
      });
  }, []);

  const handleNavigate = (id) => {
    navigate(`/winners/${id}`);
  };

  if (winners.error || !winners.data) {
    return <ErrorPage />;
  }

  if (winners.loading) {
    return <Loader loading={winners.loading} />;
  }

  return (
    <section className="w-full grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10  mt-5 xl:pl-14 custom-padding2">
      {winners.data.map((item) => (
        <article
          onClick={() => handleNavigate(item.id)}
          className="flex-1 w-full xl:w-11/12 h-72 relative rounded-xl cursor-pointer"
          key={item.id}
        >
          <img
            className="w-full h-full rounded-xl"
            src={item.img}
            alt={`${item.winnerName}_img`}
          />
          <div className="absolute bottom-0 p-3 h-1/3 flex justify-center items-center opacity-90 w-full z-20 bg-headerColor text-white font-bold text-xl rounded-b-xl">
            <h2>{item.winnerName}</h2>
          </div>
        </article>
      ))}
    </section>
  );
};

export default WinnersPage;
