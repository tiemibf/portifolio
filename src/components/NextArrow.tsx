import React, { FC } from 'react';

interface NextArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const NextArrow: FC<NextArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={style}
            onClick={onClick}
        />
    );
}; 