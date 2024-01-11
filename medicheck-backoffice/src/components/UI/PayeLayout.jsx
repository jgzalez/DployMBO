import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { PageMainContent } from "./PageMainContent";

export const PageLayout = ({
  pageMainTitle,
  pageMainbuttonDescription,
  pageMainbuttonIcon,
  pageMainWelcome,
  children,

  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div
      className="h-screen w-screen flex overflow-y-scroll overflow-hidden xl:overflow-y-scroll"
      {...props}
    >
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
        >
          {children}
        </PageMainContent>
      </div>
    </div>
  );
};
