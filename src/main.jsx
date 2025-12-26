import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from "react-router-dom"; 
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="contact"  element={<Contact/>}/>
      <Route path="projects"  element={<Projects/>}/>
      <Route path="skills"  element={<Skills/>}/>
      <Route path="experience"  element={<Experience/>}/>
      <Route path="about"  element={<About/>}/>
    </Route>
))

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
