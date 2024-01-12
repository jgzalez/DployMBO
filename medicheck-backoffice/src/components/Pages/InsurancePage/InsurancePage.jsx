import React, { useRef, useState } from "react";

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { MainTable } from "../../UI/MainTable";

import { PageLayout } from "../../UI/PayeLayout";
import { AddEntityModal } from "../../UI/AddEntityModal";
import { ModalInput } from "../../UI/ModalInput";
import { DeleteEntityModal } from "../../UI/DeleteEntityModal";
import { ModalButtons } from "../../UI/ModalButtons";

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
  const AddEntityDialog = useRef();
  const DeleteEntityDialog = useRef();
  const [id, setId] = useState();
  const [tableData, setTableData] = useState(dummyData);
  const initialState = {
    id: 0,
    Nombre: "",
    Direccion: "",
    Correo: "",
    Telefono: "",
  };
  const [newinsurance, setNewInsurance] = useState(initialState);

  function handleSave() {
    const newData = { ...newinsurance, id: Math.random() };
    console.log(newData);
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
    setNewInsurance(initialState);
  }

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewInsurance((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleOpenDeleteModal(id) {
    DeleteEntityDialog.current.showModal();
    setId(id);
  }

  function handleDelete() {
    setTableData(tableData.filter((data) => data.id != id));
  }

  return (
    <PageLayout
      pageMainTitle={"Aseguradoras"}
      pageMainbuttonDescription={"Agregar aseguradoras"}
      pageMainbuttonIcon={
        <VerifiedOutlinedIcon className="!text-base md:!text-xl" />
      }
      onAdd={() => AddEntityDialog.current.showModal()}
    >
      <AddEntityModal title={"Agregar aseguradora"} ref={AddEntityDialog}>
        <ModalInput
          label={"Nombre"}
          type={"text"}
          placeholder={"Ingresa un nombre"}
          onChange={handleInput}
          name={"Nombre"}
          value={newinsurance.Nombre}
        />
        <ModalInput
          label={"Dirección"}
          type={"text"}
          placeholder={"Ingresa una dirección"}
          onChange={handleInput}
          name={"Direccion"}
          value={newinsurance.Direccion}
        />
        <ModalInput
          label={"Correo"}
          type={"text"}
          placeholder={"Ingresa un correo"}
          onChange={handleInput}
          name={"Correo"}
          value={newinsurance.Correo}
        />
        <ModalInput
          label={"Telefono"}
          type={"text"}
          placeholder={"Ingresa un telefono"}
          onChange={handleInput}
          name={"Telefono"}
          value={newinsurance.Telefono}
        />
        <ModalButtons onSave={handleSave} action={"Guardar"} />
      </AddEntityModal>
      <DeleteEntityModal ref={DeleteEntityDialog} onDelete={handleDelete} />
      <MainTable
        headers={[
          "ID",
          "Nombre",
          "Direccion",
          "Correo",
          "Telefono",
          "Acciones",
        ]}
        mainData={tableData}
        onDelete={handleOpenDeleteModal}
      />
    </PageLayout>
  );
};
