import React from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { MainTable } from "./MainTable";
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
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <SideBar />
      <div className=" h-full w-full flex-col">
        <TopBar />
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
