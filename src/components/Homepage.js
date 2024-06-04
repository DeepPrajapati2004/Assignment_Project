import React, { useState } from 'react';
// Ensure any additional styles, especially for animations, are included here
import Header from './Header';
import Pricing from './Pricing';
import Footer from './Footer';
import Reviews from './Reviews';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Demo from './Demo';

function Homepage() {


  return (
    <>
    {/* <Header/>
    <Pricing/>
    <Reviews/>
    <Footer/> */}
    <Demo/>
    </>
  );
}

export default Homepage;

