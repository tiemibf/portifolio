import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeProvider';

interface ToggleButtonProps {
    theme: {
        text: string;
        body: string;
    };
}

const ToggleButton = styled.button<ToggleButtonProps>`
    position: fixed;
    top: 20px;
    right: 20px;
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

const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <ToggleButton onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
        </ToggleButton>
    );
};

export default ThemeToggle; 