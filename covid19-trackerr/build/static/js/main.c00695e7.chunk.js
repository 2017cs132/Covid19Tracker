(this["webpackJsonpcovid19-trackerr"]=this["webpackJsonpcovid19-trackerr"]||[]).push([[0],{16:function(t,e,r){t.exports={container:"Cards_container__4Ot8T",confirmed:"Cards_confirmed__2rIgr",deaths:"Cards_deaths__123Yf",recovered:"Cards_recovered__mEMnm"}},182:function(t,e,r){"use strict";r.r(e);var a=r(2),n=r(0),c=r.n(n),o=r(62),s=r.n(o),i=(r(78),r(9)),d=r.n(i),u=r(14),j=r(12),l=r(43),m=r.n(l),b=r(63),h=r(64),x=r.n(h);var p=function(t){var e=t.confirmed,r=t.deaths,n=t.recovered,c=t.country,o={labels:["Infected","Deaths","Recovered"],datasets:[{label:"People",data:[e,r,n],backgroundColor:["yellow","red","green"],hoverBackgroundColor:["rgb(238, 238, 78)"," rgb(241, 60, 60)","rgb(45, 146, 45)"]}]};return Object(a.jsx)("div",{className:x.a.chart,children:Object(a.jsx)(b.Bar,{data:o,options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(c)}}})})},f=r(200),O=r(204),v=r(201),g=r(202),_=r(32),y=r.n(_),C=r(16),P=r.n(C),w=function(t){var e=t.confirmed,r=t.deaths,n=t.recovered,c=t.lastUpdate;return e&&r&&n?Object(a.jsxs)(f.a,{container:!0,className:P.a.container,children:[Object(a.jsx)(f.a,{item:!0,xs:!1,sm:1,md:2}),Object(a.jsxs)(f.a,{item:!0,container:!0,xs:12,sm:10,md:8,spacing:4,children:[Object(a.jsx)(f.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsx)(O.a,{variant:"outlined",className:P.a.confirmed,children:Object(a.jsxs)(v.a,{className:P.a.content,children:[Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:"Total Cases"}),Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:Object(a.jsx)(y.a,{start:0,end:parseInt(e),duration:2.5,separator:","})}),Object(a.jsx)(g.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:Object(a.jsx)("span",{children:"Last Updated"})}),Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:new Date(c).toDateString()})]})})}),Object(a.jsx)(f.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsx)(O.a,{variant:"outlined",className:P.a.deaths,children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:"Total Deaths:"}),Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:Object(a.jsx)(y.a,{start:0,end:parseInt(r),duration:2.5,separator:","})}),Object(a.jsx)(g.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"Last Updated"}),Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:new Date(c).toDateString()})]})})}),Object(a.jsx)(f.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsx)(O.a,{variant:"outlined",className:P.a.recovered,children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:"Total Recovered:"}),Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:Object(a.jsx)(y.a,{start:0,end:parseInt(n),separator:","})}),Object(a.jsx)(g.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"Last Updated"}),Object(a.jsx)(g.a,{color:"textPrimary",gutterBottom:!0,children:new Date(c).toDateString()})]})})})]}),Object(a.jsx)(f.a,{item:!0,xs:!1,sm:1,md:2})]}):"Loading..."},B=r(69),k=r.n(B),S=r.p+"static/media/download.afc0e312.png",N=function(){return Object(a.jsx)("header",{children:Object(a.jsxs)("h1",{className:k.a.title,children:["C",Object(a.jsx)("span",{children:Object(a.jsx)("img",{src:S,alt:"Covid Icon"})}),"VID19"]})})},D=r(70),I=r(205),U=r(203),T=function(){var t=Object(u.a)(d.a.mark((function t(e){var r,a,n,c,o,s,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="",r="Global"!==e?"https://covid19.mathdro.id/api/countries/".concat(e):"https://covid19.mathdro.id/api",t.next=4,fetch(r);case 4:return a=t.sent,t.next=7,a.json();case 7:return n=t.sent,c=n.confirmed,o=n.recovered,s=n.deaths,i=n.lastUpdate,t.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(u.a)(d.a.mark((function t(){var e,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://covid19.mathdro.id/api/countries");case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,a=r.countries,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=r(45),A=r.n(L),G=function(t){var e=t.handleCountryChange,r=Object(n.useState)(""),c=Object(j.a)(r,2),o=(c[0],c[1],Object(n.useState)([])),s=Object(j.a)(o,2),i=s[0],l=s[1];Object(n.useEffect)((function(){(function(){var t=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F();case 2:t.sent.map((function(t){return l((function(e){return[].concat(Object(D.a)(e),[t.name])}))}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);return Object(a.jsx)(I.a,{className:A.a.form,children:Object(a.jsxs)(U.a,{onChange:function(t){e(t.target.value)},className:A.a.formControl,children:[Object(a.jsx)("option",{value:"Global",children:"Global"}),i.map((function(t){return Object(a.jsx)("option",{value:t,children:t},t)}))]})})},E=r(46),J=r.n(E),M=function(){return Object(a.jsx)("footer",{className:J.a.footer,children:Object(a.jsx)("h1",{className:J.a.title,children:"Made with\ufe0f \u2764\ufe0f in Pakistan \xa9 2020 Bootcamp"})})};var R=function(){var t=Object(n.useState)(0),e=Object(j.a)(t,2),r=e[0],c=e[1],o=Object(n.useState)(0),s=Object(j.a)(o,2),i=s[0],l=s[1],b=Object(n.useState)(0),h=Object(j.a)(b,2),x=h[0],f=h[1],O=Object(n.useState)(""),v=Object(j.a)(O,2),g=v[0],_=v[1],y=Object(n.useState)("Global"),C=Object(j.a)(y,2),P=C[0],B=C[1];return Object(n.useEffect)((function(){(function(){var t=Object(u.a)(d.a.mark((function t(){var e,r,a,n,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(P);case 2:e=t.sent,r=e.confirmed,a=e.recovered,n=e.deaths,o=e.lastUpdate,c(r.value),l(n.value),f(a.value),_(o);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[P]),Object(a.jsxs)("div",{className:m.a.App,children:[Object(a.jsx)(N,{}),Object(a.jsx)(w,{confirmed:r,deaths:i,recovered:x,lastUpdate:g}),Object(a.jsx)(G,{handleCountryChange:function(t){B(t)}}),Object(a.jsx)(p,{confirmed:r,deaths:i,recovered:x,country:P}),Object(a.jsx)(M,{})]})},V=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,206)).then((function(e){var r=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;r(t),a(t),n(t),c(t),o(t)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),V()},43:function(t,e,r){t.exports={App:"App_App__3f8PT"}},45:function(t,e,r){t.exports={formControl:"CountryPicker_formControl__3GbAx",form:"CountryPicker_form__2w3gF"}},46:function(t,e,r){t.exports={title:"Footer_title__2fqVU"}},64:function(t,e,r){t.exports={chart:"Chart_chart__3smJi"}},69:function(t,e,r){t.exports={title:"Header_title__2tWoD"}},78:function(t,e,r){}},[[182,1,2]]]);
//# sourceMappingURL=main.c00695e7.chunk.js.map