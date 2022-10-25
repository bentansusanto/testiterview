import axios from 'axios';
<template>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        No.
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Payment Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Description
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Currency
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(val, index) in payment" :key="val" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{index + 1}}
                    </th>
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{val.Name}}
                    </th>
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{val.Description}}
                    </th>
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{val.Currency.Name}}
                    </th>
                </tr>
            </tbody>
        </table>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                payment : ''
            }
        },
        mounted(){
            this.paymentMethod();
        },
        methods:{
            paymentMethod(){
                const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUyNWViYzI5MmZjNGMwYjUzMWI2ODMzNGIxMmJhNjIwN2Y4MGMxNmFlMzE3MDM2NDMyYTMzZGY2MDc1MjQ1MzAyNzdiOTBjMmRhNWQwZjYyIn0.eyJhdWQiOiI0IiwianRpIjoiZTI1ZWJjMjkyZmM0YzBiNTMxYjY4MzM0YjEyYmE2MjA3ZjgwYzE2YWUzMTcwMzY0MzJhMzNkZjYwNzUyNDUzMDI3N2I5MGMyZGE1ZDBmNjIiLCJpYXQiOjE2NjU5NzI4ODYsIm5iZiI6MTY2NTk3Mjg4NiwiZXhwIjoxNzI5MTMxMjg2LCJzdWIiOiJiMDg5Nzk3OC01MzgyLTRkNGQtOThjOC0yYjdiZWUyMmQxMDMiLCJzY29wZXMiOltdLCJjb21wIjoiM2IyN2U1NzgtMGNkNy0xMWVhLWE4MjUtZDIxMTgzOTBiMTE2In0.PxxebJlKHkr-M63vMoy-PFz07oSNZ_MnfyNpIb4Jea1a8sUwFcm8LWKY3W_tbOYQbuoYp0ROzzVSzz6U7eV-vvkxMW68SAydzB39OLF-thgX0g1iVr5XuJAQIyaN7cICdMpbWwQrSRLhvkvU3mk4EBCdQMdSSZq8CxmR4-Sb1x_mfjM3cBXxP_05j1xTyqr41Qh1TP58GQZ-UEKTKl1c6_Ucs0NXUmA3TdmByXbVaI84UTaXb1QUM400-jeQW3NAsXu_i_hhXkfMTpHxCJZrQ3YNWAN4tQruxJha7U9qi4VXDI6VZyGKQsP2vD7JQpPHkKRaA_8_MuY6IHOGXqMgNoX0mErd9cdvwRetbuUF_BTywhdaI6-T11t0YdbCSzCQpKvLP3Zjx0M2eF0CllWKiZZl6ZtZk1whUIq1P7rEjfgbo6uMYSNETg4lyG0924xqtXc8pwCOGCW6Ff3aKmc2of8SdpHeDdBeVVwI29ubAgbOzlHce1XkIMJkdd30J72zhKeNomMDCpREbWTsywgcIp9eviekgD7wg_BBWKsuyy_vspQd99aNoF4lXrmmlAut1HJA-539yZNPvag7tWwIO3uMezQ9Yyxq3Sp2kNcMXJMcxUetU2JFxnkeL2weQ9mYx8k5etoqD4hlIxJuhi8VXfs_MZVkIGAiGmfuYB2p3Qg';
            const URL = 'https://api20.ezbooking.co/admin/api/v1/autocomplete/account?type=combo&form=cashbank&term=idr&Module=salesinvoice&Company=3b27e578-0cd7-11ea-a825-d2118390b116';
                axios.get(URL, {
                    headers : {
                        'Authorization' : `Bearer ${Token}`
                    }
                })
                .then((response) => {
                    this.payment = response.data
                    // console.log(response)   
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>