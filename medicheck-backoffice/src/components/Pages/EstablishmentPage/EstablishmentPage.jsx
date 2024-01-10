import React, { useState } from "react";

import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
export const EstablishmentPage = () => {
  const dummyData = [
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
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
          title={"Establecimientos"}
          buttonDescription={"Agregar establecimientos "}
          buttonIcon={<AddLocationAltOutlinedIcon />}
        >
          <MainTable
            headers={[
              "Nombre",
              "Categoria",
              "Direccion",
              "Telefono",
              "Acciones",
            ]}
            mainData={dummyData}
          />
        </PageMainContent>
      </div>
    </div>
  );
};
