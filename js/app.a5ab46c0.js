(function(){"use strict";var t={1174:function(t,e,n){var r=n(7195),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("liq-calc"),e("btc-leverage",{staticStyle:{"margin-top":"5rem"}})],1)},o=[],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"h3 mb2"},[t._v("Spot liquidation calculator")]),e("b-input-group",{staticClass:"mb-2",attrs:{prepend:"total liability",append:"USDT"}},[e("b-form-input",{attrs:{type:"number"},model:{value:t.liability,callback:function(e){t.liability=e},expression:"liability"}})],1),t._l(t.inputsCount,(function(n){return e("div",{key:n},[e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v(" ticker (optional) | amount | price ")])]},proxy:!0}],null,!0)},[e("b-form-input",{attrs:{type:"text"}}),e("b-form-input",{attrs:{type:"number"},model:{value:t.amounts[n],callback:function(e){t.$set(t.amounts,n,e)},expression:"amounts[indexItem]"}}),e("b-form-input",{attrs:{type:"number"},model:{value:t.prices[n],callback:function(e){t.$set(t.prices,n,e)},expression:"prices[indexItem]"}}),e("b-input-group-append",[e("b-button",{attrs:{text:"Add",variant:"success"},on:{click:t.addField}},[t._v("+")])],1),e("b-input-group-append",[e("b-button",{attrs:{text:"Remove",variant:"danger"},on:{click:t.removeField}},[t._v("–")])],1)],1)],1)})),e("b-input-group",{staticClass:"mb-2",attrs:{prepend:"min conversion ratio"}},[e("b-form-input",{attrs:{type:"number"},model:{value:t.conversionRatio,callback:function(e){t.conversionRatio=e},expression:"conversionRatio"}})],1),e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v("avg price change")]),e("b-input-group-text",[t._v("0")])]},proxy:!0},{key:"append",fn:function(){return[e("b-input-group-text",[t._v("100%")]),e("b-input-group-text",[t._v(t._s(t.dropRange))])]},proxy:!0}])},[e("b-form-input",{attrs:{type:"range",min:"0",max:"100"},model:{value:t.dropRange,callback:function(e){t.dropRange=e},expression:"dropRange"}})],1),e("b-input-group",{staticClass:"mb-2",attrs:{prepend:"LTV",append:"%"}},[e("b-form-input",{attrs:{value:t.ltvLong,readonly:""}})],1)],2)},s=[],a={name:"LiqCalc",data(){return{conversionRatio:.9,liability:0,dropRange:0,index:0,inputsCount:1,prices:[0],amounts:[0]}},props:{msg:String},methods:{addField(){this.inputsCount++},removeField(){this.inputsCount>0&&this.inputsCount--}},watch:{},computed:{ltvLong(){let t=0;for(let e=1;e<=this.inputsCount;e++){let n=Number(this.pricesChangedLong[e]),r=Number(this.amounts[e]);n&&r&&(t+=n*r)}return t?(Number(this.liability)/(t*Number(this.conversionRatio))*100).toFixed(2):0},ltvShort(){let t=0;for(let e=1;e<=this.inputsCount;e++){let n=Number(this.pricesChangedShort[e]),r=Number(this.amounts[e]);n&&r&&(t+=n*r)}return t?(Number(this.liability)/(t*Number(this.conversionRatio))*100).toFixed(2):0},pricesChangedLong(){if(0==this.dropRange)return this.prices;let t=[];for(let e=1;e<=this.inputsCount;e++){let n=Number(this.prices[e]);t[e]=n+n*this.dropRange/100}return t},pricesChangedShort(){if(0==this.dropRange)return this.prices;let t=[];for(let e=1;e<=this.inputsCount;e++){let n=Number(this.prices[e]);t[e]=n-n*this.dropRange/100}return t}}},p=a,l=n(1001),c=(0,l.Z)(p,u,s,!1,null,null,null),b=c.exports,d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"h3 mb2"},[t._v("BTC Leverage")]),e("b-input-group",{staticClass:"mb-2",attrs:{prepend:"USDT liability",append:"USDT"}},[e("b-form-input",{attrs:{type:"number"},model:{value:t.otherLiability,callback:function(e){t.otherLiability=e},expression:"otherLiability"}})],1),e("b-input-group",{staticClass:"mb-2",attrs:{prepend:"BTC liability",append:"USDT"}},[e("b-form-input",{attrs:{type:"number",readonly:"",value:t.BTCDebtamount*t.BTCprice}})],1),t._l(t.inputsCount,(function(n){return e("div",{key:n},[e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v(" ticker (optional) | amount | price ")])]},proxy:!0}],null,!0)},[e("b-form-input",{attrs:{type:"text"}}),e("b-form-input",{attrs:{type:"number"},model:{value:t.amounts[n],callback:function(e){t.$set(t.amounts,n,e)},expression:"amounts[indexItem]"}}),e("b-form-input",{attrs:{type:"number"},model:{value:t.prices[n],callback:function(e){t.$set(t.prices,n,e)},expression:"prices[indexItem]"}}),e("b-input-group-append",[e("b-button",{attrs:{text:"Add",variant:"success"},on:{click:t.addField}},[t._v("+")])],1),e("b-input-group-append",[e("b-button",{attrs:{text:"Remove",variant:"danger"},on:{click:t.removeField}},[t._v("–")])],1)],1)],1)})),e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v(" ticker (optional) | BTC Debt | price ")])]},proxy:!0}])},[e("b-form-input",{attrs:{type:"text",value:"BTC",readonly:""}}),e("b-form-input",{attrs:{type:"number"},model:{value:t.BTCDebtamount,callback:function(e){t.BTCDebtamount=e},expression:"BTCDebtamount"}}),e("b-form-input",{attrs:{type:"number"},model:{value:t.BTCprice,callback:function(e){t.BTCprice=e},expression:"BTCprice"}})],1),e("b-input-group",{staticClass:"mb-2",attrs:{prepend:"min conversion ratio"}},[e("b-form-input",{attrs:{type:"number"},model:{value:t.conversionRatio,callback:function(e){t.conversionRatio=e},expression:"conversionRatio"}})],1),e("b-input-group",{staticClass:"mb-2",scopedSlots:t._u([{key:"prepend",fn:function(){return[e("b-input-group-text",[t._v("alts price change")]),e("b-input-group-text",[t._v("0")])]},proxy:!0},{key:"append",fn:function(){return[e("b-input-group-text",[t._v("100%")]),e("b-input-group-text",[t._v(t._s(t.dropRange))])]},proxy:!0}])},[e("b-form-input",{attrs:{type:"range",min:"0",max:"100"},model:{value:t.dropRange,callback:function(e){t.dropRange=e},expression:"dropRange"}})],1),e("b-input-group",{staticClass:"mb-2",attrs:{prepend:"LTV",append:"%"}},[e("b-form-input",{attrs:{value:t.ltvLong,readonly:""}})],1)],2)},m=[],f={name:"BtcLeverage",data(){return{conversionRatio:.9,dropRange:0,dropRangeBTC:0,index:0,inputsCount:1,prices:[0],amounts:[0],BTCDebtamount:0,otherLiability:0,BTCprice:0}},methods:{addField(){this.inputsCount++},removeField(){this.inputsCount>0&&this.inputsCount--}},watch:{dropRange(t,e){for(let n=1;n<=this.inputsCount;n++)if(this.prices[n]){let r=Number(this.prices[n]);console.log(t,e);let i=(t-e)/100;console.log(i,r)}}},computed:{ltvLong(){let t=0;for(let n=1;n<=this.inputsCount;n++){let e=Number(this.pricesChangedLong[n]),r=Number(this.amounts[n]);e&&r&&(t+=e*r)}const e=Number(this.otherLiability)+Number(this.BTCprice*this.BTCDebtamount);return t?(Number(e)/(t*Number(this.conversionRatio))*100).toFixed(2):0},ltvShort(){let t=0;for(let n=1;n<=this.inputsCount;n++){let e=Number(this.pricesChangedShort[n]),r=Number(this.amounts[n]);e&&r&&(t+=e*r)}const e=Number(this.otherLiability)+Number(this.BTCliabilityShort);return t?(Number(e)/(t*Number(this.conversionRatio))*100).toFixed(2):0},pricesChangedLong(){if(0==this.dropRange)return this.prices;let t=[];for(let e=1;e<=this.inputsCount;e++){let n=Number(this.prices[e]);t[e]=n+n*this.dropRange/100}return t},pricesChangedShort(){if(0==this.dropRange)return this.prices;let t=[];for(let e=1;e<=this.inputsCount;e++){let n=Number(this.prices[e]);t[e]=n-n*this.dropRange/100}return t}}},v=f,h=(0,l.Z)(v,d,m,!1,null,null,null),g=h.exports,y={name:"App",components:{LiqCalc:b,BtcLeverage:g}},C=y,x=(0,l.Z)(C,i,o,!1,null,null,null),_=x.exports,R=n(8315);n(7024);r["default"].use(R.XG7),r["default"].config.productionTip=!1,new r["default"]({render:t=>t(_)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var s=!0,a=0;a<r.length;a++)(!1&o||u>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(s=!1,o<u&&(u=o));if(s){t.splice(l--,1);var p=i();void 0!==p&&(e=p)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,u=r[0],s=r[1],a=r[2],p=0;if(u.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(a)var l=a(n)}for(e&&e(r);p<u.length;p++)o=u[p],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkliqcalc"]=self["webpackChunkliqcalc"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1174)}));r=n.O(r)})();
//# sourceMappingURL=app.a5ab46c0.js.map