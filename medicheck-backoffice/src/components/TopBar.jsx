import React from "react";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import profileImg from "../assets/profile.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleIcon from "@mui/icons-material/Circle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@mui/icons-material/Search";
export const TopBar = ({ openMenu, ...props }) => {
  return (
    <div
      className=" bg-white z-0 fixed top-0 text-black flex justify-evenly items-center gap-[5%] w-full h-[60px] py-6 pl-3"
      {...props}
    >
      <div
        onClick={() => openMenu()}
        className="flex flex-col justify-between w-[2.25rem] h-[1.7rem] lg:hidden"
      >
        <span className="h-[0.3rem] w-[full] bg-[#ADADAD] rounded-[3px]"></span>
        <span className="h-[0.3rem] w-[full] bg-[#ADADAD] rounded-[3px]"></span>
        <span className="h-[0.3rem] w-[full] bg-[#ADADAD] rounded-[3px]"></span>
      </div>
      <div className="relative">
        <input
          placeholder="Search..."
          className=" w-[164px] h-[30px] p-2 bg-[#392DBF08] rounded-md"
        />
        <SearchIcon className="!absolute left-[137px] top-1" />
      </div>

      <div className="flex gap-4">
        <div className="flex h-[30px] !text-black gap-2 bg-[#392DBF08] items-center  rounded-md p-1">
          <Avatar
            src={profileImg}
            alt="Image of the app"
            className="!w-5 !h-5"
          />
          <p className="text-sm">John</p>
          <KeyboardArrowDownIcon className="!w-5 !h-5" />
        </div>
        <div className="hidden lg:flex bg-[#392DBF08] w-[54px] h-[36px] justify-center gap-2 items-center  rounded-md">
          <NotificationsIcon />
          <CircleIcon className="!w-[6px] !h-[6px]" />
        </div>
        <div className="hidden bg-[#392DBF08] lg:flex items-center justify-center h-[36px] rounded-md p-2">
          <FormatListBulletedIcon className="rotate-180" />
        </div>
      </div>
    </div>
  );
};
