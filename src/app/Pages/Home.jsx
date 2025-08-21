import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import React from 'react';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto space-y-5'>
            <Navbar></Navbar>
            <Hero></Hero>
            <Footer></Footer>
        </div>
    );
};

export default Home;