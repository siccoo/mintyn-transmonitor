import React from "react";
// import { StatsCardObj } from "../dataObj/DataObj";

const StatsCard = ({ image, title, amount }) => {
  return (
    <div className="bg-white flex gap-2 p-4">
      <div>
        <p className="text-xs text-gray">{title}</p>
        <p className="text-base md:text-lg text-dark">{amount}</p>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default StatsCard;
