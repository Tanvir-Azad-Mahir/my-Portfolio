import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';import About from './pages/About';import Projects from './pages/Projects';import ProjectDetails from './pages/ProjectDetails';import Research from './pages/Research';import ResearchDetails from './pages/ResearchDetails';import Contact from './pages/Contact';
const router=createBrowserRouter([{element:<MainLayout/>,children:[{path:'/',element:<Home/>},{path:'/about',element:<About/>},{path:'/projects',element:<Projects/>},{path:'/projects/:slug',element:<ProjectDetails/>},{path:'/research',element:<Research/>},{path:'/research/:slug',element:<ResearchDetails/>},{path:'/contact',element:<Contact/>},{path:'*',element:<Home/>}]}]);
export default function App(){return <ThemeProvider><RouterProvider router={router}/></ThemeProvider>;}
