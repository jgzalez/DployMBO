import React, { useState } from "react";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { MainTable } from "../../UI/MainTable";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { PageLayout } from "../../UI/PayeLayout";
export const IncidentsPage = () => {
  const dummyData = [
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
  ];

  return (
    <PageLayout
      pageMainTitle={"Incidentes"}
      pageMainbuttonDescription={"Agregar incidentes"}
      pageMainbuttonIcon={<ErrorOutlineOutlinedIcon />}
    >
      <MainTable
        headers={[
          "Usuario",
          "Descripcion",
          "Establecimiento",
          "Estado",
          "Acciones",
        ]}
        mainData={dummyData}
      />
    </PageLayout>
  );
};
