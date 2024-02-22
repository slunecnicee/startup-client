import { data } from "./data";
import { useState } from "react";

const FAQ = () => {
  const [showAnswers, setShowAnswers] = useState(
    Array(data.length).fill(false)
  );

  const toggleAnswer = (index) => {
    setShowAnswers((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <main className="min-h-screen p-3  flex flex-col gap-5 bg-neutral-100 ">
      <div className="w-full title2 pl-3 pr-3 mt-14 flex justify-center items-center mb-5">
        <h2 className="text-textColor text-lg sm:text-2xl  w-fit bg-neutral-100 z-20 pl-2 pr-2">
          ხშირად დასმული კითხვები
        </h2>
      </div>

      <div className="w-full p-3 flex flex-col gap-14 ">
        {data.map((item, index) => (
          <div
            onClick={() => toggleAnswer(index)}
            className="w-full pb-2 border-b cursor-pointer "
            key={item.id}
          >
            <p className="flex w-full items-center gap-3 hover:underline">
              <img src="./icon.png" alt="question_icon" />
              {item.question}
            </p>
            <div
              className={`w-full h-auto bg-textColor text-white  mt-2 rounded-3xl ${
                showAnswers[index] ? "show" : "hide"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQ;
