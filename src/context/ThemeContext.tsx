import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
type ThemeContextValue = { darkMode:boolean; toggleTheme:()=>void };
const ThemeContext = createContext<ThemeContextValue | null>(null);
export function ThemeProvider({children}:{children:ReactNode}) {
 const [darkMode,setDarkMode]=useState(()=>typeof window === 'undefined' ? true : localStorage.getItem('tanvir-theme') !== 'light');
 useEffect(()=>{localStorage.setItem('tanvir-theme',darkMode?'dark':'light');document.documentElement.classList.toggle('dark',darkMode)},[darkMode]);
 return <ThemeContext.Provider value={{darkMode,toggleTheme:()=>setDarkMode(v=>!v)}}>{children}</ThemeContext.Provider>;
}
export function useTheme(){const value=useContext(ThemeContext);if(!value)throw new Error('useTheme must be used within ThemeProvider');return value;}
