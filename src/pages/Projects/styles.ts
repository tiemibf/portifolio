import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 4rem 2rem;
    margin-top: 4rem;
`;

export const Subtitle = styled.h2`
    margin-bottom: 2.5rem;
`;

export const ProjectsDescription = styled.p`
    max-width: 800px;
    margin-bottom: 5rem;
    font-weight: 300;
    font-size: 0.95rem;
`;

export const ProjectsGrid = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 8rem;
    row-gap:5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
`;

export const GithubIconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const GithubIcon = styled.img`
    width: 40px;
    height: 40px;
    opacity: 0.5;
    transition: opacity 0.2s;
    cursor: pointer;
    object-fit: contain;
    &:hover {
        opacity: 1;
    }
`;