import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LeftSideContent from "../LeftSideContent/LeftSideContent";
import MiddleContent from "../MiddleContent/MiddleContent";
import NavBar from "../NavBar/NavBar";
import RightSideContent from "../RightSideContent/RightSideContent";

const Homepage = () => {
  const [postDetails, setPostDetails] = useState([]);

  // calling dummy post list api
  useEffect(() => {
    fetch("PostList.JSON")
      .then((res) => res.json())
      .then((data) => setPostDetails(data));
  }, []);

  return (
    <div className="bg-[#f0f2f5]">
      <NavBar postDetails={postDetails}></NavBar>
      <div className="flex  flex-row">
        <div className="basis-1/4 md:block hidden ">
          <LeftSideContent postDetails={postDetails}></LeftSideContent>
        </div>
        <div className="md:basis-1/2 basis-auto overflow-y-scroll h-screen example">
          <MiddleContent postDetails={postDetails}></MiddleContent>
        </div>
        <div className="basis-1/4 md:block hidden pl-[25px]">
          <RightSideContent></RightSideContent>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
