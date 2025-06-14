import React from 'react';
import MeImage from '../../assets/images/me.svg';
import { AboutContainer, Caption, ImageWrapper, LeftColumn, MainBody, RightColumn, Subtitle } from './styles';

export const About: React.FC = () => {
    return (
        <AboutContainer id="about">
            <Subtitle>
                _sobre mim
            </Subtitle>
            <MainBody>
                <LeftColumn>
                    <ImageWrapper>
                        <img src={MeImage} alt="Foto de Tiemi" />
                    </ImageWrapper>
                    <Caption>essa sou eu <span role="img" aria-label="smile">😊</span></Caption>
                </LeftColumn>
                <RightColumn>
                    <p>hello world (:</p>
                    <p>ao longo da minha vida, já fiz muitas coisas: pratiquei judô, handebol, basquete, natação, caiaque, xadrez, dança lírica, aprendi inglês, francês (um pouco), italiano (um pouquinho), crochê, ponto cruz, desenho, toquei violão, teclado, piano, flauta doce, participei de coral, estudei arquitetura e agora estou mergulhando no mundo da programação.</p>
                    <p>acho que com tudo isso, dá pra dizer que eu sou uma pessoa <strong>curiosa</strong> e que <strong>ama aprender</strong> coisas novas todos os dias.</p>
                    <p><strong>f.a.q.</strong></p>
                    <p><strong>por que você saiu da arquitetura?</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero architecto consequuntur minima pariatur, exercitationem odit commodi, quo aperiam quia cupiditate accusamus hic sed explicabo ipsam error sint officia quaerat nostrum unde. Rerum maiores fuga consequuntur consequatur, fugiat itaque blanditiis adipisci, animi sunt dicta, expedita iure necessitatibus incidunt quos tempore.</p>
                    <p><strong>o que são essas linhas no background?</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero architecto consequuntur minima pariatur, exercitationem odit commodi, quo aperiam quia cupiditate accusamus hic sed explicabo ipsam error sint officia quaerat nostrum unde. Rerum maiores fuga consequuntur consequatur, fugiat itaque blanditiis adipisci, animi sunt dicta, expedita iure necessitatibus incidunt quos tempore.</p>
                    <p><strong>me fala um pouco mais sobre você</strong></p>
                    <p>se quiser saber um pouquinho mais sobre a minha personalidade: <a href="#">vem cá</a></p>
                </RightColumn>
            </MainBody>
        </AboutContainer>
    );
}; 