import React, { useState } from "react";

import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PageLayout";
export const EstablishmentPage = () => {
  const dummyData = [
    {
      id: 1,
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 2,
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 3,
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 4,
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 5,
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 6,
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
    {
      id: 7,
      Nombre: "Amadita",
      Categoria: "Laboratorio",
      Direccion: "C/Abelardo Rodriguez Urdaneta No. 102",
      Telefono: "+1 809 476 3535",
    },
  ];
  const [tableData, setTableData] = useState(dummyData);

  function handleAddEntity(newData) {
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
  }

  function handleDeleteEntity(id) {
    const newTableData = tableData.filter((data) => data.id != id);
    setTableData(newTableData);
  }

  return (
    <PageLayout
      pageMainTitle={"Establecimientos"}
      pageMainbuttonDescription={"Agregar Establecimientos"}
      pageMainbuttonIcon={<AddLocationAltOutlinedIcon />}
      entries={Object.keys(tableData[0]).filter((entry) => entry !== "id")}
      modalTitle={"Agregar establecimientos"}
      onAdd={handleAddEntity}
    >
      <MainTable
        headers={["Nombre", "Categoria", "Direccion", "Telefono", "Acciones"]}
        mainData={tableData}
        onDelete={handleDeleteEntity}
      />
    </PageLayout>
  );
};
