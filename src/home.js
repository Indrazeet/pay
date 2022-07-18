import React from 'react'
import Navbar from './navbar';
import Header from './header';
import HowItWorks from './banner-card';
import { AboutUs } from './about.us';
import Servicess from './services';
import Contacts from './contacts';
import Footer from './footer';
 const Home = () => {
  return (
    <>
   <Navbar/>
   <Header/>
   <HowItWorks/>
   <AboutUs/>
   <Servicess/>
   <Contacts/>
   <Footer/>

    </>
  )
}

export default Home;