import React from 'react';
import {
  DownArrow,
  ReconcilledIcon,
  PendingIcon,
  UnreconcilledIcon,
} from '../assets/icons';

const Table = ({ allPaymentsData }) => {
  return (
    <table className='table-auto w-max lg:w-full my-4 bg-white'>
      <thead>
        <tr className='text-tableData bg-tableHead text-left'>
          <th>Item Type</th>
          <th>Price</th>
          <th>Transaction No</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {allPaymentsData.map((payment) => (
          <tr
            key={payment}
            className='border-b border-tableRowBorder last:border-b-0 text-tableData text-sm'
          >
            <td>
              <div className='flex gap-10 items-center'>
                <div className='rounded-[50%] bg-tableData p-2'>
                  <p className='text-white'>VW</p>
                </div>
                <span className='text-deepGrey'>{payment.item_type}</span>
              </div>
            </td>
            <td>{payment.price}</td>
            <td>{payment.transaction_number}</td>
            <td>{payment.time}</td>
            <td>
              <div className='flex justify-between items-center'>
                <div
                  className={`flex gap-4 px-4 py-2 border border-tableRowBorder rounded-full items-center w-40 ${
                    payment.status === 'Reconciled'
                      ? 'text-green'
                      : payment.status === 'Pending'
                      ? 'text-yellow'
                      : 'text-statusGrey'
                  }`}
                >
                  <img
                    src={
                      payment.status === 'Reconciled'
                        ? ReconcilledIcon
                        : payment.status === 'Pending'
                        ? PendingIcon
                        : UnreconcilledIcon
                    }
                    alt='a round icon'
                  />
                  {payment.status}
                </div>
                <img src={DownArrow} alt='arrow pointing down' />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;