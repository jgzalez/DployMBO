import React from "react";
import contactImg from "../assets/maleUser.png";
import forwardImg from "../assets/forwardButton.png";

export const StadisticWidget = ({
  total,
  totalDescription,
  widgetDescription,
}) => {
  return (
    <div className="bg-white w-[90%] h-[120px] rounded-[15px] shadow-main-shadow my-3">
      <div className="flex justify-between items-center px-4  h-[75%]">
        <div>
          <h1 className="font-bold text-[24px]">{total}</h1>
          <p>{totalDescription}</p>
        </div>
        <div className="w-[66px] h-[54px] bg-[#F4F4F4] rounded-[25%]  ">
          <img src={contactImg} className="w-[80%] m-auto" />
        </div>
      </div>
      <div className="flex justify-between items-center bg-grey-hover h-[25%] px-4">
        <p className="text-[#0033CC] font-semibold">{widgetDescription}</p>
        <img src={forwardImg} />
      </div>
    </div>
  );
};
