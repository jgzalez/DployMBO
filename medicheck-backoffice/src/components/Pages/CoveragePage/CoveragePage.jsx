import React, { useState } from "react";

import { MainTable } from "../../UI/MainTable";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
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
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {isOpen ? (
        <SideBar closeMenu={handleClose} />
      ) : (
        <SideBar style=" hidden lg:flex" />
      )}
      <div className=" h-full w-full flex-col">
        <TopBar openMenu={handleOpenMenu} />
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
