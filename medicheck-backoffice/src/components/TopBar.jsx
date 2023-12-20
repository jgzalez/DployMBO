import React from "react";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import profileImg from "../assets/profile.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleIcon from "@mui/icons-material/Circle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@mui/icons-material/Search";
export const TopBar = () => {
  return (
    <div className=" bg-white sticky top-0 text-black flex justify-around gap-[5%] w-full h-[60px] mt-6">
      <div className="relative">
        <input
          placeholder="Search..."
          className=" w-[274px] h-[36px] p-2 bg-[#392DBF08] rounded-md"
        />
        <SearchIcon className="!absolute left-[245px] top-2" />
      </div>
      <div className="flex gap-4">
        <div className="flex h-[36px] !text-black gap-2 bg-[#392DBF08] items-center  rounded-md">
          <Avatar
            src={profileImg}
            alt="Image of the app"
            className="!w-6 !h-6"
          />
          <p>John</p>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex bg-[#392DBF08] w-[54px] h-[36px] justify-center gap-2 items-center  rounded-md">
          <NotificationsIcon />
          <CircleIcon className="!w-[6px] !h-[6px]" />
        </div>
        <div className="bg-[#392DBF08] flex items-center justify-center h-[36px] rounded-md p-2">
          <FormatListBulletedIcon className="rotate-180" />
        </div>
      </div>
    </div>
  );
};
