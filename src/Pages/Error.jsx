import React from 'react';
import error from "../assets/product/error.jpg"
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <img src={error} alt="" />
            <Link to="/"><button className='block mx-auto bg-blue-400 p-3 rounded-md'>Back to Home.</button></Link>
        </div>
    );
};

export default Error;