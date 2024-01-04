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
    <div className="w-full h-full bg-[#F3F2FB] pt-5 mt-[60px]" {...props}>
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
          <h1 className="text-black text-xl pl-4 font-semibold">{title}</h1>
          <p className="text-[#898A8D] font-semibold text-sm pl-4 pt-2">
            {pageWelcome}
          </p>
        </div>
      )}

      {children}
    </div>
  );
};
