import React from 'react';
import Banner from '../../Navbar/Banner';
import About from '../About';
import Service from '../Service/Service';
import CleanAward from '../CleanAward';
import TeamMember from '../Member/TeamMember';
import ValuableCompany from '../ValuableCompany.jsx/ValuableCompany';
import Ratting from '../custtomer/Ratting';

const Home = () => {
    return (
        <div >
            <Banner />
            <About />
            <Service />
            <CleanAward />
            <TeamMember />
            <ValuableCompany />
            <Ratting />
        </div>
    );
};

export default Home;