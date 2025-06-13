import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 20px;
`;

export const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align: center;
`;

export const Name = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
`; 