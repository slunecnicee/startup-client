import CommonFormBtn from "../../../Components/CommonFormBtn";
import CommonInput from "../../../Components/CommonInput";
import { useEffect, useState } from "react";
import { useFormikContext } from "formik";

const FormPgOne = ({ nextPage,gender, setGender }) => {
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

<div className="w-full mb-5 mt-5 flex-col xl:flex-row xl:mt-5  flex xl:gap-3 gap-6 pr-56">
<CommonInput
          name="person.idNumber"
          label="პირადი ნომერი"
          type="text"
          htmlfor={"idNumber"}
          width={true}
          
        />
</div>


      <div className="w-full flex-col xl:flex-row flex xl:gap-3  gap-6  ">
        <CommonInput
          name="person.name"
          type="text"
          label="სახელი"
          htmlfor={"name"}
          bottom={true}
          width={true}
        />
        <CommonInput
          name="person.lastName"
          type="text"
          label="გვარი"
          htmlfor={"lastName"}
          bottom={true}
          width={true}
        />
      </div>

      <div className="w-full border-b pb-4 mb-2 mt-5 flex-col xl:flex-row xl:mt-5  flex xl:gap-3 gap-6">
     
        <CommonInput
          name="person.address"
          type="text"
          label="ფაქტობრივი მისამართი"
          htmlfor={"address"}
          width={true}
        />
        <CommonInput
          name="person.birthDate"
          label="დაბადების თარიღი"
          type="date"
          htmlfor={"birthDate"}
          width={true}
        />
      </div>


      <div className="w-full flex gap-5 border-b border-gray-300 pb-2 ">
        <h3 className="mb-2 mt-2 text-sm font-bold">
          აირჩიეთ სქესი :
        </h3>
        <div className="flex gap-4 items-center   p-2">
          <div className="flex gap-2 items-center">
            <input
              id="gender"
              type="radio"
              value={'კაცი'}
              name="gender"
              onChange={() => setGender('კაცი')}
              checked={gender === 'კაცი'} 
              className="form-radio h-5 w-5 text-gray-600"
            />
            <label htmlFor="gender">კაცი</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="gender"
              type="radio"
              name="gender"
              value={'ქალი'}
              onChange={() => setGender('ქალი')}
              checked={gender === 'ქალი'} 
              className="form-radio h-5 w-5 text-gray-600"
            />
            <label htmlFor="gender">ქალი</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="gender"
              type="radio"
              name="gender"
              value={'არ მსურს მითითება'}
              onChange={() => setGender('არ მსურს მითითება')}
              checked={gender === 'არ მსურს მითითება'} 
              className="form-radio h-5 w-5 text-gray-600"
            />
            <label htmlFor="gender">არ მსურს მითითება</label>
          </div>
        </div>
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
            width={true}
          />
         

          <CommonInput
            name="person.email"
            label="ელ-ფოსტა"
            type="email"
            htmlfor={"email"}
            width={true}
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
