import styled from "styled-components";

interface ToggleButtonProps {
    theme: {
        text: string;
        body: string;
    };
}

export const ToggleButton = styled.button<ToggleButtonProps>`
    padding: 10px;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
    }
`;
