import * as Yup from "yup";

export const validations = (isNew, isUsaid) => {
  const schema = Yup.object().shape({
    person: Yup.object().shape({
      name: Yup.string()
        .required("სახელი აუცილებელია")
        .matches(/^[^\d]*$/, "სახელში ციფრები არ შეიძლება"),
      lastName: Yup.string()
        .required("გვარი აუცილებელია")
        .matches(/^[^\d]*$/, "გვარში ციფრები არ შეიძლება"),
      address: Yup.string().required("მისამართი აუცილებელია"),
      phone: Yup.string().matches(/^\d{9}$/, "ნომერი უნდა იყოს 9 ციფრი"),
      idNumber: Yup.string()
        .required("პირადი ნომერი აუცილებელია")
        .min(11, "პირადი ნომერი უნდა იყოს 11 ციფრი"),
      email: Yup.string()
        .email("ელ. ფოსტა არასწორი ფორმატია")
        .required("ელ. ფოსტა აუცილებელია"),
      birthDate: Yup.date().required("დაბადების თარიღი აუცილებელია"),
    }),
    project: Yup.object().shape({
      name: Yup.string().required("პროექტის სახელი აუცილებელია."),
      industry: Yup.string().required("ინდუსტრია აუცილებელია."),
      region: Yup.string().required("რეგიონი აუცილებელია."),
      village: Yup.string().required("სოფელი აუცილებელია."),
      municipality: Yup.string().required("მუნიციპალიტეტი აუცილებელია."),
      isLegalEntity: Yup.boolean(),
      entityIdentificationCode: isNew
        ? Yup.string().required("კოდი აუცილებელია.")
        : Yup.string().notRequired(),
      entityBday: isNew
        ? Yup.date().required("თარიღი აუცილებელია.")
        : Yup.date().notRequired(),
    }),
    budjet: Yup.object().shape({
      budjectFromStartupGeorgia: Yup.number()
        .min(16667, "მინიმუმ თანხა უნდა იყოს 16667 ლარი")
        .typeError("შეიყვანეთ რიცხვები.")
        .required("required"),
      totalBudjet: Yup.number()
        .min(1, "თანხა უნდა იყოს 0 ზე მეტი")
        .typeError("შეიყვანეთ რიცხვები.")
        .required("required"),
      authorBudjet: Yup.number()
        .typeError("შეიყვანეთ რიცხვები.")
        .min(1, "თანხა უნდა იყოს 0 ზე მეტი")
        .required("required"),
      existentBudjet: Yup.number()
        .min(1, "თანხა უნდა იყოს 1 ზე მეტი")
        .typeError("შეიყვანეთ რიცხვები.")
        .required("required"),
      budjectFromUsaid: isUsaid
        ? Yup.number()
            .min(1, "თანხა უნდა იყოს 1 ზე მეტი")
            .typeError("შეიყვანეთ რიცხვები.")
            .required("required")
        : Yup.number().notRequired(),
    }),
    descriptions: Yup.object().shape({
      projectDesc: Yup.string().test({
        name: "wordCount",
        message: "პროექტის აღწერა უნდა შეიცავდეს 10-100 სიტყვას.",
        test: (value) => {
          if (!value) return false;
          const wordCount = value.split(" ").length;
          return wordCount >= 10 && wordCount <= 100;
        },
      }),
      inovationDesc: Yup.string().test({
        name: "wordCount",
        message: "ინოვაციის აღწერა უნდა შეიცავდეს 10-100 სიტყვას.",
        test: (value) => {
          if (!value) return false;
          const wordCount = value.split(" ").length;
          return wordCount >= 10 && wordCount <= 100;
        },
      }),
    }),
  });

  return schema;
};
