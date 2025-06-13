import styled from "styled-components"

export const HeaderContainer = styled.header`
    padding: 40px 40px 20px 40px;
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    background: ${({ theme }) => theme.background};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
`

export const LeftMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const LanguageMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const LanguageButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    font-size: 1em;
`

export const RightMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
