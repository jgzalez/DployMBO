import React from "react";

export const SidebarItem = ({ children, title }) => {
  return (
    <div className="text-white flex items-center gap-3 pt-4 pl-5">
      {children}
      <p>{title}</p>
    </div>
  );
};
