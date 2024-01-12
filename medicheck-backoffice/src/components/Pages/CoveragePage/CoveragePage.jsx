import React, { useRef, useState } from "react";

import { MainTable } from "../../UI/MainTable";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import { PageLayout } from "../../UI/PayeLayout";
import { AddEntityModal } from "../../UI/AddEntityModal";
import { DeleteEntityModal } from "../../UI/DeleteEntityModal";
import { ModalInput } from "../../UI/ModalInput";
import { ModalComboBox } from "../../UI/ModalComboBox";
import { ModalButtons } from "../../UI/ModalButtons";
export const CoveragePage = () => {
  const dummyData = [
    {
      id: 1,
      id: 1,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 2,
      id: 2,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 3,
      id: 3,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 4,
      id: 4,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 5,
      id: 5,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 6,
      id: 6,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 7,
      id: 7,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 8,
      id: 8,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
    {
      id: 9,
      id: 9,
      Producto: "Paracetamol",
      Plan: "Salud Platinum",
      Cubre: "Si",
      Porcentaje: "90%",
    },
  ];

  const AddEntityDialog = useRef();
  const DeleteEntityDialog = useRef();
  const initialState = {
    id: 0,
    Producto: "",
    Plan: "",
    Cubre: "",
    Porcentaje: "",
  };
  const [id, setId] = useState();
  const [tableData, setTableData] = useState(dummyData);
  const [newCoverage, setNewCoverage] = useState(initialState);

  function handleSave() {
    const newData = { ...newCoverage, id: Math.random() };
    console.log(newData);
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewCoverage((prevValue) => {
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
      pageMainTitle={"Coberturas"}
      pageMainbuttonDescription={"Agregar coberturas"}
      pageMainbuttonIcon={<AddModeratorOutlinedIcon />}
      onAdd={() => AddEntityDialog.current.showModal()}
    >
      <AddEntityModal ref={AddEntityDialog} title={"Agregar cobertura"}>
        <ModalComboBox
          title={"Producto"}
          options={["Selecciona..", "Paracetamol", "Doloneuroalfa"]}
          value={newCoverage.Producto}
          name={"Producto"}
          onChange={handleInput}
        />
        <ModalComboBox
          title="Plan"
          options={["Selecciona..", "Salud Platinum", "Salud Gold"]}
          value={newCoverage.Plan}
          name="Plan"
          onChange={handleInput}
        />
        <ModalComboBox
          title={"Cubre"}
          options={["Selecciona", "Si", "No"]}
          value={newCoverage.Cubre}
          name={"Cubre"}
          onChange={handleInput}
        />
        <ModalInput
          label={"Porcentaje"}
          type={"number"}
          placeholder={"Ingresa un porcentaje"}
          onChange={handleInput}
          name={"Porcentaje"}
          value={newCoverage.Porcentaje}
        />
        <ModalButtons onSave={handleSave} action={"Guardar"} />
      </AddEntityModal>
      <DeleteEntityModal ref={DeleteEntityDialog} onDelete={handleDelete} />
      <MainTable
        headers={["ID", "Producto", "Plan", "Cubre", "Porcentaje", "Acciones"]}
        mainData={tableData}
        onDelete={handleOpenDeleteModal}
      />
    </PageLayout>
  );
};
