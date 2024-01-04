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

export const SideBar = ({ style }) => {
  let sideBarClassname = `fixed h-full z-10 lg:sticky lg:left-0  lg:w-[274px] lg:flex lg:flex-col bg-[#1C222A] ${style}`;
  return (
    <div className={sideBarClassname}>
      <div className="w-full h-[84px] flex justify-start pl-4 items-center bg-[#232B43] text-white gap-[5%]">
        <img src={appLogo} />
        <h1>MediCheck</h1>
      </div>
      <div className="flex flex-col pt-2 ">
        <SidebarItem title="Dashboard" path={"/dashboard"}>
          <DashboardOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Aseguradoras" path={"/insurance"}>
          <VerifiedUserOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Productos" path={"/products"}>
          <ShoppingCartOutlined className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Establecimientos" path={"/establishment"}>
          <LocalHospitalOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Usuarios" path={"/users"}>
          <PermIdentityOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Coberturas" path={"/coverage"}>
          <AddToQueueOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Planes" path={"/plans"}>
          <BallotOutlinedIcon className="!text-3xl" />
        </SidebarItem>
        <SidebarItem title="Incidentes" path={"/incidents"}>
          <ReportOutlinedIcon className="!text-3xl" />
        </SidebarItem>
      </div>
    </div>
  );
};
