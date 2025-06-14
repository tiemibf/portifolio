import styled from "styled-components";

export const ArrowWrapper = styled.div`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1)  translateX(-50%);
    }
`;
