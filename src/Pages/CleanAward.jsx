import React from 'react';

import { FaChalkboardTeacher, FaAward } from "react-icons/fa";
import { BsFillHouseGearFill, BsMicrosoftTeams } from "react-icons/bs";


const CleanAward = () => {
    return (
        <div className='bg-green-950 mt-10 mb-10'>
            <div className='container mx-auto'>
                <div className=' text-white py-10 px-5'>
                    <div className='flex justify-between gap-6'>
                        <div className='flex gap-3 items-center'>
                            <FaChalkboardTeacher className='text-5xl text-green-500' />
                            <div>
                                <p className='text-4xl font-bold'>950+</p>
                                <p className='text-sm'>Happy Client</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <FaAward className='text-5xl text-green-500' />
                            <div>
                                <p className='text-4xl font-bold'>60+</p>
                                <p className='text-sm'>Awards Winner</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <BsFillHouseGearFill className='text-5xl text-green-500' />
                            <div>
                                <p className='text-4xl font-bold'>450+</p>
                                <p className='text-sm'>Complete Project</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <BsMicrosoftTeams className='text-5xl text-green-500' />
                            <div>
                                <p className='text-4xl font-bold'>450+</p>
                                <p className='text-sm'>Complete Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CleanAward;