const CommonBtn = ({ text, icon, color, bg, borderColor, handleNavigate }) => {
  return (
    <button
      onClick={handleNavigate}
      className={`border-2 ${borderColor} ${bg} ${color} w-full md:w-fit text-red-500 border-red-500  p-2 flex items-center justify-center gap-5 font-lg cursor-pointer rounded-full`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default CommonBtn;
