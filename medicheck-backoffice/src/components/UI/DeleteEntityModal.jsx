import React, { forwardRef } from "react";

export const DeleteEntityModal = forwardRef(function DeleteEntityModal(
  { modalTitle, onDelete },
  ref
) {
  return (
    <dialog ref={ref}>
      <h1>{modalTitle}</h1>
      <p>
        Realmente quieres borrar este registro? este proceso no se puede
        deshacer
      </p>
      <form method="dialog">
        <button>Cancelar</button>
        <button onClick={onDelete}>Eliminar</button>
      </form>
    </dialog>
  );
});
