import React, { useState } from "react";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PayeLayout";
export const ProductsPage = () => {
  const dummyData = [
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
  ];

  return (
    <PageLayout
      pageMainTitle={"Productos"}
      pageMainbuttonDescription={"Agregar productos"}
      pageMainbuttonIcon={<AddShoppingCartOutlinedIcon />}
    >
      <MainTable
        headers={["Nombre", "Tipo", "Categoria", "Acciones"]}
        mainData={dummyData}
      />
    </PageLayout>
  );
};
