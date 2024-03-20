import FormPgFour from "./Components/FormPGFour";
import FormPgOne from "./Components/FormPgOne";
import FormPgThree from "./Components/FormPgThree";
import FormPgTwo from "./Components/FormPgTwo";
import FormValid from "./Components/FormValid";
import FormPgFive from "./Components/FormPg5";
import { useState } from "react";
import { Formik, Form } from "formik";
import { validations } from "./services/validations";
import { storage } from "../../utils/firebsa";
import { baseAPI } from "../../services/baseApi";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import DownloadIcon from "@mui/icons-material/Download";
import { toast } from "react-toastify";

const handleImageUpload = (files) => {
  const uploadPromises = Object.entries(files).map((file) => {
    const fileRef = ref(storage, `applications/${file.name + v4()}`);
    return uploadBytes(fileRef, file).then(() => {
      const downloadURL = `https://your-bucket-name.storage.googleapis.com/applications/${
        file.name + v4()
      }`;
      return downloadURL;
    });
  });
  return Promise.all(uploadPromises);
};

function generateUniqueNumber(minDigits, maxDigits) {
  const length =
    Math.floor(Math.random() * (maxDigits - minDigits + 1)) + minDigits;
  let number = "";

  for (let i = 0; i < length; i++) {
    const digit = Math.floor(Math.random() * 10); // Generate a random digit from 0 to 9
    number += digit;
  }

  return number;
}

const initialValues = {
  person: {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    idNumber: "",
    birthDate: "",
    address: "",
  },
  project: {
    name: "",
    industry: "",
    region: "",
    municipality: "",
    village: "",
    entityIdentificationCode: "",
    entityBday: "",
  },
  budjet: {
    budjectFromStartupGeorgia: 0,
    budjectFromUsaid: 0,
    authorBudjet: 0,
    existentBudjet: 0,
    totalBudjet: 0,
  },
  descriptions: {
    projectDesc: "",
    inovationDesc: "",
    files: [],
  },
  members: [],
};

const CommonForm = ({ isUsaid }) => {
  const [isNew, setIsNew] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [gender, setGender] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [member, setMember] = useState({
    name: "",
    lastname: "",
    email: "",
    position: "",
    phone: "",
    idnumber: "",
    birthday: "",
    linkedin: "",
  });

  const validationSchema = validations(isNew, isUsaid);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const pages = [
    <FormPgOne nextPage={nextPage} gender={gender} setGender={setGender} />,
    <FormPgTwo
      nextPage={nextPage}
      prevPage={prevPage}
      setIsNew={setIsNew}
      isNew={isNew}
    />,
    <FormPgThree prevPage={prevPage} nextPage={nextPage} isUsaid={isUsaid} />,
    <FormPgFour
      prevPage={prevPage}
      nextPage={nextPage}
      isGroup={isGroup}
      setIsGroup={setIsGroup}
      isLoading={isLoading}
    />,
    <FormPgFive
      prevPage={prevPage}
      setMember={setMember}
      isGroup={isGroup}
      member={member}
      errors={errors}
      setErrors={setErrors}
      isLoading={isLoading}
    />,
  ];

  return (
    <main className="w-full min-h-screen p-2  lg:p-8 xl:p-2 flex flex-col  ">
      <div className="lg:mt-10 mb-3  lg:w-4/5 lg:self-center p-5 text-2xl text-textColor flex items-center justify-between">
        <h2>შეავსე განაცხადი</h2>
        <div className="text-sm flex gap-5 items-center ">
          <p className=" hover:underline cursor-pointer">
            <DownloadIcon sx={{ fontSize: "20px" }} /> ბიზნეს ფორმა
          </p>
          <p className=" hover:underline cursor-pointer">
            <DownloadIcon sx={{ fontSize: "20px" }} />
            ფინანსური მოდელის ფორმა
          </p>
        </div>
      </div>
      <Formik
        initialValues={initialValues} // Use the defined initial values
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setIsLoading(true);
          let fileUploadPromise;
          if (values.descriptions.files) {
            fileUploadPromise = handleImageUpload(values.descriptions.files);
          } else {
            fileUploadPromise = Promise.resolve(null); // Resolve immediately with null if no file
          }
          fileUploadPromise.then((downloadURLs) => {
            const formData = {
              isNew: isNew,
              isUsaid: isUsaid,
              hasAgreed: true,
              applicantGender: gender,
              applicationNumber: generateUniqueNumber(5, 9),
              applicantName: values.person.name,
              applicantLastName: values.person.lastName,
              applicantEmail: values.person.email,
              applicantPhone: values.person.phone,
              applicantIdNumber: values.person.idNumber,
              applicantDateOfBirth: values.person.birthDate,
              applicantAddress: values.person.address,
              projectName: values.project.name,
              projectIndustry: values.project.industry,
              projectRegion: values.project.region,
              projectMunicipality: values.project.municipality,
              projectVillage: values.project.village,
              ApplicantIdentificationCode:
                values.project.entityIdentificationCode,
              ApplicantBday: values.project.entityBday,
              projectBudjetFromStartupGeorgia:
                values.budjet.budjectFromStartupGeorgia,
              projectBudjetFromApplicant: values.budjet.authorBudjet,
              projectExistingBudjet: values.budjet.existentBudjet,
              projectTotalBudjet: values.budjet.totalBudjet,
              projectBudjetFromUsaid: values.budjet.budjectFromUsaid,
              projectDescription: values.descriptions.projectDesc,
              projectInnovationElement: values.descriptions.inovationDesc,
              files: downloadURLs,
              members: values.members,
            };
            console.log(formData);

            return baseAPI
              .post("/send/application", formData)
              .then((res) => {
                if (res.status === 201) {
                  resetForm();
                  setCurrentPage(0);
                  setMember({
                    name: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    idNumber: "",
                    birthDate: "",
                    address: "",
                  });
                  toast.success("განცხადება წარმატებით გაიგზავნა");;
                }
              })
              .catch((err) => {
                console.log(err);
                toast.error(" დაფიქსირდა შეცდომა მოგვიანებით სცადეთ ან დაგვეკონტაქტეთ");
              })
              .finally(() => {
                setIsLoading(false);
           
              });
          });
        }}
      >
        {(obj) => {
          return (
            <article className="w-full  bg-white xl:w-4/5 h-auto p-2 shadow-sm  flex gap-2 self-center rounded-sm">
              <FormValid
                errorsPg5={errors}
                member={member}
                obj={obj}
                isUsaid={isUsaid}
                isGroup={isGroup}
                isNew={isNew}
              />

              <Form className="w-full md:mt-2   self-start md:w-2/3 flex p-2 flex-col gap-3">
                {pages[currentPage]}
              </Form>
            </article>
          );
        }}
      </Formik>
    </main>
  );
};

export default CommonForm;
