import React, { forwardRef, useState } from "react";

export const AddEntityModal = forwardRef(function AddEntityModal(
  { title, entries, onSave, onCancel },
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
    <dialog className="w-[600px] h-[800px] rounded-md z-50 " ref={ref}>
      <div className="w-full h-[10%] bg-[#1C222A] text-white p-8">
        <h2>{title}</h2>
      </div>
      <form method="dialog" className="flex flex-col p-8 ">
        {entries.map((entry) => {
          return (
            <label className="my-4" key={entry}>
              {entry}
              <input
                type="text"
                placeholder={`Ingresa ${entry}`}
                className="w-full h-14 border rounded-sm p-2 mt-2 border-[#D9D9D9]"
                onChange={handleInput}
                name={`${entry}`}
                value={entity[entry]}
              />
            </label>
          );
        })}
        <div className="flex justify-end gap-8">
          <button
            className="w-[170px] p-2 rounded-md h-[70px] border border-black"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="w-[170px] p-2 rounded-md h-[70px] bg-[#1C222A] text-white"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </form>
    </dialog>
  );
});
