import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />

            <div className='md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            
            <Footer />
        </div>
    );
};

export default Root;