(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(2),r=n.n(c),i=(n(14),n(3)),o=n(4),s=n(6),E=n(5),u=n(7),d=(n(15),n(16),{9490820:"KEY",50497:"AE",49653:"BTC",49681:"SNT",3756934:"LEND",1712771:"FUEL",8520497:"MTX",6771938:"DEW"}),m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={isLoading:!1,priceList:{},records:[]},n.filterData=function(e){var t=n.state.records;!1!==t[e][4]?t[e][4]=!1:t[e][4]=!0,n.setState({records:t})},n.checkAll=function(){var e=n.state.records;e.forEach(function(e){e[4]=!0}),n.setState({records:e})},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchExchangeRecords().then(function(t){var n=t.data;e.setState({records:n}),e.syncTicker()}),this.login(),this.handleKeyboard()}},{key:"handleKeyboard",value:function(){var e=this;document.body.addEventListener("keydown",function(t){16===t.which&&(e.multiAction=!0)}),document.body.addEventListener("keyup",function(t){16===t.which&&(e.multiAction=!1)})}},{key:"syncTicker",value:function(){var e=this,t=new WebSocket("wss://ws.cn-east.mytokenapi.com/ticker");t.onmessage=function(t){var n=JSON.parse(t.data).data;if(n&&n.tick){var a=e.state.priceList;a[n.tick.symbol]={price:n.tick.price,change:n.tick.percent_change_24h},e.setState({priceList:a})}},t.onopen=function(){t.send(JSON.stringify({event:"ticker",params:{ids:Object.keys(d).map(function(e){return+e})}}))}}},{key:"login",value:function(){}},{key:"fetchExchangeRecords",value:function(){return fetch("https://www.easy-mock.com/mock/59d892fd9d342f449f303370/app/records").then(function(e){return e.json()})}},{key:"render",value:function(){var e=this,t=this,n=this.state,a=n.priceList,c=n.records,r=0,i={};c.forEach(function(e){if(!1!==e[4]&&(r+=parseInt(e[1]),e[2])){var t=e[2].split(/\d+/)[1],n=parseInt(e[2]);"undefined"===typeof i[t]?i[t]=n:i[t]=i[t]+n,i[t]}});var o=c.map(function(e,n){return l.a.createElement("tr",{key:n},l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]),l.a.createElement("td",null,e[2]),l.a.createElement("td",null,l.a.createElement("input",{type:"checkbox",checked:!1!==e[4],onChange:function(){return t.filterData(n)}})),l.a.createElement("td",null,e[3]))}),s=0,E=0,u=0;Object.keys(i).forEach(function(t){i[t]>0&&(u+=1,e.state.priceList[t]&&(s+=i[t]*e.state.priceList[t].price,E+=1))});var d=E===u,m=a.AE&&d;return window.assetsExchanged=i,l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"\u5151\u6362\u8bb0\u5f55"),l.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"88%",align:"center"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"18%"},"DATE"),l.a.createElement("th",{width:"20%"},"SELL/BUY AE"),l.a.createElement("th",{width:"20%"},"SELL/BUY TOKEN"),l.a.createElement("th",{width:"22%"},l.a.createElement("span",{id:"check-all",onClick:this.checkAll},"CHECK ALL")),l.a.createElement("th",{width:"20%"},"NOTE"))),l.a.createElement("tbody",null,o,l.a.createElement("tr",null,l.a.createElement("td",null,"BENEFIT"),l.a.createElement("td",{className:"ae-total"},l.a.createElement("b",null,r)," AE"),l.a.createElement("td",null,l.a.createElement("b",null,m?parseInt(s/a.AE.price):l.a.createElement(p,null))," AE"),l.a.createElement("td",null,l.a.createElement("b",null,m?r+parseInt(s/a.AE.price)+" ("+(r+parseInt(s/this.state.priceList.AE.price)-74400)+")":l.a.createElement(p,null))," AE"),l.a.createElement("td",null)))),l.a.createElement("h2",null,"\u5df2\u5151\u6362\u8d44\u4ea7"),l.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"88%",align:"center",className:"exchangedAssets"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"18%"},"TOKEN"),l.a.createElement("th",{width:"20%"},"CHANGE(24H)"),l.a.createElement("th",{width:"20%"},"PRICE"),l.a.createElement("th",{width:"22%"},"AMOUNT"),l.a.createElement("th",{width:"20%"},"BANLANCE"))),l.a.createElement("tbody",null,Object.keys(i).map(function(e){return i[e]>0?l.a.createElement("tr",{key:e},l.a.createElement("td",null,e),l.a.createElement("td",null,a[e]?l.a.createElement(h,{price:a[e].change}):l.a.createElement(p,null)),l.a.createElement("td",null,a[e]?"\uffe5"+a[e].price.toFixed(5):l.a.createElement(p,null)),l.a.createElement("td",null,i[e]),l.a.createElement("td",null,a[e]?parseInt(a[e].price.toFixed(5)*i[e]):l.a.createElement(p,null))):null}),l.a.createElement("tr",null,l.a.createElement("td",null,"AE"),l.a.createElement("td",null,a.AE?l.a.createElement(h,{price:a.AE.change}):l.a.createElement(p,null)),l.a.createElement("td",null,a.AE?"\uffe5"+a.AE.price.toFixed(5):l.a.createElement(p,null)),l.a.createElement("td",null,r),l.a.createElement("td",null,a.AE?parseInt(a.AE.price.toFixed(5)*r):l.a.createElement(p,null))))))}}]),t}(a.Component),h=function(e){var t=e.price;return l.a.createElement("span",{style:{color:+t<0?"red":"green"}},t,"%")},p=function(){return l.a.createElement("div",{className:"loadEffect"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))},f=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.d94966b7.chunk.js.map