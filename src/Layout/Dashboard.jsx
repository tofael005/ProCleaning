import React from 'react';
import { Outlet } from 'react-router';
import SideBar from '../Dashboard/SideBar';

const Dashboard = () => {
    return (
        <div className='flex gap-3 p-5 bg-sky-100 h-[100vh]'>
            <div className='w-[20%] bg-blue-950 rounded-md text-white'>
                <SideBar />
            </div>
            <div className='bg-blue-100 rounded-md text-black w-full p-4'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;