import React from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
export const InsurancePage = () => {
  return (
    <div className="h-screen w-screen flex">
      <SideBar />
      <div className=" h-full w-full flex-col">
        <TopBar />
        <PageMainContent
          title={"Aseguradoras"}
          buttonDescription={"Agregar aseguradora"}
          buttonIcon={<VerifiedOutlinedIcon />}
        />
      </div>
    </div>
  );
};
