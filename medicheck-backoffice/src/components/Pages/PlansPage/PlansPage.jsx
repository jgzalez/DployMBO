import React, { useState } from "react";

import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PageLayout";
export const PlansPage = () => {
  const dummyData = [
    {
      id: 1,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 2,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 3,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 4,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 5,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 6,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 7,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 8,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 9,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 10,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
  ];
  const [tableData, setTableData] = useState(dummyData);

  function handleAddEntity(newData) {
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
  }

  function handleDeleteEntity(id) {
    const newTableData = tableData.filter((data) => data.id != id);
    setTableData(newTableData);
  }

  return (
    <PageLayout
      pageMainTitle={"Planes"}
      pageMainbuttonDescription={"Agregar planes"}
      pageMainbuttonIcon={<PostAddOutlinedIcon />}
      entries={Object.keys(tableData[0]).filter((entry) => entry !== "id")}
      modalTitle={"Agregar Planes"}
      onAdd={handleAddEntity}
    >
      <MainTable
        headers={["Nombre", "Descripcion", "Aseguradora", "Acciones"]}
        mainData={tableData}
        onDelete={handleDeleteEntity}
      />
    </PageLayout>
  );
};
