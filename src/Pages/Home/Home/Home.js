import React from 'react';
import Blog from '../../MyBlog/Blog';
import About from '../AboutMe/About';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Blog></Blog>
        <Projects></Projects>
        <ContactMe></ContactMe>
        </>
    );
};

export default Home;