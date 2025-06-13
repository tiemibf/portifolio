import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease;
        background: linear-gradient(rgba(245, 245, 245, 0.5), rgba(245, 245, 245, 0.5)), url('/curvas-de-nivel.png') no-repeat center 110%, #f5f5f5;
        background-size: 100%;
        min-height: 100vh;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
    }

    header {
        padding: 40px 40px 20px 40px;
        display: flex;
        justify-content: space-between;
        font-size: 1em;
        background: ${({ theme }) => theme.body};
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 100;
    }

    header ul {
        list-style-type: none;
        display: flex;
    }

    header li:not(:first-child) {
        margin-left: 8px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }

    h1 {
        font-size: 2.2em;
        font-weight: 400;
        color: ${({ theme }) => theme.text};
    }

    h2 {
        font-size: 1.8em;
        font-weight: 400;
        color: ${({ theme }) => theme.text};
    }

    p {
        font-size: 1em;
        margin-bottom: 1.5em;
        text-align: justify;
        color: ${({ theme }) => theme.text};
    }

    .subtitulo {
        color: ${({ theme }) => theme.textSecondary};
        font-size: 1.2em;
    }

    .container {
        margin-top: 200px;
    }

    .container > * {
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0);
    }

    #home {
        height: 100vh;
        background-image: url('/curvas-de-nivel.png');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: left bottom;
    }

    .page {
        margin: 200px 40px 0 40px;
        height: 100%;
    }

    :target {
        scroll-margin-top: 0.8em;
    }
`;

export default GlobalStyles; 