import React from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import { MainTable } from "./MainTable";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
export const IncidentsPage = () => {
  const dummyData = [
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
  ];
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <SideBar />
      <div className=" h-full w-full flex-col">
        <TopBar />
        <PageMainContent
          title={"Incidentes"}
          buttonDescription={"Agregar incidente "}
          buttonIcon={<ErrorOutlineOutlinedIcon />}
        >
          <MainTable
            headers={[
              "Usuario",
              "Descripcion",
              "Establecimiento",
              "Estado",
              "Acciones",
            ]}
            mainData={dummyData}
          />
        </PageMainContent>
      </div>
    </div>
  );
};
