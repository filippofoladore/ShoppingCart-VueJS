(function(t){function e(e){for(var n,c,o=e[0],l=e[1],s=e[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Checkout")],1)},i=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"title"},[t._v("CARRELLO")]),r("ul",{staticClass:"article"},t._l(t.order.articles,(function(e){return r("li",{key:e.article_id},[r("Articles",{attrs:{article:e},on:{modified:t.edit}})],1)})),0),r("div",{staticClass:"pay-div"},[t._v(" Totale ordine: "),r("span",{attrs:{id:"total-cart"}},[t._v(" "+t._s(t.totalCart))]),t._v("€ "),r("div",{staticClass:"break"}),r("button",{staticClass:"pay",attrs:{id:"pay-now"},on:{click:t.payNow}},[t._v("💸 PAGA ORA")]),r("div",{staticClass:"break"}),r("div",{attrs:{id:"thank-you"}}),r("div",[r("button",{attrs:{id:"back-home"},on:{click:t.backHome}},[t._v("🧭 Torna alla home")])])])])},o=[],l=(r("c740"),r("fb6a"),r("b0c0"),r("96cf"),r("1da1")),s=(r("d3b7"),r("d4ec")),u=r("bee2"),d=r("bc3a"),f=r.n(d),p=function(){function t(){Object(s["a"])(this,t)}return Object(u["a"])(t,null,[{key:"getOrder",value:function(t){return new Promise(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(r,n){var a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a="orders/detail"+"/".concat(t),e.next=4,f.a.get(a);case 4:i=e.sent,c=i.data,r(c),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}())}},{key:"getArticleDetail",value:function(t){return new Promise(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(r,n){var a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a="orders/article"+"/".concat(t),e.next=4,f.a.get(a);case 4:i=e.sent,c=i.data,r(c),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}())}},{key:"complete",value:function(t){return new Promise(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(r,n){var a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a="orders/complete",e.next=4,f.a.post(a,t);case 4:i=e.sent,c=i.data,r(c),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}())}}]),t}(),h=p,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v(t._s(t._f("capitalizeFirst")(t.detail.name))+" - "+t._s(t.detail.price)+"€")]),r("p",[t._v(" Quantità: "+t._s(t.article.qty)+"/"+t._s(t.detail.available_quantity))]),r("button",{staticClass:"btn",on:{click:t.addOne}},[t._v("➕")]),r("button",{staticClass:"btn",on:{click:t.removeOne}},[t._v("➖")]),r("p",[t._v("Subtotale articolo: €"+t._s(t.detail.price*t.article.qty))])])},m=[],b=(r("25f0"),{name:"Articles",props:{article:Object},data:function(){return{detail:[]}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.getArticleDetail(t.article.article_id);case 3:t.detail=e.sent,t.$emit("modified",t.detail.price*t.article.qty,t.detail.price,t.article.qty,"",t.detail.name,t.article.article_id),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{addOne:function(){this.article.qty+1<=this.detail.available_quantity&&(this.article.qty+=1,this.$emit("modified",this.detail.price*this.article.qty,this.detail.price,this.article.qty,"add",this.detail.name,this.article.article_id))},removeOne:function(){this.article.qty-1!=0&&(this.article.qty-=1,this.$emit("modified",this.detail.price*this.article.qty,this.detail.price,this.article.qty,"subtract",this.detail.name,this.article.article_id))}},filters:{capitalizeFirst:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}}}),y=b,O=(r("ce1b"),r("2877")),g=Object(O["a"])(y,v,m,!1,null,"28ea7485",null),w=g.exports,_={name:"Checkout",components:{Articles:w},data:function(){return{user:"5e4fde5d21146d12587ffd98",order:{},totalCart:0,finalOrder:[]}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.getOrder("5e4fde5d21146d12587ffd98");case 2:t.order=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{edit:function(t,e,r,n,a,i){if("add"===n){if(1!=r){this.totalCart=this.totalCart+t-e*(r-1);var c={id:i,name:a,price:e,quantity:r,tot:t},o=this.finalOrder.findIndex((function(t){return t.id===c.id}));-1===o?this.finalOrder.push(c):this.finalOrder[o]=c}}else if("subtract"===n)if(1!=r){this.totalCart=this.totalCart-t+e*(r-1);var l={id:i,name:a,price:e,quantity:r,tot:t},s=this.finalOrder.findIndex((function(t){return t.id===l.id}));-1===s?this.finalOrder.push(l):this.finalOrder[s]=l}else{this.totalCart-=t;var u={id:i,name:a,price:e,quantity:r,tot:t},d=this.finalOrder.findIndex((function(t){return t.id===u.id}));-1===d?this.finalOrder.push(u):this.finalOrder[d]=u}else{this.totalCart+=t;var f={id:i,name:a,price:e,quantity:r,tot:t},p=this.finalOrder.findIndex((function(t){return t.id===f.id}));-1===p?this.finalOrder.push(f):this.finalOrder[p]=f}},payNow:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(document.getElementById("pay-now").disabled=!0,r='Grazie per l\'acquisto! <div class="break"></div>',n=0;n<t.finalOrder.length;n++)a=t.finalOrder[n].name.charAt(0).toUpperCase()+t.finalOrder[n].name.slice(1),r+=a+": €"+t.finalOrder[n].tot+'<div class="break"></div>';return r+="Per un totale di €".concat(t.totalCart),document.getElementById("pay-now").innerHTML="",document.getElementById("pay-now").classList.add("loading"),i={id:t.user,order:t.finalOrder},e.next=9,h.complete(i);case 9:document.getElementById("thank-you").style.display="block",document.getElementById("thank-you").innerHTML=r,document.getElementById("pay-now").classList.remove("loading"),document.getElementById("pay-now").innerHTML="🎉 Grazie!",document.getElementById("back-home").style.display="block";case 14:case"end":return e.stop()}}),e)})))()},backHome:function(){window.location.href="http://localhost:8080"}}},k=_,x=(r("c0d2"),Object(O["a"])(k,c,o,!1,null,"0ebb9007",null)),C=x.exports,j={name:"App",components:{Checkout:C}},q=j,R=(r("034f"),Object(O["a"])(q,a,i,!1,null,null,null)),A=R.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(A)}}).$mount("#app")},"6b3f":function(t,e,r){},"85ec":function(t,e,r){},b970:function(t,e,r){},c0d2:function(t,e,r){"use strict";var n=r("b970"),a=r.n(n);a.a},ce1b:function(t,e,r){"use strict";var n=r("6b3f"),a=r.n(n);a.a}});
//# sourceMappingURL=app.71baf910.js.map