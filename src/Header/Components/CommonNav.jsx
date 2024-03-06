import { NavLink } from "react-router-dom";
const CommonNav = () => {
  return (
    <nav area-label="navigation" className="h-full lg:h-fit ml-4">
      <ul
        className={`gap-3 text-base lg:text-sm pr-5 xl:pr-0 xl:text-base xl:gap-5 flex flex-col  lg:flex-row h-full lg:h-fit justify-center w-fit  items-center list-none  font-semibold`}
      >
        <li className="whitespace-nowrap  w-full pb-2 cursor-pointer">
          <NavLink to={"/application"} activeClassName="active">
            განაცხადი
          </NavLink>
        </li>
        <li className=" whitespace-nowrap w-full pb-2 cursor-pointer ">
          <NavLink to={"/usaid"} activeClassName="active">
            USID-CNFA
          </NavLink>
        </li>
        <li className=" whitespace-nowrap w-full pb-2 cursor-pointer">
          <NavLink to={"/winners"} activeClassName="active">
            გამარჯვებულები
          </NavLink>
        </li>
        <li className=" whitespace-nowrap w-full pb-2 cursor-pointer">
          <NavLink to={"/news"} activeClassName="active">
            სიახლეები
          </NavLink>
        </li>
        <li className="sm:whitespace-nowrap w-full pb-2 cursor-pointer ">
          <NavLink to={"/terms"} activeClassName="active">
            მონაწილეობის პირობები
          </NavLink>
        </li>
        <li className=" whitespace-nowrap w-full pb-2 cursor-pointer">
          {" "}
          <NavLink to="/faq" activeClassName="active">
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CommonNav;
