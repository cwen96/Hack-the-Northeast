(this.webpackJsonpextension=this.webpackJsonpextension||[]).push([[0],{11:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),o=n.n(i),r=n(3),s=n.n(r),u=(n(11),n(5)),a=n(4),j=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(i.useEffect)((function(){var e=chrome.extension.getBackgroundPage().dom;console.log(e);var t=new a.Readability(e).parse();console.log(t.title),o(t.title)})),Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:n})})},d=(n(17),function(){return Object(c.jsx)("div",{children:Object(c.jsx)(j,{})})}),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),l()}},[[18,1,2]]]);