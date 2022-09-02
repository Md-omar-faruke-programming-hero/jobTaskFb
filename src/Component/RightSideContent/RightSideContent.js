import React from "react";
import OnlineFrndList from "../../Data/OnlineFrndList";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
const RightSideContent = () => {
  return (
    <div className="pl-[15px] mt-[10px] overflow-y-scroll h-screen ">
      <div className="flex items-center justify-between py-[10px]">
        <div className="text-[#65676B] text-[17px] font-semibold">Contacts</div>
        <div className="flex items-center">
          <BsCameraVideoFill
            className="w-[32px] text-[#65676B] mr-[20px] hover:bg-white p-[6px] h-[32px] flex justify-center it rounded-[100px] cursor-pointer"
            title="New room"
          ></BsCameraVideoFill>
          <BsSearch
            className="w-[32px] text-[#65676B] mr-[15px] hover:bg-white p-[6px] h-[32px] flex justify-center it rounded-[100px] cursor-pointer"
            title="Search by name or group"
          ></BsSearch>
          <BsThreeDots
            className="w-[32px] text-[#65676B] mr-[10px] hover:bg-white p-[6px] h-[32px] flex justify-center it rounded-[100px] cursor-pointer"
            title="Options"
          ></BsThreeDots>
        </div>
      </div>
      {OnlineFrndList.map((list, i) => (
        <div
          key={i}
          className="relative flex items-center hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer "
        >
          <img
            src={list.img}
            alt=""
            className="w-[28px] h-[28px] flex justify-center items-center rounded-[100px] mr-[13px] "
          />
          <div className="absolute bottom-[9px] left-[23px] w-[12.22px] h-[12.22px] rounded-[100px] bg-[#31A24C] border-[1.5px] border-solid border-white"></div>
          <p className="text-[15px] font-medium">{list?.name}</p>
        </div>
      ))}
      <hr className="my-[5px]" />
    </div>
  );
};

export default RightSideContent;
