import React, { useRef, useState } from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";
import { MainTable } from "./MainTable";
import { AddEntityModal } from "./AddEntityModal";

export const PageLayout = ({
  pageMainTitle,
  pageMainbuttonDescription,
  pageMainbuttonIcon,
  pageMainWelcome,
  children,
  modalTitle,
  entries,
  onAdd,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const AddDialog = useRef();
  const DeleteDialog = useRef();
  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpenModal() {
    setOpenModal(true);
    AddDialog.current.showModal();
  }

  return (
    <div
      className="h-screen w-screen flex overflow-y-scroll overflow-hidden xl:overflow-y-scroll"
      {...props}
    >
      {entries && (
        <AddEntityModal
          ref={AddDialog}
          entries={entries}
          onSave={onAdd}
          title={modalTitle}
        />
      )}
      {isOpen ? (
        <SideBar closeMenu={handleClose} />
      ) : (
        <SideBar style=" hidden lg:flex" />
      )}
      <div className=" h-full w-full flex-col ">
        <TopBar openMenu={handleOpenMenu} />
        <PageMainContent
          title={pageMainTitle}
          pageWelcome={pageMainWelcome}
          buttonDescription={pageMainbuttonDescription}
          buttonIcon={pageMainbuttonIcon}
          onAdd={handleOpenModal}
        >
          {children}
        </PageMainContent>
      </div>
    </div>
  );
};
