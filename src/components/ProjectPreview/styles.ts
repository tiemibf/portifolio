import styled from "styled-components";

export const ProjectPreviewStyled = styled.button`
    width: 220px;
    height: 220px;
    background: #fafafa;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s, border-color 0.2s;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    img {
        width: 110%;
        height: 110%;
        object-fit: cover;
        filter: grayscale(1);
        transition: filter 0.3s;
    }

    &:hover {
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        border-color: #bdbdbd;
        
        img {
            filter: grayscale(0);
            transform: scale(1.02);
            transition: all 0.1s ease;
        }
    }
`;
