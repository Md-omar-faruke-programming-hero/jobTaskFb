import React from "react";
import LeftSideContent from "../LeftSideContent/LeftSideContent";
import MiddleContent from "../MiddleContent/MiddleContent";
import NavBar from "../NavBar/NavBar";
import RightSideContent from "../RightSideContent/RightSideContent";

const Homepage = () => {
  return (
    <div className="bg-[#f0f2f5]">
      <NavBar></NavBar>
      <div className="flex  flex-row">
        <div className="basis-1/4 md:block hidden ">
          <LeftSideContent></LeftSideContent>
        </div>
        <div className="md:basis-1/2 basis-auto overflow-y-scroll h-screen example">
          <MiddleContent></MiddleContent>
        </div>
        <div className="basis-1/4 md:block hidden pl-[25px]">
          <RightSideContent></RightSideContent>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
