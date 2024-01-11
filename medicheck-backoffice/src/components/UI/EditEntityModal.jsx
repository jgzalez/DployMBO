import React, { forwardRef, useState } from "react";

export const EditEntityModal = forwardRef(function EditEntityModal(
  { title, entries, entityArray, onEdit, onCancel },
  ref
) {
  const inputObject = () => {
    const emptyObject = {};
    entries.map((entry) => (emptyObject[entry] = ""));
    return emptyObject;
  };

  const [entity, setEntity] = useState({
    ...inputObject,
  });

  function handleInput(e) {
    const name = e.target.name;
    setEntity((prevValue) => {
      return { ...prevValue, [name]: e.target.value };
    });
  }

  function handleSave(e) {
    const entityData = { id: Math.random(), ...entity };
    onSave(entityData);
    const resetObject = {};
    entries.map((entry) => (resetObject[entry] = ""));
    setEntity(resetObject);
  }

  return (
    <dialog
      className="w-[80%] h-[600px] md:w-[500px] xl:w-[600px] xl:h-[800px] rounded-md z-50 "
      ref={ref}
    >
      <div className="w-full h-[10%] p-4 bg-[#1C222A] text-white xl:p-8">
        <h2>{title}</h2>
      </div>
      <form method="dialog" className="flex flex-col p-4 xl:p-8 ">
        {entries.map((entry) => {
          if (entry === "Tipo") {
            return (
              <label className="my-2 xl:my-4">
                {entry}
                <select
                  name={entry}
                  onChange={handleInput}
                  value={entity[entry]}
                  className="w-full h-12 xl:h-14 border rounded-sm p-2 mt-2 border-[#D9D9D9]"
                >
                  <option value="Medicamento">Medicamento</option>
                  <option value="Procedimiento">Procedimiento</option>
                  <option value="Analitica">Analitica</option>
                  <option value="Consulta">Consulta</option>
                </select>
              </label>
            );
          } else if (entry === "Cubre") {
            return (
              <label className="my-2 xl:my-4">
                {entry}
                <select
                  name={entry}
                  onChange={handleInput}
                  value={entity[entry]}
                  className="w-full h-12 xl:h-14 border rounded-sm p-2 mt-2 border-[#D9D9D9]"
                >
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </label>
            );
          } else if (entry === "Descripcion") {
            return (
              <label className="my-2 xl:my-4">
                {entry}
                <textarea
                  value={entity[entry]}
                  onChange={handleInput}
                  placeholder="Descripción"
                  className="w-full  border rounded-sm p-2 mt-2 border-[#D9D9D9]"
                  name={entry}
                />
              </label>
            );
          } else if (entry === "Estado") {
            return (
              <label className="my-2 xl:my-4">
                {entry}
                <select
                  name={entry}
                  onChange={handleInput}
                  value={entity[entry]}
                  className="w-full h-12 xl:h-14 border rounded-sm p-2 mt-2 border-[#D9D9D9]"
                >
                  <option value="CREADO">Creado</option>
                  <option value="EN_REVISION">En revisión</option>
                  <option value="CERRADO">Cerrado</option>
                </select>
              </label>
            );
          }

          return (
            <label className="my-2 xl:my-4" key={entry}>
              {entry}
              <input
                type="text"
                placeholder={`Ingresa ${entry}`}
                className="w-full h-12 xl:h-14 border rounded-sm p-2 mt-2 border-[#D9D9D9]"
                onChange={handleInput}
                name={`${entry}`}
                value={entity[entry]}
              />
            </label>
          );
        })}
        <div className="flex justify-end gap-8">
          <button
            className="w-[170px] mt-4 p-2 rounded-md h-[50px] xl:h-[70px] border border-black"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="w-[170px] mt-4 p-2 rounded-md h-[50px] xl:h-[70px] bg-[#1C222A] text-white"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </form>
    </dialog>
  );
});
