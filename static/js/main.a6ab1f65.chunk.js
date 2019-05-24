(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),l=a.n(r),i=(a(97),a(76)),o=a(77),s=a(89),u=a(78),m=a(90),d=a(164),E=a(165),h=(a(98),d.a.Option),p={50497:"AE",3756934:"LEND",49681:"SNT",1712771:"FUEL",49653:"BTC"},f=localStorage.getItem("interval")||"4h",v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isLoading:!1,priceList:{},records:[],rate:[],current:"FULE",mode:localStorage.getItem("tabCurrent")||"a"},a.handleChange=function(e){a.fetchKlineData(e),localStorage.setItem("interval",e)},a.filterData=function(e){var t=a.state.records;!1!==t[e][4]?t[e][4]=!1:t[e][4]=!0,a.setState({records:t})},a.checkAll=function(){var e=a.state.records;e.forEach(function(e){e[4]=!0}),a.setState({records:e})},a.onChang=function(e){var t=e.target.value;a.setState({mode:t}),localStorage.setItem("tabCurrent",t)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("data"),a=localStorage.getItem("priceList");t&&this.setState({records:JSON.parse(t)}),a&&this.setState({priceList:JSON.parse(a)}),this.fetchExchangeRecords().then(function(t){var a=t.data;localStorage.setItem("data",JSON.stringify(a)),e.setState({records:a}),e.syncTicker()}),this.handleKeyboard(),this.fetchKlineData()}},{key:"fetchKlineData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=this;this.fethHistoryPrice("FUELBTC",e).then(function(a){t.fethHistoryPrice("AEBTC",e).then(function(e){var n=[];e.forEach(function(e,t){var c=new Date(e[0]),r="".concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate()," ").concat(c.getHours(),":").concat(c.getMinutes());n.push({time:r,rate:parseInt(24e3*e[1]/a[t][1]),ae:e,fuel:a[t]})}),t.setState({rate:n})})})}},{key:"handleKeyboard",value:function(){var e=this;document.body.addEventListener("keydown",function(t){16===t.which&&(e.multiAction=!0)}),document.body.addEventListener("keyup",function(t){16===t.which&&(e.multiAction=!1)})}},{key:"syncTicker",value:function(e){var t=this,a=new WebSocket("wss://ws.cn-east.mytokenapi.com/ticker");a.onmessage=function(e){var a=JSON.parse(e.data).data;if(a&&a.tick){var n=t.state.priceList;n[a.tick.symbol]={price:a.tick.price,change:a.tick.percent_change_24h},t.setState({priceList:n}),localStorage.setItem("priceList",JSON.stringify(n))}},a.onopen=function(){a.send(JSON.stringify({event:"ticker",params:{ids:Object.keys(p).map(function(e){return+e})}}))}}},{key:"fetchExchangeRecords",value:function(){return fetch("https://www.easy-mock.com/mock/59d892fd9d342f449f303370/app/records").then(function(e){return e.json()})}},{key:"fetchHistoryFuelToBtcPrice",value:function(){return fetch("https://www.easy-mock.com/mock/59d892fd9d342f449f303370/app/fuelbtc").then(function(e){return e.json()})}},{key:"fethHistoryPrice",value:function(e,t){var a="1d"==t||"1D"==t?24:parseInt(t),n=(new Date).getTime();return fetch("https://api.webmooc.com:5060/api/v1/klines?symbol="+e+"&interval="+t+"&limit=410&startTime="+(n-410*a*3600*1e3)+"&endTime="+n).then(function(e){return e.json()})}},{key:"fetchHistoryAeToBtcPrice",value:function(){return fetch("https://www.easy-mock.com/mock/59d892fd9d342f449f303370/app/aebtc").then(function(e){return e.json()})}},{key:"render",value:function(){var e=this,t=this,a=this.state,r=a.priceList,l=a.records,i=a.mode,o=a.rate,s=0,u={};l.forEach(function(e,t){if(!1!==e[4]&&(s+=parseInt(e[1]),e[2])){var a=e[2].split(/\d+/),n=a[1],c=parseInt(e[2]);"undefined"===typeof u[n]?u[n]=c:u[n]=u[n]+c,0===u[n]&&l.forEach(function(e,n){var c=e[2].split(/\d+/);n<=t&&a[1]===c[1]&&(e.completed=!0)})}});var m=l.map(function(e,a){var n=e[2].split(/\d+/)[1],l=parseInt(e[2]),i="";r[n]&&r.AE&&(i=parseInt(Math.abs(l)*r[n].price/r.AE.price));var o=i&&!e.completed?(e[1]<0&&i-Math.abs(e[1])>0?"+":"")+(i-Math.abs(e[1])):"";return o&&parseInt(o),c.a.createElement("tr",{key:a},c.a.createElement("td",null,e[0]),c.a.createElement("td",null,e[1]),c.a.createElement("td",{title:i?"\u2248".concat(i,"AE"):""},e[2]),c.a.createElement("td",null,c.a.createElement("span",{style:{paddingLeft:"3px",color:e[1]<0&&i-Math.abs(e[1])>0?"#70a700":"#ea2870"}},o),c.a.createElement(y,{checked:!1!==e[4],onClick:function(){return t.filterData(a)}})),c.a.createElement("td",null,e[3]))}),p=0,v=0;Object.keys(u).forEach(function(t){u[t]>0&&(v+=1,e.state.priceList[t]&&(u[t]*e.state.priceList[t].price,p+=1))});var g=p===v;r.AE;return window.priceList=r,window.assetsExchanged=u,window.records=l,m.reverse(),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-header"},c.a.createElement(E.a.Group,{onChange:this.onChang,value:i},c.a.createElement(E.a.Button,{value:"a"},"\u884c\u60c5"),c.a.createElement(E.a.Button,{value:"b"},"\u64cd\u4f5c"))),c.a.createElement("div",{className:"container"},"a"===i?c.a.createElement(n.Fragment,null,c.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"88%",align:"center",className:"exchangedAssets"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{width:"18%"},"TOKEN"),c.a.createElement("th",{width:"20%"},"CHANGE(24H)"),c.a.createElement("th",{width:"20%"},"PRICE"),c.a.createElement("th",{width:"22%"},"AMOUNT"),c.a.createElement("th",{width:"20%"},"BANLANCE"))),c.a.createElement("tbody",null,Object.keys(u).map(function(e){return u[e]>0?c.a.createElement("tr",{key:e},c.a.createElement("td",null,e),c.a.createElement("td",null,r[e]?c.a.createElement(n.Fragment,null,c.a.createElement(b,{price:r[e].change}),"%"):c.a.createElement(A,null)),c.a.createElement("td",null,r[e]?"\uffe5"+r[e].price.toFixed(5):c.a.createElement(A,null)),c.a.createElement("td",null,u[e]),c.a.createElement("td",null,r[e]?"\uffe5"+parseInt(r[e].price.toFixed(5)*u[e]):c.a.createElement(A,null))):null}),c.a.createElement("tr",null,c.a.createElement("td",null,"AE"),c.a.createElement("td",null,r.AE?c.a.createElement(n.Fragment,null,c.a.createElement(b,{price:r.AE.change}),"%"):c.a.createElement(A,null)),c.a.createElement("td",null,r.AE?"\uffe5"+r.AE.price.toFixed(5):c.a.createElement(A,null)),c.a.createElement("td",null,s),c.a.createElement("td",null,r.AE?"\uffe5"+parseInt(r.AE.price.toFixed(5)*s):c.a.createElement(A,null))))),c.a.createElement(d.a,{defaultValue:f,style:{width:120,marginTop:10,marginBottom:10},onChange:t.handleChange},c.a.createElement(h,{value:"1h"},"1\u5c0f\u65f6"),c.a.createElement(h,{value:"2h"},"2\u5c0f\u65f6"),c.a.createElement(h,{value:"4h"},"4\u5c0f\u65f6"),c.a.createElement(h,{value:"6h"},"6\u5c0f\u65f6"),c.a.createElement(h,{value:"12h"},"12\u5c0f\u65f6"),c.a.createElement(h,{value:"1d"},"1\u5929")),c.a.createElement("div",{id:"mountNode"},o.map(function(e,t){return c.a.createElement(k,{key:t,value:e.rate,time:e.time,data:{ae:e.ae,fuel:e.fuel}})}),c.a.createElement("div",{className:"data-detail",ref:"detail"})),c.a.createElement("div",{className:"changes-list"},c.a.createElement(w,{priceList:r,token:"FUEL"}),c.a.createElement(w,{priceList:r,token:"LEND"}),c.a.createElement(w,{priceList:r,token:"SNT"}),c.a.createElement(w,{priceList:r,token:"KEY"}))):c.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"88%",align:"center",className:"exchange-list"},c.a.createElement("colgroup",null,c.a.createElement("col",null),c.a.createElement("col",null),c.a.createElement("col",null),c.a.createElement("col",null),c.a.createElement("col",null)),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{width:"18%"},"DATE"),c.a.createElement("th",{width:"20%"},"AE"),c.a.createElement("th",{width:"20%"},"TOKEN"),c.a.createElement("th",{width:"22%"},"CHECK",c.a.createElement(y,{checked:!0,onClick:this.checkAll})),c.a.createElement("th",{width:"20%"},"NOTE"))),c.a.createElement("tbody",null,m)),c.a.createElement("div",{className:"status-bar"},c.a.createElement("span",{className:"ae-total"},c.a.createElement("b",null,s)," AE"))))}}]),t}(n.Component),g=null,k=function(e){var t=e.value,a=e.time,n=e.data,r=100*t/1e6,l=new Date(n.ae[0]);return c.a.createElement("div",{style:{height:r},time:a,onClick:function(e){console.log(n),g&&(g.style.backgroundColor=""),e.target.style.backgroundColor="red",g=e.target,document.querySelector(".data-detail").innerHTML="\n      <p>".concat(l.getFullYear(),"/").concat(l.getMonth()+1,"/").concat(l.getDate(),"</p>\n      <p>AE/BTC: ").concat(n.ae[1],"</p>\n      <p>FUEL/BTC: ").concat(n.fuel[1],"</p>\n      <p>24000 AE \u2248 ").concat(parseInt(24e3*n.ae[1]/n.fuel[1])," FUEL</p>\n      ")}})},w=function(e){var t=e.priceList,a=e.token;return c.a.createElement("div",null,"24000 AE \u2248 ",c.a.createElement("span",null,t.AE&&t[a]?parseInt(24e3*t.AE.price/t[a].price):c.a.createElement(A,null)),a)},y=function(e){var t=e.checked,a=e.onClick,n=void 0===a?function(){}:a;return t?c.a.createElement("span",{className:"ui-checkbox",select:"true",onClick:n}):c.a.createElement("span",{className:"ui-checkbox",onClick:n})},b=function(e){var t=e.price;return c.a.createElement("span",{style:{color:+t<0?"#ea2870":"#70a700"}},t)},A=function(){return c.a.createElement("div",{className:"loadEffect"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))},N=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,t,a){e.exports=a(162)},97:function(e,t,a){},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.a6ab1f65.chunk.js.map