import styled from "styled-components"

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.background};
    z-index: 1000;
`

export const LeftMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const LanguageMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const LanguageButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    padding: 0.25rem;
    font-size: 1rem;
    
    &:hover {
        opacity: 0.8;
    }
`

export const RightMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
`

export const StyledAnchor = styled.a`
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
        opacity: 0.8;
    }
`
