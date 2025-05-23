import React from 'react';
import Banner from '../../Navbar/Banner';
import About from '../About';
import Service from '../Service/Service';
import CleanAward from '../CleanAward';
import TeamMember from '../Member/TeamMember';
import Ratting from '../custtomer/Ratting';
import SayCustomer from '../SayCustomer';

const Home = () => {
    return (
        <div >
            <Banner />
            <About />
            <Service />
            <CleanAward />
            <TeamMember />
            <Ratting />
            <SayCustomer />
        </div>
    );
};

export default Home;