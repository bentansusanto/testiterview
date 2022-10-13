import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../components/HomeView';
import CustomersView from '../components/CustomersView';
import ItemsView from '../components/ItemsView';
import ListOrder from '../components/ListOrder';
import PaymentView from '../components/PaymentView';
const routes = [
    {
        path : '/',
        name : 'Dashboard',
        component : HomeView
    },
    {
        path : '/customers',
        name : 'Customers',
        component : CustomersView
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