(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),o=(a(16),a(1)),i=a(2),l=a(4),u=a(3),h=a(5),d=(a(7),a(8),function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log(this.props);var e=s.a.createElement("div",{className:"bar_container"},s.a.createElement("div",{className:"bar"}));return s.a.createElement("div",null,s.a.createElement("p",null,this.props.label),s.a.createElement("div",{class:"bar_bg"},s.a.createElement("div",{className:this.props.class+" progress_bar",style:{width:this.props.percentage+"%"}},e)))}}]),t}(n.Component)),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state=a.calcule(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"calcule",value:function(){var e=(new Date).getSeconds(),t=(new Date).getMinutes(),a=(new Date).getHours(),n=(new Date).getDate(),s=(new Date).getDay(),r=(new Date).getMonth(),c="",o="",i="";return a<=12&&(c="Good morning!"),a>=12&&a<=18&&(c="Good afternoon!"),a>=18&&(c="Good evening!"),0==s&&(o="Sunday"),1==s&&(o="Monday"),2==s&&(o="Tuesday"),3==s&&(o="Wednesday"),4==s&&(o="Thursday"),5==s&&(o="Friday"),6==s&&(o="Saturday"),0==r&&(i="January"),1==r&&(i="February"),2==r&&(i="March"),3==r&&(i="April"),4==r&&(i="May"),5==r&&(i="June"),6==r&&(i="July"),7==r&&(i="August"),8==r&&(i="September"),9==r&&(i="October"),10==r&&(i="November"),11==r&&(i="December"),{date:n,minutes:t,hour:a,year:(new Date).getFullYear(),month:r,day:s,seconds:e,YearPercentage:r/12*100,WeekPercentage:s/7*100,DayPercentage:(3600*a+60*t+e)/86400*100,HourPercentage:t/60*100,MinutePercentage:e/60*100,greeting:c,nameday:o,namemonth:i}}},{key:"stateUpdate",value:function(){this.setState(this.calcule())}},{key:"componentWillMount",value:function(){setInterval(this.stateUpdate.bind(this),1e3)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("p",{class:"h2"},this.state.greeting),s.a.createElement("p",{class:"h5"},"Today is ",this.state.nameday," ",this.state.date," ",this.state.namemonth," ","and it's ",this.state.hour,":",this.state.minutes,":",this.state.seconds,"."),s.a.createElement(d,{class:"year",label:"How much is left this year ?",percentage:this.state.YearPercentage}),s.a.createElement(d,{class:"week",label:"How much is left this month ?",percentage:this.state.WeekPercentage}),s.a.createElement(d,{class:"day",label:"How much is left today ?",percentage:this.state.DayPercentage}),s.a.createElement(d,{class:"hour",label:"How much is left in this hour ?",percentage:this.state.HourPercentage}),s.a.createElement(d,{class:"second",label:"How much is left in this minute ?",percentage:this.state.MinutePercentage}),s.a.createElement("button",{onClick:this.stateUpdate.bind(this)},"Update"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},8:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.1a5c5660.chunk.js.map