import React from "react";
import spiderMan from "../../images/spiderman.jpg";
import { FaUserFriends } from "react-icons/fa";
import { HiBookmark } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsShopWindow } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillFlag } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { AiFillCodepenCircle } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
const LeftSideContent = () => {
  return (
    <div className="pl-[15px] mt-[10px] scroll ">
      <div className="flex items-center hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <img
          src={spiderMan}
          alt=""
          className="w-[28px] h-[28px] flex justify-center items-center rounded-[100px] mr-[13px] "
        />
        <p className="text-[15px] font-medium">Md. Omar Faruke</p>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <FaUserFriends className="w-[28px] h-[28px] text-[#1b84f5] flex justify-center items-center  mr-[13px] "></FaUserFriends>
        <p className="text-[15px] font-medium">Friends</p>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <HiBookmark className="w-[28px] h-[28px] text-[#bf32b2] flex justify-center items-center rounded-[100px] mr-[13px] "></HiBookmark>
        <p className="text-[15px] font-medium">Saved</p>
      </div>
      <div className="flex items-center  hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <div className="p-[3px] rounded-[100px] w-[35px] h-[35px] bg-[#23acfd] mr-[10px] ">
          <HiOutlineUserGroup className="w-[28px] h-[28px] mx-auto  text-white   flex justify-center items-center rounded-[100px]  "></HiOutlineUserGroup>
        </div>
        <p className="text-[15px] font-medium">Groups</p>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <BsShopWindow className="w-[28px] h-[28px] text-[#1865cf]  flex justify-center items-center  mr-[13px] "></BsShopWindow>
        <p className="text-[15px] font-medium">Marketplace</p>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <FiMonitor className="w-[28px] h-[28px] text-[#37b7cd] flex justify-center items-center  mr-[13px] "></FiMonitor>
        <p className="text-[15px] font-medium">Watch</p>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <AiOutlineClockCircle className="w-[28px] h-[28px] text-[#1f85e1] flex justify-center items-center  mr-[13px] "></AiOutlineClockCircle>
        <p className="text-[15px] font-medium">Memories</p>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <AiFillFlag className="w-[28px] h-[28px] text-[#f8762e] flex justify-center items-center  mr-[13px] "></AiFillFlag>
        <p className="text-[15px] font-medium">Pages</p>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <FiChevronDown className="w-[28px] h-[28px] text-black flex justify-center items-center rounded-[100px] mr-[13px] bg-[#e4e6eb]"></FiChevronDown>
        <p className="text-[15px] font-medium">See more</p>
      </div>
      <hr className="my-[5px]" />
      <div className="flex items-center ">
        <p className="mr-[100px] font-semibold text-[#65676b]">Your shortcuts</p>
        <div>
          <p className="font-normal text-[#1b74e4] cursor-pointer">Edit</p>
        </div>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <AiFillCodepenCircle className="w-[28px] h-[28px] text-black flex justify-center items-center rounded-[100px] mr-[13px] bg-[#e4e6eb]"></AiFillCodepenCircle>
        <p className="text-[15px] font-medium">Game corner</p>
      </div>
      <div className="flex items-center hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
        <AiFillCar className="w-[28px] h-[28px] text-red-700 flex justify-center items-center rounded-[100px] mr-[13px] bg-[#e4e6eb]"></AiFillCar>
        <p className="text-[15px] font-medium">FastAndFurious</p>
      </div>
      <div>
        <p className="text-[#898b8e] font-normal text-[13px]">
          Privacy · Terms · Advertising · Ad Choices <br /> · Cookies · · Meta © 2022
        </p>
      </div>
    </div>
  );
};

export default LeftSideContent;
