import React, { useState } from "react";

import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PayeLayout";
export const EstablishmentPage = () => {
  const dummyData = [
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
  ];

  return (
    <PageLayout
      pageMainTitle={"Establecimientos"}
      pageMainbuttonDescription={"Agregar establecimientos"}
      pageMainbuttonIcon={<AddLocationAltOutlinedIcon />}
    >
      <MainTable
        headers={["Nombre", "Categoria", "Direccion", "Telefono", "Acciones"]}
        mainData={dummyData}
      />
    </PageLayout>
  );
};
