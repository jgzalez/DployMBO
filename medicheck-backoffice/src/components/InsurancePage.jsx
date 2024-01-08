import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { MainTable } from "./MainTable";
export const InsurancePage = () => {
  const dummyData = [
    {
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "ARS Humano",
      Direccion: "Av. Lope de Vega #36",
      Correo: "contacto@humano.com.do",
      Telefono: "+1 809 476 3535",
    },
    {
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
    <div className="h-screen w-screen flex overflow-hidden">
      {isOpen ? (
        <SideBar closeMenu={handleClose} />
      ) : (
        <SideBar style=" hidden lg:flex" />
      )}
      <div className=" h-full w-full flex-col">
        <TopBar openMenu={handleOpenMenu} />
        <PageMainContent
          title={"Aseguradoras"}
          buttonDescription={"Agregar aseguradora"}
          buttonIcon={<VerifiedOutlinedIcon />}
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
