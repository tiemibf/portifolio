import styled from "styled-components";

export const GrayBoxes = styled.div`
    display: flex;
    gap: 1rem;
    margin: 2rem 0 0.5rem 0;
`;

export const GrayBox = styled.div`
    width: 70px;
    height: 70px;
    background: #ddd;
    border-radius: 4px;
`;

export const SmallText = styled.div`
    font-size: 0.95rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.5rem;
`;
