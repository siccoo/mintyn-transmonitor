import React from 'react';
import OverView from '../pages/Overview';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <Header />

      <main className='flex h-screen w-full'>
        <div className='hidden md:block w-[260px] h-full bg-white !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-grey'>
          <Sidebar />
        </div>

        <section className='w-full md:w-[calc(100vw - 260px)] h-full !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-grey pb-12 bg-outletBackground'>
          {' '}
          <OverView />
        </section>
      </main>
    </div>
  );
};

export default Layout;