import React, { useState } from "react";

import { MainTable } from "../../UI/MainTable";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PayeLayout";
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
    <PageLayout
      pageMainTitle={"Coberturas"}
      pageMainbuttonDescription={"Agregar coberturas"}
      pageMainbuttonIcon={<AddModeratorOutlinedIcon />}
    >
      <MainTable
        headers={["Producto", "Plan", "Cubre", "Porcentaje", "Acciones"]}
        mainData={dummyData}
      />
    </PageLayout>
  );
};
