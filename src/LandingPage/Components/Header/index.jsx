import React, { useState } from 'react';
import './style.css';

const Index = () => {
  const [humburgerIcon, setHumburgerIcon] = useState('menu');
  const [sidebarClasses, setSidebarClasses] = useState('top-[80px] opacity-100');
  // const something = ' transition-all ease-in-out duration-700';

  const toggleSideBar = (e) => {
    const name = e.target.name;
    
    if(name == 'menu') {
      setHumburgerIcon('close');
      setSidebarClasses('top-[80px] opacity-100');
    } else {
      setHumburgerIcon('menu');
      setSidebarClasses();
    }
  };

  return (
    <header>
      <nav className='p-5 md:flex md:items-center md:justify-between  bg-slate-100'>
        <div className='flex items-center justify-between'>
          <span className='w-22 cursor-pointer'>
            <img src='logo.png' alt='logo' className='h-20' />
          </span>
          <span className='text-5xl md:hidden'>
            <ion-icon
              name={humburgerIcon}
              onClick={() => {
                toggleSideBar(event);
              }}
            ></ion-icon>
          </span>
        </div>
        <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-8 md:pl-0 pl-6 md:opacity-100 opacity-0 top-[-500px] ${sidebarClasses}`}>
          <li className='nav-item'>
            <a href='#Home' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Services' className='nav-link'>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Blog' className='nav-link'>
              Blog
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Gallery' className='nav-link'>
              Gallery
            </a>
          </li>
          <li className='nav-item'>
            <a href='#About' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Login' className='nav-link'>
              Login
            </a>
          </li>
          <button className='bg-green-400 duration-500 px-5 py-2 rounded-lg hover:bg-green-600 active:bg-green-400 active:duration-0'>
            Ready
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Index;
