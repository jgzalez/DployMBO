import React, { useState } from "react";

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PayeLayout";
export const InsurancePage = () => {
  const dummyData = [
    {
      id: 1,
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 2,
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 3,
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 4,
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 5,
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 6,
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
  ];

  return (
    <PageLayout
      pageMainTitle={"Aseguradoras"}
      pageMainbuttonDescription={"Agregar aseguradora"}
      pageMainbuttonIcon={
        <VerifiedOutlinedIcon className="!text-base md:!text-xl" />
      }
    >
      <MainTable
        headers={["Nombre", "Direccion", "Correo", "Telefono", "Acciones"]}
        mainData={dummyData}
      />
    </PageLayout>
  );
};
