import { Field, ErrorMessage } from "formik";

const CommonSelect = ({ options, htmlFor, label, name }) => {
  return (
    <div className="flex relative flex-col w-full xl:w-2/5 gap-3 mt-2 ">
      {label && (
        <label
          htmlFor={htmlFor}
          className="font-bold text-sm text-gray-600 lb ml-5 p-1"
        >
          {label}
        </label>
      )}
      <Field
        id={htmlFor}
        as="select"
        name={name}
        className="p-3 mb-1 border  text-gray-900  border-gray-300 rounded-md focus:outline-green-300"
      >
        <option value=""></option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <p className="text-red-500 absolute ml-5 b text-xs mt-1">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default CommonSelect;
