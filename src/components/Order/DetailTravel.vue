<template>
    <div class="bg-[#fafafa] w-[27rem] py-5 px-10 mt-10 shadow-lg">
            <h4 class="text-[1.2rem] font-semibold">Detail Item</h4>
            <div v-for="products in product.DetailTravels" :key="products">
                <div class=" mt-10 mb-5 space-y-3">
                    <h4>{{products.ItemName}}</h4>
                    <p>{{products.Description}}</p>
                </div>
                <div class="w-auto h-[.3px] bg-gray-400 my-6"></div>
            </div>
        </div>
</template>

<script>
    export default {
        props : {
            product :Object
        }
    }
</script>
