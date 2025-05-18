import React from 'react';
import { Outlet } from 'react-router';
import Admin from '../Dashboard/Admin';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Admin />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;