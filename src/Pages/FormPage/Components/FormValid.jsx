import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

const FormValid = ({ isUsaid, isGroup, isNew }) => {
  const { values, errors } = useFormikContext();

  const [filledPercentages, setFilledPercentages] = useState({
    pg1: 0,
    pg2: 0,
    pg3: 0,
    pg4: 0,
  });

  const fillRefs = useRef([null, null, null, null]);

  useEffect(() => {
    const calculateFilledPercentage = (fieldValues, totalCount) => {
      const filledFieldsCount = countFilledFields(fieldValues);
      return (filledFieldsCount / totalCount) * 100;
    };

    const countFilledFields = (fields) => {
      return Object.values(fields).reduce((count, value) => {
        if (
          typeof value === "object" &&
          !Array.isArray(value) &&
          value !== null
        ) {
          count += countFilledFields(value);
        } else if (Array.isArray(value)) {
          count += value
            .filter((item) => typeof item === "object")
            .reduce((_acc, item) => countFilledFields(item), 0);
        } else {
          count += value ? 1 : 0;
        }
        return count;
      }, 0);
    };

    const totalFieldsCountPg2 = isNew ? 7 : 5;
    const totalFieldsCountPg3 = isUsaid ? 5 : 4;

    const filledPercentagePg1 = calculateFilledPercentage(values.person, 7);
    const filledPercentagePg2 = calculateFilledPercentage(
      values.project,
      totalFieldsCountPg2
    );
    const filledPercentagePg3 = calculateFilledPercentage(
      values.budjet,
      totalFieldsCountPg3
    );
    const filledPercentagePg4 = calculateFilledPercentage(
      values.descriptions,
      2
    );

    setFilledPercentages({
      pg1: filledPercentagePg1,
      pg2: filledPercentagePg2,
      pg3: filledPercentagePg3,
      pg4: filledPercentagePg4,
    });
  }, [values, isNew, isUsaid, isGroup]);

  useEffect(() => {
    fillRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.setProperty(
          "--filledPercentage",
          `${filledPercentages[`pg${index + 1}`]}%`
        );
      }
    });
  }, [filledPercentages]);

  return (
    <div className="hidden md:flex w-1/3 flex-col gap-2 bg-emerald-50 pt-5 pb-10 p-2 rounded-md min-h-2 flex-grow">
      {/* <h2 className="m-2 mb-3 text-md border-b-2 p-2 font-bold">
        შეავსე განაცხადი
      </h2> */}
      <div className="flex flex-col justify-between flex-1 pl-2">
        {[1, 2, 3].map((page, index) => (
          <div
            className="flex gap-2 min-h-2 flex-grow items-start relative"
            key={page}
          >
            <span
              className={
                filledPercentages[`pg${page}`] === 100 && !errors[`pg${page}`]
                  ? "w-6 h-6 z-20 flex items-center justify-center text-xs rounded-full bg-green-500 text-white transition-all duration-200 ease-in-out"
                  : "w-6 h-6 z-20 flex items-center justify-center text-xs rounded-full bg-gray-300 text-gray-500 transition-all duration-200 ease-in-out"
              }
            >
              {filledPercentages[`pg${page}`] === 100 && !errors[`pg${page}`]
                ? "\u2713"
                : page}
            </span>
            <p className="font-bold text-sm">{`ინფორმაცია ${page}`}</p>
            <div
              className="fill"
              ref={(el) => (fillRefs.current[index] = el)}
            ></div>
          </div>
        ))}

        <div
          className={
            isGroup
              ? "flex gap-2 min-h-2 flex-grow items-start relative"
              : "flex gap-2  items-end relative"
          }
        >
          <span
            className={
              filledPercentages["pg4"] === 100 && !errors.descriptions
                ? "w-6 h-6 z-20 flex items-center justify-center text-xs rounded-full bg-green-500 text-white transition-all duration-200 ease-in-out"
                : "w-6 h-6 z-20 flex items-center justify-center text-xs rounded-full bg-gray-300 text-gray-500 transition-all duration-200 ease-in-out"
            }
          >
            {filledPercentages["pg4"] === 100 && !errors.descriptions
              ? "\u2713"
              : "4"}
          </span>
          <p className="font-bold text-sm "> პროექტის აღწერა </p>

          {isGroup && (
            <div
              className="fill"
              ref={(el) => (fillRefs.current[3] = el)}
            ></div>
          )}
        </div>

        {isGroup && (
          <div className="flex gap-2 items-end relative">
            <span
              className={
                values.members.length > 0
                  ? "w-6 h-6 z-20 flex items-center justify-center text-xs rounded-full bg-green-500 text-white transition-all duration-200 ease-in-out"
                  : "w-6 h-6 z-20 flex items-center justify-center text-xs rounded-full bg-gray-300 text-gray-500 transition-all duration-200 ease-in-out"
              }
            >
              {values.members.length > 0 ? "\u2713" : "5"}
            </span>
            <p className="font-bold text-sm">ჯგუფის წევრების დამატება</p>
          </div>
        )}
      </div>
    </div>
  );
};

FormValid.propTypes = {
  isUs: PropTypes.bool.isRequired,
  isGroup: PropTypes.bool.isRequired,
  isNew: PropTypes.bool.isRequired,
};

export default FormValid;
