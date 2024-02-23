import FormPgFour from "./Components/FormPGFour";
import FormPgOne from "./Components/FormPgOne";
import FormPgThree from "./Components/FormPgThree";
import FormPgTwo from "./Components/FormPgTwo";
import FormValid from "./Components/FormValid";
import FormPgFive from "./Components/FormPg5";
import { useState } from "react";
import { Formik, Form } from "formik";
import { validations } from "./services/validations";
import { baseAPI } from "../../services/baseApi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./services/firebase";
import { v4 } from "uuid";

const handleImageUpload = (file) => {
  const fileRef = ref(storage, `applications/${file.name + v4()}`);
  return uploadBytes(fileRef, file).then(() => getDownloadURL(fileRef));
};

const values = {
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
    file: null,
  },
  members: [],
};

const CommonForm = ({ isUsaid }) => {
  const [isNew, setIsNew] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [errors, setErrors] = useState({});
  const [member, setmember] = useState({
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
    <FormPgOne nextPage={nextPage} />,
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
    />,
    <FormPgFive
      prevPage={prevPage}
      setmember={setmember}
      isGroup={isGroup}
      member={member}
      errors={errors}
      setErrors={setErrors}
    />,
  ];

  return (
    <main className="w-full min-h-screen p-2  lg:p-8 xl:p-2 flex flex-col ">
      <h2 className="lg:mt-10 mb-3  lg:w-4/5 lg:self-center p-5 text-2xl text-textColor">
        შეავსე განაცხადი
      </h2>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          let fileUploadPromise;
          if (values.descriptions.file) {
            fileUploadPromise = handleImageUpload(values.descriptions.file);
          } else {
            fileUploadPromise = Promise.resolve(null); // Resolve immediately with null if no file
          }
          fileUploadPromise.then((downloadURL) => {
            return baseAPI
              .post("/send/application", {
                isNew,
                isUsaid,
                hasAgreed: true,
                person: {
                  name: values.person.name,
                  lastName: values.person.lastName,
                  email: values.person.email,
                  phone: values.person.phone,
                  idNumber: values.person.idNumber,
                  birthDate: values.person.birthDate,
                  address: values.person.address,
                },
                project: {
                  name: values.project.name,
                  industry: values.project.industry,
                  region: values.project.region,
                  municipality: values.project.municipality,
                  village: values.project.village,
                  entityIdentificationCode:
                    values.project.entityIdentificationCode,
                  entityBday: values.project.entityBday,
                },
                budjet: {
                  budjetFromStartupGeorgia:
                    values.budjet.budjetFromStartupGeorgia,
                  budjetFromUsaid: values.budjet.budjetFromUsaid,
                  authorBudjet: values.budjet.authorBudjet,
                  existentBudjet: values.budjet.existentBudjet,
                  totalBudjet: values.budjet.totalBudjet,
                },
                descriptions: {
                  projectDesc: values.descriptions.projectDesc,
                  inovationDesc: values.descriptions.inovationDesc,
                  files: downloadURL,
                },
                members: values.members,
              })
              .then((res) => {
                if (res.status === 200) {
                  resetForm();
                  setCurrentPage(0);
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
                  alert("application sent successfully");
                }
              })
              .catch((err) => console.log(err));
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
