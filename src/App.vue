<template>
  <div id="app">
    <liq-calc/>
    <btc-leverage style="margin-top: 5rem"/>
  </div>
</template>

<script>
import LiqCalc from './components/LiqCalc.vue'
import BtcLeverage from "./components/BtcLeverage.vue"
export default {
  name: 'App',
  components: {
    LiqCalc,
    BtcLeverage
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
