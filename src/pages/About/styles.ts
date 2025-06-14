import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 4rem 2rem;
    margin-top: 4rem;
`;

export const Subtitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 3.75rem;
    color: ${({ theme }) => theme.text};
`;

export const TwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    p {
        line-height: 1.6;
        margin-bottom: 1rem;
    }
`;

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 4rem;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 260px;
`;

export const ImageWrapper = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Caption = styled.div`
    margin-top: 0.5rem;
    font-size: 1rem;
`;
export const RightColumn = styled.div`
    flex: 2;
    min-width: 300px;
    p {
        line-height: 1.6;
        margin-bottom: 1rem;
    }
`; 