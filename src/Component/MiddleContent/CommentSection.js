import React from "react";
import { BsThreeDots } from "react-icons/bs";

const CommentSection = ({ comment, postDetails }) => {
  // collecti user information
  const userinfo = postDetails[0]?.user;
  return (
    <div>
      <hr className="pb-[5px]" />
      <div className="flex items-center mt-[5px]">
        <img
          src={userinfo?.profile_picture}
          alt=""
          className="w-[40px] h-[40px] flex justify-center items-center rounded-[100px] mr-[10px]"
        />
        <input
          className="bg-[#f0f2f5] w-full focus:outline-none rounded-[100px] px-[12px] py-[8px]"
          type="text"
          name=""
          id=""
          placeholder="Write a comment..."
        />
      </div>
      <div className="pb-[10px] flex items-center justify-between">
        <div className="flex items-center mt-[5px]">
          <img
            src={comment?.user?.profile_picture}
            alt=""
            className="w-[40px] h-[40px] flex justify-center items-center rounded-[100px] mr-[10px]"
          />
          <div className="bg-[#f0f2f5] w-[80%] h-auto focus:outline-none rounded-[10px] px-[12px] py-[8px] leading-[20px]">
            <p className="font-semibold text-[14px]">{comment?.user?.name}</p>
            <p className="font-normal text-[16px]">{comment?.text}</p>
          </div>
        </div>
        <div className="cursor-pointer">
          <BsThreeDots></BsThreeDots>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
