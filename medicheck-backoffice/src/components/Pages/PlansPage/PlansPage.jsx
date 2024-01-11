import React, { useState } from "react";

import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PayeLayout";
export const PlansPage = () => {
  const dummyData = [
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
  ];

  return (
    <PageLayout
      pageMainTitle={"Planes"}
      pageMainbuttonDescription={"Agregar planes"}
      pageMainbuttonIcon={<PostAddOutlinedIcon />}
    >
      <MainTable
        headers={["Nombre", "Descripcion", "Aseguradora", "Acciones"]}
        mainData={dummyData}
      />
    </PageLayout>
  );
};
