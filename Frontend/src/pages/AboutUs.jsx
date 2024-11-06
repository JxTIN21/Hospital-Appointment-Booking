import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';

const AboutUs = () => {
  return (
    <>
    <Hero title={"Learn More About Us | Chikitsa Sewa"} imageUrl={"/about.jpg"}/>
    <Biography imageUrl={"/whoweare.png"}/>
    </>
  )
}

export default AboutUs