import React, { useState } from "react";

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { MainTable } from "../../UI/MainTable";
// import { SideBar } from "../../UI/SideBar";
// import { TopBar } from "../../UI/TopBar";
// import { PageMainContent } from "../../UI/PageMainContent";

import { PageLayout } from "../../UI/PageLayout";
import { AddEntityModal } from "../../UI/AddEntityModal";
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
    <>
      <PageLayout
        pageMainTitle="Aseguradoras"
        pageMainbuttonDescription={"Agregar aseguradoras"}
        pageMainbuttonIcon={
          <VerifiedOutlinedIcon className="!text-lg md:!text-xl" />
        }
        entries={Object.keys(tableData[0]).filter((entry) => entry !== "id")}
        modalTitle={"Agregar aseguradora"}
        onAdd={handleAddEntity}
      >
        <MainTable
          headers={["Nombre", "Direccion", "Correo", "Telefono", "Acciones"]}
          mainData={tableData}
          onDelete={handleDeleteEntity}
        />
      </PageLayout>
    </>
  );
};
