import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CommonSelect = ({ options, htmlFor, label, name, setFieldValue }) => {
  const [show, setShow] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options); // State variable to store filtered options

  const handleClick = (value) => {
    setFieldValue(name, value);
    setShow(false);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue)
    );
    setFilteredOptions(filtered);
    setFieldValue(name, e.target.value);
  };

  return (
    <div className="flex relative flex-col w-full xl:w-2/5 gap-3 mt-2">
      {label && (
        <label
          htmlFor={htmlFor}
          className="font-bold text-sm text-gray-600 lb ml-5 p-1"
        >
          {label}
        </label>
      )}
      <Field
        name={name}
        onChange={handleChange}
        id={htmlFor}
        onClick={() => setShow(!show)}
        className="p-3 mb-1 border flex items-center justify-end relative text-gray-900 border-gray-300 rounded-md focus:outline-green-300"
      />
      <ExpandMoreIcon
        onClick={() => setShow(!show)}
        sx={{
          zIndex: "100",
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
          position: "absolute",
          right: "10px",
          top: "15px",
          transform: show ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
      {show && (
        <ul className="absolute w-full z-30 h-60 overflow-y-scroll rounded-md top-full mt-1 border p-2 bg-neutral-100">
          {filteredOptions.map((option, index) => (
            <li
              className="cursor-pointer p-2 border-b border-gray-300 hover:bg-emerald-200"
              key={index}
              value={option}
              onClick={() => handleClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <p className="text-red-500 absolute ml-1 b text-xs mt-1 whitespace-nowrap">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default CommonSelect;
