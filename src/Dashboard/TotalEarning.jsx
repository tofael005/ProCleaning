import React from 'react';


const TotalEarning = () => {
    return (
        <div>
            <h1 className='text-green-600 font-bold'>TOTAL EARNING</h1>
            <div className='grid md:grid-cols-3 gap-3 text-white'>
                <div className='bg-gradient-to-r from-sky-300 to-indigo-400 p-10 text-center rounded-md'>
                    <div className='flex gap-2 text-center items-center text-white justify-center'>
                        <p className='text-4xl font-bold mb-3'>$1835</p>
                    </div>
                    <h1 className='text-black font-bold'>Total Earning</h1>
                </div>
            </div>

        </div>
    );
};

export default TotalEarning;