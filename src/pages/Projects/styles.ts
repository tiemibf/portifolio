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
    gap: 8rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
`;

export const ProjectPreview = styled.div`
    width: 220px;
    height: 220px;
    background: #fafafa;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s, border-color 0.2s;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        border-color: #bdbdbd;
    }
`;

export const GithubIconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const GithubIcon = styled.img`
    width: 48px;
    height: 48px;
    opacity: 0.5;
    transition: opacity 0.2s;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`; 