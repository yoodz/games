(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],f=0,d=[];f<s.length;f++)i=s[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},1195:function(e,t,n){},"146f":function(e,t,n){},"3e0e":function(e,t,n){"use strict";var r=n("146f"),o=n.n(r);o.a},"45f8":function(e,t,n){"use strict";var r=n("5c8a"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"app",components:{}},s=i,c=(n("034f"),n("2877")),l=Object(c["a"])(s,o,a,!1,null,null,null),u=l.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("MaskLayer",{directives:[{name:"show",rawName:"v-show",value:e.over,expression:"over"}],attrs:{msg:e.msg,reload:e.reload},on:{titleChanged:e.updateTitle}}),n("div",{staticClass:"return"},[n("router-link",{attrs:{to:"/"}},[e._v("返回首页")])],1),n("canvas",{staticStyle:{"background-color":"black"},attrs:{id:"ca",width:"400",height:"400"}})],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mask-layer"},[n("Circle",{attrs:{percent:80}},[n("span",{staticClass:"demo-Circle-inner",staticStyle:{"font-size":"24px"}},[e._v("80%")])]),n("Card",{staticClass:"msg-box"},[n("h1",{on:{click:e.changeTitle}},[e._v(e._s(e.msg))]),n("Button",{attrs:{type:"success"},on:{click:e.restart}},[e._v("重新开始")])],1)],1)},v=[],m={name:"MaskLayer",props:{msg:String,reload:{}},created:function(){console.log(this.reload)},methods:{changeTitle:function(){this.$emit("titleChanged","子向父组件传值")},restart:function(){this.reload()}},mounted:function(){}},g=m,b=(n("f172"),Object(c["a"])(g,h,v,!1,null,"234cf6c0",null)),k=b.exports,y={name:"Snake",components:{MaskLayer:k},data:function(){return{snake:[41,40],food:43,n:null,direction:1,over:!1,msg:"游戏结束"}},created:function(){},methods:{updateTitle:function(e){console.log(e),this.msg=e},reload:function(){this.over=!1,location.reload()},draw:function(e,t){this.ctx.fillStyle=t,this.ctx.fillRect(e%20*20+1,20*~~(e/20)+1,18,18)},move:function(){var e=this;setTimeout(function(){if(e.snake.unshift(e.n=e.snake[0]+e.direction),e.snake.indexOf(e.n,1)>0||e.n<0||e.n>399||1===e.direction&&e.n%20===0||-1===e.direction&&e.n%20===19)e.over=!0;else{if(e.draw(e.n,"lime"),e.n===e.food){while(e.snake.indexOf(e.food=~~(400*Math.random()))>0);e.draw(e.food,"yellow")}else e.draw(e.snake.pop(),"black");e.move()}},100)}},mounted:function(){var e={},t=document.getElementById("ca");this.col=e.width&&e.width/20||20,t.width=t.height=e.width||400,this.canvas=t,this.ctx=t.getContext("2d"),this.ctx.strokeStyle="#bfbfbf";var n=this;document.onkeydown=function(e){n.direction=n.snake[1]-n.snake[0]===(n.n=[-1,-20,1,20][(e||event).keyCode-37]||n.direction)?n.direction:n.n},n.move()}},w=y,_=(n("45f8"),Object(c["a"])(w,d,p,!1,null,"02b9f5a2",null)),x=_.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("Circle",{attrs:{percent:80}},[n("span",{staticClass:"demo-Circle-inner",staticStyle:{"font-size":"24px"}},[e._v("80%")])]),n("h1",[e._v("游戏列表")]),n("router-link",{attrs:{to:"/snake"}},[e._v("贪吃蛇")])],1)},O=[],S={name:"Home",props:{msg:String,count:String},created:function(){},methods:{},mounted:function(){}},j=S,M=(n("3e0e"),Object(c["a"])(j,C,O,!1,null,"4fbaf668",null)),T=M.exports;r["default"].use(f["a"]);var P=new f["a"]({routes:[{path:"/",name:"home",component:T},{path:"/snake",name:"snake",component:x}]}),$=n("e069"),E=n.n($);n("dcad");r["default"].config.productionTip=!1,r["default"].use(E.a),new r["default"]({router:P,render:function(e){return e(u)}}).$mount("#app")},"5c8a":function(e,t,n){},"64a9":function(e,t,n){},f172:function(e,t,n){"use strict";var r=n("1195"),o=n.n(r);o.a}});
//# sourceMappingURL=app.cb7b5d91.js.map