import React from 'react';
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from './components/ThemeProvider';
import { router } from './Router';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App; 