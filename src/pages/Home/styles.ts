import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 20px;
    background-image: url('/curvas-de-nivel.png');
    background-position: center -100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.dimmer};
        opacity: 0.5;
        pointer-events: none;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: ${({ theme }) => theme.textSecondary};
        opacity: 0.2;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    position: relative;
    padding-bottom: 40px;
    justify-content: center;
`;

export const Name = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
`;

export const Subtitle = styled.h2`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.textSecondary};
`; 