(this["webpackJsonporder-up"]=this["webpackJsonporder-up"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(6),c=r.n(o),u=(r(12),r(4)),i=r(3);r(13);function m(e){var t=e.foodItem,r=e.buttonAction,n=e.buttonText;return a.a.createElement("div",{className:"food-item"},t.item&&a.a.createElement("h2",{style:{margin:"auto 0"}},t.item,":"),"Size: ",t.size.toUpperCase(),a.a.createElement("br",null),"Price: $",parseFloat(1*t.price).toFixed(2),a.a.createElement("button",{onClick:function(){return r(t)}},n))}function s(e){var t=e.currentOrder,r=e.updateCurrentOrder;return a.a.createElement("div",{className:"order-page page-section"},a.a.createElement("h1",null,"Order Total: $",(1*t.total).toFixed(2)),a.a.createElement("hr",null),a.a.createElement("h4",{className:"page-item-area"},t.items.length?t.items.map((function(e,t){return a.a.createElement(m,{buttonAction:function(){return r(e)},buttonText:"Remove",key:"order".concat(e.item).concat(t),foodItem:e})})):a.a.createElement("div",{className:"center-floating-text"},a.a.createElement("strong",null,"...There are no Items on this order yet"))))}var l=r(1),d=r.n(l),p=r(2);function f(e){var t=e.menuItem,r=e.updateCurrentOrder;return a.a.createElement("div",{className:"menu-item"},a.a.createElement("h2",null,t.item),a.a.createElement("h4",null,t.options.length&&t.options.map((function(e,n){return a.a.createElement(m,{buttonAction:function(e){return r(Object(u.a)({item:t.item},e))},buttonText:"Add To Order",foodItem:e,key:"option".concat(n)})}))))}var h=function(){var e=Object(p.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://mobile-dev-code-project.s3-us-west-2.amazonaws.com/project.json");case 3:if(!(t=e.sent)){e.next=9;break}return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r.menu);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();function v(e){var t=e.updateCurrentOrder,r=Object(n.useState)([]),o=Object(i.a)(r,2),c=o[0],u=o[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"menu-page page-section"},a.a.createElement("h1",null,"Menu"),a.a.createElement("hr",null),a.a.createElement("div",{className:"page-item-area"},c&&c.map((function(e,r){return a.a.createElement(f,{key:"".concat(e.item).concat(r),menuItem:e,updateCurrentOrder:function(e){return t(e)}})}))))}var E=function(){var e=Object(n.useState)({orderId:Date.now(),items:[],total:0}),t=Object(i.a)(e,2),r=t[0],o=t[1],c=function(e){var t,n=e.orderItem,a=e.updateMethod,c=r.total;switch(a){case"add":t=r.items.concat(Object(u.a)({uid:Date.now()},n)),c+=n.price;break;case"remove":t=r.items.filter((function(e){return n.uid!==e.uid})),c-=n.price}o({orderId:r.orderId,items:t,total:c})};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"header"},a.a.createElement("em",null,a.a.createElement("h1",null,"Order UP!"))),a.a.createElement(s,{currentOrder:r,updateCurrentOrder:function(e){return c({orderItem:e,updateMethod:"remove"})}}),a.a.createElement(v,{updateCurrentOrder:function(e){return c({orderItem:e,updateMethod:"add"})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,r){e.exports=r(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.6cb51986.chunk.js.map