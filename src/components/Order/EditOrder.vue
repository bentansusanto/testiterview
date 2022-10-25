<template>
    <div v-if="isModalVisible">
        <div @click="onToggleEdit" class="absolute bg-black opacity-70 inset-0 z-0"></div>
        <div class="w-[40rem] p-5 mx-auto -mt-[47rem] rounded-xl shadow-lg bg-white relative z-20">
            <h2 class="text-[1.5rem] text-center font-semibold">Edit Invoice</h2>
            <div>
                <div class="p-5 flex-auto justify-center leading-6">
                    <form action="/" method="POST" class="my-4">
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
                    <button @click="onToggleEdit"
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
    export default {
        props: {
            onToggleEdit: {
                type: Function,
                required: true
            },
            isOpenEdit: Boolean
        },
        computed: {
            isModalVisible() {
                return this.isOpenEdit;
            }
        },
    }
</script>
