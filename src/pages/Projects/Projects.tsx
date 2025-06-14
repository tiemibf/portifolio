import React from 'react';
import GithubIconAsset from '../../assets/images/github.svg';
import LinkSharingAppImage from '../../assets/images/link-sharing-app.png';
import MultistepFormImage from '../../assets/images/multistep-form.png';
import TimeCapsuleImage from '../../assets/images/time-capsule.png';
import { ProjectPreview } from '../../components/ProjectPreview';
import { GithubIcon, GithubIconContainer, ProjectsContainer, ProjectsDescription, ProjectsGrid, Subtitle } from './styles';


export const Projects: React.FC = () => {

    const projects = [
        {
            id: 'multistep-form',
            image: MultistepFormImage,
            alt: 'Multistep Form',
            href: 'https://multistep-form-tiemi.netlify.app/'
        },
        {
            id: 'link-sharing-app',
            image: LinkSharingAppImage,
            alt: 'Link Sharing App',
            href: 'https://link-sharing-app-tiemi.netlify.app/'
        },
        {
            id: '3',
            image: TimeCapsuleImage,
            alt: 'Time Capsule',
            href: 'https://time-capsule-web.onrender.com'
        },
    ];


    return (
        <ProjectsContainer id="projects">
            <Subtitle>
                _projetos
            </Subtitle>
            <ProjectsDescription>
                A maior parte dos meus projetos mais complexos foi desenvolvida em contextos privados, então infelizmente não posso compartilhá-los. Mas aqui vai um gostinho do que eu sei fazer!
            </ProjectsDescription>
            <ProjectsGrid>
                {projects.map((project) => (
                    <ProjectPreview key={project.id} image={project.image} alt={project.alt} href={project.href} />
                ))}
            </ProjectsGrid>
            <GithubIconContainer>
                <a href="https://github.com/tiemibf" target="_blank" rel="noopener noreferrer">
                    <GithubIcon src={GithubIconAsset} alt="GitHub" />
                </a>
            </GithubIconContainer>
        </ProjectsContainer>
    );
}; 