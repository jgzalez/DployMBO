import React, { useRef, useState } from "react";

import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import { MainTable } from "../../UI/MainTable";
import { PageLayout } from "../../UI/PayeLayout";
import { AddEntityModal } from "../../UI/AddEntityModal";
import { DeleteEntityModal } from "../../UI/DeleteEntityModal";
import { ModalButtons } from "../../UI/ModalButtons";
import { ModalInput } from "../../UI/ModalInput";
import { ModalTextArea } from "../../UI/ModalTextArea";
import { ModalComboBox } from "../../UI/ModalComboBox";
export const PlansPage = () => {
  const dummyData = [
    {
      id: 1,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 2,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 3,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 4,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 5,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 6,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 7,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 8,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 9,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
    {
      id: 10,
      Nombre: "Salud Platinum",
      Descripcion: "Completa cobertura local en atencion ambulatorias",
      Aseguradora: "Humano Seguros",
    },
  ];
  const AddEntityDialog = useRef();
  const DeleteEntityDialog = useRef();
  const initialState = {
    id: 0,
    Nombre: "",
    Descripcion: "",
    Aseguradora: "",
  };
  const [id, setId] = useState();
  const [tableData, setTableData] = useState(dummyData);
  const [newPlan, setNewPlan] = useState(initialState);

  function handleSave() {
    const newData = { ...newPlan, id: Math.random() };
    console.log(newData);
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
    setNewPlan(initialState);
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewPlan((prevValue) => {
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
      pageMainTitle={"Planes"}
      pageMainbuttonDescription={"Agregar planes"}
      pageMainbuttonIcon={<PostAddOutlinedIcon />}
      onAdd={() => AddEntityDialog.current.showModal()}
    >
      <AddEntityModal ref={AddEntityDialog} title={"Agregar plan"}>
        <ModalInput
          label={"Nombre"}
          type={"text"}
          placeholder={"Ingresa un nombre"}
          onChange={handleInput}
          name={"Nombre"}
          value={newPlan.Nombre}
        />
        <ModalTextArea
          label={"Descripcion"}
          value={newPlan.Descripcion}
          placeholder={"Descripcion..."}
          onChange={handleInput}
          name={"Descripcion"}
        ></ModalTextArea>
        <ModalComboBox
          title={"Aseguradora"}
          options={[
            "Selecciona..",
            "Humano Seguros",
            "ARS Reservas",
            "La monumental de seguros",
          ]}
          value={newPlan.Aseguradora}
          name={"Aseguradora"}
          onChange={handleInput}
        />
        <ModalButtons onSave={handleSave} action={"Guardar"} />
      </AddEntityModal>

      <DeleteEntityModal ref={DeleteEntityDialog} onDelete={handleDelete} />
      <MainTable
        headers={["ID", "Nombre", "Descripcion", "Aseguradora", "Acciones"]}
        mainData={tableData}
        onDelete={handleOpenDeleteModal}
      />
    </PageLayout>
  );
};
