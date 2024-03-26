import React, { useState } from 'react';
import Table from './Table';
import TableFilter from './TableFilter';
import { useSelector } from 'react-redux';

const Payments = () => {
  const allPayments = useSelector((state) => state.overview.allPayments);
  const searchInput = useSelector((state) => state.overview.searchInput);
  const filterValue = useSelector((state) => state.overview.filterValue);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = allPayments.slice(indexOfFirstItem, indexOfLastItem);

  if (searchInput !== '') {
    currentItems = currentItems.filter((item) => {
      const query = searchInput.toLowerCase();
      return (
        item.item_type.toLowerCase().includes(query) ||
        item.price.toLowerCase().includes(query) ||
        item.transaction_number.toLowerCase().includes(query) ||
        item.time.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query)
      );
    });
  }
  if (filterValue !== '') {
    currentItems = currentItems.filter((item) => {
      const value = filterValue.toLowerCase();
      if (value === 'All') {
        return item.status.toLowerCase();
      }
      return item.status.toLowerCase() === value;
    });
  }

  const totalPages = Math.ceil(allPayments.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className='my-6'>
      <h1 className='text-4xl text-dark'>Payments</h1>
      <TableFilter />
      <div className='overflow-x-auto'>
        <Table allPaymentsData={currentItems} />
      </div>
      <section className='flex flex-col md:flex-row gap-8 justify-between items-center py-10 font-semibold'>
        <p className='text-black text-[13px]'>
          Showing <span>1</span> to <span>10</span> of 10 entries
        </p>
        <div className='flex border border-tableRowBorder rounded-sm '>
          <button
            className='px-4 py-2 bg-white text-black border-r border-r-tableRowBorder'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <div className='text-white bg-blue px-4 py-2 border-r border-r-tableRowBorder cursor-pointer'>
            {currentPage}
          </div>
          <div className='text-tableRowBorder px-4 py-2 border-r border-r-tableRowBorder'>
            {currentPage + 1}
          </div>
          <button
            className='px-4 py-2 bg-white text-black'
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </section>
    </section>
  );
};

export default Payments;