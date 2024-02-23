import { useEffect, useState } from "react";
import CommonFormBtn from "../../../Components/CommonFormBtn";
import { positions } from "../services/data";
import { useFormikContext } from "formik";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Input from "../../../Components/Input";
import Table from "./table";

const FormPgFive = ({
  prevPage,
  isGroup,
  errors,
  setErrors,
  member,
  setmember,
}) => {
  const { values, setFieldValue } = useFormikContext();
  const members = values.members;
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    if (
      errors?.name ||
      errors?.idnumber ||
      errors?.email ||
      errors?.phone ||
      errors?.position ||
      errors?.birthday ||
      errors?.lastname ||
      members.length < 1
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [errors, members]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setmember({
      ...member,
      [name]: value,
    });
  };

  const handleDelete = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setFieldValue("members", updatedMembers);
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(name);
  };

  const validateIdNumber = (idNumber) => {
    const trimmedIdNumber = idNumber.replace(/\s/g, "");
    return /^\d{11}$/.test(trimmedIdNumber);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const trimmedPhone = phone.replace(/\s/g, "");
    return /^\d{9}$/.test(trimmedPhone);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    switch (name) {
      case "name":
      case "lastname":
        if (!validateName(value)) {
          errorMessage = "Name must contain only letters and spaces";
        } else if (value === "") {
          errorMessage = "field is required";
        }
        break;
      case "email":
        if (!validateEmail(value)) {
          errorMessage = "Invalid email address";
        } else if (value === "") {
          errorMessage = "field is required";
        }
        break;
      case "phone":
        if (!validatePhone(value)) {
          errorMessage = "Phone number must be 9 digits";
        } else if (value === "") {
          errorMessage = "field is required";
        }
        break;
      case "idnumber":
        if (!validateIdNumber(value)) {
          errorMessage = "ID number must be 11 digits";
        } else if (value === "") {
          errorMessage = "field is required";
        }
        break;
      case "birthday":
        if (value === "") {
          errorMessage = "field is required";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleAddMember = () => {
    const updatedMembers = [...members];
    updatedMembers.push(member);
    setFieldValue("members", updatedMembers);
    setmember({
      name: "",
      lastname: "",
      email: "",
      position: "",
      phone: "",
      idnumber: "",
      birthday: "",
      linkedin: "",
    });
  };

  return (
    <>
      {isGroup ? (
        <div>
          <div className="w-full flex  gap-6  flex-col ">
            <div className="w-full flex gap-6 lg:gap-3 flex-col lg:flex-row ">
              <Input
                name="name"
                value={member.name}
                label="წევრის სახელი"
                type="text"
                htmlfor={"memberName"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.name}
              />
              <Input
                label="წევრის გვარი"
                name="lastname"
                type="text"
                value={member.lastname}
                htmlfor={"memberLastName"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.lastname}
              />
            </div>
            <div className="w-full flex gap-6 lg:gap-3 flex-col lg:flex-row">
              <Input
                label="წევრის ელ-ფოსტა"
                name="email"
                type="text"
                value={member.email}
                htmlfor={"memberEmail"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.email}
              />
              <Input
                label="წევრის პირადი ნომერი"
                name="idnumber"
                type="text"
                value={member.idnumber}
                htmlfor={"memberId"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.idnumber}
              />
            </div>
            <div className="w-full flex gap-6 lg:gap-3 flex-col lg:flex-row">
              <Input
                label="წევრის ნომერი"
                name="phone"
                type="text"
                value={member.phone}
                htmlfor={"memberPhone"}
                span={true}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.phone}
              />
              <Input
                label="დაბადების თარიღი"
                name="birthday"
                type="date"
                value={member.birthday}
                htmlfor={"memberBirthday"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.birthday}
              />
            </div>

            <div className="w-full flex gap-6 lg:gap-3 items-end justify-end flex-col lg:flex-row">
              <Input
                label="Linkedin პროფილის ლინკი"
                name="linkedin"
                type="text"
                value={member.linkedin}
                htmlfor={"memberLinkedin"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.linkedin}
              />

              <div className="flex relative flex-col w-full lg:w-1/2 gap-3 mt-2 ">
                <label
                  htmlFor="memberRole"
                  className="font-bold text-sm text-gray-600 lb ml-5 p-1"
                >
                  წევრის როლი
                </label>

                <select
                  id="memberRole"
                  name="position"
                  value={member.position}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="p-3 mb-1 border  text-gray-900  border-gray-300 rounded-md focus:outline-green-300"
                >
                  <option value=""></option>
                  {positions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.position && (
                  <p className="text-red-500 absolute ml-5 b text-xs mt-1">
                    {errors.position}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={handleAddMember}
              className=" text-green-700 font-bold text-2xl hover:text-green-900  "
            >
              <AddCircleIcon />
            </button>

            {members?.length < 1 && (
              <p className="text-red-500 text-sm">
                გასაგრძელებლად დაამატე მინიმუმ 1 გუნდის წევრი
              </p>
            )}
          </div>

          {members?.length > 0 && (
            <Table members={members} handleDelete={handleDelete} />
          )}

          <div className="flex w-full justify-between items-center p-2 pt-4">
            <CommonFormBtn
              text="უკან"
              type="button"
              handleClick={prevPage}
              disabled={false}
            />

            <CommonFormBtn text="გაგზავნა" type="submit" disabled={!isValid} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FormPgFive;
