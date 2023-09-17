import React from 'react';
import  FilterSection  from '../components/FilterSection/FilterSection';

import Container from '../components/Container/Container';
// import { FilterSection, GallerySection } from "./Catalog.styled";

import CarList from "../components/ListCards/ListCards"


const Catalogue = () => {
  
   

  return (
    <>
      
      <Container>
        <FilterSection />  
        <CarList/>
         
      </Container>

    </>
  );
};

export default Catalogue;
