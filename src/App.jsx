import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { ThemeProvider } from './components/ThemeProvider';
import { About } from "./pages/About";
import { ContactMe } from "./pages/ContactMe";
import { Curriculum } from "./pages/Curriculum";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactMe />} />
    </>
  )
);

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