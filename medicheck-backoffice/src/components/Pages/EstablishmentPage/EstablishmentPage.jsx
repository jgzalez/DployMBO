import React, { useRef, useState } from "react";

import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { MainTable } from "../../UI/MainTable";

import { PageLayout } from "../../UI/PayeLayout";
import { AddEntityModal } from "../../UI/AddEntityModal";
import { DeleteEntityModal } from "../../UI/DeleteEntityModal";
import { ModalInput } from "../../UI/ModalInput";
import { ModalButtons } from "../../UI/ModalButtons";
import { ModalComboBox } from "../../UI/ModalComboBox";
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

  const AddEntityDialog = useRef();
  const DeleteEntityDialog = useRef();
  const initialState = {
    id: 0,
    Nombre: "",
    Categoria: "",
    Direccion: "",
    Telefono: "",
  };
  const [id, setId] = useState();
  const [tableData, setTableData] = useState(dummyData);
  const [newEstablishment, setNewEstablishment] = useState(initialState);

  function handleSave() {
    const newData = { ...newEstablishment, id: Math.random() };
    console.log(newData);
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewEstablishment((prevValue) => {
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
      pageMainTitle={"Establecimientos"}
      pageMainbuttonDescription={"Agregar establecimientos"}
      pageMainbuttonIcon={<AddLocationAltOutlinedIcon />}
      onAdd={() => AddEntityDialog.current.showModal()}
    >
      <AddEntityModal ref={AddEntityDialog} title={"Agregar establecimientos"}>
        <ModalInput
          label={"Nombre"}
          type={"text"}
          placeholder={"Ingresa un nombre"}
          onChange={handleInput}
          name={"Nombre"}
          value={newEstablishment.Nombre}
        />
        <ModalComboBox
          title={"Categoria"}
          options={["Selecciona..", "Laboratorio", "Centro Medico", "Farmacia"]}
          value={newEstablishment.Categoria}
          name={"Categoria"}
          onChange={handleInput}
        />
        <ModalInput
          label={"Dirección"}
          type={"text"}
          placeholder={"Ingresa una direccion"}
          onChange={handleInput}
          name={"Direccion"}
          value={newEstablishment.Direccion}
        />
        <ModalInput
          label={"Telefono"}
          type={"text"}
          placeholder={"Ingresa un telefono"}
          onChange={handleInput}
          name={"Telefono"}
          value={newEstablishment.Telefono}
        />
        <ModalButtons onSave={handleSave} action={"Guardar"} />
      </AddEntityModal>
      <DeleteEntityModal ref={DeleteEntityDialog} onDelete={handleDelete} />
      <MainTable
        headers={[
          "ID",
          "Nombre",
          "Categoria",
          "Direccion",
          "Telefono",
          "Acciones",
        ]}
        mainData={tableData}
        onDelete={handleOpenDeleteModal}
      />
    </PageLayout>
  );
};
