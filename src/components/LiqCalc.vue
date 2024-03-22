<template>
  <div class="container">
    <div class="h3 mb2">Spot liquidation calculator</div>
    <b-input-group prepend="total liability" append="USDT" class="mb-2">
          <b-form-input type="number" v-model="liability"></b-form-input>
        </b-input-group>

      <div v-for="indexItem in inputsCount" :key="indexItem">   
        <b-input-group class="mb-2">  
          <template #prepend>
            <b-input-group-text > ticker (optional) | amount | price </b-input-group-text>
          </template>             
          <b-form-input type="text"></b-form-input>
          <b-form-input v-model="amounts[indexItem]" type="number"></b-form-input>
          <b-form-input v-model="prices[indexItem]" type="number"></b-form-input> 
          <!-- <b-form-input v-model="pricesChangedLong[indexItem]" type="number" readonly></b-form-input> 
          <b-form-input v-model="pricesChangedShort[indexItem]" type="number" readonly></b-form-input>  -->
          <b-input-group-append>
            <b-button @click="addField" text="Add" variant="success">+</b-button>
          </b-input-group-append>
          <b-input-group-append>
            <b-button @click="removeField" text="Remove" variant="danger">–</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
 
      <b-input-group prepend="min conversion ratio" class="mb-2">
        <b-form-input  v-model="conversionRatio" type="number"></b-form-input>        
      </b-input-group>
    <b-input-group class="mb-2">
      <template #prepend>
        <b-input-group-text >avg price change</b-input-group-text> 
        <b-input-group-text >0</b-input-group-text>
      </template>
      <template #append>
        <b-input-group-text>100%</b-input-group-text> 
        <b-input-group-text>{{ dropRange }}</b-input-group-text>
      </template>
      <b-form-input type="range" v-model="dropRange" min="0" max="100"></b-form-input>
    </b-input-group>
    <b-input-group prepend="LTV" append="%" class="mb-2">
      <b-form-input :value="ltvLong" readonly></b-form-input>
    </b-input-group>
    <!-- <b-input-group prepend="LTV Short" append="%" class="mb-2">
      <b-form-input :value="ltvShort" readonly></b-form-input>
    </b-input-group> -->
  </div>
</template>

<script>
//import BigNumber from 'bignumber.js'
export default {
  name: 'LiqCalc',
  data() {
    return {     
      conversionRatio: 0.9,
      liability: 0,
      dropRange: 0,
      index: 0,
      inputsCount: 1,
      prices: [0],      
      amounts: [0]
    }
  },
  props: {
    msg: String
  },
  methods: {
    addField() {
     this.inputsCount++
    },
    removeField() {
      if(this.inputsCount > 0)
      this.inputsCount--
    }
  },
  watch: {
    // dropRange(n, o) {      
     
    //   for (let i = 1; i <= this.inputsCount; i++){
       
    //     if (this.prices[i]) {
    //       let p = Number(this.prices[i])
    //      // console.log(n, o)
    //       let initial = (n - o) / 100;
    //      // console.log(initial, p)
    //     } 
    //   }
    // }
  },
  computed: {
    ltvLong() {
      let marginBalance = 0;
      for (let i = 1; i <= this.inputsCount; i++){
        let p = Number(this.pricesChangedLong[i]);
        let a = Number(this.amounts[i]);
        
        if (p && a) marginBalance += p * a;        
      }      
      return marginBalance ? ((Number(this.liability) / (marginBalance*Number(this.conversionRatio)))*100).toFixed(2) : 0;
    },
    ltvShort() {
      let marginBalance = 0;
      for (let i = 1; i <= this.inputsCount; i++){
        let p = Number(this.pricesChangedShort[i]);
        let a = Number(this.amounts[i]);
        
        if (p && a) marginBalance += p * a;        
      }
      
      return marginBalance ? ((Number(this.liability) / (marginBalance*Number(this.conversionRatio)))*100).toFixed(2) : 0;
    },
    pricesChangedLong() {
      if (this.dropRange == 0) {
        return this.prices
      }
      let changes = []
      for (let i = 1; i <= this.inputsCount; i++){
        let p = Number(this.prices[i]);
        changes[i] = p +  p * this.dropRange/100
      }
      return changes
    },
    pricesChangedShort() {
      if (this.dropRange == 0) {
        return this.prices
      }
      let changes = []
      for (let i = 1; i <= this.inputsCount; i++){
        let p = Number(this.prices[i]);
        changes[i] = p -  p * this.dropRange/100
      }
      return changes
    }
  }
}
</script>

