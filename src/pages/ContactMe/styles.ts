import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 4rem 2rem;
    margin-top: 4rem;
`;

export const Subtitle = styled.h2`
    margin-bottom: 3.75rem;

    text-align: left;
`;

export const Name = styled.div`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
`;

export const Email = styled.a`
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 2.5rem;
    text-decoration: underline;
    text-align: center;
    display: block;
    &:hover {
        color: ${({ theme }) => theme.text};
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 1rem;
`;

export const IconLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`;

export const IconImg = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
`;

export const MainBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
`; 