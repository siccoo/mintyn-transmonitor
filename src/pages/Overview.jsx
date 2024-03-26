import React, { useEffect } from 'react';
import apiRequest from '../utils/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPayments,
  getDailyTransactionValue,
  getDailyTransactionVolume,
  getDate,
  getMonthTimeStamp,
  getOrders,
  getPayments,
  getStatusType,
  getTotalTransactionValue,
  getTotalTransactionVolume,
} from '../slices/overViewSlice';
import { getUser } from '../slices/userSlice';
import StatsCard from '../components/StatsCard';
import SmallChart from '../assets/images/small-chart.svg';
import GraphDisplay from '../components/GraphDisplay';

const Overview = () => {
  const dailyTransactionVolume = useSelector(
    (state) => state.overview.dailyTransactionVolume
  );
  const dailyTransactionValue = useSelector(
    (state) => state.overview.dailyTransactionValue
  );
  const totalTransactionVolume = useSelector(
    (state) => state.overview.totalTransactionVolume
  );
  const totalTransactionValue = useSelector(
    (state) => state.overview.totalTransactionValue
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(apiRequest.fetchData)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Fetching ${res.status}: ${res.statusText}`);
        }
      })
      .then((res) => {
        dispatch(getMonthTimeStamp(res.data.month_timestamp_graph));
        dispatch(getDate(res.data.date));
        dispatch(getAllPayments(res.data.list_of_payments));
        dispatch(getOrders(res.data.orders));
        dispatch(getPayments(res.data.payments));
        dispatch(getStatusType(res.data.status_type));
        dispatch(getDailyTransactionValue(res.data.daily_transaction_Value));
        dispatch(getDailyTransactionVolume(res.data.daily_transaction_Volume));
        dispatch(getTotalTransactionValue(res.data.total_transaction_Value));
        dispatch(getTotalTransactionVolume(res.data.total_transaction_Volume));
        dispatch(getUser(res.data.profile));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  return (
    <section className='p-8'>
      <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 '>
        <StatsCard
          id={1}
          image={SmallChart}
          title='Daily Transaction Volume'
          amount={dailyTransactionVolume}
        />
        <StatsCard
          id={2}
          image={SmallChart}
          title='Daily Transaction Value'
          amount={`₦${dailyTransactionValue}`}
        />
        <StatsCard
          id={3}
          image={SmallChart}
          title='Total Transaction Volume'
          amount={totalTransactionVolume}
        />
        <StatsCard
          id={4}
          image={SmallChart}
          title='Total Transaction Value'
          amount={`₦${totalTransactionValue}`}
        />
      </section>
      <GraphDisplay />
    </section>
  );
};

export default Overview;