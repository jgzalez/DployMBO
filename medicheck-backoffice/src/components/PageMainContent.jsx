import React from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SearchIcon from "@mui/icons-material/Search";

export const PageMainContent = ({
  children,
  title,
  buttonDescription,
  buttonIcon,
}) => {
  return (
    <div className="w-full h-[90%] bg-[#F3F2FB] p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-2xl">{title}</h1>
        <div className="flex items-center gap-3 mr-16 ">
          <button className="bg-[#0A41E9] h-[2.5rem] w-fit rounded-md text-white px-3">
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

      {children}
    </div>
  );
};
