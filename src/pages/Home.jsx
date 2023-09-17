import React from 'react';
import HeroSection from '../components/Hero/Hero';
import Container from "../components/Container/Container"


import {
  HomeSection,
  
} from './Home.styled';



const Home = () => {
  
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
