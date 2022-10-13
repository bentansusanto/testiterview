<template>
   <div class="pt-10 px-20">
        <h1 class="text-[2rem]">
            List Item
        </h1>
        <button class="bg-blue-600 py-2 px-5 rounded-md mt-10 text-white text-[.9rem]">Add Order</button>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Product name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="items of item" :key="items" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{items.Name}}
                    </th>
                    <td class="py-4 px-6 space-x-2">
                        <button class="bg-red-500 px-5 py-2 text-white rounded-md">Delete</button>
                        <button class=" bg-gray-500 px-5 py-2 text-white rounded-md" @click="onToggle">
                            Update
                        </button>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="py-4 px-6 space-x-2">
                        <button class="bg-red-500 px-5 py-2 text-white rounded-md">Delete</button>
                        <button class=" bg-gray-500 px-5 py-2 text-white rounded-md" @click="onToggle">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                item : [],
                errors : []
            }
        },
        async created () {
            try {
                const response = await axios.get('https://app.api.elsoft.id/admin/api/v1/autocomplete/item?type=combo&form=sales&Module=salesinvoice')
                this.item = response.data
            } catch (e) {
                this.errors.push(e)
            }
        }
    }
</script>

<style scoped>

</style>