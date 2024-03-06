const CommonBtn = ({ text, icon, scrolled, handleNavigate }) => {
  return (
    <button
      onClick={handleNavigate}
      className={`border-2 px-5 w-full md:w-fit ${
        scrolled ? "border-textColor" : "border-white"
      } ${
        scrolled ? "text-textColor" : "text-white"
      }  p-2 flex items-center justify-center gap-5 font-lg cursor-pointer rounded-full`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default CommonBtn;
