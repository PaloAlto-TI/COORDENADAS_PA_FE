(this["webpackJsonpdistribucion-inventario-app"]=this["webpackJsonpdistribucion-inventario-app"]||[]).push([[0],{117:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(10),i=n.n(o),r=(n(62),n(63),n(64),n(65),n(66),n(5)),s=n(11),l=(n(70),n(1)),d=function(e){var t=e.cambio,n=e.pasar;console.log(t);var a=Object(c.useState)(null),o=Object(r.a)(a,2),i=o[0],d=(o[1],t.seccion.map((function(e){return i?Object(l.jsx)("p",{}):Object(l.jsx)("div",{className:"p-col-5",children:Object(l.jsx)(s.Button,{type:"button",label:e.nombre,badge:e.productos.length?e.productos.map((function(e){return e.cantidad})).reduce((function(e,t){return e+t}),0).toString():"0",onClick:function(){return t=e.nombre,c=e.productos,void n(t,c);var t,c},className:"p-d-block p-mx-auto"})},e.nombre)})));return Object(l.jsx)("div",{className:"p-p-4",children:Object(l.jsx)("div",{className:"p-grid p-justify-center",children:d})})},u=(n(72),n(25)),j=n(50),b=n(12),O=n(16),h=n(51),p=n.n(h),m=n(52),f=n(53),v=n(54),x=(n(117),function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(20),i=Object(r.a)(o,2),s=i[0],d=i[1],u=Object(c.useState)(""),j=Object(r.a)(u,2),b=j[0],h=j[1];return Object(l.jsx)("div",{className:"dropdown-demo",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h5",{children:"Advanced with Templating, Filtering and Clear Icon"}),Object(l.jsx)(f.Dropdown,{className:"test",value:n,options:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],onChange:function(e){a(e.value)},optionLabel:"name",filter:!0,showClear:!0,filterBy:"name",placeholder:"Select a Country",valueTemplate:function(e,t){return e?Object(l.jsx)("div",{className:"country-item country-item-value",children:Object(l.jsx)("div",{children:e.name})}):Object(l.jsx)("span",{children:t.placeholder})},itemTemplate:function(e){return Object(l.jsx)("div",{className:"country-item",children:Object(l.jsx)("div",{children:e.name})})}}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"p-field p-col-12 p-md-3",children:[Object(l.jsx)("label",{htmlFor:"stacked",children:"Stacked"}),Object(l.jsx)(v.InputNumber,{id:"stacked",value:s,onValueChange:function(e){return d(e.value)},showButtons:!0})]}),Object(l.jsx)("br",{}),Object(l.jsx)("h5",{children:"Basic"}),Object(l.jsx)(O.InputText,{value:b,onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("span",{className:"p-ml-2",children:b})]})})}),g=n(55),N=n(17),w=n(18),y=n(19),C=n.n(y),S=(n(136),function(e){var t=e.productos,n=Object(c.useState)([]),o=Object(r.a)(n,2),i=o[0],d=o[1],h=Object(c.useState)(null),f=Object(r.a)(h,2),v=f[0],N=f[1],w=Object(c.useState)(!1),y=Object(r.a)(w,2),C=y[0],S=y[1],k=Object(c.useState)("center"),A=Object(r.a)(k,2),B=(A[0],A[1],{displayResponsive:S}),E=function(e){B["".concat(e)](!1)};Object(c.useEffect)((function(){p.a.init({key:"1ql5KNB3jFHOAdqnZ0whtO2PHqOnTs5J0upieWU3v1L8",simpleSheet:!0}).then((function(e){return d(t.map((function(t){return Object(u.a)(Object(u.a)({},t),e.find((function(e){return e.codigo===t.codigo})))})))}))}),[]);var D,F=Object(l.jsxs)("div",{className:"table-header",children:[Object(l.jsx)(s.Button,{label:"Nuevo",icon:"pi pi-plus",className:"p-mr-2",onClick:function(){return S(!0)}}),Object(l.jsx)(s.Button,{label:"Eliminar",icon:"pi pi-trash",className:"p-button-danger"}),Object(l.jsxs)("span",{className:"p-input-icon-left",children:[Object(l.jsx)("i",{className:"pi pi-search"}),Object(l.jsx)(O.InputText,{type:"search",onInput:function(e){return N(e.target.value)},placeholder:"Buscar..."})]})]});return Object(l.jsx)("div",{className:"datatable-responsive-demo",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)(j.DataTable,{header:F,selectionMode:"single",value:i,className:"p-datatable-responsive-demo",paginator:!0,rows:10,globalFilter:v,children:[Object(l.jsx)(b.Column,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),Object(l.jsx)(b.Column,{field:"codigo",style:{width:"20%"},header:"C\xd3DIGO",body:function(e){return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)("span",{className:"p-column-title",children:"CODIGO"}),Object(l.jsx)("br",{}),e.codigo]})},sortable:!0}),Object(l.jsx)(b.Column,{field:"nombre",style:{width:"30%"},header:"NOMBRE",body:function(e){return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)("span",{className:"p-column-title",children:"NOMBRE"}),Object(l.jsx)("br",{}),e.nombre]})},sortable:!0}),Object(l.jsx)(b.Column,{field:"cantidad",style:{width:"20%"},header:"CANTIDAD",body:function(e){return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)("span",{className:"p-column-title",children:"CANTIDAD"}),Object(l.jsx)("br",{}),e.cantidad]})},sortable:!0}),Object(l.jsx)(b.Column,{field:"observacion",style:{width:"25%"},header:"OBSERVACI\xd3N",body:function(e){return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)("span",{className:"p-column-title",children:"OBSERVACI\xd3N"}),Object(l.jsx)("br",{}),e.observacion]})},sortable:!0})]}),Object(l.jsx)(m.Dialog,{blockScroll:!0,contentStyle:{overflow:"visible"},header:"Header",visible:C,onHide:function(){return E("displayResponsive")},breakpoints:{"960px":"75vw"},style:{width:"50vw"},footer:(D="displayResponsive",Object(l.jsxs)("div",{children:[Object(l.jsx)(s.Button,{label:"No",icon:"pi pi-times",onClick:function(){return E(D)},className:"p-button-text"}),Object(l.jsx)(s.Button,{label:"Yes",icon:"pi pi-check",onClick:function(){return E(D)},autoFocus:!0})]})),children:Object(l.jsx)(g.ScrollPanel,{style:{width:"100%",height:"300px"},children:Object(l.jsx)(x,{})})})]})})}),k=n(13),A=n(26),B=function(){function e(){Object(N.a)(this,e),this.baseUrl="http://localhost:8080/bodega"}return Object(w.a)(e,[{key:"getBodega",value:function(){return C.a.get(this.baseUrl+"s/6081d0262705134414ea1b7c").then((function(e){return e.data}))}}]),e}(),E=(n(138),n(27)),D=(n(140),function(e){var t=e.nombre,n=e.productos;return console.log(e),Object(l.jsxs)("div",{children:[Object(l.jsx)(E.Panel,{header:"NOMBRE DE LA COORDENADA",children:Object(l.jsx)("p",{children:t})}),Object(l.jsx)(E.Panel,{header:"CONTENIDO",children:Object(l.jsx)(S,{productos:n})})]})}),F=function(){var e,t=Object(c.useState)(null),n=Object(r.a)(t,2),a=(n[0],n[1]),o=Object(c.useState)(null),i=Object(r.a)(o,2),u=i[0],j=i[1],b=Object(c.useState)([]),O=Object(r.a)(b,2),h=O[0],p=O[1],m=Object(c.useState)({id:"",codigo:"",nombre:"",estado:0,dimension:{x:0,y:0,z:0},coordenadas:[]}),f=Object(r.a)(m,2),v=f[0],x=f[1],g=new B,N=function(e,t){console.log("p",t),p(t),j(e),a(!0)};Object(c.useEffect)((function(){g.getBodega().then((function(e){return x(e)}))}),[]);var w=[];v.dimension&&(w=Array.from({length:v.dimension.z},(function(e,t){return String.fromCharCode("A".charCodeAt(0)+t)})));var y=v.coordenadas.map((function(e){var t=w[e.seccion[0].ubicacion.z];return Object(l.jsx)(A.TabPanel,{header:t,children:Object(l.jsx)(d,{cambio:e,pasar:N})},t)}));return Object(l.jsx)("div",{className:"p-d-flex p-jc-center",children:Object(l.jsx)("div",{className:"tabview-demo",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)(s.Button,(e={className:"test",icon:"pi pi-arrow-left"},Object(k.a)(e,"className","p-button-rounded p-button-secondary"),Object(k.a)(e,"onClick",(function(){return j(null)})),e)),u?Object(l.jsx)(D,{nombre:u,productos:h}):Object(l.jsx)(A.TabView,{children:y})]})})})};n(56);var I=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(F,{})})},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/COORDENADAS_PA_FE",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/COORDENADAS_PA_FE","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}(),P()},62:function(e,t,n){},63:function(e,t,n){},70:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.1d996070.chunk.js.map