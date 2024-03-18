import { useState, useEffect } from "react";
import CommonTextArea from "../../../Components/CommonTextArea";
import CommonFormBtn from "../../../Components/CommonFormBtn";
import { useFormikContext } from "formik";

const FormPgFour = ({ nextPage, prevPage, isGroup, setIsGroup }) => {
  const { errors, setFieldValue } = useFormikContext();

  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (
      errors?.descriptions?.projectDesc ||
      errors?.descriptions?.inovationDesc
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [errors]);

  return (
    <div className="mt-1">
      <div className="w-full flex flex-col sm:flex-row gap-3 items-center mt-5  border-b-2 pb-1 mb-6 rounded-sm border-gray-300 ">
        <h3 className="mb-2 mt-2 text-gray-600 text-sm text-center font-bold">
          პროექტის წარმდგენი :
        </h3>
        <div className="flex gap-8 justify-center items-center   p-2">
          <div className="flex gap-2 items-center">
            <input
              id="notGroup"
              type="radio"
              value={false}
              name="isGroup"
              onChange={() => setIsGroup(false)}
              checked={!isGroup}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <label htmlFor="notGroup">ფიზიკური პირი</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="Group"
              type="radio"
              name="isGroup"
              value={true}
              onChange={() => setIsGroup(true)}
              checked={isGroup}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <label htmlFor="Group">ჯგუფი</label>
          </div>
        </div>
      </div>

      <CommonTextArea
        name="descriptions.projectDesc"
        label="პროექტის მოკლე აღწერა"
        htmlfor={"projectDesc"}
      />
      <CommonTextArea
        name="descriptions.inovationDesc"
        label="რატომ არის პროექტი ინოვაციური"
        margin={"mt-10"}
        htmlfor={"inovationDesc"}
      />

      <div className=" border-b-2 pb-4 rounded-sm border-gray-300 relative mt-8 flex flex-col gap-2">
        <label
          htmlFor="files"
          className="font-bold text-sm text-gray-600 lm ml-5 p-1"
        >
          ატვირთე ფაილი
        </label>
        <input
          className=" border cursor-pointer rounded-md w-full border-gray-300 p-2 focus:outline-green-300 focus-within:bg-white focus:bg-white "
          type="file"
          multiple
          id="files"
          name="descriptions.files"
          onChange={(e) => {
            setFieldValue("descriptions.files", e.target.files);
          }}
        />
      </div>

      <div className=" w-full mt-5 flex justify-between items-center p-2">
        <CommonFormBtn text="უკან " disabled={false} handleClick={prevPage} />

        {isGroup ? (
          <CommonFormBtn
            text="შემდეგი"
            disabled={!isValid}
            handleClick={nextPage}
          />
        ) : (
          <CommonFormBtn text="გაგზავნა" type="submit" disabled={!isValid} />
        )}
      </div>
    </div>
  );
};

export default FormPgFour;
