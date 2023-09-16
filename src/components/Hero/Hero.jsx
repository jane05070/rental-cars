import React from 'react';
import {
    Hero,
    ContentWrapper,
    HeroTextMain,
    HeroTextSecondary,
} from './Hero.styled';


const HeroSection = () => {
    return (
        <Hero>
            
                <ContentWrapper>
                    <HeroTextMain>Your journey begins here - freedom on wheels with our cars.</HeroTextMain>
                    <HeroTextSecondary>
                        Welcome to Car Rental Service, where every journey begins with ease. Explore the world, your way, with our user-friendly app. From spontaneous getaways to epic road trips, we've got all your travel needs covered.
                    </HeroTextSecondary>
                </ContentWrapper>
            


        </Hero>
    );
};

export default HeroSection;