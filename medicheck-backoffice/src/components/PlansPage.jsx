import React from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import { MainTable } from "./MainTable";
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
    <div className="h-screen w-screen flex overflow-hidden">
      <SideBar />
      <div className=" h-full w-full flex-col">
        <TopBar />
        <PageMainContent
          title={"Planes"}
          buttonDescription={"Agregar planes "}
          buttonIcon={<PostAddOutlinedIcon />}
        >
          <MainTable
            headers={["Nombre", "Descripcion", "Aseguradora", "Acciones"]}
            mainData={dummyData}
          />
        </PageMainContent>
      </div>
    </div>
  );
};
