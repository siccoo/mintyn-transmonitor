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
        route: 'overview',
    }
];

export const ordersData = [
    {
        id: 1,
        title: 'All Orders',
        icon: AllOrders,
        route: 'all-orders',
    },
    {
        id: 2,
        title: 'Pending Orders',
        icon: PendingOrders,
        route: 'pending-orders',
    },
    {
        id: 3,
        title: 'Reconcilled Orders',
        icon: ReconcilledOrders,
        route: 'reconcilled-orders',
    }
];

export const paymentsData = [
    {
        id: 1,
        title: 'All Payments',
        icon: AllPayments,
        route: 'all-payments',
    },
    {
        id: 2,
        title: 'Reconcilled Payments',
        icon: ReconcilledPayments,
        route: 'reconcilled-payments',
    },
    {
        id: 3,
        title: 'Un-Reconcilled Payments',
        icon: UnreconcilledPayments,
        route: 'unreconcilled-payments',
    },
    {
        id: 4,
        title: 'Manual Settlements',
        icon: ManualSettlement,
        route: 'manual-settlements',
    }
];