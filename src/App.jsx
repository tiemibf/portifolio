import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './Router';
import { ThemeProvider } from './providers/ThemeProvider';

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