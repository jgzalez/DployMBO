import React, { useState } from "react";

import { StadisticWidget } from "./StadisticWidget";
import { Barchart } from "./Barchart";

import { PieChart } from "./PieChart";

import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { StadisticWidgetList } from "./StadisticWidgetList";
import { ConsultTable } from "./ConsultTable";
import { PageLayout } from "../../UI/PayeLayout";

export const DashBoardPage = () => {
  return (
    <PageLayout
      pageMainTitle={"Dashboard"}
      pageMainWelcome={"Bienvenido John, todo listo para que lo administres"}
    >
      <div className="grid grid-cols-1 justify-items-center z-0  md:grid-cols-2 xl:grid-cols-4 lg:w-[93%] lg:mx-auto lg:my-0">
        <StadisticWidgetList />
        <Barchart />
        <PieChart />
        <ConsultTable />
      </div>
    </PageLayout>
  );
};
