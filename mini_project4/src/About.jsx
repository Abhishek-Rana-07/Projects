import React from 'react';
import web from "../src/images/client4.jpg";
import Common from './Common';

const About = () => {
  return (
    <>
        <Common 
        name="Organic Story" 
        imgsrc={web}
        visit="/contact"
        btname="Contact Now" 
        para2="With the continuous increase in the number 
        of organic activities and farmers through various 
        projects in Uttarakhand, we have deccided to help 
        farmers in both online and offline method.
           " />
    </>
  );
};

export default About;