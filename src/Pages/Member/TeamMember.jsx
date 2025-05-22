import React from 'react';
import member1 from "../../assets/team/01.png"
import member2 from "../../assets/team/02.jpg"
import member3 from "../../assets/team/03.jpg"
import member4 from "../../assets/team/04.jpg"

const TeamMember = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <h1 className='text-green-600'>MEET OUR TEAM</h1>
                <p className='text-2xl text-green-600 font-bold'>We have a expert team</p>
            </div>

            <div className='grid md:grid-cols-4 gap-2 mt-7'>
                <div>
                    <img className='rounded-md h-[300px]' src={member1} alt="" />
                    <div className='text-center'>
                        <h1 className='text-2xl text-green-600 font-bold my-1'>Karlos Marin</h1>
                        <p>Supervisor</p>
                    </div>
                </div>

                <div>
                    <img className='rounded-md h-[300px]' src={member2} alt="" />
                    <div className='text-center'>
                        <h1 className='text-2xl text-green-600 font-bold my-1'>Max John</h1>
                        <p>Manager</p>
                    </div>
                </div>

                <div>
                    <img className='rounded-md h-[300px]' src={member3} alt="" />
                    <div className='text-center'>
                        <h1 className='text-2xl text-green-600 font-bold my-1'>Perly Wilions</h1>
                        <p>Sales Exicutive</p>
                    </div>
                </div>

                <div>
                    <img className='rounded-md h-[300px]' src={member4} alt="" />
                    <div className='text-center'>
                        <h1 className='text-3xl text-green-600 my-1'>Nikolas</h1>
                        <p>Team Leader</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;