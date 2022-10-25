<template>
  <div class="pt-10 px-20">
    <h1 class="text-[2rem]">
      List Order
    </h1>
    
    <TableOrder :onToggleEdit="onToggleEdit" :onToggleAdd="onToggleAdd"/>
    <AddOrder :onToggleAdd="onToggleAdd" :isOpenAdd="isOpenAdd" />
    <EditOrder :onToggleEdit="onToggleEdit" :isOpenEdit="isOpenEdit" />
  </div>
</template>

<script>
  import TableOrder from './TableOrder.vue'
  import AddOrder from './AddOrder.vue'
  import EditOrder from './EditOrder.vue'
  export default {
    components: {
      TableOrder,
      AddOrder,
      EditOrder
    },
    data() {
      return {
        isOpenAdd: false,
        isOpenEdit: false,
      }
    },
    // computed : {
    //     isModalVisible (){
    //         return this.isOpen;
    //     }
    // },
    methods: {
      onToggleAdd() {
        this.isOpenAdd = !this.isOpenAdd;
      },
      onToggleEdit() {
        this.isOpenEdit = !this.isOpenEdit;
      }
    },

  }
</script>
