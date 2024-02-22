import { Field, ErrorMessage } from "formik";

const CommonTextArea = ({ name, label, margin, htmlfor }) => {
  return (
    <div className={`w-full h-40 relative ${margin}`}>
      <label
        htmlFor={htmlfor}
        className="font-bold text-sm text-gray-600 lb ml-5 p-1"
      >
        {label}
      </label>
      <Field
        as="textarea"
        className="p-3 pt-5 border h-full w-full rounded-md border-gray-300 focus:outline-emerald-600 focus-within:bg-white focus:bg-white"
        name={name}
        id={htmlfor}
        placeholder="მაქსიმუმ 100 სიტყა"
      ></Field>

      <p className="text-red-500 text-sm absolute bottom--2 left-2">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default CommonTextArea;
