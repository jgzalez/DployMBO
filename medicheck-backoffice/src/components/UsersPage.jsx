import React from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { MainTable } from "./MainTable";

export const UsersPage = () => {
  const dummyData = [
    {
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
  ];
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <SideBar />
      <div className=" h-full w-full flex-col">
        <TopBar />
        <PageMainContent
          title={"Usuarios"}
          buttonDescription={"Agregar usuarios "}
          buttonIcon={<PersonAddAltOutlinedIcon />}
        >
          <MainTable
            headers={["Nombre", "Apellido", "Correo", "Telefono", "Acciones"]}
            mainData={dummyData}
          />
        </PageMainContent>
      </div>
    </div>
  );
};
