import React from 'react';
import { FaFacebook } from "react-icons/fa";
const header = () => {
    return (
        <div className='px-[20px] py-[15px] shadow-md'>
            <div>
                <FaFacebook className='text-[#0a80ec] text-[40px] cursor-pointer'></FaFacebook>
            </div>
        </div>
    );
};

export default header;
