import CommonFormBtn from "../../../Components/CommonFormBtn";
import CommonInput from "../../../Components/CommonInput";
import { useEffect, useState } from "react";
import { useFormikContext } from "formik";

const FormPgOne = ({ nextPage }) => {
  const [isValid, setIsValid] = useState(true);
  const { errors, values } = useFormikContext();

  useEffect(() => {
    if (
      errors.person?.name ||
      errors.person?.lastName ||
      errors.person?.idNumber ||
      errors.person?.address ||
      errors.person?.birthDate ||
      errors.person?.email ||
      errors.person?.phone ||
      values.person?.name === ""
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [errors, values]);

  return (
    <div className="flex flex-col gap-1">
      <div className="w-full flex-col xl:flex-row flex xl:gap-3 gap-6  ">
        <CommonInput
          name="person.name"
          type="text"
          label="სახელი"
          htmlfor={"name"}
        />
        <CommonInput
          name="person.lastName"
          type="text"
          label="გვარი"
          htmlfor={"lastName"}
        />
      </div>

      <div className="w-full mb-5 mt-5 flex-col xl:flex-row xl:mt-5  flex xl:gap-3 gap-6">
        <CommonInput
          name="person.idNumber"
          label="პირადი ნომერი"
          type="text"
          htmlfor={"idNumber"}
        />
        <CommonInput
          name="person.address"
          type="text"
          label="ფაქტობრივი მისამართი"
          htmlfor={"address"}
        />
        <CommonInput
          name="person.birthDate"
          label="დაბადების თარიღი"
          type="date"
          htmlfor={"birthDate"}
        />
      </div>

      <div className="flex flex-col gap-2 w-full border-b-2 border-gray-300 pb-10 ">
        <h3 className="font-bold hidden xl:block pl-5 text-gray-800 text-sm mt-5">
          საკონტაქტო ინფორმაცია :
        </h3>
        <hr className="hidden xl:block" />

        <div className="w-full flex flex-col xl:gap-5 gap-6  xl:flex-row  ">
          <CommonInput
            name="person.phone"
            type="text"
            label="მობილურის ნომერი"
            htmlfor={"phone"}
            span={true}
          />

          <CommonInput
            name="person.email"
            label="ელ-ფოსტა"
            type="email"
            htmlfor={"email"}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-end pr-5">
        <CommonFormBtn
          text="შემდეგი"
          handleClick={nextPage}
          disabled={!isValid}
        />
      </div>
    </div>
  );
};

export default FormPgOne;
