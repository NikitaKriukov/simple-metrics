(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o);a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);var s=a(1),l=a(2),i=a(4),u=a(3),m=a(5),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={cpuLoadValue:0,serverAccessError:!1},a.digitsStyle={width:160,fontSize:10,fontWaight:"bold"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("span",{style:this.digitsStyle,className:this.getBadgeClasses()},n.a.createElement("h6",null,"System CPU load %"),n.a.createElement("h1",null,this.getBadgeValue())))}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){fetch("/usage/cpu").then(function(e){return e.json()}).then(function(t){e.setState({cpuLoadValue:t.systemCpuLoad,serverAccessError:!1})}).catch(function(t){console.error(t),e.setState({cpuLoadValue:0,serverAccessError:!0})})},1e3)}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=this.state.cpuLoadValue>70?"warning":"primary"}},{key:"getBadgeValue",value:function(){return this.state.serverAccessError?"N/A":this.state.cpuLoadValue}}]),t}(r.Component),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={maxMemory:0,allocatedMemory:0,freeMemory:0,serverAccessError:!1},a.digitsStyle={width:160,fontSize:10,fontWaight:"bold"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("span",{style:this.digitsStyle,className:this.getBadgeClasses()},n.a.createElement("h6",null,"VM Free Memory %"),n.a.createElement("h1",null,this.getBadgeValue())))}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){fetch("/usage/memory").then(function(e){return e.json()}).then(function(t){e.setState({maxMemory:t.maxMemory,allocatedMemory:t.allocatedMemory,freeMemory:t.freeMemory,serverAccessError:!1})}).catch(function(t){console.error(t),e.setState({maxMemory:0,allocatedMemory:0,freeMemory:0,serverAccessError:!0})})},5e3)}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=this.getFreeMemValue()<20?"warning":"primary"}},{key:"getFreeMemValue",value:function(){var e=this.state.freeMemory,t=this.state.allocatedMemory;if(0===t||isNaN(t))return"--";var a=100*e/t;return a>100&&(a=100),(a<0||isNaN(a))&&(a=0),Math.round(a)}},{key:"getBadgeValue",value:function(){return this.state.serverAccessError?"N/A":this.getFreeMemValue()}}]),t}(r.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h,null),n.a.createElement(d,null))}}]),t}(r.Component);c.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.164fa225.chunk.js.map