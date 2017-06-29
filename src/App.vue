<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-3"><NavigatorBar/></div>
      <div class="col-md-9"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import NavigatorBar from './components/NavigatorBar.vue'
export default {
  name: 'app',
  components: {
    NavigatorBar
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
