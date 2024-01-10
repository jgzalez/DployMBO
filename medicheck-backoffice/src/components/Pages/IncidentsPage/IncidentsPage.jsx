import React, { useState } from "react";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { MainTable } from "../../UI/MainTable";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { PageLayout } from "../../UI/PageLayout";
export const IncidentsPage = () => {
  const dummyData = [
    {
      id: 1,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      id: 2,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      id: 3,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      id: 4,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      id: 5,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      id: 6,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      id: 7,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
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
      pageMainTitle={"Incidentes"}
      pageMainbuttonDescription={"Agregar incidente"}
      pageMainbuttonIcon={<ErrorOutlineOutlinedIcon />}
      entries={Object.keys(tableData[0]).filter((entry) => entry !== "id")}
      modalTitle={"Agregar incidentes"}
      onAdd={handleAddEntity}
    >
      <MainTable
        headers={[
          "Usuario",
          "Descripcion",
          "Establecimiento",
          "Estado",
          "Acciones",
        ]}
        mainData={tableData}
        onDelete={handleDeleteEntity}
      />
    </PageLayout>
  );
};
