import { useParams } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import { useState, useEffect } from "react";
import { baseAPI } from "../../services/baseApi";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Loader, { ErrorPage } from "../../Components/Loader";

const Winner = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    loading: true,
    data: {},
    error: false,
  });

  useEffect(() => {
    baseAPI.get(`/project/${id}`).then((res) => {
      setProject({
        loading: false,
        data: res.data,
        error: false,
      });
    });
  }, [id]);

  if (project.loading) {
    return <Loader loading={project.loading} />;
  }

  if (project.error || !project.data) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="w-full flex-col lg:flex-row  flex gap-5 lg:p-10 p-3">
        <div className="lg:w-4/12 lg:h-imageHeight flex self-center lg:self-start lg:mt-4 sm:w-imageWidth sm:h-imageHeight">
          <img
            className="w-full h-full rounded-2xl "
            src={project.data.img}
            alt={`${project.data.projectName}_img`}
          />
        </div>

        <div className="lg:w-8/12 h-fit w-full ">
          <div className="text-2xl border-b p-2 font-semibold pl-4  flex items-center justify-between ">
            <h2 className="  text-textColor">{project.data.projectName}</h2>

            <p className=" font-bold text-sm lg:text-lg pr-4 flex gap-2 items-center">
              <DateRangeIcon sx={{ color: "red" }} />
              {project.data.Date.slice(0, 10)}
            </p>
          </div>

          <p className="flex gap-5 border-b text-xl items-center p-2">
            <span className="text-red-600">
              <PlaceIcon />{" "}
            </span>
            {project.data.city}
          </p>

          {project.data.groupMembers && (
            <div className="p-4 flex lg:flex-row flex-col gap-5 border-b ">
              <p className="lg:whitespace-nowrap xl:w-3/12">
                <b>ჯგუფის წევრები:</b>
              </p>
              <ul className="flex flex-col list-disc  gap-2 xl:w-9/12">
                {project.data.groupMembers.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="w-full p-4 flex xl:flex-row flex-col gap-5 border-b ">
            <p className="lg:whitespace-nowrap xl:w-3/12">
              <b>პროექტის შესახებ:</b>
            </p>
            <p className="xl:w-9/12">{project.data.projectDesc}</p>
          </div>

          {project.data.listItems && project.data.listName && (
            <div className="w-full p-2 flex gap-5 border-b flex-col xl:flex-row  ">
              <p className="xl:w-3/12 font-bold">{project.data.listName}:</p>

              <ul className="xl:w-9/12 flex flex-col gap-2 pl-5 list-disc">
                {project.data.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="w-full flex-col lg:flex-row p-4 flex gap-5  border-b ">
            <p className=" lg:whitespace-nowrap ">
              <b>სტარტაპ-საქართველოს ინვესტიცია:</b>
            </p>
            <p className="">{project.data.budjetFromStartupGeorgia} ₾</p>
          </div>
          <div className="w-full p-4 flex gap-5 flex-col lg:flex-row  border-b ">
            <p>
              <b>პროექტის ჯამური ბიუჯეტი:</b>
            </p>
            <p>{project.data.totalBudget} ₾</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winner;
