<template>
  <div class="flex">
    <SideNav/>
    <router-view/>
  </div>
</template>

<script>
import  SideNav  from "../src/NavFot/SideNav.vue";
export default {
  name: 'App',
  components : {
    SideNav
  }
}
</script>


