import React, { useState } from "react";
import axios from 'axios';

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { MainTable } from "../../UI/MainTable";
import { PageLayout } from "../../UI/PageLayout";
const API_BASE_URL = 'http://localhost:5280';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
      'Content-Type': 'application/json',
  },
});


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


    async function addInsurance(insuranceData) {
      const token = localStorage.getItem('token'); // Reemplazar con la lógica para obtener el token real
      console.log(token); // Handle the response (e.g., storing auth token)

      try {
          const response = await axiosInstance.post('/aseguradoras', insuranceData, {
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
    addInsurance(newData).then(() => {
        setTableData((prevValue) => {
            return [...prevValue, newData];
        });
    }).catch(error => {
        // Manejar el error aquí
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
