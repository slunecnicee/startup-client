import { PulseLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div className="w-full h-screen flex flex-col gap-14 items-center mt-80 justify-start">
      <figure className="w-fit pr-14">
        <img src="/newlogo.png" alt="startup_Georgia_Logo" />
      </figure>

      <PulseLoader
        color="#4682b4"
        loading={loading}
        size={20}
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

export const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-14 items-center mt-80 justify-start">
      <figure className="w-fit pr-14">
        <img src="/newlogo.png" alt="startup_Georgia_Logo" />
      </figure>

      <h2 className="text-3xl text-red-500 font-bold ">
        ეს გვერდი დროებით მიუწვდომელია...
      </h2>
    </div>
  );
};
