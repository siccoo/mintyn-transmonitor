import React, { useState } from 'react';
import { mainData, paymentsData, ordersData } from './../data/SidebarData';
import { MerchantProfile } from '../assets/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  return (
    <aside className='py-3 lg:py-6 text-navigationGrey'>
      <div className='pl-6'>
        <button className='bg-green rounded-full text-white font-Roboto font-bold tracking-wide p-3 md:py-2 md:px-4 leading-[14px] text-xs'>
          GENERATE INVOICE
        </button>
      </div>
      <div className='mt-4 font-SegoeUI'>
        <h1 className='pl-4'>Main</h1>
        {mainData.map((main) => (
          <Link to={main.route} key={main.id}>
            <div
              onClick={() => setSelectedRoute(main.route)}
              className={`hover:bg-navigationBg hover:border-l-4 hover:border-l-blue ${
                main.route === selectedRoute ? 'border-l-4 border-l-blue' : ''
              }`}
            >
              <div
                className={`flex gap-8 cursor-pointer p-4 items-center ${
                  main.route === selectedRoute
                    ? 'bg-[#afcdf3] text-navigationGrey'
                    : ''
                }`}
              >
                <img src={main.icon} alt={main.title} />
                <a href={main.route} className='text-[11px] leading-[14.63px]'>
                  {main.title}
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='font-SegoeUI'>
        <h1 className='mt-2 pl-4'>Payments</h1>
        {paymentsData.map((payment) => (
          <Link to={payment.route} key={payment.id}>
            <div
              onClick={() => setSelectedRoute(payment.route)}
              className={`hover:bg-navigationBg hover:border-l-4 hover:border-l-blue ${
                payment.route === selectedRoute ? 'border-l-4 border-l-blue' : ''
              }`}
            >
              <div
                className={`flex gap-8 cursor-pointer p-4 items-center ${
                  payment.route === selectedRoute
                    ? 'bg-[#afcdf3] text-navigationGrey'
                    : ''
                }`}
              >
                <img src={payment.icon} alt={payment.title} />
                <a href={payment.route} className='text-[11px] leading-[14.63px]'>
                  {payment.title}
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='font-SegoeUI'>
        <h1 className='mt-2 pl-4'>Orders</h1>
        {ordersData.map((order) => (
          <Link to={order.route} key={order.id}>
            <div
              onClick={() => setSelectedRoute(order.route)}
              className={`hover:bg-navigationBg hover:border-l-4 hover:border-l-blue ${
                order.route === selectedRoute ? 'border-l-4 border-l-blue' : ''
              }`}
            >
              <div
                className={`flex gap-8 cursor-pointer p-4 items-center ${
                  order.route === selectedRoute
                    ? 'bg-[#afcdf3] text-navigationGrey'
                    : ''
                }`}
              >
                <img src={order.icon} alt={order.title} />
                <a href={order.route} className='text-[11px] leading-[14.63px]'>
                  {order.title}
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <div className='hover:bg-navigationBg hover:border-l-4 hover:border-l-blue'>
          <div className='flex gap-8 cursor-pointer p-4 items-center'>
            <img src={MerchantProfile} alt='Merchant' />
            <p className='text-[11px] leading-[14.63px]'>Merchant Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;