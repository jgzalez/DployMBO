import React from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import { MainTable } from "./MainTable";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
export const CoveragePage = () => {
  const dummyData = [
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
  ];
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <SideBar />
      <div className=" h-full w-full flex-col">
        <TopBar />
        <PageMainContent
          title={"Coberturas"}
          buttonDescription={"Agregar coberturas "}
          buttonIcon={<AddModeratorOutlinedIcon />}
        >
          <MainTable
            headers={["Producto", "Plan", "Cubre", "Porcentaje", "Acciones"]}
            mainData={dummyData}
          />
        </PageMainContent>
      </div>
    </div>
  );
};
