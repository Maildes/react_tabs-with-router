(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),r=a.n(l),s=a(6),i=a(1),m=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"Home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{to:"/tabs",className:"nav__link",activeClassName:"nav__link--active"},"Tabs"))))},u=a(16),o=function(e){var t=e.tabs,a=e.tabId,l=Object(n.useMemo)((function(){return t.find((function(e){return e.id===a}))}),[a,t]),r=Object(n.useState)(null===l||void 0===l?void 0:l.content),m=Object(u.a)(r,2),o=m[0],b=m[1],_=Object(n.useCallback)((function(e){b(e)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tabs Page"),c.a.createElement("ul",{className:"tabs__list tabs"},t.map((function(e){var t=e.id,a=e.title,n=e.content;return c.a.createElement("li",{key:t,className:"tabs__item"},c.a.createElement(s.b,{to:"/tabs/".concat(t),className:"tabs__link",activeClassName:"tabs__link--active",onClick:function(){return _(n)}},a))}))),c.a.createElement(i.a,{path:"/tabs",render:function(){return c.a.createElement("div",{className:"tab__description"},c.a.createElement("p",{className:"tab__text"},o))}}))},b=(a(27),[{id:"tab-1",title:"Thailand",content:"\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e \u0422\u0430\u0438\u043b\u0430\u043d\u0434 \u2014 \u0433\u043e\u0441\u0442\u0435\u043f\u0440\u0438\u0438\u043c\u043d\u0430\u044f \u0437\u0435\u043c\u043b\u044f,\n              \u043d\u0435\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \xab\u0421\u0442\u0440\u0430\u043d\u0430 \u0443\u043b\u044b\u0431\u043e\u043a\xbb."},{id:"tab-2",title:"Sri Lanka",content:"\u0412 \u0428\u0440\u0438-\u041b\u0430\u043d\u043a\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u044e\u0442 305 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c\u043c \u0447\u0430\u044f\n              \u0432 \u0433\u043e\u0434 \u2013 \u044d\u0442\u043e 10% \u043e\u0442 \u0432\u0441\u0435\u0433\u043e \u043c\u0438\u0440\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430."},{id:"tab-3",title:"Bali",content:"\u0412\u043e\u043f\u0440\u0435\u043a\u0438 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0451\u043d\u043d\u043e\u043c\u0443 \u0441\u0440\u0435\u0434\u0438\n              \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0442\u0443\u0440\u0438\u0441\u0442\u043e\u0432 \u043f\u0440\u043e\u0438\u0437\u043d\u043e\u0448\u0435\u043d\u0438\u044e,\n              \u0443\u0434\u0430\u0440\u0435\u043d\u0438\u0435 \u0432 \u0441\u043b\u043e\u0432\u0435 \xab\u0411\u0430\u043b\u0438\xbb \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f\n              \u043d\u0430 \u043f\u0435\u0440\u0432\u044b\u0439 \u0441\u043b\u043e\u0433, \u0430 \u043d\u0435 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439."}]),_=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement("div",{className:"content"},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,render:function(){return c.a.createElement("h1",null,"Home")}}),c.a.createElement(i.a,{path:"/tabs/:id?",render:function(e){var t=e.match;return c.a.createElement(o,{tabs:b,tabId:t.params.tabId})}}))))};r.a.render(c.a.createElement(s.a,null,c.a.createElement(_,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cfb87c5e.chunk.js.map