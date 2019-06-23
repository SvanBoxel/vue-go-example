(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)s=o[d],a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"119a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("a026"),a=n("28dd"),i=(n("5df3"),n("1c4c"),n("2f62"));r["a"].use(i["a"]);var s=new i["a"].Store({state:{data:[]},mutations:{SET_DATA:function(t,e){var n=e.points,r=e.multiplier;t.data=Array.from({length:n},function(){return Math.floor(Math.random()*r/Math.random())})}}}),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u={name:"app"},l=u,d=n("2877"),p=Object(d["a"])(l,o,c,!1,null,null,null),f=p.exports,h=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("specs"),n("chart",{staticStyle:{"margin-top":"1.75rem"}}),n("descriptive",{staticStyle:{"margin-top":"1.75rem"}}),n("distribution",{staticStyle:{"margin-top":"1.75rem"}}),n("a",{attrs:{href:"https://github.com/ndabAP/vue-go-example"}},[t._v("Source code")])],1)},v=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Specs")]),n("p",[t._v("These computations are done on a host with the following specs.")]),n("table",[t._m(0),n("tbody",[n("tr",[n("td",[t._v("OS")]),n("td",[t._v(t._s(t.os))])]),n("tr",[n("td",[t._v("CPUs")]),n("td",[t._v(t._s(t.cpus))])]),n("tr",[n("td",[t._v("Memory")]),n("td",[t._v(t._s(t.memory))])])])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Spec")]),n("th",[t._v("Value")])])])}],_=n("768b"),y=(n("96cf"),n("3b8d")),w={data:function(){return{os:"",cpus:0,memory:0}},created:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/api/specs");case 2:e=t.sent,n=Object(_["a"])(e.body,3),r=n[0],a=n[1],i=n[2],this.os=r,this.cpus=a,this.memory=i;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},x=w,C=Object(d["a"])(x,g,b,!1,null,null,null),j=C.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Data")]),t._m(0),n("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"data"}}),n("div",{staticClass:"grid -right"},[n("div",{staticClass:"cell -4of12"},[n("fieldset",{staticClass:"form-group"},[n("label",{attrs:{for:"dataPoints"}},[t._v("Points:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.points,expression:"points"}],staticClass:"form-control",attrs:{id:"dataPoints",type:"text",placeholder:"Enter a number"},domProps:{value:t.points},on:{input:function(e){e.target.composing||(t.points=e.target.value)}}})])]),n("div",{staticClass:"cell -4of12"},[n("fieldset",{staticClass:"form-group"},[n("label",{attrs:{for:"dataPoints"}},[t._v("Multiplier:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.multiplier,expression:"multiplier"}],staticClass:"form-control",attrs:{id:"dataPoints",type:"text",placeholder:"Enter a number"},domProps:{value:t.multiplier},on:{input:function(e){e.target.composing||(t.multiplier=e.target.value)}}})])]),n("div",{staticClass:"cell -4of12",staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[n("button",{staticClass:"btn btn-default",on:{click:t.persistAndVisualize}},[t._v("\n          Generate "),t.isLoading?n("span",{staticClass:"loading"}):t._e()])])])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Let's generate some random data. Points represent the quantity of data points and multiplier is some kind of\n    capacity. "),n("b",[t._v("Warning")]),t._v(": Remember that your browser might crash if you generate too many points!")])}],P={data:function(){return{isLoading:!1,points:100,multiplier:10,chart:new Contour({el:"#data",line:{smooth:!0,marker:{enable:!1}}})}},mounted:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.persistAndVisualize();case 2:window.addEventListener("resize",this.renderChart);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{data:{get:function(){return this.$store.state.data}}},methods:{persistAndVisualize:function(){var t=this;return new Promise(function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.chart.cartesian().line(),t.$store.commit("SET_DATA",{points:t.points,multiplier:t.multiplier}),e.next=5,t.$http.post("/api/persist",{data:t.$store.state.data});case 5:t.chart.setData(t.data).render(),t.isLoading=!1,n();case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},renderChart:function(){this.chart.render()}}},$=P,D=(n("8ac1"),Object(d["a"])($,O,S,!1,null,null,null)),k=D.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Statistics")]),n("p",[t._v("Based on the randomly generated data, let's get some descriptive statistics.")]),n("div",{staticClass:"grid"},[n("div",{staticClass:"cell -4of12"},[n("p",[n("b",[t._v("Mean")]),t._v(": "+t._s(t.mean))])]),n("div",{staticClass:"cell -4of12"},[n("p",[n("b",[t._v("Standard deviation")]),t._v(": "+t._s(t.standardDeviation))])]),n("div",{staticClass:"cell -4of12",staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[n("button",{staticClass:"btn btn-default",on:{click:t.setDescriptive}},[t._v("\n        Calculate "),t.isLoading?n("span",{staticClass:"loading"}):t._e()])])])])},E=[],L={data:function(){return{mean:0,standardDeviation:0,median:0,isLoading:!1}},computed:{data:{get:function(){return this.$store.state.data}}},methods:{setDescriptive:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.setStandardDeviation();case 3:return t.next=5,this.setMean();case 5:this.isLoading=!1;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setMean:function(){var t=this;return new Promise(function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/api/descriptive/mean");case 2:r=e.sent,a=r.body,t.mean=a.toFixed(2),n();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},setStandardDeviation:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/api/descriptive/standard-deviation");case 2:r=t.sent,a=r.body,e.standardDeviation=a.toFixed(2),n();case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},M=L,A=Object(d["a"])(M,R,E,!1,null,null,null),T=A.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Distribution")]),t._m(0),n("button",{staticClass:"btn btn-default",staticStyle:{"margin-bottom":"1.75rem"},on:{click:t.setDistribution}},[t._v("\n    Calculate "),t.isLoading?n("span",{staticClass:"loading"}):t._e()]),n("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"distribution"}})])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Based on the randomly generated data, let's get the cumulative density function of it. "),n("b",[t._v("Warning")]),t._v(": The result\n    have been multiplied by 10,000 to overwhelm a bug at the chart library.")])}],B={data:function(){return{isLoading:!1,chart:new Contour({el:"#distribution",line:{smooth:!0,marker:{enable:!1}}})}},mounted:function(){this.chart.cartesian().line(),this.chart.setData([]).render()},computed:{data:{get:function(){return this.$store.state.data}}},methods:{setDistribution:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,this.chart.cartesian().line(),t.next=4,this.$http.post("/api/distribution");case 4:e=t.sent,n=e.body,this.chart.setData(n).render(),this.isLoading=!1;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},F=B,J=Object(d["a"])(F,z,V,!1,null,null,null),N=J.exports,W={components:{Chart:k,Descriptive:T,Specs:j,Distribution:N}},q=W,G=(n("7fc4"),Object(d["a"])(q,m,v,!1,null,"d85f5854",null)),I=G.exports;r["a"].use(h["a"]);var U=new h["a"]({mode:"history",routes:[{path:"/",name:"Index",component:I}]});n("975e");r["a"].use(a["a"]),r["a"].config.productionTip=!1,new r["a"]({el:"#app",store:s,router:U,template:"<App/>",components:{App:f}})},"7fc4":function(t,e,n){"use strict";var r=n("c6e7"),a=n.n(r);a.a},"8ac1":function(t,e,n){"use strict";var r=n("119a"),a=n.n(r);a.a},c6e7:function(t,e,n){}});