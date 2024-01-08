import React from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SearchIcon from "@mui/icons-material/Search";

export const PageMainContent = ({
  children,
  title,
  buttonDescription,
  buttonIcon,
  pageWelcome,
  ...props
}) => {
  return (
    <div
      className="w-full h-fit bg-[#F3F2FB] py-5 overflow-y-scroll overflow-x-hidden  mt-[60px] sm:h-full md:mt-[80px] lg:ml-[275px] lg:w-[77vw]  lg:overflow-hidden xl:w-[83vw]  xl:ml-[250px] 2xl:w-[86vw] 2xl:ml-[275px]"
      {...props}
    >
      {buttonIcon ? (
        <div className="flex justify-between items-center">
          <h1 className="text-black text-2xl pl-8">{title}</h1>

          <div className="flex items-center gap-3 mr-16 ">
            <button className="bg-[#0A41E9] h-[2.5rem] w-fit rounded-md text-white px-3 shadow-main-shadow">
              {buttonIcon} {buttonDescription}
            </button>
            <div className="bg-[#0A41E9] h-[2.5rem] w-fit rounded-md px-3 flex items-center ">
              <ChecklistIcon className="!text-white" />
            </div>
            <div className="relative">
              <input
                placeholder="Search.."
                className="h-[2.5rem] rounded-md px-3"
              />
              <SearchIcon className="text-[lightgray] !absolute z-10 right-3 top-3" />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-left">
          <h1 className="text-black text-xl pl-6 font-semibold lg:pl-20 xl:pl-16 2xl:pl-24">
            {title}
          </h1>
          <p className="text-[#898A8D] font-semibold text-sm pl-6 pt-2 lg:pl-20 xl:pl-16 2xl:pl-24">
            {pageWelcome}
          </p>
        </div>
      )}

      {children}
    </div>
  );
};
