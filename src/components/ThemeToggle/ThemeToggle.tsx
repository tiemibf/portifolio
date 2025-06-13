import React from 'react';
import { useTheme } from '../ThemeProvider';
import { ToggleButton } from './styles';

export const ThemeToggle: React.FC = () => {
    const { toggleTheme } = useTheme();

    return (
        <ToggleButton onClick={toggleTheme} />
    );
};