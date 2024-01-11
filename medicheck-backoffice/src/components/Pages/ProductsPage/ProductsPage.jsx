import React, { useState } from "react";
import axios from 'axios';

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PageLayout";

const API_BASE_URL = 'http://localhost:5280';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
      'Content-Type': 'application/json',
  },
});

export const ProductsPage = () => {
  const dummyData = [
    {
      id: 1,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 2,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 3,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 4,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 5,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 6,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 7,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 8,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
  ];
  const [tableData, setTableData] = useState(dummyData);


  async function addProducts(productData) {
    const token = localStorage.getItem('token'); // Reemplazar con la lógica para obtener el token real
    console.log(token); // Handle the response (e.g., storing auth token)

    try {
        const response = await axiosInstance.post('/productos', productData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error("Hubo un error al guardar la aseguradora: ", error);
    }
}


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
      pageMainTitle={"Productos"}
      pageMainbuttonDescription={"Agregar productos"}
      pageMainbuttonIcon={<AddShoppingCartOutlinedIcon />}
      entries={Object.keys(tableData[0]).filter((entry) => entry !== "id")}
      onAdd={handleAddEntity}
    >
      <MainTable
        headers={["Nombre", "Tipo", "Categoria", "Acciones"]}
        mainData={tableData}
        onDelete={handleDeleteEntity}
      />
    </PageLayout>
  );
};
