const Input = ({
  label,
  type,
  ph,
  name,
  width,
  min,
  htmlfor,
  span,
  value,
  handleChange,
  handleBlur,
  error,
}) => {
  return (
    <div
      className={`flex relative flex-col gap-2 mt-3 w-full ${
        !width ? "lg:w-1/2" : ""
      } `}
    >
      {label && (
        <label
          htmlFor={htmlfor}
          className="font-bold text-sm text-gray-600 lb ml-5 p-1"
        >
          {label}
        </label>
      )}

      {span && <span className="absolute text-gray-900 t left-5">+995</span>}

      <input
        type={type}
        placeholder={ph}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        id={htmlfor}
        min={min}
        className={`p-3 border rounded-md border-gray-300 focus:outline-emerald-600 focus-within:bg-white  focus:bg-white ${
          span ? "pl-16" : ""
        }`}
      />

      {error && (
        <p className="text-red-500 absolute ml-5 b text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
