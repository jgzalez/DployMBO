import React, { useRef, useState } from "react";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { MainTable } from "../../UI/MainTable";
import { SideBar } from "../../UI/SideBar";
import { TopBar } from "../../UI/TopBar";
import { PageMainContent } from "../../UI/PageMainContent";
import { PageLayout } from "../../UI/PayeLayout";
import { ModalButtons } from "../../UI/ModalButtons";
import { AddEntityModal } from "../../UI/AddEntityModal";
import { DeleteEntityModal } from "../../UI/DeleteEntityModal";
import { ModalInput } from "../../UI/ModalInput";
import { ModalComboBox } from "../../UI/ModalComboBox";
export const ProductsPage = () => {
  const dummyData = [
    {
      id: 1,
      id: 1,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 2,
      id: 2,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 3,
      id: 3,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 4,
      id: 4,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 5,
      id: 5,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 6,
      id: 6,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 7,
      id: 7,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
    {
      id: 8,
      id: 8,
      Nombre: "Paracetamol",
      Tipo: "Medicamento",
      Categoria: "Infectologia",
    },
  ];
  const AddEntityDialog = useRef();
  const DeleteEntityDialog = useRef();
  const initialState = {
    id: 0,
    Nombre: "",
    Tipo: "",
    Categoria: "",
  };
  const [id, setId] = useState();
  const [tableData, setTableData] = useState(dummyData);
  const [newProduct, setNewProduct] = useState(initialState);

  function handleSave() {
    const newData = { ...newProduct, id: Math.random() };
    console.log(newData);
    setTableData((prevValue) => {
      return [...prevValue, newData];
    });
    setNewPlan(initialState);
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewProduct((prevValue) => {
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
      pageMainTitle={"Productos"}
      pageMainbuttonDescription={"Agregar productos"}
      pageMainbuttonIcon={<AddShoppingCartOutlinedIcon />}
      onAdd={() => AddEntityDialog.current.showModal()}
    >
      <AddEntityModal ref={AddEntityDialog} title={"Agregar producto"}>
        <ModalInput
          label={"Nombre"}
          type={"text"}
          placeholder={"Ingresa un nombre"}
          onChange={handleInput}
          name={"Nombre"}
          value={newProduct.Nombre}
        />
        <ModalComboBox
          title={"Tipo"}
          options={[
            "Selecciona..",
            "Medicamento",
            "Procedimiento",
            "Analitica",
            "Consulta",
          ]}
          value={newProduct.Tipo}
          name={"Tipo"}
          onChange={handleInput}
        />
        <ModalComboBox
          title={"Categoria"}
          options={[
            "Selecciona..",
            "Cardiologia",
            "Odontologia",
            "Dermatologia",
            "Emergencia",
            "Ortopedia",
            "Cirugia",
            "GastroEnterologia",
            "Hematologia",
            "Infectologia",
          ]}
          value={newProduct.Categoria}
          name={"Categoria"}
          onChange={handleInput}
        />
        <ModalButtons onSave={handleSave} action={"Guardar"} />
      </AddEntityModal>
      <DeleteEntityModal ref={DeleteEntityDialog} onDelete={handleDelete} />
      <MainTable
        headers={["ID", "Nombre", "Tipo", "Categoria", "Acciones"]}
        mainData={tableData}
        onDelete={handleOpenDeleteModal}
      />
    </PageLayout>
  );
};
