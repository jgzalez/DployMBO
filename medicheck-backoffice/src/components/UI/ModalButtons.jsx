import React from "react";

export const ModalButtons = ({ onSave }) => {
  return (
    <div className="flex justify-end gap-8">
      <button className="w-[170px] p-2 rounded-md h-[70px] border border-black">
        Cancelar
      </button>
      <button
        className="w-[170px] p-2 rounded-md h-[70px] bg-[#1C222A] text-white"
        onClick={onSave}
      >
        Guardar
      </button>
    </div>
  );
};
