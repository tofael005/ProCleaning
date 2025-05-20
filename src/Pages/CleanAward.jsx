import React from 'react';

import { FaChalkboardTeacher } from "react-icons/fa";

const CleanAward = () => {
    return (
        <div className='bg-green-950 mt-10'>
            <div className='container mx-auto'>
                <div>
                    <p>DEEP CLEANING <br /> IN YOUR CITY</p>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <FaChalkboardTeacher />
                        <div>
                            <p>950+</p>
                            <p>Happy Client</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CleanAward;