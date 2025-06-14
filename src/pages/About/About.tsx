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
                    <p><strong>hello world (:</strong></p>
                    <p>sou <strong>Tiemi Nagazawa</strong>.</p>
                    <p>Sou desenvolvedora front-end e adoro transformar ideias complexas em interfaces simples e agradáveis de usar. Ao longo dos últimos anos, tive a oportunidade de trabalhar em projetos bem diferentes — desde ferramentas internas até plataformas de escala global — sempre com foco em performance, usabilidade e trabalho em equipe.</p>
                    <p>Gosto de criar coisas que vão além de funcionar: que sejam acessíveis, bem pensadas e com um código fácil de manter. Me importo tanto com o "como" quanto com o "o quê", e acredito que os melhores produtos digitais nascem de times que se comunicam bem e estão sempre aprendendo juntos.</p>
                    <p>Ao longo da minha vida, já fiz muitas coisas: pratiquei judô, handebol, basquete, natação, caiaque, xadrez, dança lírica, aprendi inglês, francês (um pouco), italiano (um pouquinho), crochê, ponto cruz, desenho, toquei violão, teclado, piano, flauta doce, participei de coral, estudei arquitetura e agora estou mergulhando no mundo da programação.</p>
                    <p>Acho que com tudo isso, dá pra dizer que eu sou uma pessoa <strong>curiosa</strong> e que <strong>ama aprender</strong> coisas novas todos os dias.</p>
                </RightColumn>
            </MainBody>
        </AboutContainer>
    );
}; 