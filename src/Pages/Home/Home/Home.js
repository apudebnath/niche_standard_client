import React from 'react';
import Contact from '../../Contact/Contact';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;