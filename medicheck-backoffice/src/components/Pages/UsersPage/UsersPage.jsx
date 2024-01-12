import React, { useRef, useState } from "react";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { MainTable } from "../../UI/MainTable";
import { PageLayout } from "../../UI/PayeLayout";
import { AddEntityModal } from "../../UI/AddEntityModal";
import { DeleteEntityModal } from "../../UI/DeleteEntityModal";
import { ModalButtons } from "../../UI/ModalButtons";
import { ModalInput } from "../../UI/ModalInput";
import { EditEntityModal } from "../../UI/EditEntityModal";

export const UsersPage = () => {
  const dummyData = [
    {
      id: 1,
      id: 1,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 2,
      id: 2,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 3,
      id: 3,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 4,
      id: 4,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 5,
      id: 5,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 6,
      id: 6,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
    {
      id: 7,
      id: 7,
      Nombre: "Ismael David",
      Apellido: "Dicent Lahoz",
      Correo: "ismaeldcent@gmail.com",
      Telefono: "+1 809 875 4411",
    },
  ];
  const AddEntityDialog = useRef();
  const DeleteEntityDialog = useRef();
  const EditEntityDialog = useRef();
  const initialState = {
    id: 0,
    Nombre: "",
    Apellido: "",
    Correo: "",
    Telefono: "",
  };
  const [id, setId] = useState();
  const [tableData, setTableData] = useState(dummyData);
  const [newUser, setNewUser] = useState(initialState);

  function handleSave() {
    const newData = { ...newUser, id: Math.random() };
    console.log(newData);
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
    setNewUser(initialState);
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  // function handleUpdateInput(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUpdateUser((prevValue) => {
  //     return { ...prevValue, [name]: value };
  //   });
  // }
  function handleOpenDeleteModal(id) {
    DeleteEntityDialog.current.showModal();
    setId(id);
  }

  function handleDelete() {
    setTableData(tableData.filter((data) => data.id != id));
  }

  function handleEdit(data) {
    EditEntityDialog.current.showModal();
    setNewUser(data);
  }

  function handleUpdate() {
    const entityToUpdate = tableData.find((entity) => newUser.id === entity.id);

    setNewUser((prevValue) => {
      return { ...entityToUpdate, ...prevValue };
    });
    console.log(newUser);

    // setTableData([...tableData, ...newUser]);
  }

  return (
    <PageLayout
      pageMainTitle={"Usuarios"}
      pageMainbuttonDescription={"Agregar usuarios"}
      pageMainbuttonIcon={<PersonAddAltOutlinedIcon />}
      onAdd={() => AddEntityDialog.current.showModal()}
    >
      <AddEntityModal ref={AddEntityDialog} title={"Agregar usuario"}>
        <ModalInput
          label={"Nombre"}
          type={"text"}
          placeholder={"Ingresa un nombre"}
          onChange={handleInput}
          name={"Nombre"}
          value={newUser.Nombre}
        />
        <ModalInput
          label={"Apellido"}
          type={"text"}
          placeholder={"Ingresa un apellido"}
          onChange={handleInput}
          name={"Apellido"}
          value={newUser.Apellido}
        />
        <ModalInput
          label={"Correo"}
          type={"text"}
          placeholder={"Ingresa un correo"}
          onChange={handleInput}
          name={"Correo"}
          value={newUser.Correo}
        />
        <ModalInput
          label={"Telefono"}
          type={"text"}
          placeholder={"Ingresa un telefono"}
          onChange={handleInput}
          name={"Telefono"}
          value={newUser.Telefono}
        />
        <ModalButtons onSave={handleSave} action={"Guardar"} />
      </AddEntityModal>
      <DeleteEntityModal ref={DeleteEntityDialog} onDelete={handleDelete} />
      <EditEntityModal ref={EditEntityDialog} title="Editar usuarios">
        <ModalInput
          label={"Nombre"}
          type={"text"}
          placeholder={"Ingresa un nombre"}
          onChange={handleInput}
          name={"Nombre"}
          value={newUser.Nombre}
        />
        <ModalInput
          label={"Apellido"}
          type={"text"}
          placeholder={"Ingresa un apellido"}
          onChange={handleInput}
          name={"Apellido"}
          value={newUser.Apellido}
        />
        <ModalInput
          label={"Correo"}
          type={"text"}
          placeholder={"Ingresa un correo"}
          onChange={handleInput}
          name={"Correo"}
          value={newUser.Correo}
        />
        <ModalInput
          label={"Telefono"}
          type={"text"}
          placeholder={"Ingresa un telefono"}
          onChange={handleInput}
          name={"Telefono"}
          value={newUser.Telefono}
        />
        <ModalButtons onSave={handleUpdate} action={"Editar"} />
      </EditEntityModal>
      <MainTable
        headers={["ID", "Nombre", "Apellido", "Correo", "Telefono", "Acciones"]}
        mainData={tableData}
        onDelete={handleOpenDeleteModal}
        onEdit={handleEdit}
      />
    </PageLayout>
  );
};
