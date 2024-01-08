import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import { StadisticWidget } from "./StadisticWidget";
import { Barchart } from "./Barchart";
import { StadisticWidgetList } from "./StadisticWidgetList";
import { PieChart } from "./PieChart";
import tableImg from "../assets/Group 270.png";

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
            <div className=" w-[600px] h-[320px] ml-52 mt-4 rounded-[11px] shadow-main-shadow overflow-auto bg-white lg:ml-2 lg:w-[63.5vw] lg:h-[250px] lg:col-span-2 xl:col-span-4  xl:w-[73.5vw] xl:h-[300px] xl:ml-0 2xl:w-[76.4vw] 2xl:h-[320px]">
              <table className="w-[110%] xl:w-full"></table>
            </div>
          </div>
        </PageMainContent>
      </div>
    </div>
  );
};
