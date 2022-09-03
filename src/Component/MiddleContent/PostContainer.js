import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiEarthFill } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import { MdThumbUpAlt } from "react-icons/md";
import { BsHandThumbsUp } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { MdOutlineNoteAlt } from "react-icons/md";
import swal from "sweetalert";
import CommentSection from "./CommentSection";

const PostContainer = ({ postdata, postDetails }) => {
  // collecti user information
  const userinfo = postDetails[0]?.user;
  // like button function
  const [like, setLike] = useState(false);
  // comment button function
  const [comentSectionShow, setComentSectionShow] = useState(false);
  // share button function
  const [shareSectionshowHide, setShareSectionshowHide] = useState(false);
  const [shareCount, setShareCount] = useState(1);
  const share = () => {
    swal({
      title: "Shared to your profile!",
      icon: "success",
      button: "Aww yiss!",
    });
    setShareSectionshowHide(!shareSectionshowHide);
    setShareCount(shareCount + 1);
  };
  return (
    <div className="md:w-[500px] h-[auto] min-w-[auto] max-w-[100%] bg-white rounded-[10px] shadow-sm mb-[10px]">
      <div className=" px-[15px] py-[10px] ">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <img
                src={postdata?.user?.profile_picture}
                alt="profile pic"
                className="w-[40px] h-[40px] flex justify-center items-center rounded-[100px] mr-[10px]"
              />
              <div>
                <h3 className="text-[15px] font-semibold text-[#253c55]">{postdata?.user?.name}</h3>
                <p className="text-[13px] font-normal text-[#7488a6]">
                  {postdata?.postTime} . <RiEarthFill className="text-[#65676b] inline-block"></RiEarthFill>
                </p>
              </div>
            </div>
          </div>
          <button className="w-[36px] h-[36px] rounded-[100px] hover:bg-[#f0f2f5] flex justify-center items-center cursor-pointer  ">
            <BsThreeDots></BsThreeDots>
          </button>
        </div>
        <p className="my-[10px]">{postdata?.postCaption}</p>
      </div>
      <div className="cursor-pointer">
        <img src={postdata?.postImage} className="w-full h-full" alt="" />
      </div>
      <div className="px-[20px]">
        {/* showing like,comment and share numbers start*/}
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
            {like ? <div>You and {postdata?.likes} others</div> : <div> {postdata?.likes} </div>}
          </div>
          <div>
            <div className="flex items-center">
              <p className="mr-[8px]">{postdata?.comments.length} coments</p>
              <p>{shareCount} shares</p>
            </div>
          </div>
        </div>
        {/* showing like,comment and share numbers end */}

        <hr className="" />
        {/* like comment share buttons start*/}
        <div className="grid md:grid-cols-3 grid-cols-3 gap-0 py-[3px] relative">
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
          <button
            onClick={() => setComentSectionShow(true)}
            className="flex items-center px-[30px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px] mx-[auto]"
          >
            <BiComment className="w-[24px] h-[24px] mr-[5px] text-[#606770]"></BiComment>
            <p className="text-[15px] font-semibold text-[#606770]">Comment</p>
          </button>
          <button
            onClick={() => setShareSectionshowHide(!shareSectionshowHide)}
            className="flex items-center px-[20px] py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px] mx-[auto] "
          >
            <RiShareForwardLine className="w-[40px] h-[24px] mr-[5px] text-[#606770]"></RiShareForwardLine>
            <p className="text-[15px]   font-semibold text-[#606770]">Share</p>
          </button>
          <div
            className={`bg-white md:w-[360px] h-[120px] rounded-[12px] px-[16px] py-[18px] absolute md:top-[60px] md:right-[-60px] right-[0px] bottom-[-390px]  ${
              shareSectionshowHide ? "block" : "hidden"
            } `}
          >
            <button
              onClick={share}
              className="flex items-center w-full py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px]"
            >
              <RiShareForwardLine className="w-[40px] h-[24px]  text-[#606770]"></RiShareForwardLine>
              <p className="text-[15px]   font-semibold text-[#606770]">Share now (Public)</p>
            </button>
            <button
              onClick={share}
              className="flex items-center w-full py-[10px] hover:bg-[#f0f2f5] cursor-pointer rounded-[10px]"
            >
              <MdOutlineNoteAlt className="w-[40px] h-[24px]  text-[#606770]"></MdOutlineNoteAlt>
              <p className="text-[15px]   font-semibold text-[#606770]">Share to Feed </p>
            </button>
          </div>
        </div>
        {/* like comment share buttons end */}
        {/* comment section start */}
        {comentSectionShow ? (
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
            {postdata?.comments.map((comment, i) => (
              <CommentSection key={i} comment={comment} ></CommentSection>
            ))}
          </div>
        ) : (
          ""
        )}
        {/* comment section end */}
      </div>
    </div>
  );
};

export default PostContainer;
