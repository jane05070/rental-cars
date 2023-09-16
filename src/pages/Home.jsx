import React, { useState, useEffect } from 'react';
import HeroSection from '../components/Hero/Hero';
import Container from "../components/Container/Container"


import {
  HomeSection,
  
} from './Home.styled';



const Home = ({ data }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <>
      
      <Container>
      
       <HomeSection>
       
          <HeroSection />
         
        
      </HomeSection> 
      </Container>
    </>
  );
};

export default Home;
