import React from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import PostContainer from "./PostContainer";

const MiddleContent = ({ postDetails }) => {
  // collect user information
  const userinfo = postDetails[0]?.user;
  return (
    <div className="flex justify-center  mt-[15px] pb-[120px]">
      <div>
        <div className="md:w-[500px]  h-[auto] min-w-[auto] max-w-[100%] bg-white px-[15px] py-[10px] rounded-[10px] shadow-sm mb-[10px]">
          <div className="flex items-center">
            <img
              src={userinfo?.profile_picture}
              alt=""
              className="w-[40px] h-[40px] flex justify-center items-center rounded-[100px] mr-[10px]"
            />
            <input
              className="bg-[#f0f2f5] w-full  focus:outline-none rounded-[100px] px-[12px] py-[8px]"
              type="text"
              name=""
              id=""
              placeholder={`What's on your mind, ${userinfo?.name.split(" ")[0]}`}
            />
          </div>
          <hr className="my-[14px]" />
          <div className="grid md:grid-cols-3 grid-cols-3 ">
            <div className="flex items-center justify-center py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px]">
              <AiOutlineVideoCamera className="md:w-[24px] md:h-[24px] mr-[5px] text-[#f3425f]"></AiOutlineVideoCamera>
              <p className="md:text-[15px] text-[13px] font-semibold text-[#65676b]">Live video</p>
            </div>
            <div className="flex items-center justify-center py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px]">
              <FaPhotoVideo className="md:w-[24px] md:h-[24px] mr-[5px] text-[#45bd62]"></FaPhotoVideo>
              <p className="md:text-[15px] text-[13px] font-semibold text-[#65676b]">Photo/video</p>
            </div>
            <div className="flex items-center justify-center py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px]">
              <BsEmojiLaughing className="md:w-[24px] md:h-[24px] mr-[5px] text-[#f7b928]"></BsEmojiLaughing>
              <p className="md:text-[15px] text-[13px] font-semibold text-[#65676b]">Feeling/activity</p>
            </div>
          </div>
        </div>
        {postDetails[0]?.posts?.map((postdata, i) => (
          <PostContainer key={i} postdata={postdata} postDetails={postDetails}></PostContainer>
        ))}
      </div>
    </div>
  );
};

export default MiddleContent;
