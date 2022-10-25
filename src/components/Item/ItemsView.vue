<template>
   <div class="pt-10 px-20">
        <h1 class="text-[2rem]">
            List Item
        </h1>
        <!-- <button class="bg-blue-600 py-2 px-5 rounded-md mt-10 text-white text-[.9rem]">Add Order</button> -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        No.
                    </th>   
                    <th scope="col" class="py-3 px-6">
                        Item Name
                    </th>   
                    <th scope="col" class="py-3 px-6">
                        Item Unit
                    </th>   
                    <th scope="col" class="py-3 px-6">
                        Currency
                    </th>   
                    <!-- <th scope="col" class="py-3 px-6">
                        Action
                    </th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(val, index) in items" :key="val" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{index + 1}}
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{val.Name}}
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{val.ItemUnit.Name}}
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{val.Currency.Name}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                items :''
            }
        },
        mounted(){
            // let url = 'http://localhost:5000/items';
            // fetch(url)
            // .then(response => response.json())
            // .then(data => {
                //     this.items = data;
                // })
            this.fetchItems();
        },
        methods: {    
            fetchItems(){
                const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUyNWViYzI5MmZjNGMwYjUzMWI2ODMzNGIxMmJhNjIwN2Y4MGMxNmFlMzE3MDM2NDMyYTMzZGY2MDc1MjQ1MzAyNzdiOTBjMmRhNWQwZjYyIn0.eyJhdWQiOiI0IiwianRpIjoiZTI1ZWJjMjkyZmM0YzBiNTMxYjY4MzM0YjEyYmE2MjA3ZjgwYzE2YWUzMTcwMzY0MzJhMzNkZjYwNzUyNDUzMDI3N2I5MGMyZGE1ZDBmNjIiLCJpYXQiOjE2NjU5NzI4ODYsIm5iZiI6MTY2NTk3Mjg4NiwiZXhwIjoxNzI5MTMxMjg2LCJzdWIiOiJiMDg5Nzk3OC01MzgyLTRkNGQtOThjOC0yYjdiZWUyMmQxMDMiLCJzY29wZXMiOltdLCJjb21wIjoiM2IyN2U1NzgtMGNkNy0xMWVhLWE4MjUtZDIxMTgzOTBiMTE2In0.PxxebJlKHkr-M63vMoy-PFz07oSNZ_MnfyNpIb4Jea1a8sUwFcm8LWKY3W_tbOYQbuoYp0ROzzVSzz6U7eV-vvkxMW68SAydzB39OLF-thgX0g1iVr5XuJAQIyaN7cICdMpbWwQrSRLhvkvU3mk4EBCdQMdSSZq8CxmR4-Sb1x_mfjM3cBXxP_05j1xTyqr41Qh1TP58GQZ-UEKTKl1c6_Ucs0NXUmA3TdmByXbVaI84UTaXb1QUM400-jeQW3NAsXu_i_hhXkfMTpHxCJZrQ3YNWAN4tQruxJha7U9qi4VXDI6VZyGKQsP2vD7JQpPHkKRaA_8_MuY6IHOGXqMgNoX0mErd9cdvwRetbuUF_BTywhdaI6-T11t0YdbCSzCQpKvLP3Zjx0M2eF0CllWKiZZl6ZtZk1whUIq1P7rEjfgbo6uMYSNETg4lyG0924xqtXc8pwCOGCW6Ff3aKmc2of8SdpHeDdBeVVwI29ubAgbOzlHce1XkIMJkdd30J72zhKeNomMDCpREbWTsywgcIp9eviekgD7wg_BBWKsuyy_vspQd99aNoF4lXrmmlAut1HJA-539yZNPvag7tWwIO3uMezQ9Yyxq3Sp2kNcMXJMcxUetU2JFxnkeL2weQ9mYx8k5etoqD4hlIxJuhi8VXfs_MZVkIGAiGmfuYB2p3Qg';

                axios.get('https://api20.ezbooking.co/admin/api/v1/autocomplete/item?type=combo&form=sales&Module=salesinvoice&itemtypecode=Service&term=air&Company=3b27e578-0cd7-11ea-a825-d2118390b116',{
                    headers : {
                        'Authorization' : `Bearer ${Token}`
                    }
                })
                .then((response) => {
                    // console.log(response)
                    this.items = response.data
                }).catch((err) => {
                    console.log(err);
                });
            }
        }
       
    }
</script>

<style scoped>

</style>