import React from "react";

export const SidebarItem = ({ children, title }) => {
  return (
    <div className="text-white flex items-center gap-3 py-2 pl-8  hover:bg-grey-hover rounded-lg">
      {children}
      <p>{title}</p>
    </div>
  );
};
