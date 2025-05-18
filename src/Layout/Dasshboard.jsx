import { Outlet } from "react-router";



const Dashboard = () => {
    return (
        <div className="flex">
            <div>
                <Admin />
            </div>
            <div className="md:w-[87%] w-full bg-sky-50">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;