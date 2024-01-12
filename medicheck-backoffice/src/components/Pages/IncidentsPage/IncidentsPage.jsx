import React, { useRef, useState } from "react";

import { MainTable } from "../../UI/MainTable";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { PageLayout } from "../../UI/PayeLayout";
import { AddEntityModal } from "../../UI/AddEntityModal";
import { DeleteEntityModal } from "../../UI/DeleteEntityModal";
import { ModalComboBox } from "../../UI/ModalComboBox";
import { ModalTextArea } from "../../UI/ModalTextArea";
import { ModalButtons } from "../../UI/ModalButtons";
export const IncidentsPage = () => {
  const dummyData = [
    {
      id: 7,
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
      id: 5,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      id: 4,
      id: 4,
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
      id: 2,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
    {
      id: 1,
      Usuario: "Ismael David",
      Descripcion: "En este local mi seguro no cubre el medicamento",
      Establecimiento: "Farmacia Carol",
      Estado: "Cerrado",
    },
  ];
  const AddEntityDialog = useRef();
  const DeleteEntityDialog = useRef();
  const initialState = {
    id: 0,
    Usuario: "",
    Descripcion: "",
    Establecimiento: "",
    Estado: "",
  };
  const [id, setId] = useState();
  const [tableData, setTableData] = useState(dummyData);
  const [newIncident, setNewIncident] = useState(initialState);

  function handleSave() {
    const newData = { ...newIncident, id: Math.random() };
    console.log(newData);
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
    setNewIncident(initialState);
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewIncident((prevValue) => {
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
      pageMainTitle={"Incidentes"}
      pageMainbuttonDescription={"Agregar incidentes"}
      pageMainbuttonIcon={<ErrorOutlineOutlinedIcon />}
      onAdd={() => AddEntityDialog.current.showModal()}
    >
      <AddEntityModal ref={AddEntityDialog} title={"Agregar incidente"}>
        <ModalComboBox
          title={"Usuario"}
          options={[
            "Selecciona..",
            "Ismael Dicent",
            "Rusbel Duarte",
            "Emilio Santos",
          ]}
          value={newIncident.Usuario}
          name={"Usuario"}
          onChange={handleInput}
        />
        <ModalTextArea
          label={"Descripcion"}
          value={newIncident.Descripcion}
          placeholder={"Descripcion..."}
          onChange={handleInput}
          name={"Descripcion"}
        ></ModalTextArea>
        <ModalComboBox
          title={"Establecimiento"}
          options={[
            "Selecciona..",
            "Farmacia Carol",
            "Farmacia Hidalgos",
            "Amadita",
          ]}
          value={newIncident.Establecimiento}
          name={"Establecimiento"}
          onChange={handleInput}
        />
        <ModalComboBox
          title={"Estado"}
          options={["Selecciona..", "Creado", "En revision", "Cerrado"]}
          value={newIncident.Estado}
          name={"Estado"}
          onChange={handleInput}
        />
        <ModalButtons onSave={handleSave} action={"Guardar"} />
      </AddEntityModal>
      <DeleteEntityModal ref={DeleteEntityDialog} onDelete={handleDelete} />
      <MainTable
        headers={[
          "ID",
          "Usuario",
          "Descripcion",
          "Establecimiento",
          "Estado",
          "Acciones",
        ]}
        mainData={tableData}
        onDelete={handleOpenDeleteModal}
      />
    </PageLayout>
  );
};
