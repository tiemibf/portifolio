import React from 'react';
import GithubIconAsset from '../../assets/images/github.svg';
import { GithubIcon, GithubIconContainer, ProjectPreview, ProjectsContainer, ProjectsDescription, ProjectsGrid, Subtitle } from './styles';

export const Projects: React.FC = () => {
    return (
        <ProjectsContainer id="projects">
            <Subtitle>
                _projetos
            </Subtitle>
            <ProjectsDescription>
                A maior parte dos meus projetos mais complexos foi desenvolvida em contextos privados, então infelizmente não posso compartilhá-los. Mas aqui vai um gostinho do que eu sei fazer!
            </ProjectsDescription>
            <ProjectsGrid>
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
            </ProjectsGrid>
            <GithubIconContainer>
                <a href="https://github.com/tiemibf" target="_blank" rel="noopener noreferrer">
                    <GithubIcon src={GithubIconAsset} alt="GitHub" />
                </a>
            </GithubIconContainer>
        </ProjectsContainer>
    );
}; 