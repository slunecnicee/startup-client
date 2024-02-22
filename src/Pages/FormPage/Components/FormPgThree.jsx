import CommonFormBtn from "../../../Components/CommonFormBtn";
import CommonInput from "../../../Components/CommonInput";
import { useState, useEffect } from "react";
import { useFormikContext } from "formik";

const FormPgThree = ({ prevPage, nextPage, isUsaid }) => {
  const [isValid, setIsValid] = useState(true);
  const { errors } = useFormikContext();

  console.log("pg3", errors.budjet);

  useEffect(() => {
    if (
      errors?.budjet?.budjetFromStartupGeorgia ||
      errors?.budje?.budjetFromStartupUsaid ||
      errors?.budjet?.authorBudget ||
      errors?.budjet?.totalBudjet ||
      errors?.budjet?.existentBudjet
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [errors]);

  console.log(errors);

  return (
    <div className="flex flex-col gap-5">
      <CommonInput
        type="number"
        min={16667}
        name="budjet.budjectFromStartupGeorgia"
        label="სტარტაპ საქართველოს თანამონაწილეობა"
        ph="მაგ: 100 000 "
        width={true}
        htmlFor={"budjetFromStartupGeorgia"}
      />

      <p className="text-xs font-bold text-gray-500">
        <span className="text-red-500 text-sm ">!</span> პროექტის მთლიანი
        ბიუჯეტის ზედა ზღვარი არ არის შეზღუდული, ქვედა ზღვარი შეადგენს 16,667
        ლარს
      </p>

      <CommonInput
        type="number"
        name="budjet.authorBudjet"
        label="ავტორის ფულადი მონაწილეობა"
        ph="მაგ: 10 000 "
        width={true}
        htmlfor={"authorBudjet"}
      />
      <p className="text-xs font-bold text-gray-500">
        <span className="text-red-500 text-sm ">!</span> ფულადი თანამონაწილეობა
        უნდა შეადგენდეს პროექტის ჯამური ფულადი ბიუჯეტის სულ მცირე 10%-ს
      </p>
      <CommonInput
        type="number"
        name="budjet.existentBudjet"
        label="არაფულადი შენატანის ღირებულება"
        ph="მიუთითეთ საბაზრო ღირებულება"
        htmlFor={"existantBudjet"}
        width={true}
      />

      <p className="text-xs font-bold text-gray-500">
        <span className="text-red-500 text-sm ">!</span> განმცხადებელს უფლება
        აქვს კაპიტალში შეიტანოს დამატებითი არაფულადი აქტივი
      </p>

      {isUsaid && (
        <CommonInput
          type="number"
          name="budjet.budjectFromUsaid"
          label="USAID გრანტი"
          ph="მიუთითეთ ღირებულება"
          htmlFor={"budjetFromUsaid"}
          width={true}
        />
      )}
      <CommonInput
        type="number"
        name="budjet.totalBudjet"
        label="პროექტის ჯამური ფულადი ბიუჯეტი"
        ph="მაგ: 100 000 ლარი"
        width={true}
        htmlFor={"totalBudjet"}
      />
      <p className="text-xs font-bold text-gray-500 border-b-2 border-gray-300 pb-5 rounded-sm">
        <span className="text-red-500 text-sm ">!</span> თანადაფინანსების
        ოდენობა შეადგენს 15,000 ლარიდან 100,000 ლარამდე
      </p>

      <div className="flex w-full justify-between items-center p-2 pt-4">
        <CommonFormBtn text="უკან" handleClick={prevPage} disabled={false} />

        <CommonFormBtn
          text="შემდეგი"
          handleClick={nextPage}
          disabled={!isValid}
        />
      </div>
    </div>
  );
};

export default FormPgThree;
