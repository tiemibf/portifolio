import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Curriculum from "./pages/Curriculum"
import ContactMe from "./pages/ContactMe"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/curriculum" element={<Curriculum />}  />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<ContactMe />} />
    </>
  )
);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
