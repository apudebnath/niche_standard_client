import React from 'react';
import Contact from '../../Contact/Contact';
import Products from '../Products/Products';
import ShowReviews from '../ShowReviews/ShowReviews';
import TopBanner from '../TopBanner/TopBanner';
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <ShowReviews></ShowReviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;