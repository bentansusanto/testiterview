import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../components/HomeView';
import BusinessView from '../components/BusinessPartner/BusinessPartner';
import ItemsView from '../components/Item/ItemsView';
import ListOrder from '../components/Order/ListOrder';
import OrderDetail from '../components/Order/ShowOrder';
import PaymentView from '../components/Payment/PaymentView';

const routes = [
    {
        path : '/',
        name : 'Dashboard',
        component : HomeView
    },
    {
        path : '/business-partner',
        name : 'Business Partner',
        component : BusinessView
    },
    {
        path : '/items',
        name : 'Items',
        component : ItemsView
    },
    {
        path : '/orders',
        name : 'Orders',
        component : ListOrder
    },
    {
        path : '/orders/:Oid',
        name : 'Order Detail',
        component : OrderDetail
    },
    {
        path : '/payment',
        name : 'Payment',
        component : PaymentView
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router;