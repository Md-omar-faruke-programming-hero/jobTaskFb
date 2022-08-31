import React from "react";
import spiderMan from "../../images/spiderman.jpg";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { RiEarthFill } from "react-icons/ri";

const MiddleContent = () => {
  return (
    <div className="flex justify-center bg-[#f0f2f5] py-[50px]">
      <div>
        <div className="w-[500px] h-[auto] min-w-[auto] max-w-[100%] bg-white px-[15px] py-[10px] rounded-[10px] shadow-sm mb-[10px]">
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
            <div className="flex items-center px-[15px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px]">
              <AiOutlineVideoCamera className="w-[24px] h-[24px] mr-[5px] text-[#f3425f]"></AiOutlineVideoCamera>
              <p className="text-[15px] font-semibold text-[#65676b]">Live video</p>
            </div>
            <div className="flex items-center px-[15px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px]">
              <FaPhotoVideo className="w-[24px] h-[24px] mr-[5px] text-[#45bd62]"></FaPhotoVideo>
              <p className="text-[15px] font-semibold text-[#65676b]">Photo/video</p>
            </div>
            <div className="flex items-center px-[15px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px]">
              <BsEmojiLaughing className="w-[24px] h-[24px] mr-[5px] text-[#f7b928]"></BsEmojiLaughing>
              <p className="text-[15px] font-semibold text-[#65676b]">Feeling/activity</p>
            </div>
          </div>
        </div>
        <div className="w-[500px] h-[auto] min-w-[auto] max-w-[100%] bg-white rounded-[10px] shadow-sm mb-[10px]">
          <div className=" px-[15px] py-[10px] ">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <img
                    src={spiderMan}
                    alt=""
                    className="w-[40px] h-[40px] flex justify-center items-center rounded-[100px] mr-[10px]"
                  />
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#253c55]">Linda's kitchen</h3>
                    <p className="text-[13px] font-normal text-[#7488a6]">
                      August 25 at 10:18 PM . <RiEarthFill className="text-[#65676b] inline-block"></RiEarthFill>
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-[36px] h-[36px] rounded-[100px] hover:bg-[#f0f2f5] flex justify-center items-center cursor-pointer  ">
                <BsThreeDots></BsThreeDots>
              </button>
            </div>
          </div>
          <div className="cursor-pointer">
            <img src={spiderMan} className="w-full h-full" alt="" />
          </div>
          <div>
            <div>

            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
