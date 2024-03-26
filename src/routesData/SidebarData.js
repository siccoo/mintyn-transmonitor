import { AllOrders, AllPayments, ManualSettlement, Overview, PendingOrders, ReconcilledOrders, ReconcilledPayments, UnreconcilledPayments } from '../assets/icons';

export const headerData = [
    {
        id: 1,
        title: 'Support',
        url: '/',
        target: '_parent',
    },
    {
        id: 2,
        title: 'FAQ',
        url: '/',
        target: '_parent',
    }
];

export const mainData = [
    {
        id: 1,
        title: 'Overview',
        icon: Overview,
    }
];

export const ordersData = [
    {
        id: 1,
        title: 'All Orders',
        icon: AllOrders,
    },
    {
        id: 2,
        title: 'Pending Orders',
        icon: PendingOrders,
    },
    {
        id: 3,
        title: 'Reconcilled Orders',
        icon: ReconcilledOrders,
    }
];

export const paymentsData = [
    {
        id: 1,
        title: 'All Payments',
        icon: AllPayments,
    },
    {
        id: 2,
        title: 'Reconcilled Payments',
        icon: ReconcilledPayments,
    },
    {
        id: 3,
        title: 'Un-Reconcilled Payments',
        icon: UnreconcilledPayments,
    },
    {
        id: 4,
        title: 'Manual Settlements',
        icon: ManualSettlement,
    }
];