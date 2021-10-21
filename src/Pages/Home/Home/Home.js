import React from 'react';
import Login from '../../Login/Login';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Teams from '../Team/Teams';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Services></Services>
         <About></About>
         <Contact></Contact>
         <Footer></Footer>

           
        </div>
    );
};

export default Home;