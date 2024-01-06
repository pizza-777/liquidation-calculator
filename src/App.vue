<template>
  <div id="app">
    <LiqCalc msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import LiqCalc from './components/LiqCalc.vue'

export default {
  name: 'App',
  components: {
    LiqCalc
  }
}
</script>

<style>
#app {
  font-family: 'Economica', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
