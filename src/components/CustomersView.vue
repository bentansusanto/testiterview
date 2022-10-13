<template>
    <div class="pt-10 px-20">
        <h1 class="text-[2rem]">
            Data Customers
        </h1>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Company Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Currency
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Bussines Partner
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        PT Abc
                    </th>
                    <td class="py-4 px-6">
                        IDR
                    </td>
                    <td class="py-4 px-6">
                        MasterCard
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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>