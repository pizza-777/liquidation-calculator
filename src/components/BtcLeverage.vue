<template>
  <div class="container">
    <div class="h3 mb2">BTC Leverage</div>
    <b-input-group prepend="USDT liability" append="USDT" class="mb-2">
      <b-form-input type="number" v-model="otherLiability"></b-form-input>
    </b-input-group>
    <b-input-group prepend="BTC liability" append="USDT" class="mb-2">
      <b-form-input type="number" readonly :value="BTCDebtamount * BTCprice"></b-form-input>
      <!-- <b-form-input type="number" readonly v-model="BTCliabilityShort"></b-form-input> -->
    </b-input-group>

    <div v-for="indexItem in inputsCount" :key="indexItem">
      <b-input-group class="mb-2">
        <template #prepend>
          <b-input-group-text> ticker (optional) | amount | price | USDT | ↑ | ↓ </b-input-group-text>
        </template>
        <b-form-input type="text"></b-form-input>
        <b-form-input v-model="amounts[indexItem]" type="number"></b-form-input>
        <b-form-input v-model="prices[indexItem]" type="number"></b-form-input>
        <b-form-input v-model="pricesChangedLong[indexItem]" type="number" readonly></b-form-input>
        <b-form-input v-model="pricesChangedShort[indexItem]" type="number" readonly></b-form-input>
        <b-form-input :value="amounts[indexItem] * prices[indexItem]" type="number" readonly></b-form-input>
        <b-input-group-append>
          <b-button @click="addField" text="Add" variant="success">+</b-button>
        </b-input-group-append>
        <b-input-group-append>
          <b-button @click="removeField" text="Remove" variant="danger">–</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>

    <b-input-group class="mb-2">

      <template #prepend>
        <b-input-group-text> ticker (optional) | BTC Debt | price </b-input-group-text>
      </template>
      <b-form-input type="text" value="BTC"></b-form-input>
      <b-form-input v-model="BTCDebtamount" type="number"></b-form-input>
      <b-form-input v-model="BTCprice" type="number"></b-form-input>

    </b-input-group>

    <b-input-group prepend="min conversion ratio" class="mb-2">
      <b-form-input v-model="conversionRatio" type="number"></b-form-input>
    </b-input-group>
    <b-input-group class="mb-2">

      <template #prepend>
        <b-input-group-text>alts price change</b-input-group-text>
        <b-input-group-text>0</b-input-group-text>
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

  </div>
</template>

<script>

export default {

  name: 'BtcLeverage',
  data() {
    return {
      conversionRatio: 0.9,
      dropRange: 0,
      dropRangeBTC: 0,
      index: 0,
      inputsCount: 1,
      prices: [0],
      amounts: [0],
      BTCDebtamount: 0,
      otherLiability: 0,
      BTCprice: 0
    }
  },
  methods: {
    addField() {
      this.inputsCount++
    },
    removeField() {
      if (this.inputsCount > 0)
        this.inputsCount--
    }
  },
  watch: {
    dropRange(n, o) {

      for (let i = 1; i <= this.inputsCount; i++) {

        if (this.prices[i]) {
          let p = Number(this.prices[i])
          console.log(n, o)
          let initial = (n - o) / 100;
          console.log(initial, p)
        }
      }
    }
  },
  computed: {
    ltvLong() {
      let marginBalance = 0;
      for (let i = 1; i <= this.inputsCount; i++) {
        let p = Number(this.pricesChangedLong[i]);
        let a = Number(this.amounts[i]);

        if (p && a) marginBalance += p * a;
      }
      const liability = Number(this.otherLiability) + Number(this.BTCprice * this.BTCDebtamount)
      marginBalance += liability
      return marginBalance ? ((Number(liability) / (marginBalance * Number(this.conversionRatio))) * 100).toFixed(2) : 0;
    },
    ltvShort() {
      let marginBalance = 0;
      for (let i = 1; i <= this.inputsCount; i++) {
        let p = Number(this.pricesChangedShort[i]);
        let a = Number(this.amounts[i]);

        if (p && a) marginBalance += p * a;
      }
      const liability = Number(this.otherLiability) + Number(this.BTCliabilityShort)
      return marginBalance ? ((Number(liability) / (marginBalance * Number(this.conversionRatio))) * 100).toFixed(2) : 0;
    },
    pricesChangedLong() {
      if (this.dropRange == 0) {
        return this.prices
      }
      let changes = []
      for (let i = 1; i <= this.inputsCount; i++) {
        let p = Number(this.prices[i]);
        changes[i] = p + p * this.dropRange / 100
      }
      return changes
    },
    pricesChangedShort() {
      if (this.dropRange == 0) {
        return this.prices
      }
      let changes = []
      for (let i = 1; i <= this.inputsCount; i++) {
        let p = Number(this.prices[i]);
        changes[i] = p - p * this.dropRange / 100
      }
      return changes
    }
  }
}
</script>
