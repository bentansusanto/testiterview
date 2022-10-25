<template>
    <nav class="bg-blue-500 w-[200px] h-[100vh] px-5 py-10 sticky top-0">
        <div class="navbrand mb-10">
            <router-link to="/" class="text-[1.5rem] font-semibold text-white">
                EZ Booking
            </router-link>
        </div>
        <ul class="mt-6 space-y-5">
            <li class="flex space-x-5">
                <img src="https://img.icons8.com/ios-filled/50/000000/company.png" alt="" class="w-5">
                <router-link to="/business-partner">
                    Business
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
                <img src="https://img.icons8.com/ios/50/000000/card-in-use.png" alt="" class="w-5">
                <router-link to="/payment">
                    Payment
                </router-link>
            </li>       
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>
