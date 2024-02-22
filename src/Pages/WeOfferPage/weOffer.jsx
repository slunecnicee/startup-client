import { data } from "./data";

const WeOffer = () => {
  return (
    <main className="min-h-screen mt-14 bg-neutral-100 p-2 flex flex-col justify-center items-center">
      <div className="w-full title2 pl-3 pr-3 flex justify-center items-center mb-5">
        <h2 className="text-textColor text-lg sm:text-2xl  w-fit bg-neutral-100 z-20 pl-2 pr-2">
          ჩვენ გთავაზობთ
        </h2>
      </div>

      <div className=" w-full p-5 sm:p-10  flex flex-col gap-5">
        {data.map((item) => (
          <div className="border-b-2" key={item.id}>
            <h3 className="flex gap-5 text-textColor text-sm sm:text-base lg:text-xl items-center">
              <img src="/icon.png" alt="question_icon" />
              {item.tittle}
            </h3>
            <p className="mt-3 text-sm sm:text-base pb-3  sm:p-3 ">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WeOffer;
