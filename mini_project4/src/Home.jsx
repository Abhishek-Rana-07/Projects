import React from 'react';
import web from "../src/images/bg_home1.jpg";
import Common from './Common';

const Home = () => {
  return (
    <>
       <Common 
        name="Welcome to Organic Sector of" 
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        para1="          MISSION"
        para2="TO MAKE UTTARAKHAND THE ORGANIC CAPITAL OF INDIA"

       /> 
    </>
  );
};

export default Home;