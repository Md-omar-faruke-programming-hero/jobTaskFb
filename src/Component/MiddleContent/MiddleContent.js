import React from "react";
import spiderMan from "../../images/spiderman.jpg";
import { AiOutlineVideoCamera } from "react-icons/ai";

const MiddleContent = () => {
  return (
    <div className="flex justify-center bg-[#f0f2f5] py-[50px]">
      <div className="w-[500px] h-[auto] min-w-[auto] max-w-[100%] bg-white px-[15px] py-[10px]">
        <div className="flex items-center">
          <img
            src={spiderMan}
            alt=""
            className="w-[40px] h-[40px] flex justify-center items-center rounded-[100px] mr-[10px]"
          />
          <input
            className="bg-[#f0f2f5] w-full focus:outline-none rounded-[100px] px-[12px] py-[8px]"
            type="text"
            name=""
            id=""
            placeholder="What's on your mind, Md.Omar?"
          />
        </div>
        <hr className="my-[14px]" />
        <div className="grid md:grid-cols-3">
          <div className="flex items-center px-[15px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer">
            <AiOutlineVideoCamera className="w-[24px] h-[24px] mr-[5px]"></AiOutlineVideoCamera>
            <p>Live video</p>
          </div>
          <div className="flex items-center px-[15px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer">
            <AiOutlineVideoCamera className="w-[24px] h-[24px] mr-[5px]"></AiOutlineVideoCamera>
            <p>Live video</p>
          </div>
          <div className="flex items-center px-[15px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer">
            <AiOutlineVideoCamera className="w-[24px] h-[24px] mr-[5px]"></AiOutlineVideoCamera>
            <p>Live video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
