import axios from 'axios';
<template>
    <div v-if="isModalVisible">
        <div @click="onToggleAdd" class="absolute bg-black opacity-70 inset-0 "></div>
        <div class="w-[40rem] p-5 mx-auto -mt-[47rem] rounded-xl shadow-lg bg-white relative z-30">
            <h2 class="text-[1.5rem] text-center font-semibold">Add Invoice</h2>
            <div>
                <div class="p-5 flex-auto justify-center leading-6">
                    <form @submit.prevent="addInvoice" method="POST" class="my-4">
                        <!-- Section Form Customers -->
                        <h4 class="mt-4 mb-3 text-[1.2rem] font-semibold">Customers</h4>
                        <div class="grid grid-cols-2 gap-x-5 gap-y-1">
                                <div class="mb-3">
                                    <label class="text-[.9rem]">Customer Name</label>
                                    <input type="text" placeholder="Enter your name" name="CustomerName"
                                        class="text-[.9rem] placeholder:text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full mt-2">
                                </div>
                                <div class="mb-3">
                                    <label class="text-[.9rem]">Address</label>
                                    <input type="text" placeholder="Enter your address" name="CustomerName"
                                        class="text-[.9rem] placeholder:text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full mt-2">
                                </div>
                                <div class="mb-3">
                                    <label class="text-[.9rem]">Code</label>
                                    <input type="text" placeholder="Enter your code" name="CustomerName"
                                        class="text-[.9rem] placeholder:text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full mt-2">
                                </div>
                                <div class="mb-3">
                                    <label class="text-[.9rem]">Date</label>
                                    <input type="date" placeholder="Enter your name" name="CustomerName"
                                        class="text-[.9rem] placeholder:text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full mt-2">
                                </div>
                                <div class="mb-3">
                                    <label class="text-[.9rem]">Status</label>
                                    <input type="input" placeholder="Enter your name" name="CustomerName"
                                        class="text-[.9rem] placeholder:text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full mt-2">
                                </div>
                            </div>
                            <div class="w-full h-[.3px] bg-gray-400 my-6"></div>
                            <h4 class="mt-4 mb-3 text-[1.2rem] font-semibold">Business Partner</h4>
                            <div class="grid grid-cols-2 gap-x-5 gap-y-1">
                                <div class="mb-3">
                                    <label class="text-[.9rem]">Business Partner Name</label>
                                    <input type="text" placeholder="Enter your name" name="CustomerName"
                                        class="text-[.9rem] placeholder:text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full mt-2">
                                </div>
                                <div class="mb-3">
                                    <label class="text-[.9rem]">Account Bank Name</label>
                                    <input type="text" placeholder="Enter account bank" name="CustomerName"
                                        class="text-[.9rem] placeholder:text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full mt-2">
                                </div>
                                <div class="mb-3">
                                    <label class="text-[.9rem]">Currency</label>
                                    <input type="text" placeholder="Enter currency" name="CustomerName"
                                        class="text-[.9rem] placeholder:text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full mt-2">
                                </div>
                            </div> 
                    </form>
                </div>
                <div class="p-3 mt-2 text-right space-x-4 md:block">
                    <button @click="onToggleAdd"
                        class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                        Close
                    </button>
                    <button type="submit"
                        class="mb-2 md:mb-0 bg-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-blue-600">
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: {
            onToggleAdd: {
                type: Function,
                required: true
            },
            isOpenAdd: Boolean
        },
        computed: {
            isModalVisible() {
                return this.isOpenAdd;
            }
        },
        // data() {
        //     return {
        //         data : ''
        //     }
        // },
        mounted() {
            this.addInvoice();
        },
        methods: {
            addInvoice(){
                // const data = {
                //     CustomerName : '',
                // }
                const Token =
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUyNWViYzI5MmZjNGMwYjUzMWI2ODMzNGIxMmJhNjIwN2Y4MGMxNmFlMzE3MDM2NDMyYTMzZGY2MDc1MjQ1MzAyNzdiOTBjMmRhNWQwZjYyIn0.eyJhdWQiOiI0IiwianRpIjoiZTI1ZWJjMjkyZmM0YzBiNTMxYjY4MzM0YjEyYmE2MjA3ZjgwYzE2YWUzMTcwMzY0MzJhMzNkZjYwNzUyNDUzMDI3N2I5MGMyZGE1ZDBmNjIiLCJpYXQiOjE2NjU5NzI4ODYsIm5iZiI6MTY2NTk3Mjg4NiwiZXhwIjoxNzI5MTMxMjg2LCJzdWIiOiJiMDg5Nzk3OC01MzgyLTRkNGQtOThjOC0yYjdiZWUyMmQxMDMiLCJzY29wZXMiOltdLCJjb21wIjoiM2IyN2U1NzgtMGNkNy0xMWVhLWE4MjUtZDIxMTgzOTBiMTE2In0.PxxebJlKHkr-M63vMoy-PFz07oSNZ_MnfyNpIb4Jea1a8sUwFcm8LWKY3W_tbOYQbuoYp0ROzzVSzz6U7eV-vvkxMW68SAydzB39OLF-thgX0g1iVr5XuJAQIyaN7cICdMpbWwQrSRLhvkvU3mk4EBCdQMdSSZq8CxmR4-Sb1x_mfjM3cBXxP_05j1xTyqr41Qh1TP58GQZ-UEKTKl1c6_Ucs0NXUmA3TdmByXbVaI84UTaXb1QUM400-jeQW3NAsXu_i_hhXkfMTpHxCJZrQ3YNWAN4tQruxJha7U9qi4VXDI6VZyGKQsP2vD7JQpPHkKRaA_8_MuY6IHOGXqMgNoX0mErd9cdvwRetbuUF_BTywhdaI6-T11t0YdbCSzCQpKvLP3Zjx0M2eF0CllWKiZZl6ZtZk1whUIq1P7rEjfgbo6uMYSNETg4lyG0924xqtXc8pwCOGCW6Ff3aKmc2of8SdpHeDdBeVVwI29ubAgbOzlHce1XkIMJkdd30J72zhKeNomMDCpREbWTsywgcIp9eviekgD7wg_BBWKsuyy_vspQd99aNoF4lXrmmlAut1HJA-539yZNPvag7tWwIO3uMezQ9Yyxq3Sp2kNcMXJMcxUetU2JFxnkeL2weQ9mYx8k5etoqD4hlIxJuhi8VXfs_MZVkIGAiGmfuYB2p3Qg';
                    axios.post('https://api20.ezbooking.co/admin/api/v1/salesinvoice', {}, {      
                        headers: {
                            'Authorization': `Bearer ${Token}`,
                            // 'Content-Type': 'application/json'
                        },
                    })
                    .then((response) => {
                        // console.log(response.data)
                        this.data = response.data.data
                    }).catch((err) => {
                        console.log("Error",err.response.data)
                    });   
            }
            // async addInvoice() {
            //     try {
            //         const response = await axios.post('https://api20.ezbooking.co/admin/api/v1/salesinvoice',{}, {
            //             headers: {
            //                 'Authorization': `Bearer ${Token}`,
            //                 'Content-Type': 'application/json'
            //             },
            //         })
            //         console.log(response.data)

            //     } catch (error) {
            //         console.log(error.response.data)
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>