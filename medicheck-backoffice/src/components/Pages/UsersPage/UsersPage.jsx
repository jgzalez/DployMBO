import React, { useState } from "react";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PageLayout";

export const UsersPage = () => {
  const dummyData = [
    {
      id: 1,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 2,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 3,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 4,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 5,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 6,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 7,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
  ];

  const [tableData, setTableData] = useState(dummyData);

  function handleAddEntity(newData) {
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
  }

  async function addUser(userData) {
    const token = localStorage.getItem('token'); // Reemplazar con la lógica para obtener el token real
    console.log(token); // Handle the response (e.g., storing auth token)

    try {
        const response = await axiosInstance.post('/usuarios', userData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error("Hubo un error al guardar la aseguradora: ", error);
    }
}


  function handleDeleteEntity(id) {
    const newTableData = tableData.filter((data) => data.id != id);
    setTableData(newTableData);
  }
  return (
    <PageLayout
      pageMainTitle={"Usuarios"}
      pageMainbuttonDescription={"Agregar usuarios"}
      pageMainbuttonIcon={<PersonAddAltOutlinedIcon />}
      entries={Object.keys(tableData[0]).filter((entry) => entry !== "id")}
      modalTitle={"Agregar Usuarios"}
      onAdd={handleAddEntity}
    >
      <MainTable
        headers={["Nombre", "Apellido", "Correo", "Telefono", "Acciones"]}
        mainData={tableData}
        onDelete={handleDeleteEntity}
      />
    </PageLayout>
  );
};
