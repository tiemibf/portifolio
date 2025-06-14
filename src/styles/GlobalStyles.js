import { createGlobalStyle } from 'styled-components';

// Import fonts with specific weights for better performance
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';

const GlobalStyles = createGlobalStyle`
  /* Reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    scroll-behavior: smooth;
    position: relative;
    z-index: 2;
  }

  body {
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease, background-color 0.3s ease;
    background-color: ${({ theme }) => theme.background};
    position: relative;
    z-index: 1;
    min-height: 100vh;
    min-height: 100dvh;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.text};
      opacity: 0.8;
    }
  }

  h1 {
    font-size: clamp(1.8rem, 5vw, 2.2rem);
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    line-height: 1.2;
  }

  h2 {
    font-size: clamp(1.25rem, 4vw, 1.8rem);
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5em;
    text-align: justify;
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    max-width: 75ch; /* Improve readability */
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.text};
    outline-offset: 2px;
  }

  :target {
    scroll-margin-top: 0.8em;
  }

  /* Improve text selection */
  ::selection {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`;

export default GlobalStyles; 