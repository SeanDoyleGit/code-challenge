(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(21),r=n.n(c),l=n(19),s=n(13),o=n(16),u=n(41),m=(n(53),n(10)),p=n(11),f=n(15),g=n(12),d=n(14),E=n(9),h=n(8),_=(n(54),n(55),n(18)),b=n.n(_),j=(n(56),function(e){return i.a.createElement("div",{className:"logo ".concat(e.classes||"")},i.a.createElement("img",{alt:e.alt,src:e.src}))}),v=(n(57),function(e){return i.a.createElement("ul",{className:"menu ".concat(e.classes||"")},e.children)}),N=function(e){return i.a.createElement("li",{className:"menu__item ".concat(e.classes||"")},i.a.createElement(l.b,{className:"menu__item__link",to:e.link,exact:e.exact,activeClassName:"menu__item--active"},e.children))},k=function(e){return i.a.createElement("header",{className:"header"},i.a.createElement(j,{alt:"Adrenalin Media Logo",src:b.a}),i.a.createElement(v,null,i.a.createElement(N,{link:"/culture",exact:!0},"Culture"),i.a.createElement(N,{link:"/work",exact:!0},"Work"),i.a.createElement(N,{link:"/clients",exact:!0},"Clients"),i.a.createElement(N,{link:"/services",exact:!0},"Services"),i.a.createElement(N,{link:"/careers",exact:!0},"Careers"),i.a.createElement(N,{link:"/contact",exact:!0},"Contact")))},O=(n(63),function(e){return i.a.createElement("li",{className:"menu__link-wrapper ".concat(e.classes||"")},i.a.createElement("a",{className:"menu__link",href:e.href},e.children))}),y=function(e){return i.a.createElement("footer",{className:"footer"},i.a.createElement(j,{alt:"Adrenalin Media Logo",src:b.a}),i.a.createElement(v,null,i.a.createElement(O,{href:"#"},"Privacy"),i.a.createElement(O,{href:"#"},"Sitemap"),i.a.createElement(O,{href:"#"},"Facebook"),i.a.createElement(O,{href:"#"},"Linkedin"),i.a.createElement(O,{href:"#"},"Instagram"),i.a.createElement(O,{href:"#"},"Twitter")))},x=function(e){return e.listings},w=function(e,t){return e.listings.find(function(e){return e.id===parseInt(t)})},C=n(43),L=n.n(C).a.create({baseURL:"https://adrenalin-code-challenge.firebaseio.com/"}),T=function(){return function(e){L.get("/listings.json").then(function(t){e({type:"FETCH LISTINGS",listings:t.data})})}},S=(n(83),n(84),function(e){return i.a.createElement("div",{className:"listing__tag"},e.children)}),D=function(e){var t=e.transitionDelay,a=e.id,c=e.title_long,r=e.tag,l=e.thumb;return i.a.createElement(h.Transition,{in:!0,appear:!0,timeout:t},function(e){return i.a.createElement("div",{className:"listing listing-".concat(e)},i.a.createElement("div",{className:"listing__image-wrapper"},i.a.createElement(S,null,r),i.a.createElement("img",{className:"listing__thumbnail",alt:l,src:n(26)("./".concat(l))})),i.a.createElement("h2",{className:"listing__title"},c),i.a.createElement(N,{classes:"listing__link",link:"ListingDetail/".concat(a)},"VIEW CASE STUDY"))})},I=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchListings()}},{key:"render",value:function(){var e=this.props.listings.map(function(e,t){return i.a.createElement(D,Object.assign({transitionDelay:1e3+300*t,key:e.id},e))});return i.a.createElement(h.Transition,{in:!0,timeout:1e3},function(t){return i.a.createElement("div",{className:"listings-page listing-page-".concat(t)},e)})}}]),t}(a.Component),M=Object(s.b)(function(e){return{listings:x(e)}},function(e){return{fetchListings:function(){return e(T())}}})(I),q=(n(100),n(101),function(e){var t=e.tag,a=e.title,c=e.image,r=e.thumb,l=e.questions.map(function(e,t){return i.a.createElement("div",{className:"listing-detail__question",key:t,style:{transitionDelay:"".concat(t/10+.2,"s")}},i.a.createElement("h2",{className:"listing-detail__question__number"},"Question ",t+1),i.a.createElement("p",{className:"listing-detail__question__text"},e))});return i.a.createElement(h.Transition,{in:!0,appear:!0,timeout:1e3},function(e){return i.a.createElement("div",{className:"listing-detail listing-detail-".concat(e)},i.a.createElement("div",{className:"listing-detail__image-wrapper"},i.a.createElement(S,null,t),i.a.createElement("img",{className:"listing-detail__thumbnail",alt:r,src:n(26)("./".concat(r))}),i.a.createElement("img",{className:"listing-detail__image",alt:r,src:n(26)("./".concat(c))})),i.a.createElement("div",{className:"listing-detail__wrapper"},i.a.createElement("h1",{className:"listing-detail__title"},a),l))})}),A=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchListings()}},{key:"render",value:function(){var e;return e=this.props.listing?i.a.createElement(q,this.props.listing):i.a.createElement("h3",{className:"error",style:{color:"red",textAlign:"center",fontWeight:400}},"Sorry listing ",this.props.match.params.id," was not found."),i.a.createElement("div",{className:"listing-detail-page"},e)}}]),t}(a.Component),F=Object(s.b)(function(e,t){return{listing:w(e,t.match.params.id)}},function(e){return{fetchListings:function(){return e(T())}}})(A),U=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(k,null),i.a.createElement("div",{className:"main"},i.a.createElement(E.a,{render:function(e){var t=e.location;return i.a.createElement(h.TransitionGroup,null,i.a.createElement(h.CSSTransition,{key:t.key,timeout:900,classNames:"fade"},i.a.createElement(E.c,{location:t},i.a.createElement(E.a,{path:"/ListingDetail/:id",component:F}),i.a.createElement(E.a,{path:"/",component:M}))))}})),i.a.createElement(y,null))}}]),t}(a.Component),G=[],W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return"FETCH LISTINGS"===t.type?t.listings:e},H=Object(o.c)({listings:W}),J=Object(o.d)(H,Object(o.a)(u.a)),B=i.a.createElement(s.a,{store:J},i.a.createElement(l.a,null,i.a.createElement(U,null)));r.a.render(B,document.getElementById("root"))},18:function(e,t,n){e.exports=n.p+"static/media/adrenalin.305266b4.svg"},26:function(e,t,n){var a={"./1001.jpg":92,"./1001_thumb.jpg":93,"./1002.jpg":94,"./1002_thumb.jpg":95,"./1003.jpg":96,"./1003_thumb.jpg":97,"./1004.jpg":98,"./1004_thumb.jpg":99,"./adrenalin.svg":18};function i(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=c,e.exports=i,i.id=26},44:function(e,t,n){e.exports=n(102)},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},92:function(e,t,n){e.exports=n.p+"static/media/1001.1539fa57.jpg"},93:function(e,t,n){e.exports=n.p+"static/media/1001_thumb.1534c150.jpg"},94:function(e,t,n){e.exports=n.p+"static/media/1002.c7487b14.jpg"},95:function(e,t,n){e.exports=n.p+"static/media/1002_thumb.65ce0840.jpg"},96:function(e,t,n){e.exports=n.p+"static/media/1003.40c062a0.jpg"},97:function(e,t,n){e.exports=n.p+"static/media/1003_thumb.ead585af.jpg"},98:function(e,t,n){e.exports=n.p+"static/media/1004.806eda6e.jpg"},99:function(e,t,n){e.exports=n.p+"static/media/1004_thumb.2f12a978.jpg"}},[[44,1,2]]]);
//# sourceMappingURL=main.feca2317.chunk.js.map