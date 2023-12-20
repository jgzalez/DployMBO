import React from "react";
import appLogo from "../assets/applogo.png";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { SidebarItem } from "./SidebarItem";
import { ShoppingCartOutlined } from "@mui/icons-material";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddToQueueOutlinedIcon from "@mui/icons-material/AddToQueueOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";

export const SideBar = () => {
  return (
    <div className=" sticky left-0 h-full w-[274px] flex flex-col bg-[#1C222A]">
      <div className="w-full h-[84px] flex justify-start pl-4 items-center bg-[#232B43] text-white gap-[5%]">
        <img src={appLogo} />
        <h1>MediCheck</h1>
      </div>
      <div className="flex flex-col ">
        <SidebarItem title="Dashboard">
          <DashboardOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Aseguradoras">
          <VerifiedUserOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Productos">
          <ShoppingCartOutlined className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Establecimientos">
          <LocalHospitalOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Usuarios">
          <PermIdentityOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Coberturas">
          <AddToQueueOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Planes">
          <BallotOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Incidentes">
          <ReportOutlinedIcon className="!text-3xl" />
        </SidebarItem>
      </div>
    </div>
  );
};
