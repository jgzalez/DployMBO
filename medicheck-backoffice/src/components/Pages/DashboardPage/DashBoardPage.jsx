import React, { useState } from "react";

import { StadisticWidget } from "./StadisticWidget";
import { Barchart } from "./Barchart";

import { PieChart } from "./PieChart";

import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { StadisticWidgetList } from "./StadisticWidgetList";
import { ConsultTable } from "./ConsultTable";

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
    <div className="h-screen w-screen flex overflow-y-scroll !overflow-x-clip xl:overflow-y-hidden">
      {isOpen ? (
        <SideBar closeMenu={handleClose} />
      ) : (
        <SideBar style=" hidden lg:flex" />
      )}

      <div className=" h-full w-full flex-col">
        <TopBar openMenu={handleOpenMenu} />
        <PageMainContent
          title={"Dashboard"}
          pageWelcome={"Bienvenido John, todo listo para que lo administres"}
        >
          <div className="grid grid-cols-1 justify-items-center z-0  md:grid-cols-2 xl:grid-cols-4 lg:w-[93%] lg:mx-auto lg:my-0">
            <StadisticWidgetList />
            <Barchart />
            <PieChart />
            <ConsultTable />
          </div>
        </PageMainContent>
      </div>
    </div>
  );
};
