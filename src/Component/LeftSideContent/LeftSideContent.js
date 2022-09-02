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
import { FiChevronUp } from "react-icons/fi";
import { AiFillCodepenCircle } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { MdBloodtype } from "react-icons/md";
import { GiTreeBranch } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { useState } from "react";
const LeftSideContent = () => {
  // see more button function
  const [seemore, setSeeMore] = useState(false);
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
      {/* see more /less content*/}
      {seemore && (
        <div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <GrAnnounce className="w-[28px] h-[28px] text-[#1b84f5] flex justify-center items-center  mr-[13px] "></GrAnnounce>
            <p className="text-[15px] font-medium">Add Center</p>
          </div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <GoGraph className="w-[28px] h-[28px] text-[#f8762e] flex justify-center items-center  mr-[13px] "></GoGraph>
            <p className="text-[15px] font-medium">Add Manager</p>
          </div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <MdBloodtype className="w-[28px] h-[28px] text-[#b32b2b] flex justify-center items-center  mr-[13px] "></MdBloodtype>
            <p className="text-[15px] font-medium">Blood Donations</p>
          </div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <GiTreeBranch className="w-[28px] h-[28px] text-[green] flex justify-center items-center  mr-[13px] "></GiTreeBranch>
            <p className="text-[15px] font-medium">Climate Science Center</p>
          </div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <FaHandsHelping className="w-[28px] h-[28px] text-[#1b84f5] flex justify-center items-center  mr-[13px] "></FaHandsHelping>
            <p className="text-[15px] font-medium">Community help</p>
          </div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <BsFillCalendarEventFill className="w-[28px] h-[28px] text-[#1b846E] flex justify-center items-center  mr-[13px] "></BsFillCalendarEventFill>
            <p className="text-[15px] font-medium">Event</p>
          </div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <FaCcAmazonPay className="w-[28px] h-[28px]  flex justify-center items-center  mr-[13px] "></FaCcAmazonPay>
            <p className="text-[15px] font-medium"> Facebook Pay</p>
          </div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <AiFillStar className="w-[28px] h-[28px] text-[#F5C33B] flex justify-center items-center  mr-[13px] "></AiFillStar>
            <p className="text-[15px] font-medium"> Favorites</p>
          </div>
          <div className="flex items-center hover:bg-[#DADDE1]  pl-[5px] py-[10px] rounded-[10px] cursor-pointer ">
            <BsMessenger className="w-[28px] h-[28px] text-[#cc41c4] flex justify-center items-center  mr-[13px] "></BsMessenger>
            <p className="text-[15px] font-medium"> Messenger</p>
          </div>
        </div>
      )}
      {/* see more /less content*/}
      <div
        onClick={() => setSeeMore(!seemore)}
        className=" hover:bg-[#DADDE1] pl-[5px] py-[10px] rounded-[10px] cursor-pointer "
      >
        {seemore ? (
          <div>
            <FiChevronUp className="w-[28px] inline-block h-[28px] text-black  rounded-[100px] mr-[13px] bg-[#e4e6eb]"></FiChevronUp>
            <p className="text-[15px] font-medium inline-block">See less</p>
          </div>
        ) : (
          <div>
            <FiChevronDown className="w-[28px] h-[28px] inline-block text-black rounded-[100px] mr-[13px] bg-[#e4e6eb]"></FiChevronDown>
            <p className="text-[15px] font-medium inline-block">See more</p>
          </div>
        )}
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
