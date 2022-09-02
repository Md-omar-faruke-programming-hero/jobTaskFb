import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiMonitor } from "react-icons/fi";
import { SiFacebookgaming } from "react-icons/si";
import { TbGridDots } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ postDetails }) => {
  const userinfo = postDetails[0]?.user;
  return (
    <div
      className="flex items-center justify-between shadow-md px-[15px] py-[3px] z-10
     sticky top-0 bg-white"
    >
      <div className="   flex items-center">
        <div className="flex items-center md:mr-[25px]">
          <FaFacebook className="text-[#0a80ec] text-[40px] cursor-pointer mr-[8px]"></FaFacebook>
          <input
            className="p-[10px] md:w-[212px] h-[40px] rounded-[100px] bg-[#DADDE1] focus:outline-none placeholder:text-[#65676b]"
            type="text"
            name=""
            id=""
            placeholder="Search FaceBook"
          />
        </div>
        <div className="md:block hidden">
          <div className="grid md:grid-cols-5 gap-x-4 ">
            <div className="relative px-[40px] py-[10px]">
              <AiFillHome
                style={{ width: "28px", height: "28px" }}
                className="text-[#0a80ec]  cursor-pointer mx-auto "
              ></AiFillHome>
              <div className="w-[100px] h-[3px] bg-[#0a80ec] absolute top-[48px] left-[0px]"></div>
            </div>
            <div className="hover:bg-[#DADDE1] px-[40px] py-[10px] rounded-[10px]">
              <FiMonitor
                style={{ width: "28px", height: "28px" }}
                className="text-[#65676b] text-[24px] cursor-pointer mx-auto "
              ></FiMonitor>
            </div>
            <div className="hover:bg-[#DADDE1] px-[40px] py-[10px] rounded-[10px]">
              <BsShopWindow
                style={{ width: "28px", height: "28px" }}
                className="text-[#65676b] text-[24px] cursor-pointer mx-auto "
              ></BsShopWindow>
            </div>
            <div className="hover:bg-[#DADDE1] px-[40px] py-[10px] rounded-[10px]">
              <HiOutlineUserGroup
                style={{ width: "28px", height: "28px" }}
                className="text-[#65676b] text-[24px] cursor-pointer mx-auto"
              ></HiOutlineUserGroup>
            </div>
            <div className="hover:bg-[#DADDE1] px-[40px] py-[10px] rounded-[10px]">
              <SiFacebookgaming
                style={{ width: "28px", height: "28px", backgroundColor: "white" }}
                className="text-[#65676b] text-[24px] bg-white cursor-pointer mx-auto"
              ></SiFacebookgaming>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <div className="grid md:grid-cols-4 gap-x-3 ">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[100px] bg-[#e4e6eb]">
            <TbGridDots className="text-[22px] cursor-pointer"></TbGridDots>
          </div>
          <div className="w-[40px] relative h-[40px] flex justify-center items-center rounded-[100px] bg-[#e4e6eb]">
            <BsMessenger className="text-[22px] cursor-pointer"></BsMessenger>
            <div className="flex absolute top-[-3px] right-[-8px] justify-center items-center w-[20px] h-[20px] bg-[red] rounded-[100px]">
              <p className="text-[14px] text-[white]">2</p>
            </div>
          </div>
          <div className="w-[40px] relative h-[40px] flex justify-center items-center rounded-[100px] bg-[#e4e6eb]">
            <FaBell className="text-[22px] cursor-pointer"></FaBell>
            <div className="flex absolute top-[-3px] right-[-8px] justify-center items-center w-[20px] h-[20px] bg-[red] rounded-[100px]">
              <p className="text-[14px] text-[white]">2</p>
            </div>
          </div>
          <div>
            <img
              src={userinfo?.profile_picture}
              alt=""
              className="w-[40px] h-[40px] flex justify-center items-center rounded-[100px] "
            />
          </div>
        </div>
      </div>
      <div className="md:hidden block w-[40px] relative h-[40px] flex justify-center items-center rounded-[100px] bg-[#e4e6eb]">
        <GiHamburgerMenu className="text-[22px] cursor-pointer"></GiHamburgerMenu>
      </div>
    </div>
  );
};

export default NavBar;
