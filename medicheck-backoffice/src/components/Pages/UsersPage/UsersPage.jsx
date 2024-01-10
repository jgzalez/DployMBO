import React, { useState } from "react";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";

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
