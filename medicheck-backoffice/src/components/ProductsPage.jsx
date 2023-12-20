import React from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";

export const ProductsPage = () => {
  return (
    <div className="h-screen w-screen flex">
      <SideBar />
      <div className=" h-full w-full flex-col">
        <TopBar />
        <PageMainContent />
      </div>
    </div>
  );
};
