import React, { useState } from "react";

import { MainTable } from "../../UI/MainTable";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PageLayout";
export const CoveragePage = () => {
  const dummyData = [
    {
      id: 1,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 2,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 3,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 4,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 5,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 6,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 7,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 8,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 9,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
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
      pageMainTitle={"Coberturas"}
      pageMainbuttonDescription={"Agregar coberturas"}
      pageMainbuttonIcon={<AddModeratorOutlinedIcon />}
      entries={Object.keys(tableData[0]).filter((entry) => entry !== "id")}
      modalTitle={"Agregar coberturas"}
      onAdd={handleAddEntity}
    >
      <MainTable
        headers={["Producto", "Plan", "Cubre", "Porcentaje", "Acciones"]}
        mainData={tableData}
        onDelete={handleDeleteEntity}
      />
    </PageLayout>
  );
};
