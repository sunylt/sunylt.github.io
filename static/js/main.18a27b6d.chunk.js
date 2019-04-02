(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),r=a.n(c),i=(a(14),a(3)),o=a(4),s=a(6),E=a(5),u=a(7),m=(a(15),{50497:"AE",3756934:"LEND",9490820:"KEY",9622452:"LET",49681:"SNT",1712771:"FUEL",8520497:"MTX",6771938:"DEW",49653:"BTC"}),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={isLoading:!1,priceList:{},records:[]},a.filterData=function(e){var t=a.state.records;!1!==t[e][4]?t[e][4]=!1:t[e][4]=!0,a.setState({records:t})},a.checkAll=function(){var e=a.state.records;e.forEach(function(e){e[4]=!0}),a.setState({records:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchExchangeRecords().then(function(t){var a=t.data;localStorage.setItem("data",JSON.stringify(a)),e.setState({records:a}),e.syncTicker()}),this.handleKeyboard()}},{key:"handleKeyboard",value:function(){var e=this;document.body.addEventListener("keydown",function(t){16===t.which&&(e.multiAction=!0)}),document.body.addEventListener("keyup",function(t){16===t.which&&(e.multiAction=!1)})}},{key:"syncTicker",value:function(e){var t=this,a=new WebSocket("wss://ws.cn-east.mytokenapi.com/ticker");a.onmessage=function(e){var a=JSON.parse(e.data).data;if(a&&a.tick){var n=t.state.priceList;n[a.tick.symbol]={price:a.tick.price,change:a.tick.percent_change_24h},t.setState({priceList:n})}},a.onopen=function(){a.send(JSON.stringify({event:"ticker",params:{ids:Object.keys(m).map(function(e){return+e})}}))}}},{key:"fetchExchangeRecords",value:function(){return fetch("https://www.easy-mock.com/mock/59d892fd9d342f449f303370/app/records").then(function(e){return e.json()})}},{key:"render",value:function(){var e=this,t=this,a=this.state,n=a.priceList,c=a.records,r=0,i={};c.forEach(function(e,t){if(!1!==e[4]&&(r+=parseInt(e[1]),e[2])){var a=e[2].split(/\d+/),n=a[1],l=parseInt(e[2]);"undefined"===typeof i[n]?i[n]=l:i[n]=i[n]+l,0===i[n]&&c.forEach(function(e,n){var l=e[2].split(/\d+/);n<=t&&a[1]===l[1]&&(e.completed=!0)})}});var o=0,s=c.map(function(e,a){var c=e[2].split(/\d+/)[1],r=parseInt(e[2]),i="";n[c]&&n.AE&&(i=parseInt(Math.abs(r)*n[c].price/n.AE.price));var s=i&&!e.completed?(e[1]<0&&i-Math.abs(e[1])>0?"+":"")+(i-Math.abs(e[1])):"";return s&&(o+=parseInt(s)),l.a.createElement("tr",{key:a},l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]),l.a.createElement("td",{title:i?"\u2248".concat(i,"AE"):""},e[2]),l.a.createElement("td",null,l.a.createElement("span",{style:{paddingLeft:"3px",color:e[1]<0&&i-Math.abs(e[1])>0?"#70a700":"#ea2870"}},s),l.a.createElement(h,{checked:!1!==e[4],onClick:function(){return t.filterData(a)}})),l.a.createElement("td",null,e[3]))}),E=0,u=0,m=0;Object.keys(i).forEach(function(t){i[t]>0&&(m+=1,e.state.priceList[t]&&(E+=i[t]*e.state.priceList[t].price,u+=1))});var d=u===m,k=n.AE&&d;return window.assetsExchanged=i,window.records=c,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("h2",null,"\u7edf\u8ba1")),l.a.createElement("div",{className:"container"},l.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"88%",align:"center",className:"exchange-list"},l.a.createElement("colgroup",null,l.a.createElement("col",null),l.a.createElement("col",null),l.a.createElement("col",null),l.a.createElement("col",null),l.a.createElement("col",null)),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"18%"},"DATE"),l.a.createElement("th",{width:"20%"},"SELL/BUY AE"),l.a.createElement("th",{width:"20%"},"SELL/BUY TOKEN"),l.a.createElement("th",{width:"22%"},"CHECK ALL",l.a.createElement(h,{checked:!0,onClick:this.checkAll})),l.a.createElement("th",{width:"20%"},"NOTE"))),l.a.createElement("tbody",null,s,l.a.createElement("tr",null,l.a.createElement("td",null,"SUM"),l.a.createElement("td",{className:"ae-total"},l.a.createElement("b",null,r)," AE"),l.a.createElement("td",null,l.a.createElement("b",null,k?parseInt(E/n.AE.price):l.a.createElement(f,null))," AE"),l.a.createElement("td",null,l.a.createElement("b",null,k?r+parseInt(E/n.AE.price)+" ("+o+")":l.a.createElement(f,null))," AE"),l.a.createElement("td",null)))),l.a.createElement("h2",null,"\u8d44\u4ea7"),l.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"88%",align:"center",className:"exchangedAssets"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"18%"},"TOKEN"),l.a.createElement("th",{width:"20%"},"CHANGE(24H)"),l.a.createElement("th",{width:"20%"},"PRICE"),l.a.createElement("th",{width:"22%"},"AMOUNT"),l.a.createElement("th",{width:"20%"},"BANLANCE"))),l.a.createElement("tbody",null,Object.keys(i).map(function(e){return i[e]>0?l.a.createElement("tr",{key:e},l.a.createElement("td",null,e),l.a.createElement("td",null,n[e]?l.a.createElement(p,{price:n[e].change}):l.a.createElement(f,null)),l.a.createElement("td",null,n[e]?"\uffe5"+n[e].price.toFixed(5):l.a.createElement(f,null)),l.a.createElement("td",null,i[e]),l.a.createElement("td",null,n[e]?"\uffe5"+parseInt(n[e].price.toFixed(5)*i[e]):l.a.createElement(f,null))):null}),l.a.createElement("tr",null,l.a.createElement("td",null,"AE"),l.a.createElement("td",null,n.AE?l.a.createElement(p,{price:n.AE.change}):l.a.createElement(f,null)),l.a.createElement("td",null,n.AE?"\uffe5"+n.AE.price.toFixed(5):l.a.createElement(f,null)),l.a.createElement("td",null,r),l.a.createElement("td",null,n.AE?"\uffe5"+parseInt(n.AE.price.toFixed(5)*r):l.a.createElement(f,null)))))))}}]),t}(n.Component),h=function(e){var t=e.checked,a=e.onClick,n=void 0===a?function(){}:a;return t?l.a.createElement("span",{className:"ui-checkbox",select:"true",onClick:n}):l.a.createElement("span",{className:"ui-checkbox",onClick:n})},p=function(e){var t=e.price;return l.a.createElement("span",{style:{color:+t<0?"#ea2870":"#70a700"}},t,"%")},f=function(){return l.a.createElement("div",{className:"loadEffect"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))},k=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.18a27b6d.chunk.js.map