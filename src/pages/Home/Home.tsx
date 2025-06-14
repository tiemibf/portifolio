import { navigateToSection } from '@/utils/navigateToSection';
import React from 'react';
import { ArrowDown } from '../../components/ArrowDown/ArrowDown';
import { ContentContainer, HomeContainer, Name, Subtitle } from './styles';

export const Home: React.FC = () => {
    const handleArrowClick = () => {
        navigateToSection('about');
    };

    return (
        <HomeContainer>
            <ContentContainer>
                <Name>{"< tiemi nagazawa >"}</Name>
                <Subtitle>front-end software engineer</Subtitle>
                <ArrowDown onClick={handleArrowClick} />
            </ContentContainer>
        </HomeContainer>
    );
}; 