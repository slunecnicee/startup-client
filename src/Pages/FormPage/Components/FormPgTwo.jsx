import CommonInput from "../../../Components/CommonInput";
import CommonSelect from "../../../Components/CommonSelect";
import {
  industries,
  regions,
  villages,
  munisipalities,
} from "../services/data";
import CommonFormBtn from "../../../Components/CommonFormBtn";
import { useEffect, useState } from "react";
import { useFormikContext } from "formik";

const FormPgTwo = ({ nextPage, prevPage, setIsNew, isNew }) => {
  const [isValid, setIsValid] = useState(true);
  const { errors, values, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (
      errors?.project?.name ||
      errors?.project?.industry ||
      errors?.project?.region ||
      errors?.project?.municipality ||
      errors?.project?.village ||
      (isNew &&
        (errors?.project?.entityIdentificationCode ||
          errors?.project?.entityBday)) ||
      (isNew && values.project.entityIdentificationCode === "")
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [errors, isNew, values, isValid]);

  return (
    <>
      <div className="flex flex-col xl:flex-row  border-b-2 border-gray-300 pb-6  gap-8 mt-5">
        <CommonInput
          label={"პროექტის სახელი"}
          name="project.name"
          type="text"
          htmlfor={"project.name"}
          width={true}
        />
        <CommonSelect
          label={"აირჩიე ინდუსტრია"}
          options={industries}
          name="project.industry"
          htmlFor={"project.industry"}
          setFieldValue={setFieldValue}
          width={true}
        />
      </div>
      <div className="flex flex-col border-b-2 border-gray-300 pb-6 ">
        <h3 className="font-bold text-md mt-5 ml-3">პროექტის მდებარეობა:</h3>
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-2 mt-2">
          <CommonSelect
            label={"რეგიონი"}
            options={regions}
            name="project.region"
            htmlFor={"project.region"}
            setFieldValue={setFieldValue}
          />
          <CommonSelect
            label={"მუნიციპალიტეტი"}
            options={munisipalities}
            name="project.municipality"
            htmlFor={"project.municipality"}
            setFieldValue={setFieldValue}
          />

          <CommonSelect
            label={"სოფელი"}
            options={villages}
            name="project.village"
            htmlFor={"project.village"}
            setFieldValue={setFieldValue}
          />
        </div>
      </div>

      <div className="w-full border-b-2 border-gray-300 pb-2 ">
        <h3 className="mb-2 mt-2 text-sm font-bold">
          პროექტის განმახორციელებელი იურიდიული პირი
        </h3>
        <div className="flex gap-4 items-center   p-2">
          <div className="flex gap-2 items-center">
            <input
              id="notLegalEntity"
              type="radio"
              value={false}
              name="isNew"
              onChange={() => setIsNew(false)}
              checked={!isNew} // Set checked to true if isNew is false
              className="form-radio h-5 w-5 text-gray-600"
            />
            <label htmlFor="notLegalEntity">ახალი</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="LegalEntity"
              type="radio"
              name="isNew"
              value={true}
              onChange={() => setIsNew(true)}
              checked={isNew} // Set checked to true if isNew is true
              className="form-radio h-5 w-5 text-gray-600"
            />
            <label htmlFor="legalEntity">არსებული</label>
          </div>
        </div>
      </div>

      {isNew && (
        <div
          className={`flex flex-col xl:flex-row h items-center gap-5 xl:gap-3 border-b-2 border-gray-300 pb-6 ${
            isNew ? "fade-in" : "fade-out"
          } `}
        >
          <CommonInput
            label={"საინდენტიფიკაციო კოდი"}
            name="project.entityIdentificationCode"
            type="text"
            htmlfor={"project.entityIdentificationCode"}
          />

          <CommonInput
            label={"დაბადების თარიღი"}
            name="project.entityBday"
            type="date"
            htmlfor={"project.entityBday"}
          />
        </div>
      )}

      <div className="flex w-full justify-between items-center p-2 pt-4">
        <CommonFormBtn text="უკან" handleClick={prevPage} disabled={false} />
        {isValid ? (
          <CommonFormBtn
            text="შემდეგი"
            disabled={false}
            handleClick={nextPage}
          />
        ) : (
          <CommonFormBtn disabled={true} />
        )}
      </div>
    </>
  );
};

export default FormPgTwo;









