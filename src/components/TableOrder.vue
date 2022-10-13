<template>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Product name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Color
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Category
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Price
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="items in salesinvoice" :key="items" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row">
                        {{items.company}}
                    </th>
                    <td class="py-4 px-6">

                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17
                    </th>
                    <td class="py-4 px-6">
                        Sliver
                    </td>
                    <td class="py-4 px-6">
                        Laptop
                    </td>
                    <td class="py-4 px-6">
                        $2999
                    </td>
                    <td class="py-4 px-6 space-x-2">
                        <button class="bg-red-500 px-5 py-2 text-white rounded-md">Delete</button>
                        <button class=" bg-gray-500 px-5 py-2 text-white rounded-md" @click="onToggle">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                salesinvoice :null
            }
        },
        props : {
            onToggle :{
                type : Function,
                required : true
            }
        },
        mounted () {
            axios.
            get(`https://app.api.elsoft.id/admin/api/v1/salesinvoice`)
            .then(response => {
                this.salesinvoice = response.data.salesinvoice
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    }
</script>

<style scoped>

</style>