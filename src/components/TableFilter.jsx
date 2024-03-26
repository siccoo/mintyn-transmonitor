import React from 'react';
import { Search } from '../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue, setSearchInput } from '../slices/overViewSlice';

const TableFilter = () => {
  const statusType = useSelector((state) => state.overview.statusType);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-wrap gap-4 text-dark w-full justify-between py-4'>
      <div className='flex gap-2 items-center'>
        <p className='text-[13px]'>Showing</p>
        <select className='w-20 outline-none bg-transparent text-blu text-sm '>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <p className='text-[13px]'>out of 10 payments</p>
      </div>
      <div className='flex items-center p-2 border-b-[0.5px] border-b-searchBorder'>
        <img src={Search} alt='search' />
        <input
          type='text'
          placeholder='Search Payments'
          className='outline-none bg-transparent text-[11px] leading-[15px] placeholder-search Border p-2'
          onChange={(e) => {
            dispatch(setSearchInput(e.target.value));
          }}
        />
      </div>
      <div className='flex gap-4 items-center'>
        <p>Show</p>
        <select
          onChange={(e) => {
            dispatch(setFilterValue(e.target.value));
          }}
          className='w-full outline-none rounded-sm bg-transparent placeholder:text-blue text-deepGrey border border-statusBorder hover:bg-offWhite text-[13px] py-2 px-4'
        >
          {statusType.map((status) => (
            <option
              key={status}
              value={status}
              className='text-deepGrey text-xs hover:text-green'
            >
              {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TableFilter;