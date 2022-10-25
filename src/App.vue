<template>
  <div class="flex">
    <Nav-view/>
    <router-view/>
  </div>
</template>

<script>
import  NavView  from "./NavFot/NavView.vue";
export default {
  name: 'App',
  components : {
    NavView
  }
}
</script>


