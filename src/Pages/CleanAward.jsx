import React from 'react';

import { FaChalkboardTeacher, FaAward  } from "react-icons/fa";
import { BsFillHouseGearFill, BsMicrosoftTeams } from "react-icons/bs";


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
                    <div className='flex gap-3'>
                        <FaAward  />
                        <div>
                            <p>60+</p>
                            <p>Awards Winner</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <BsFillHouseGearFill  />
                        <div>
                            <p>450+</p>
                            <p>Complete Project</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CleanAward;