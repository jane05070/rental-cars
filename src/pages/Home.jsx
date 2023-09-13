import React, { useState, useEffect } from 'react';
import HeroSection from 'components/Hero/Hero';
// import { Slider } from 'components/Slider/Slider';

// import Container from 'components/Container/Container';
// import {
//     HomeSection,
//     HomeTextMain,
//     HomeTextSecondary,
//     BlueCarImg,
//     HomeWrapper,
//     ContentWrapper,
// } from './Home.styled';



const Home = ({ data }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <>
            <HeroSection />
            {/* <HomeSection>
                <Container>
                    <HomeWrapper>
                        <BlueCarImg src={blueCar} alt="blue car" animated={isAnimated} />
                        <ContentWrapper>
                            <Slider cars={data} />
                            <HomeTextMain>
                                Unlock the Road to Adventure with Our Car Rental Service!
                            </HomeTextMain>
                            <HomeTextSecondary>
                                The ultimate solution for hassle-free car rentals! With a wide
                                range of vehicles to choose from, our user-friendly interface
                                simplifies the process of renting a car.
                            </HomeTextSecondary>
                        </ContentWrapper>
                    </HomeWrapper>
                </Container>
            </HomeSection> */}
        </>
    );
};

export default Home;