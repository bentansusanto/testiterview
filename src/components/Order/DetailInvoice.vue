<template>
    <div class="bg-[#fafafa] w-[40rem] py-5 h-[30rem] mt-10 shadow-lg">
            <div class="px-5 py-2">
                <h4 class="text-[1rem] font-medium">Status : {{item.StatusName}}</h4>
            </div>
            <div class="mx-10 mt-5">
                <div>
                    <h4> Invoice : <span class="text-[1.3rem] font-semibold">{{item.Code}}</span></h4>
                    <p class="pt-3 text-[.8rem] text-[#a4a4a4]"> Code Ref : <span
                            class="text-[.9rem] font-medium text-[#000]">{{item.CodeReff}}</span>
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-5 mt-5">
                    <div>
                        <div class="space-y-2">
                            <h5 class="text-[.8rem] mt-2 text-[#a4a4a4] font-normal">Invoice Code</h5>
                            <p>{{item.Code}}</p>
                        </div>
                        <div class="space-y-2">
                            <h5 class="text-[.8rem] mt-4 text-[#a4a4a4] font-normal">Invoice Date</h5>
                            <p>{{item.Date}}</p>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <h4 class="text-[1.1rem] font-semibold">{{item.BusinessPartnerName}}</h4>
                        <h4 class="text-[1.2rem] font-semibold">{{item.Address}}</h4>
                        <h4 class="text-[.9rem] text-[#a4a4a4]">{{item.AccountCashBankName}}</h4>
                    </div>
                </div>
                <div class="w-auto h-[.3px] bg-gray-400 my-6"></div>
                <div class="grid grid-cols-3 gap-x-10">
                    <div>
                        <div class="space-y-2">
                            <h5 class="text-[.8rem] mt-2 text-[#a4a4a4] font-normal">Customer Name</h5>
                            <p>{{item.CustomerName}}</p>
                        </div>
                    </div>
                    <div>
                        <div class="space-y-2">
                            <h5 class="text-[.8rem] mt-2 text-[#a4a4a4] font-normal">Total Amount</h5>
                            <p>{{item.CurrencySymbol}} {{item.TotalAmount}}</p>
                        </div>
                        <div class="space-y-2">
                            <h5 class="text-[.8rem] mt-2 text-[#a4a4a4] font-normal">Tax Amount</h5>
                            <p>{{item.TaxAmount}}</p>
                        </div>
                    </div>
                    <div>
                        <div class="space-y-2">
                            <h5 class="text-[.8rem] mt-2 text-[#a4a4a4] font-normal">Balance Due</h5>
                            <p class="text-[1.2rem]">{{item.CurrencySymbol}} {{item.SubtotalAmount}}</p>
                        </div>
                        <div class="space-y-2">
                            <h5 class="text-[.8rem] mt-2 text-[#a4a4a4] font-normal">Due Date</h5>
                            <p class="">{{item.DueDate}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props : {
            item :Object
        }
    }
</script>
