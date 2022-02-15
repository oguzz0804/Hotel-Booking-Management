/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

import '../Apps.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


const home = () => {
  return (
    <>    
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="welcome"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />     
    </>
  );
};
export default home;