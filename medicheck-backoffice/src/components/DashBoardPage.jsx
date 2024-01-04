import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import { StadisticWidget } from "./StadisticWidget";

export const DashBoardPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div className="h-screen w-screen flex overflow-y-scroll">
      {isOpen ? <SideBar /> : <SideBar style=" hidden lg:flex" />}

      <div className=" h-full w-full flex-col">
        <TopBar openMenu={handleOpenMenu} />
        <PageMainContent
          title={"Dashboard"}
          pageWelcome={"Bienvenido John, todo listo para que lo administres"}
          onClick={handleClose}
        >
          <div className="grid grid-cols-1 justify-items-center">
            <StadisticWidget
              total={35}
              totalDescription={"Total usuarios"}
              widgetDescription={"Ver usuarios"}
            />
            <StadisticWidget
              total={35}
              totalDescription={"Total usuarios"}
              widgetDescription={"Ver usuarios"}
            />
            <StadisticWidget
              total={35}
              totalDescription={"Total usuarios"}
              widgetDescription={"Ver usuarios"}
            />
            <StadisticWidget
              total={35}
              totalDescription={"Total usuarios"}
              widgetDescription={"Ver usuarios"}
            />
          </div>
        </PageMainContent>
      </div>
    </div>
  );
};
