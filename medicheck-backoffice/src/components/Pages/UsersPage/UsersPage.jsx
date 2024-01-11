import React, { useState } from "react";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PayeLayout";

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
    <PageLayout
      pageMainTitle={"Usuarios"}
      pageMainbuttonDescription={"Agregar usuarios"}
      pageMainbuttonIcon={<PersonAddAltOutlinedIcon />}
    >
      <MainTable
        headers={["Nombre", "Apellido", "Correo", "Telefono", "Acciones"]}
        mainData={dummyData}
      />
    </PageLayout>
  );
};
