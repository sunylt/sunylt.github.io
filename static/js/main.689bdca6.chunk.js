(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(31),r=a.n(c),i=(a(86),a(66)),o=a(67),s=a(78),m=a(68),u=a(79),E=a(151),d=a(152),h=(a(87),E.a.TabPane,{50497:"AE",3756934:"LEND",9490820:"KEY",9622452:"LET",49681:"SNT",1712771:"FUEL",8520497:"MTX",6771938:"DEW",49653:"BTC"}),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isLoading:!1,priceList:{},records:[],mode:localStorage.getItem("tabCurrent")||"a"},a.filterData=function(e){var t=a.state.records;!1!==t[e][4]?t[e][4]=!1:t[e][4]=!0,a.setState({records:t})},a.checkAll=function(){var e=a.state.records;e.forEach(function(e){e[4]=!0}),a.setState({records:e})},a.onChang=function(e){var t=e.target.value;a.setState({mode:t}),localStorage.setItem("tabCurrent",t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("data"),a=localStorage.getItem("priceList");t&&this.setState({records:JSON.parse(t)}),a&&this.setState({priceList:JSON.parse(a)}),this.fetchExchangeRecords().then(function(t){var a=t.data;localStorage.setItem("data",JSON.stringify(a)),e.setState({records:a}),e.syncTicker()}),this.handleKeyboard()}},{key:"handleKeyboard",value:function(){var e=this;document.body.addEventListener("keydown",function(t){16===t.which&&(e.multiAction=!0)}),document.body.addEventListener("keyup",function(t){16===t.which&&(e.multiAction=!1)})}},{key:"syncTicker",value:function(e){var t=this,a=new WebSocket("wss://ws.cn-east.mytokenapi.com/ticker");a.onmessage=function(e){var a=JSON.parse(e.data).data;if(a&&a.tick){var n=t.state.priceList;n[a.tick.symbol]={price:a.tick.price,change:a.tick.percent_change_24h},t.setState({priceList:n}),localStorage.setItem("priceList",JSON.stringify(n))}},a.onopen=function(){a.send(JSON.stringify({event:"ticker",params:{ids:Object.keys(h).map(function(e){return+e})}}))}}},{key:"fetchExchangeRecords",value:function(){return fetch("https://www.easy-mock.com/mock/59d892fd9d342f449f303370/app/records").then(function(e){return e.json()})}},{key:"render",value:function(){var e=this,t=this,a=this.state,c=a.priceList,r=a.records,i=a.mode,o=0,s={};r.forEach(function(e,t){if(!1!==e[4]&&(o+=parseInt(e[1]),e[2])){var a=e[2].split(/\d+/),n=a[1],l=parseInt(e[2]);"undefined"===typeof s[n]?s[n]=l:s[n]=s[n]+l,0===s[n]&&r.forEach(function(e,n){var l=e[2].split(/\d+/);n<=t&&a[1]===l[1]&&(e.completed=!0)})}});var m=0,u=r.map(function(e,a){var n=e[2].split(/\d+/)[1],r=parseInt(e[2]),i="";c[n]&&c.AE&&(i=parseInt(Math.abs(r)*c[n].price/c.AE.price));var o=i&&!e.completed?(e[1]<0&&i-Math.abs(e[1])>0?"+":"")+(i-Math.abs(e[1])):"";return o&&(m+=parseInt(o)),l.a.createElement("tr",{key:a},l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]),l.a.createElement("td",{title:i?"\u2248".concat(i,"AE"):""},e[2]),l.a.createElement("td",null,l.a.createElement("span",{style:{paddingLeft:"3px",color:e[1]<0&&i-Math.abs(e[1])>0?"#70a700":"#ea2870"}},o),l.a.createElement(f,{checked:!1!==e[4],onClick:function(){return t.filterData(a)}})),l.a.createElement("td",null,e[3]))}),E=0,h=0,p=0;Object.keys(s).forEach(function(t){s[t]>0&&(p+=1,e.state.priceList[t]&&(E+=s[t]*e.state.priceList[t].price,h+=1))});var k=h===p,w=c.AE&&k;return window.assetsExchanged=s,window.records=r,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement(d.a.Group,{onChange:this.onChang,value:i},l.a.createElement(d.a.Button,{value:"a"},"\u884c\u60c5"),l.a.createElement(d.a.Button,{value:"b"},"\u64cd\u4f5c"))),l.a.createElement("div",{className:"container"},"a"===i?l.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"88%",align:"center",className:"exchangedAssets"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"18%"},"TOKEN"),l.a.createElement("th",{width:"20%"},"CHANGE(24H)"),l.a.createElement("th",{width:"20%"},"PRICE"),l.a.createElement("th",{width:"22%"},"AMOUNT"),l.a.createElement("th",{width:"20%"},"BANLANCE"))),l.a.createElement("tbody",null,Object.keys(s).map(function(e){return s[e]>0?l.a.createElement("tr",{key:e},l.a.createElement("td",null,e),l.a.createElement("td",null,c[e]?l.a.createElement(n.Fragment,null,l.a.createElement(v,{price:c[e].change}),"%"):l.a.createElement(g,null)),l.a.createElement("td",null,c[e]?"\uffe5"+c[e].price.toFixed(5):l.a.createElement(g,null)),l.a.createElement("td",null,s[e]),l.a.createElement("td",null,c[e]?"\uffe5"+parseInt(c[e].price.toFixed(5)*s[e]):l.a.createElement(g,null))):null}),l.a.createElement("tr",null,l.a.createElement("td",null,"AE"),l.a.createElement("td",null,c.AE?l.a.createElement(n.Fragment,null,l.a.createElement(v,{price:c.AE.change}),"%"):l.a.createElement(g,null)),l.a.createElement("td",null,c.AE?"\uffe5"+c.AE.price.toFixed(5):l.a.createElement(g,null)),l.a.createElement("td",null,o),l.a.createElement("td",null,c.AE?"\uffe5"+parseInt(c.AE.price.toFixed(5)*o):l.a.createElement(g,null))))):l.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"88%",align:"center",className:"exchange-list"},l.a.createElement("colgroup",null,l.a.createElement("col",null),l.a.createElement("col",null),l.a.createElement("col",null),l.a.createElement("col",null),l.a.createElement("col",null)),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"18%"},"DATE"),l.a.createElement("th",{width:"20%"},"AE"),l.a.createElement("th",{width:"20%"},"TOKEN"),l.a.createElement("th",{width:"22%"},"ALL",l.a.createElement(f,{checked:!0,onClick:this.checkAll})),l.a.createElement("th",{width:"20%"},"NOTE"))),l.a.createElement("tbody",null,u)),l.a.createElement("div",{className:"status-bar"},l.a.createElement("span",{className:"ae-total"},l.a.createElement("b",null,o)," AE"),l.a.createElement("span",null,l.a.createElement("b",null,w?parseInt(E/c.AE.price):l.a.createElement(g,null))," AE"),l.a.createElement("span",null,l.a.createElement("b",null,w?l.a.createElement(v,{price:m}):l.a.createElement(g,null))," AE"))))}}]),t}(n.Component),f=function(e){var t=e.checked,a=e.onClick,n=void 0===a?function(){}:a;return t?l.a.createElement("span",{className:"ui-checkbox",select:"true",onClick:n}):l.a.createElement("span",{className:"ui-checkbox",onClick:n})},v=function(e){var t=e.price;return l.a.createElement("span",{style:{color:+t<0?"#ea2870":"#70a700"}},t)},g=function(){return l.a.createElement("div",{className:"loadEffect"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))},k=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(149)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.689bdca6.chunk.js.map