import React, { FC } from 'react';
import { ArrowWrapper } from './styles';

interface ArrowDownProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const ArrowDown: FC<ArrowDownProps> = ({ className, style, onClick }) => {
    return (
        <ArrowWrapper
            className={className}
            style={style}
            onClick={onClick}
        >
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L24 20L44 4" stroke="#BDBDBD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </ArrowWrapper>
    );
}; 