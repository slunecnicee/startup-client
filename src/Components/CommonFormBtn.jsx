const CommonFormBtn = ({ text, disabled, handleClick, type }) => {
  return (
    <button
      type={type}
      onClick={!disabled ? handleClick : null}
      className={`mt-3 lg:mt-0 lg:self-end p-2 pl-4 pr-4 font-bold text-lg border-none rounded-md  text-white transition-colors duration-300 ease-in-out ${
        disabled
          ? "h-12 w-32 bg-gray-500 cursor-not-allowed "
          : "bg-emerald-600 hover:bg-emerald-700  cursor-pointer"
      }`}
    >
      {text && text}
    </button>
  );
};

export default CommonFormBtn;
