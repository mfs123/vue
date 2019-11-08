<template>
  <div>
   
    首页
      <left>

      </left>

        <router-view></router-view>
   
  </div>
</template>
<script>
import left from './components/left.vue'


export default {
  components: {
    left,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
