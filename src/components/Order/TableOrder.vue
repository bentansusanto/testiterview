<template>
    <div class="flex items-center">
        <button class="bg-blue-600 py-2 px-5 rounded-md mt-10 text-white text-[.9rem]" @click="onToggleAdd">Add Order</button>
        <div class="mt-10 ml-auto bg-gray-100 px-3 py-2 rounded-lg items-center">
                <input type="text" v-model="search" @keyup="filterList(search)" placeholder="Search here"
                    class="placeholder:text-[.9rem] placeholder:font-normal font-normal outline-none bg-transparent w-[15rem] px-3">

            <!-- <button class="px-3 items-center py-3 rounded-lg text-[1.3rem] font-semibold">
                <ion-icon name="search-outline"></ion-icon>
            </button> -->
        </div>
    </div>
    <table class="w-[68rem] text-sm text-left text-white mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Date
                </th>
                <th scope="col" class="py-3 px-6">
                    Customer Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Company Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Bisnis Partner
                </th>
                <th scope="col" class="py-3 px-6">
                    Currency
                </th>
                <th scope="col" class="py-3 px-6">
                    Status
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody class="">
            <tr v-for="order in data" :key="order" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6">
                    {{order.Date}}
                </th>
                <th scope="row" class="py-4 px-6">
                    {{order.CustomerName}}
                </th>
                <th class="py-4 px-6">
                    {{order.CompanyName}}
                </th>
                <th class="py-4 px-6">
                    {{order.BusinessPartnerName}}
                </th>
                <th class="py-4 px-6">
                    {{order.CurrencySymbol}}
                </th>
                <th class="py-4 px-6">
                    {{order.StatusName}}
                </th>
                <td class="py-4 px-6 space-x-2 flex">
                    <button class="bg-red-500 px-5 py-2 text-white rounded-md ">
                        Delete
                    </button>
                    <button class=" bg-gray-500 px-5 py-2 text-white rounded-md" @click="onToggleEdit">
                        Update
                    </button>
                    <router-link :to="'/orders/'+order.Oid" class=" bg-green-500 px-5 py-2 text-white rounded-md">
                        Detail
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- <Pagination v-model="page" :per-page="5" @paginate="pagination"></Pagination> -->
</template>

<script>
    import axios from 'axios'
    // import Pagination from 'vue-pagination-2'
    export default {
        data() {
            return {
                data: [],
                search : ''
            }
        },
        props: {
            onToggleEdit: {
                type: Function,
                required: true
            },
            onToggleAdd: {
                type: Function,
                required: true
            },
        },
        mounted() {
            this.listOrder();
        },
        methods: {
            // Get list order
             listOrder() {
                const Token =
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUyNWViYzI5MmZjNGMwYjUzMWI2ODMzNGIxMmJhNjIwN2Y4MGMxNmFlMzE3MDM2NDMyYTMzZGY2MDc1MjQ1MzAyNzdiOTBjMmRhNWQwZjYyIn0.eyJhdWQiOiI0IiwianRpIjoiZTI1ZWJjMjkyZmM0YzBiNTMxYjY4MzM0YjEyYmE2MjA3ZjgwYzE2YWUzMTcwMzY0MzJhMzNkZjYwNzUyNDUzMDI3N2I5MGMyZGE1ZDBmNjIiLCJpYXQiOjE2NjU5NzI4ODYsIm5iZiI6MTY2NTk3Mjg4NiwiZXhwIjoxNzI5MTMxMjg2LCJzdWIiOiJiMDg5Nzk3OC01MzgyLTRkNGQtOThjOC0yYjdiZWUyMmQxMDMiLCJzY29wZXMiOltdLCJjb21wIjoiM2IyN2U1NzgtMGNkNy0xMWVhLWE4MjUtZDIxMTgzOTBiMTE2In0.PxxebJlKHkr-M63vMoy-PFz07oSNZ_MnfyNpIb4Jea1a8sUwFcm8LWKY3W_tbOYQbuoYp0ROzzVSzz6U7eV-vvkxMW68SAydzB39OLF-thgX0g1iVr5XuJAQIyaN7cICdMpbWwQrSRLhvkvU3mk4EBCdQMdSSZq8CxmR4-Sb1x_mfjM3cBXxP_05j1xTyqr41Qh1TP58GQZ-UEKTKl1c6_Ucs0NXUmA3TdmByXbVaI84UTaXb1QUM400-jeQW3NAsXu_i_hhXkfMTpHxCJZrQ3YNWAN4tQruxJha7U9qi4VXDI6VZyGKQsP2vD7JQpPHkKRaA_8_MuY6IHOGXqMgNoX0mErd9cdvwRetbuUF_BTywhdaI6-T11t0YdbCSzCQpKvLP3Zjx0M2eF0CllWKiZZl6ZtZk1whUIq1P7rEjfgbo6uMYSNETg4lyG0924xqtXc8pwCOGCW6Ff3aKmc2of8SdpHeDdBeVVwI29ubAgbOzlHce1XkIMJkdd30J72zhKeNomMDCpREbWTsywgcIp9eviekgD7wg_BBWKsuyy_vspQd99aNoF4lXrmmlAut1HJA-539yZNPvag7tWwIO3uMezQ9Yyxq3Sp2kNcMXJMcxUetU2JFxnkeL2weQ9mYx8k5etoqD4hlIxJuhi8VXfs_MZVkIGAiGmfuYB2p3Qg'
                 axios.get(
                        'https://api20.ezbooking.co/admin/api/v1/salesinvoice/list?page=1&size=6&format=table&Company=3b27e578-0cd7-11ea-a825-d2118390b116&CompanyName=acetours&Status=all', {
                            headers: {
                                'Authorization': `Bearer ${Token}`,
                            }
                        })
                    .then(response => {
                            this.data = response.data.data;
                        // console.log(response)
                    })
                    .catch(e => {
                        console.log("err",e.response.data)
                    })
                },
                filterList(search) {
                    // console.log('',search);
                    if(search == ''){
                        return this.data
                    } else{
                        this.data = this.data.filter((order) => {
                           return order.CustomerName.toLowerCase().includes(search.toLowerCase())
                        })
                    }
                        
                    },
            },
    }
</script>

<style scoped>

</style>