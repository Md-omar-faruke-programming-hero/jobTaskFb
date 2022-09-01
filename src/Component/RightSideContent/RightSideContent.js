import React from "react";
import OnlineFrndList from "../../Data/OnlineFrndList";

const RightSideContent = () => {
  console.log(OnlineFrndList);
  return (
    <div className="pl-[15px] mt-[10px] overflow-y-scroll h-screen ">
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
