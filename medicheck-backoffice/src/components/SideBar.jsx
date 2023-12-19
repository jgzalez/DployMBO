import React from "react";
import appLogo from "../assets/applogo.png";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import { SidebarItem } from "./SidebarItem";
import { ShoppingCartOutlined } from "@material-ui/icons";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import AddToQueueOutlinedIcon from "@material-ui/icons/AddToQueueOutlined";
import BallotOutlinedIcon from "@material-ui/icons/BallotOutlined";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";

export const SideBar = () => {
  return (
    <div className=" sticky left-0 h-full w-[273px] flex flex-col bg-[#1C222A] ">
      <div className="w-full h-[84px] flex justify-start pl-8 items-center bg-[#232B43] text-white gap-[5%]">
        <img src={appLogo} />
        <h1>MediCheck</h1>
      </div>
      <div className="flex flex-col ">
        <SidebarItem title="Dashboard">
          <DashboardOutlinedIcon className="!text-4xl" />
        </SidebarItem>
        <SidebarItem title="Aseguradoras">
          <VerifiedUserOutlinedIcon className="!text-4xl" />
        </SidebarItem>
        <SidebarItem title="Productos">
          <ShoppingCartOutlined className="!text-4xl" />
        </SidebarItem>
        <SidebarItem title="Establecimientos">
          <LocalHospitalOutlinedIcon className="!text-4xl" />
        </SidebarItem>
        <SidebarItem title="Usuarios">
          <PermIdentityOutlinedIcon className="!text-4xl" />
        </SidebarItem>
        <SidebarItem title="Coberturas">
          <AddToQueueOutlinedIcon className="!text-4xl" />
        </SidebarItem>
        <SidebarItem title="Planes">
          <BallotOutlinedIcon className="!text-4xl" />
        </SidebarItem>
        <SidebarItem title="Incidentes">
          <ReportOutlinedIcon className="!text-4xl" />
        </SidebarItem>
      </div>
    </div>
  );
};
