import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm'; 

const Home = () => {
  return (
    <>
    <Hero title={"Welcome to Hospital Management System | Your Trusted Healthcare Provider"} imageUrl={"/hero.png"}/>
    <Biography imageUrl={"/about.jpg"}/>
    <Departments/>
    <MessageForm/>
    </>
  )
}

export default Home