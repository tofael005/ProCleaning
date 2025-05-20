import React from 'react';
import Banner from '../../Navbar/Banner';
import About from '../About';
import Service from '../Service/Service';
import CleanAward from '../CleanAward';

const Home = () => {
    return (
        <div >
            <Banner />
            <About />
            <Service />
            <CleanAward />
        </div>
    );
};

export default Home;