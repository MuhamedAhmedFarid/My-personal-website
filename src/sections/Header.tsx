'use client'
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
export const Header = () => {
  const [selectedTab, setSelectedTab] = useState('home')

  return <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <ScrollLink 
          smooth={true} 
          to='home' 
          className={`nav-item ${selectedTab === 'home' && 'nav-active' }`} 
          onClick={() =>setSelectedTab('home')}>
          Home
        </ScrollLink>
        <ScrollLink smooth={true}  to='projects' className={`nav-item ${selectedTab === 'projects' && 'nav-active'}`} onClick={() =>setSelectedTab('projects')} >Projects</ScrollLink>
        <ScrollLink smooth={true} to='about' className={`nav-item ${selectedTab === 'about' && 'nav-active' }`} onClick={() =>setSelectedTab('about')}>About</ScrollLink>
        <ScrollLink smooth={true} to='contact' className={`nav-item ${selectedTab === 'contact' && 'nav-active' }`} onClick={() =>setSelectedTab('contact')}>Contact</ScrollLink>
    </nav>
  </div>;
};