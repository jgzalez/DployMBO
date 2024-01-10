import React, { useState } from "react";

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
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
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div className="h-screen w-screen flex overflow-hidden  ">
      {isOpen ? (
        <SideBar closeMenu={handleClose} />
      ) : (
        <SideBar style=" hidden lg:flex" />
      )}
      <div className=" h-full w-full flex-col ">
        <TopBar openMenu={handleOpenMenu} />
        <PageMainContent
          title={"Aseguradoras"}
          buttonDescription={"Agregar aseguradora"}
          buttonIcon={
            <VerifiedOutlinedIcon className="!text-base md:!text-xl" />
          }
        >
          <MainTable
            headers={["Nombre", "Direccion", "Correo", "Telefono", "Acciones"]}
            mainData={dummyData}
          />
        </PageMainContent>
      </div>
    </div>
  );
};
