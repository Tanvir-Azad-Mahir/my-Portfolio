import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar';import Footer from '../components/Footer';
export default function MainLayout(){return <div className="min-h-screen overflow-x-hidden bg-[#f5f5ef] text-[#111713] transition-colors duration-300 dark:bg-[#060806] dark:text-[#f3f3eb]"><Navbar/><main className="min-h-[80vh] pt-32"><Outlet/></main><Footer/><ScrollRestoration/></div>}
