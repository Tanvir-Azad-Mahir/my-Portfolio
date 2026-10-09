import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
const links=[['Home','/'],['About','/about'],['Projects','/projects'],['Research','/research'],['Contact','/contact']] as const;
export default function Navbar(){
 const [open,setOpen]=useState(false);const {darkMode,toggleTheme}=useTheme();const location=useLocation();
 return <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
 <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/10 bg-white/85 px-5 py-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-[#0b100d]/90">
 <Link to="/" onClick={()=>setOpen(false)} className="flex items-center gap-3 font-semibold tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-xs text-white dark:bg-emerald-300 dark:text-black">TA</span><span>Tanvir Azad</span></Link>
 <div className="hidden items-center gap-7 md:flex">{links.map(([name,url])=><NavLink key={url} to={url} className={({isActive})=>`text-sm transition hover:text-emerald-600 dark:hover:text-emerald-300 ${isActive?'font-semibold text-emerald-600 dark:text-emerald-300':'text-black/55 dark:text-white/55'}`}>{name}</NavLink>)}</div>
 <div className="flex items-center gap-2"><button type="button" onClick={toggleTheme} aria-label={darkMode?'Switch to light mode':'Switch to dark mode'} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 dark:border-white/10">{darkMode?<Sun size={18}/>:<Moon size={18}/>}</button><a href="mailto:tanvirazadmahir@gmail.com" className="hidden items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white sm:inline-flex dark:bg-emerald-300 dark:text-black">Let's talk <ArrowUpRight size={15}/></a><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label="Toggle navigation" className="grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden dark:border-white/10">{open?<X size={18}/>:<Menu size={18}/>}</button></div>
 </nav>{open&&<div className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-2xl border border-black/10 bg-white/95 p-3 shadow-xl md:hidden dark:border-white/10 dark:bg-[#0b100d]/95">{links.map(([name,url])=><NavLink key={url} to={url} onClick={()=>setOpen(false)} className={({isActive})=>`rounded-xl px-4 py-3 text-sm ${isActive?'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300':'text-black/65 dark:text-white/65'}`}>{name}</NavLink>)}</div>}</header>;
}
