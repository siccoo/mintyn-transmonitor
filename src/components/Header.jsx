import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { CloseSquare, HambergerMenu } from 'iconsax-react'; 
import { headerData } from './../data/SidebarData'; 
import { Bell, Avatar, Search } from '../assets/icons/'; 

const Header = () => {
  const user = useSelector(state => state.user.user);
  const notifications = useSelector(state => state.user.notifications);

  const [nav, setNav] = useState(false);
  const [, setSearchInput] = useState('');

  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setNav(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hamburgerRef]);

  const handleNavSwitch = () => {
    setNav(!nav);
  };

  return (
    <header className='px-6 bg-white text-navigationGrey shadow-lg md:px-12 flex justify-between items-center font-SegoeUI py-4 sticky'>
      <div className='flex gap-4 items-center'>
        <a
          href='/'
          className='font-Roboto font-black text-xl md:text-2xl text-blue'
        >
          TransMonitor
        </a>
        <div className='md:flex hidden items-center p-2'>
          <img src={Search} alt='search' />
          <input
            type='text'
            placeholder='Search....'
            className='outline-none bg-transparent placeholder:font-medium p-2'
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
      </div>

      {/* Desktop navigation */}
      <div className='hidden md:flex md:gap-5'>
        {headerData.map((data) => (
          <a
            key={data.id}
            href={data.url}
            target={data.target}
            className='py-2 px-4 text-sm'
          >
            {data.title}
          </a>
        ))}
        <div className='self-center cursor-pointer relative'>
          <img src={Bell} alt='a notification bell' />
          {notifications > 0 ? (
            <span className='notification'>{notifications}</span>
          ) : (
            ''
          )}
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <div>
            <p className='text-[10px] text-right'>{user.greeting}</p>
            <p className='text-sm'>{user.name}</p>
          </div>
          <img src={Avatar} alt='user' className='rounded-[50%]' />
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        onClick={handleNavSwitch}
        className='block md:hidden cursor-pointer'
      >
        <HambergerMenu size='24' color='#1860EC' />
      </div>
      <ul
        ref={hamburgerRef}
        className={
          nav
            ? 'fixed flex flex-col right-0 top-0 w-3/5 h-full overflow-auto p-4 space-y-2 bg-white rounded-l-2xl ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed hidden'
        }
      >
        <div className='flex justify-end cursor-pointer'>
          <CloseSquare
            size='24'
            color='#1860EC'
            onClick={handleNavSwitch}
          />
        </div>
        <img
          src={Avatar}
          alt='user'
          className='rounded-[50%] w-2/4 self-center'
        />
        <div className='flex items-center p-2'>
          <img src={Search} alt='search' />
          <input
            type='text'
            placeholder='Search....'
            className='outline-none bg-transparent placeholder:font-medium p-2'
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
        {headerData.map((data) => (
          <a
            key={data.id}
            href={data.url}
            target={data.target}
            onClick={() => {
              handleNavSwitch();
            }}
            className='py-2 px-4 text-sm hover:rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-green hover:text-white duration-300'
          >
            {data.title}
          </a>
        ))}
        <Sidebar />
      </ul>
    </header>
  );
};

export default Header;