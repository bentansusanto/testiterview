<template>
    <div class="pt-10 px-20">
        <ol class="text-[#a4a4a4] flex">
            <li>
                <router-link to="/orders">Order</router-link> /
            </li>
            <li class="text-[#000] font-semibold">
                <router-link to="/orders/Oid" class="px-2">Order Detail</router-link> 
            </li>
        </ol>
        <h1 class="text-[2rem] mt-5">
            Detail Invoice
        </h1>
        <div class="flex space-x-8">
            <DetailInvoice :item="item"/>
            <DetailTravel :product="item"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import DetailInvoice  from "./DetailInvoice.vue";
    import DetailTravel from './DetailTravel.vue';
    export default {
        components : {
            DetailInvoice,
            DetailTravel
        },
        data() {
            return {
                item:[]
            }
        },
        mounted() {
            this.detaiOrder();
        },
        methods: {
            detaiOrder() {
                const Token =
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUyNWViYzI5MmZjNGMwYjUzMWI2ODMzNGIxMmJhNjIwN2Y4MGMxNmFlMzE3MDM2NDMyYTMzZGY2MDc1MjQ1MzAyNzdiOTBjMmRhNWQwZjYyIn0.eyJhdWQiOiI0IiwianRpIjoiZTI1ZWJjMjkyZmM0YzBiNTMxYjY4MzM0YjEyYmE2MjA3ZjgwYzE2YWUzMTcwMzY0MzJhMzNkZjYwNzUyNDUzMDI3N2I5MGMyZGE1ZDBmNjIiLCJpYXQiOjE2NjU5NzI4ODYsIm5iZiI6MTY2NTk3Mjg4NiwiZXhwIjoxNzI5MTMxMjg2LCJzdWIiOiJiMDg5Nzk3OC01MzgyLTRkNGQtOThjOC0yYjdiZWUyMmQxMDMiLCJzY29wZXMiOltdLCJjb21wIjoiM2IyN2U1NzgtMGNkNy0xMWVhLWE4MjUtZDIxMTgzOTBiMTE2In0.PxxebJlKHkr-M63vMoy-PFz07oSNZ_MnfyNpIb4Jea1a8sUwFcm8LWKY3W_tbOYQbuoYp0ROzzVSzz6U7eV-vvkxMW68SAydzB39OLF-thgX0g1iVr5XuJAQIyaN7cICdMpbWwQrSRLhvkvU3mk4EBCdQMdSSZq8CxmR4-Sb1x_mfjM3cBXxP_05j1xTyqr41Qh1TP58GQZ-UEKTKl1c6_Ucs0NXUmA3TdmByXbVaI84UTaXb1QUM400-jeQW3NAsXu_i_hhXkfMTpHxCJZrQ3YNWAN4tQruxJha7U9qi4VXDI6VZyGKQsP2vD7JQpPHkKRaA_8_MuY6IHOGXqMgNoX0mErd9cdvwRetbuUF_BTywhdaI6-T11t0YdbCSzCQpKvLP3Zjx0M2eF0CllWKiZZl6ZtZk1whUIq1P7rEjfgbo6uMYSNETg4lyG0924xqtXc8pwCOGCW6Ff3aKmc2of8SdpHeDdBeVVwI29ubAgbOzlHce1XkIMJkdd30J72zhKeNomMDCpREbWTsywgcIp9eviekgD7wg_BBWKsuyy_vspQd99aNoF4lXrmmlAut1HJA-539yZNPvag7tWwIO3uMezQ9Yyxq3Sp2kNcMXJMcxUetU2JFxnkeL2weQ9mYx8k5etoqD4hlIxJuhi8VXfs_MZVkIGAiGmfuYB2p3Qg';
                axios.get(`https://api20.ezbooking.co/admin/api/v1/salesinvoice/${this.$route.params.Oid}?field=form`, {
                        headers: {
                            'Authorization': `Bearer ${Token}`
                        }
                    })
                    .then((response) => {
                        this.item = response.data;
                        console.log(response.data)
                    }).catch((err) => {
                        console.log("ERR", err.response.data)
                    });
            }
        }
    }
</script>