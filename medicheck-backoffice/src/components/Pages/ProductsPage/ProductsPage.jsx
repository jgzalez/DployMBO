import React, { useState } from "react";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
export const ProductsPage = () => {
  const dummyData = [
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
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
          title={"Productos"}
          buttonDescription={"Agregar productos "}
          buttonIcon={<AddShoppingCartOutlinedIcon />}
        >
          <MainTable
            headers={["Nombre", "Tipo", "Categoria", "Acciones"]}
            mainData={dummyData}
          />
        </PageMainContent>
      </div>
    </div>
  );
};
