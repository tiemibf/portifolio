import React from 'react';
import { Header } from '../../components/Header';
import { ContentContainer, HomeContainer, Name, Subtitle } from './styles';

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <HomeContainer>
                <ContentContainer>
                    <Name>{"< tiemi nagazawa >"}</Name>
                    <Subtitle>front-end software engineer</Subtitle>
                </ContentContainer>
            </HomeContainer>
        </>
    );
}; 