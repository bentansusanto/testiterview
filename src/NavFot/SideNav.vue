<template>
    <sidenav class="bg-blue-500 w-[200px] h-[100vh] px-5 py-10">
        <div class="navbrand mb-10">
            <router-link to="/" class="text-[1.5rem] font-semibold text-white">
                EZ Booking
            </router-link>
        </div>
        <ul class="mt-6 space-y-5">
            <li class="flex space-x-5">
                <img src="https://img.icons8.com/material-outlined/24/000000/gender-neutral-user.png" alt="" class="w-5">
                <router-link to="/customers">
                    Customers
                </router-link>
            </li>       
            <li class="flex space-x-5">
                <img src="https://img.icons8.com/wired/64/000000/list--v1.png" alt="" class="w-5">
                <router-link to="/items">
                    Items
                </router-link>
            </li>       
            <li class="flex space-x-5">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/purchase-order.png" alt="" class="w-5">
                <router-link to="/orders">
                    Orders
                </router-link>
            </li>       
            <li class="flex space-x-5">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/purchase-order.png" alt="" class="w-5">
                <router-link to="/payment">
                    Payment
                </router-link>
            </li>       
        </ul>

    </sidenav>
</template>

<script>
    export default {
        
    }
</script>
