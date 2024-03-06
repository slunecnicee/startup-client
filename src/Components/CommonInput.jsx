import { Field, ErrorMessage } from "formik";
const CommonInput = ({
  label,
  type,
  ph,
  name,
  width,
  min,
  htmlfor,
  span,
  value,
}) => {
  return (
    <div
      className={`flex relative flex-col gap-2 mt-3 w-full ${
        !width ? "xl:w-2/5" : ""
      } `}
    >
      {label && (
        <label
          htmlFor={htmlfor}
          className="font-bold  text-sm text-gray-600 lb ml-5 p-1"
        >
          {label}
        </label>
      )}

      {span && <span className="absolute text-gray-900 t left-5">+995</span>}

      <Field
        type={type}
        placeholder={ph}
        name={name}
        id={htmlfor}
        min={min}
        className={`p-3 border rounded-md border-gray-300 focus:outline-emerald-600 focus-within:bg-white  focus:bg-white ${
          span ? "pl-16" : ""
        }`}
      />

      <p className="text-red-500 text-xs absolute b mt-1 ml-1 whitespace-nowrap">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default CommonInput;
