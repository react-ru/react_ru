(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,a,t){e.exports=t(439)},194:function(e,a,t){},199:function(e,a,t){},201:function(e,a,t){},205:function(e,a,t){},309:function(e,a,t){},439:function(e,a,t){"use strict";t.r(a);var n,l=t(1),r=t.n(l),c=t(40),m=t.n(c),u=t(464),i=t(32),o=t(453),s=t(454),E=t(443),d=t(450),p=t(451),b=function(){return null},g=(t(194),function(){return r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{className:"Logo__image",src:"/img/icon.png"}))}),f="https://bot.react-chat.ru",h=-0xe922808e38,v=t(73),O=t.n(v),j=(t(199),function(){return O()("".concat(f,"/api/members_count?chat_id=").concat(h)).members_count}),_=function(){return r.a.createElement("div",{className:"MembersCount",title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435"},r.a.createElement(l.Suspense,{fallback:"..."},r.a.createElement(j,null)))},y=(t(201),function(){return r.a.createElement("div",{className:"HeroUnit"},r.a.createElement(E.a,null,r.a.createElement("div",{className:"HeroUnit__first_line"},r.a.createElement(g,null),r.a.createElement(_,null),r.a.createElement("h1",{className:"HeroUnit__title"},"React_Ru")),r.a.createElement("div",{className:"HeroUnit__second_line"},r.a.createElement("p",null,"\u0420\u0443\u0441\u0441\u043a\u043e\u044f\u0437\u044b\u0447\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e React \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0432 telegram"))))}),k=t(444),x=t(179),S=t(42),N=t(12),C=t(56),w=t(43),T=t(466),A=t(467),R=Object(T.a)({TOGGLE:function(e){return{name:e}}}).toggle,q=Object(A.a)(Object(C.a)({},R,function(e,a){var t=a.payload.name;return Object(w.a)({},e,Object(C.a)({},t,{open:!Object(S.get)(e,[t,"open"],!1)}))}),{}),F=function(e){return function(a){var t=Object(x.a)({isOpen:function(a){return Object(S.get)(a,["modal",e,"open"],!1)}});return Object(i.b)(t,function(a){return Object(N.bindActionCreators)({toggle:function(){return R(e)}},a)})(a)}},M=F("rehabiltiation")(function(e){var a=e.toggle;return r.a.createElement(k.a,{onClick:a},"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0441\u043b\u0438 \u043d\u0430\u0440\u0443\u0448\u0438\u043b \u043f\u0440\u0430\u0432\u0438\u043b\u0430")}),G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"\u043a\u043d\u0438\u0433\u0430"},"\ud83d\udcd6")," ","\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"),r.a.createElement("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e \u0431\u044b\u043b\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438 \u0433\u043e\u0441\u0442\u0435\u043f\u0440\u0435\u0438\u043c\u043d\u044b\u043c, \u043c\u044b, \u0435\u0433\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f, \u043e\u0431\u044f\u0437\u0443\u0435\u043c\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u043c \u043e\u0442 \u043f\u0440\u0435\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0438 \u043e\u0441\u043a\u043e\u0440\u0431\u043b\u0435\u043d\u0438\u0439, \u0432\u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430, \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0442\u0435\u043b\u0430, \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u0438, \u044d\u0442\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438, \u0433\u0435\u043d\u0434\u0435\u0440\u043d\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438, \u0441\u0430\u043c\u043e\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0443\u0440\u043e\u0432\u043d\u044f \u043e\u043f\u044b\u0442\u0430, \u0432\u0435\u0440\u043e\u0438\u0441\u043f\u043e\u0432\u0435\u0434\u0430\u043d\u0438\u044f, \u0433\u0435\u043d\u0434\u0435\u0440\u043d\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0438 \u0441\u0435\u043a\u0441\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0439."),r.a.createElement("p",null,"\u041c\u044b \u0441\u0442\u0430\u0440\u0430\u0435\u043c\u0441\u044f \u043f\u043e\u043b\u043d\u043e \u0438 \u043f\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u043f\u0440\u043e\u0441\u044c\u0431\u0443, \u0430\u0434\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0443."),r.a.createElement("p",null,"\u041c\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0432 \u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u043f\u0440\u044f\u043c\u044b\u0445 \u0438 \u043a\u043e\u0441\u0432\u0435\u043d\u043d\u044b\u0445 \u043e\u0441\u043a\u043e\u0440\u0431\u043b\u0435\u043d\u0438\u0439, \u043e\u0431\u0441\u0446\u0435\u043d\u043d\u0443\u044e \u043b\u0435\u043a\u0441\u0438\u043a\u0443 (\u043c\u0430\u0442), \u0438 \u0443\u0432\u0430\u0436\u0430\u0435\u043c \u0432\u0441\u0435\u0445 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430."),r.a.createElement("p",null,"\u0422\u0430\u043a\u0436\u0435, \u043c\u044b \u043d\u0435 \u043e\u0442\u0437\u044b\u0432\u0430\u0435\u043c\u0441\u044f \u0443\u043d\u0438\u0447\u0438\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043b\u044e\u0431\u044b\u0445 \u043b\u044e\u0434\u0435\u0439, \u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u0438\u043b\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0432\u043d\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430."),r.a.createElement("p",null,"\u041c\u044b \u043d\u0430\u0446\u0435\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0441\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u0435 \u0432\u0437\u0433\u043b\u044f\u0434\u043e\u0432."),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u0438 \u0432\u0441\u0435\u0445 \u0447\u043b\u0435\u043d\u043e\u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430."),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"\u043f\u0430\u043b\u0435\u0446 \u0432\u0432\u0435\u0440\u0445"},"\ud83d\udc4d\ud83c\udffc")," ","\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u0417\u0430\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0441\u0432\u043e\u0438\u043c \u043e\u043f\u044b\u0442\u043e\u043c."),r.a.createElement("li",null,"\u041e\u0431\u0441\u0443\u0436\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438."),r.a.createElement("li",null,"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0439\u0442\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u044b\u0445, \u043a\u043e\u043b\u043b\u0435\u0433 \u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432."),r.a.createElement("li",null,"\u0415\u0441\u043b\u0438 \u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b \u0441 \u0447\u044c\u0438\u043c-\u0442\u043e \u043c\u043d\u0435\u043d\u0438\u0435\u043c, \u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c."),r.a.createElement("li",null,"\u0415\u0441\u043b\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u0433\u043e\u0432\u043e\u0440\u044f\u0449\u0435\u0433\u043e."),r.a.createElement("li",null,"\u041d\u0435 \u043c\u043e\u043b\u0447\u0438\u0442\u0435, \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0435\u0442\u0435 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441."),r.a.createElement("li",null,"\u0421\u043f\u0440\u043e\u0441\u0438\u0442\u0435, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0435.")),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"\u043f\u0430\u043b\u0435\u0446 \u0432\u043d\u0438\u0437"},"\ud83d\udc4e\ud83c\udffc")," ","\u041d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u041e\u0441\u043a\u043e\u0440\u0431\u043b\u0435\u043d\u0438\u044f, \u043e\u0431\u0441\u0446\u0435\u043d\u043d\u0430\u044f \u043b\u0435\u043a\u0441\u0438\u043a\u0430."),r.a.createElement("li",null,"\u041d\u0430\u0441\u043c\u0435\u0448\u043a\u0438, \u0443\u043d\u0438\u0436\u0430\u044e\u0449\u0438\u0435 \u0434\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u043e \u0448\u0443\u0442\u043a\u0438."),r.a.createElement("li",null,"\u0423\u0433\u0440\u043e\u0437\u044b \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0447\u043b\u0435\u043d\u043e\u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430."),r.a.createElement("li",null,"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438."),r.a.createElement("li",null,"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0441\u0435\u043a\u0441\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430, \u0441\u0446\u0435\u043d \u043d\u0430\u0441\u0438\u043b\u0438\u044f."),r.a.createElement("li",null,"\u041e\u0431\u043c\u0430\u043d, \u043a\u043b\u0435\u0432\u0435\u0442\u0430, \u0432\u043e\u0437\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u0441\u0441\u043e\u0440 \u0438 \u0440\u0430\u0437\u0434\u043e\u0440\u043e\u0432, \u043f\u0440\u0438\u0437\u044b\u0432\u044b \u043a \u043d\u0435\u0431\u043b\u0430\u0433\u043e\u0432\u0438\u0434\u043d\u044b\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c."),r.a.createElement("li",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0435\u043f\u0440\u0438\u0435\u043c\u043b\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f.")),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"\u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e"},"\ud83d\udeab")," ","\u0421\u0442\u0440\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u041d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u0430, \u0441\u043f\u0430\u043c"),r.a.createElement("li",null,"\u041d\u0435\u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b"),r.a.createElement("li",null,"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"),r.a.createElement("li",null,"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439, \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442, \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u0435\u0439")),r.a.createElement(M,null))},H=t(448),L=t(449),U=t(445),D=t(446),J=t(447),Y=(t(205),function(e){var a=e.name,t=e.avatarSrc;return r.a.createElement(U.a,{tag:"a",href:"tg://resolve?domain=".concat(a)},r.a.createElement(D.a,{top:!0,width:"100%",src:t}),r.a.createElement(J.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{tag:"a",href:"tg://resolve?domain=".concat(a)},"@",a))))}),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"\u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u044f"},"\ud83d\udc6e\ud83c\udffb"),"\u041c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u044f"),r.a.createElement(H.a,null,r.a.createElement(L.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{xs:6,md:4},r.a.createElement(Y,{name:"Ychebotaev",avatarSrc:"/img/ychebotaev.jpg"})),r.a.createElement(p.a,{xs:6,md:4},r.a.createElement(Y,{name:"KorolDmitry",avatarSrc:"/img/dmitry-korol.jpg"})),r.a.createElement(p.a,{xs:6,md:4},r.a.createElement(Y,{name:"inkognito1",avatarSrc:"/img/pavel.jpg"})))),r.a.createElement(L.a,null,r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"\u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440"},"\ud83d\udc68\u200d\ud83d\udcbb")," ","\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e \u043d\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u0432\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u0430\u0445-\u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u0445"),r.a.createElement("p",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441"," ",r.a.createElement("a",{href:"tg://resolve?domain=ychebotaev"},"@ychebotaev")," \u0432 telegram, \u0435\u0441\u043b\u0438 \u0432\u044b:"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u0418\u043c\u0435\u0435\u0442\u0435 \u0432\u0440\u0435\u043c\u044f, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440\u0441\u043a\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u043e\u0439."),r.a.createElement("li",null,"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442\u0435\u0441\u044c \u0438 \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c react \u0432 \u043a\u0430\u0440\u044c\u0435\u0440\u0435."),r.a.createElement("li",null,"\u041f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0435 \u0438 \u0433\u043e\u0442\u043e\u0432\u044b \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435.")),r.a.createElement("div",{className:"text-center",style:{marginTop:"1rem",marginBottom:"1rem"}},r.a.createElement(k.a,{tag:"a",href:"tg://resolve?domain=ychebotaev"},"\u041f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u0432 \u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440\u044b")))))},B=t(452),I=t(181),K=(t(309),function(e){e.id;var a=e.from,t=e.text,n=e.date;return r.a.createElement(B.a,{className:"ChatMessage",id:"id"},r.a.createElement(B.a,{className:"ChatMessage__body",body:!0},r.a.createElement("div",{className:"ChatMessage__time"},Object(I.distanceInWordsToNow)(1e3*n)),r.a.createElement(B.a,{className:"ChatMessage__heading",heading:!0},a.first_name," ",a.last_name),t))}),W=function(){var e=O()("".concat(f,"/api/latest_messages?chat_id=").concat(h,"&latest=7"));return r.a.createElement(r.a.Fragment,null,Object(S.map)(e.reverse(),function(e){return r.a.createElement(K,Object.assign({},e,{key:e._id}))}))},X=F("ask-question")(function(e){var a=e.toggle;return r.a.createElement(k.a,{onClick:a},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0447\u0430\u0442")}),P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"\u0447\u0430\u0442"},"\u270d\ud83c\udffb"),"\u0427\u0442\u043e \u0432\u043d\u0443\u0442\u0440\u0438"),r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(l.Suspense,{fallback:"..."},r.a.createElement(W,null)),r.a.createElement("div",{className:"text-center"},r.a.createElement(X,null)))))},Q=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{color:"primary",size:"lg",tag:"a",href:"tg://resolve?domain=react_ru",onClick:function(){ym(46609578,"reachGoal","GOTO_CHAT")}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0443"))},V=function(e){var a=e.show,t=void 0===a||a,n=e.children;return t?r.a.createElement(E.a,{style:{marginBottom:"2rem",marginTop:"2rem"}},n):null},Z=function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement(d.a,null,r.a.createElement(p.a,{xs:12,md:{size:6,offset:2}},r.a.createElement(V,null,r.a.createElement(G,null)),r.a.createElement(V,null,r.a.createElement(z,null)),r.a.createElement(V,null,r.a.createElement(P,null)),r.a.createElement(V,null,r.a.createElement(Q,null)))))},$=t(47),ee=t.n($),ae=t(78),te=t(28),ne=t(458),le=t(469),re=t(459),ce=t(460),me=t(461),ue=t(79),ie=t.n(ue),oe=t(463),se=t(465),Ee=t(455),de=t(456),pe=t(457),be=t(185),ge=Object(oe.a)({form:"ask-question"})(function(e){var a=e.handleSubmit,t=e.onRecaptchaComplete,n=e.onRecaptchaExpire,l=e.disabled;return r.a.createElement(Ee.a,{id:"ask-question",name:"ask-question",onSubmit:a},r.a.createElement("p",null,"\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0447\u0435\u0442\u043a\u043e, \u044f\u0441\u043d\u043e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e."),r.a.createElement(de.a,null,r.a.createElement(pe.a,{tag:se.a,component:"textarea",name:"text",placeholder:"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",rows:"5",disabled:l}),r.a.createElement("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f markdown \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430.")),r.a.createElement(de.a,null,r.a.createElement(be.a,{sitekey:"6Lf85YYUAAAAAFYLv2S8XJxOqDCK3MRJNytc8g82",size:"normal",onChange:t,onExpire:n})))}),fe=function(e){return e.success?r.a.createElement(ne.a,{color:"success"},"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435! \u0412\u0441\u0442\u0443\u043f\u0438\u0442\u0435 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441."):null},he=function(e){var a=e.error;return a?r.a.createElement(ne.a,{color:"danger"},a.stack):null},ve=function(e){var a=e.disabled;e.toggle;return r.a.createElement(k.a,{form:"ask-question",color:"primary",disabled:a},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")},Oe=function(e){var a=e.toggle,t=e.disabled;return r.a.createElement(k.a,{tag:"a",href:"tg://resolve?domain=react_ru",color:"success",disabled:t,onClick:function(){ym(46609578,"reachGoal","GOTO_CHAT"),a()}},"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f")},je=F("ask-question")(function(e){var a=e.toggle,t=e.isOpen,n=Object(l.useState)(!1),c=Object(te.a)(n,2),m=c[0],u=c[1],i=Object(l.useState)(null),o=Object(te.a)(i,2),s=o[0],E=o[1],d=Object(l.useState)(!1),p=Object(te.a)(d,2),b=p[0],g=p[1],v=Object(l.useState)(!1),O=Object(te.a)(v,2),j=O[0],_=O[1],y=function(){var e=Object(ae.a)(ee.a.mark(function e(a){var t,n;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),E(null),g(!1),e.next=6,ie.a.post("".concat(f,"/api/ask_question"),Object(w.a)({chat_id:h},a));case 6:t=e.sent,n=t.data,g(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),E(e.t0);case 14:return e.prev=14,u(!1),e.finish(14);case 17:case"end":return e.stop()}},e,this,[[0,11,14,17]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(le.a,{isOpen:t,toggle:a},r.a.createElement(re.a,{toggle:a},"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u0432 \u0447\u0430\u0442"),r.a.createElement(ce.a,null,r.a.createElement(fe,{success:b}),r.a.createElement(he,{error:s}),r.a.createElement(ge,{onSubmit:y,disabled:m,onRecaptchaComplete:function(){_(!0)},onRecaptchaExpire:function(){_(!1)}})),r.a.createElement(me.a,null,b?r.a.createElement(Oe,null):r.a.createElement(ve,{disabled:m||!j})))}),_e=t(462),ye=t(470),ke=Object(oe.a)({form:"rehabilitation"})(function(e){var a=e.handleSubmit,t=e.disabled;return r.a.createElement(Ee.a,{id:"rehabilitation",onSubmit:a},r.a.createElement(de.a,null,r.a.createElement("label",{htmlFor:"username"},"\u0412\u0430\u0448 ID \u0432 telegram"),r.a.createElement(_e.a,null,r.a.createElement(ye.a,{addonType:"prepend"},"@"),r.a.createElement(pe.a,{tag:se.a,component:"input",name:"username",placeholder:"ychebotaev",disabled:t}))),r.a.createElement(de.a,null,r.a.createElement("label",{htmlFor:"email"},"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"),r.a.createElement(pe.a,{tag:se.a,component:"input",name:"email",type:"email",placeholder:"yury.79120345101@gmail.com",disabled:t})),r.a.createElement(de.a,null,r.a.createElement(pe.a,{tag:se.a,component:"textarea",name:"text",placeholder:"\u041e\u043f\u0438\u0448\u0438\u0442\u0435, \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e",disabled:t})))}),xe=function(e){var a=e.error;return a?r.a.createElement(ne.a,{color:"danger"},a.stack):null},Se=function(e){var a=e.success,t=e.success.email;return a?r.a.createElement(ne.a,{color:"success"},"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435! \u041c\u044b \u043f\u0440\u0438\u0448\u043b\u0435\u043c \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 ",r.a.createElement("b",null,t),", \u043e\u0436\u0438\u0434\u0430\u0439\u0442\u0435."):null},Ne=function(e){var a=e.pending;return r.a.createElement(k.a,{form:"rehabilitation",color:"primary",type:"submit",disabled:a},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")},Ce=function(e){var a=e.pending,t=e.toggle;return r.a.createElement(k.a,{color:"primary",type:"button",disabled:a,onClick:t},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")},we=F("rehabiltiation")(function(e){var a=e.isOpen,t=e.toggle,n=Object(l.useState)(!1),c=Object(te.a)(n,2),m=c[0],u=c[1],i=Object(l.useState)(null),o=Object(te.a)(i,2),s=o[0],E=o[1],d=Object(l.useState)(!1),p=Object(te.a)(d,2),b=p[0],g=p[1],v=function(){var e=Object(ae.a)(ee.a.mark(function e(a){var t,n;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),E(null),g(!1),e.next=6,ie.a.post("".concat(f,"/api/rehabilitation"),Object(w.a)({chat_id:h},a));case 6:t=e.sent,n=t.data,g(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),E(e.t0);case 14:return e.prev=14,u(!1),e.finish(14);case 17:case"end":return e.stop()}},e,this,[[0,11,14,17]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(le.a,{isOpen:a,toggle:t},r.a.createElement(re.a,{toggle:t},"\u0420\u0435\u0430\u0431\u0438\u043b\u0438\u0442\u0430\u0446\u0438\u044f \u0432 \u0447\u0430\u0442\u0435"),r.a.createElement(ce.a,null,r.a.createElement(xe,{error:s}),r.a.createElement(Se,{success:b}),r.a.createElement(ke,{onSubmit:v,disabled:m})),r.a.createElement(me.a,null,b?r.a.createElement(Ce,{toggle:t,pending:m}):r.a.createElement(Ne,{pending:m})))}),Te=t(184),Ae=t(468).a,Re=(t(437),document.getElementById("root")),qe=(n=Object(N.combineReducers)({modal:q,form:Ae}),Object(N.createStore)(n,Object(Te.composeWithDevTools)())),Fe=r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{store:qe},r.a.createElement(u.a,null,r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:Z})))},null)),r.a.createElement(je,null),r.a.createElement(we,null)));m.a.render(Fe,Re)}},[[186,2,1]]]);
//# sourceMappingURL=main.6fc44094.chunk.js.map