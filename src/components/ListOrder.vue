<template>
    <div class="pt-10 px-20">
        <h1 class="text-[2rem]">
            List Order
        </h1>
        <button class="bg-blue-600 py-2 px-5 rounded-md mt-10 text-white text-[.9rem]" @click="onToggle">Add Order</button>
        <TableOrder :onToggle="onToggle"/>  
        <!-- Form Order -->
        <div v-if="isModalVisible">
        <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-0"></div>
        <div
          class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
            <h2 class="text-[1.5rem] text-center font-semibold">Form Data</h2>
          <div>
            <div class="p-5 flex-auto justify-center leading-6">
              <form action="/" method="POST" class="my-4">
                <div class="mb-3">
                    <input type="text" placeholder="Enter your name" name="name" class="text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full">
                </div>
                <div class="mb-3">
                    <input type="text" placeholder="Enter your name" name="name" class="text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full">
                </div>
                <div class="mb-3">
                    <input type="text" placeholder="Enter your name" name="name" class="text-[.9rem] bg-gray-200 py-2 px-3 outline-none rounded-sm w-full">
                </div>
              </form>
            </div>
            <div class="p-3 mt-2 text-right space-x-4 md:block">
              <button @click="onToggle"
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
              >
                Close
              </button>
              <button type="submit" 
                class="mb-2 md:mb-0 bg-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-blue-600"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>

<script>
    import TableOrder from '../components/TableOrder.vue'
    export default {
        components: {      
            TableOrder
        },

        data(){
            return {
                isOpen : false,
            }
        },

        computed : {
            isModalVisible (){
                return this.isOpen;
            }
        },
        methods :{
            onToggle(){
                this.isOpen = !this.isOpen;
            }
        },
       
    }
</script>

<style scoped>

</style>