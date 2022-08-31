import React from 'react';
import LeftSideContent from '../LeftSideContent/LeftSideContent';
import NavBar from '../NavBar/NavBar';

const Homepage = () => {
    return (
        <div className='bg-[#f0f2f5]'>
            <NavBar></NavBar>
            <LeftSideContent></LeftSideContent>
        </div>
    );
};

export default Homepage;