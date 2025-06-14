import React from 'react';
import { ContentContainer, HomeContainer, Name, Subtitle } from './styles';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <ContentContainer>
                <Name>{"< tiemi nagazawa >"}</Name>
                <Subtitle>front-end software engineer</Subtitle>
            </ContentContainer>
        </HomeContainer>
    );
}; 