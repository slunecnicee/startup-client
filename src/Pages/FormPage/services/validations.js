import * as Yup from "yup";

export const validations = (isNew, isUsaid) => {
  const schema = Yup.object().shape({
    person: Yup.object().shape({
      name: Yup.string()
        .required("სახელი აუცილებელია")
        .matches(
          /^[^\W\d_]+$/i,
          "სახელში ციფრები და სპეციალური სიმბოლოები  არ შეიძლება"
        ),
      lastName: Yup.string()
        .required("გვარი აუცილებელია")
        .matches(
          /^[^\W\d_]+$/i,
          "გვარში ციფრები და სპეციალური სიმბოლოები  არ შეიძლება"
        ),
      address: Yup.string().required("მისამართი აუცილებელია"),
      phone: Yup.string()
        .transform((value, originalValue) => {
          if (typeof originalValue === "string") {
            return originalValue.replace(/\s/g, "");
          }
          return value;
        })
        .matches(
          /^5\d{8}$/,
          "ნომერი უნდა იწყებოდეს 5-ით და შედგებოდეს 9 ციფრისაგან."
        )
        .required("ტელეფონის ნომერი აუცილებელია"),
      idNumber: Yup.string()
        .required("პირადი ნომერი აუცილებელია")
        .min(11, "პირადი ნომერი უნდა იყოს 11 ციფრი")
        .transform((value, originalValue) => {
          if (typeof originalValue === "string") {
            return originalValue.replace(/\s/g, "");
          }
          return value;
        }),
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
        ? Yup.date()
            .required("თარიღი აუცილებელია.")
            .test(
              "is-fresh",
              "თარიღი არ უნდა იყოს 180 დღეზე ძველი",
              function (value) {
                const today = new Date();
                const manualToday = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate()
                );
                const diffTime = Math.abs(manualToday - value);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays <= 180;
              }
            )
        : Yup.date().notRequired(),
    }),
    budjet: Yup.object().shape({
      budjectFromStartupGeorgia: Yup.number()
        .min(15000, "მინიმუმ თანხა უნდა იყოს 15000 ლარი")
        .typeError("შეიყვანეთ რიცხვები.")
        .required("required"),
      totalBudjet: Yup.number()
        .min(1, "თანხა უნდა იყოს 0 ზე მეტი")
        .typeError("შეიყვანეთ რიცხვები.")
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
      authorBudjet: Yup.number()
        .typeError("შეიყვანეთ რიცხვები.")
        // .min(
        //   Yup.ref("totalBudjet") * 0.1,
        //   "ავტორის ფულადი მონაწილეობა უნდა იყოს მინიმუმ 10% მთელი ბიუჯეტისა"
        // )
        .required("required"),
    }),
    descriptions: Yup.object().shape({
      projectDesc: Yup.string().test({
        name: "wordCount",
        message: "პროექტის აღწერა უნდა შეიცავდეს 10-1000 სიტყვას.",
        test: (value) => {
          if (!value) return false;
          const wordCount = value.split(" ").length;
          return wordCount >= 10 && wordCount <= 1000;
        },
      }),
      inovationDesc: Yup.string().test({
        name: "wordCount",
        message: "ინოვაციის აღწერა უნდა შეიცავდეს 10-1000 სიტყვას.",
        test: (value) => {
          if (!value) return false;
          const wordCount = value.split(" ").length;
          return wordCount >= 10 && wordCount <= 1000;
        },
      }),
    }),
  });

  return schema;
};
