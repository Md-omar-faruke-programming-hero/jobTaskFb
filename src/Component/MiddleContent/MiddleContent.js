import React, { useState } from "react";
import spiderMan from "../../images/spiderman.jpg";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { RiEarthFill } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import { MdThumbUpAlt } from "react-icons/md";
import { BsHandThumbsUp } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsHandThumbsUpFill } from "react-icons/bs";

const MiddleContent = () => {
  // like button function
  const [like, setLike] = useState(false);
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
            <p className="my-[10px]">welcome....</p>
          </div>
          <div className="cursor-pointer">
            <img src={spiderMan} className="w-full h-full" alt="" />
          </div>
          <div className="px-[20px]">
            <div className="flex items-center justify-between  ">
              <div className="flex items-center my-[8px]">
                <div className="flex items-center mr-[3px]">
                  <div className="  bol  p-[5px] flex justify-center items-center w-[20px] h-[20px] bg-red-600 rounded-[100px]">
                    <BsHeartFill className="text-white     "></BsHeartFill>
                  </div>
                  {like ? (
                    <div className="border-[2px] border-solid border-white ml-[-3px]  p-[2px] flex justify-center items-center w-[20px] h-[20px] bg-[#0882ea] rounded-[100px]">
                      <MdThumbUpAlt className="text-white     "></MdThumbUpAlt>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {like ? <div>You and 12 others</div> : <div> 12 </div>}
              </div>
              <div>
                <div className="flex items-center">
                  <p className="mr-[8px]">123 coments</p>
                  <p>2 shares</p>
                </div>
              </div>
            </div>

            <hr className="by-[5px]" />
            <div className="grid md:grid-cols-3 gap-0 py-[3px]">
              <button
                onClick={() => setLike(!like)}
                className="flex items-center px-[40px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px] mx-[auto]"
              >
                {like ? (
                  <>
                    <BsHandThumbsUpFill className="w-[24px] h-[24px] mr-[5px] text-[#2078f4]"></BsHandThumbsUpFill>
                    <p className="text-[15px] font-semibold text-[#2078f4]">Like</p>
                  </>
                ) : (
                  <>
                    <BsHandThumbsUp className="w-[24px] h-[24px] mr-[5px] text-[#606770]"></BsHandThumbsUp>
                    <p className="text-[15px] font-semibold text-[#606770]">Like</p>
                  </>
                )}
              </button>
              <button className="flex items-center px-[30px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px] mx-[auto]">
                <BiComment className="w-[24px] h-[24px] mr-[5px] text-[#606770]"></BiComment>
                <p className="text-[15px] font-semibold text-[#606770]">Comment</p>
              </button>
              <button className="flex items-center px-[20px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px] mx-[auto]">
                <RiShareForwardLine className="w-[40px] h-[24px] mr-[5px] text-[#606770]"></RiShareForwardLine>
                <p className="text-[15px]   font-semibold text-[#606770]">Share</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
