(this["webpackJsonpdistribucion-inventario-app"]=this["webpackJsonpdistribucion-inventario-app"]||[]).push([[0],{126:function(e,t,n){},159:function(e,t,n){},161:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(10),i=n.n(a),r=(n(70),n(71),n(72),n(73),n(3)),s=n(12),l=(n(77),n(1)),u=function(e){var t=e.cambio,n=e.pasar;console.log(t);var o=Object(c.useState)(null),a=Object(r.a)(o,2),i=a[0],u=(a[1],t.seccion.map((function(e){return i?Object(l.jsx)("p",{}):Object(l.jsx)("div",{className:"p-col-5",children:Object(l.jsx)(s.Button,{type:"button",label:e.nombre,badge:e.productos.length?e.productos.map((function(e){return e.cantidad})).reduce((function(e,t){return e+t}),0).toString():"0",onClick:function(){return t=e.nombre,c=e.productos,void n(t,c);var t,c},className:"p-d-block p-mx-auto"})},e.nombre)})));return Object(l.jsx)("div",{className:"p-p-4",children:Object(l.jsx)("div",{className:"p-grid p-justify-center",children:u})})},d=(n(79),n(18)),b=n.n(d),j=n(13),p=n(26),O=n(58),h=n(19),f=n(25),m=n(59),g=n.n(m),v=n(27),x=n(16),N=(n(124),n(60)),w=n(61),S=n.n(w),y=(n(126),function(e){var t=e.tipos,n=(e.aux,e.setProduct),o=e.product,a=e.edit,i=Object(c.useState)(null),s=Object(r.a)(i,2),u=(s[0],s[1],Object(c.useState)(20)),d=Object(r.a)(u,2),b=(d[0],d[1],Object(c.useState)("")),p=Object(r.a)(b,2),O=(p[0],p[1],function(e,t){n(Object(j.a)(Object(j.a)({},o),{},Object(x.a)({},t,e))),console.log(o)});return Object(l.jsx)("div",{className:"dropdown-demo",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h5",{children:"Nombre del producto:"}),Object(l.jsx)(S.a,{placeholder:"Seleccione un producto...",options:t,labelField:"nombre",searchBy:"nombre",noDataRenderer:function(e){e.props,e.state,e.methods;return Object(l.jsx)("p",{children:"No hay coincidencias"})},onChange:function(e){return O(e[0].codigo,"codigo")},style:{width:"90%"},values:o.codigo?[t.find((function(e){return e.codigo===o.codigo}))]:[],disabled:!!a}),Object(l.jsx)("h5",{children:"Cantidad de producto:"}),Object(l.jsx)(N.InputNumber,{min:1,value:o.cantidad,onValueChange:function(e){return O(e.target.value,"cantidad")},showButtons:!0}),Object(l.jsx)("h5",{children:"Observaci\xf3n:"}),Object(l.jsx)(f.InputText,{style:{width:"90%"},value:o.observacion,onChange:function(e){return O(e.target.value,"observacion")}})]})})}),k=n(28),C=n(21),B=n(22),E=n(17),A=n.n(E),D=function(){function e(){Object(C.a)(this,e),this.baseUrl="https://distribucion-inventario.herokuapp.com/bodega"}return Object(B.a)(e,[{key:"getBodega",value:function(){return A.a.get(this.baseUrl+"s/6081d0262705134414ea1b7c").then((function(e){return e.data}))}},{key:"updateBodega",value:function(e){return A.a.put(this.baseUrl+"/6081d0262705134414ea1b7c",e).then((function(e){return e.data}))}}]),e}(),I=(n(159),function(e){var t=e.productos,n=e.bodega,a=e.setBodega,i=e.nombre,u=Object(c.useState)([]),d=Object(r.a)(u,2),m=d[0],x=d[1],N=Object(c.useState)([]),w=Object(r.a)(N,2),S=w[0],C=w[1],B=Object(c.useState)({codigo:null,cantidad:null,observacion:null}),E=Object(r.a)(B,2),A=E[0],I=E[1],R=Object(c.useState)(!0),P=Object(r.a)(R,2),F=(P[0],P[1],Object(c.useState)(!1)),T=Object(r.a)(F,2),U=T[0],W=T[1],L=Object(c.useState)(null),z=Object(r.a)(L,2),M=z[0],G=z[1],_=Object(c.useState)([]),H=Object(r.a)(_,2),V=H[0],q=H[1],J=Object(c.useState)(!1),K=Object(r.a)(J,2),Z=K[0],$=K[1],Q=Object(c.useState)(!1),X=Object(r.a)(Q,2),Y=X[0],ee=X[1],te=Object(c.useState)(!1),ne=Object(r.a)(te,2),ce=ne[0],oe=ne[1],ae=Object(c.useState)("center"),ie=Object(r.a)(ae,2),re=(ie[0],ie[1],{displayResponsive:$}),se={displayResponsive2:ee},le={displayResponsive3:oe},ue=function(){var e=Object(p.a)(b.a.mark((function e(t){var c,o,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=n).coordenadas.forEach((function(e){e.seccion.forEach((function(e){e.nombre===i&&(e.productos.push(A),x(e.productos.map((function(e){return Object(j.a)(Object(j.a)({},e),S.find((function(t){return t.codigo===e.codigo})))}))))}))})),o=new D,console.log(c),e.next=6,o.updateBodega(c).then((function(e){return a(e)}));case 6:r=e.sent,console.log("r",r),re["".concat(t)](!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(p.a)(b.a.mark((function e(t){var c,o,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n,o=A.codigo,console.log(o),c.coordenadas.forEach((function(e){e.seccion.forEach((function(e){if(e.nombre===i){var t=e.productos.findIndex((function(e){return e.codigo==o}));e.productos[t].codigo=A.codigo,e.productos[t].cantidad=A.cantidad,e.productos[t].observacion=A.observacion,x(e.productos.map((function(e){return Object(j.a)(Object(j.a)({},e),S.find((function(t){return t.codigo===e.codigo})))})))}}))})),r=new D,console.log(c),e.next=8,r.updateBodega(c).then((function(e){return a(e)}));case 8:s=e.sent,console.log("r",s),q([]),le["".concat(t)](!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){g.a.init({key:"1ql5KNB3jFHOAdqnZ0whtO2PHqOnTs5J0upieWU3v1L8",simpleSheet:!0}).then((function(e){return je(e)}))}),[]);var be,je=function(e){C(e),x(t.map((function(t){return Object(j.a)(Object(j.a)({},t),e.find((function(e){return e.codigo===t.codigo})))})))},pe=Object(l.jsxs)("div",{className:"p-grid",children:[Object(l.jsx)("div",{className:"p-col-1",children:0==V.length?Object(l.jsx)(s.Button,{label:"NUEVO",icon:"pi pi-plus",className:"p-button-sm",onClick:function(){return I({codigo:null,cantidad:null,observacion:null}),W(!1),void $(!0)}}):Object(l.jsx)(s.Button,{label:"ELIMINAR",icon:"pi pi-trash",className:"p-button-danger p-button-sm",onClick:function(){ee(!0)}})}),Object(l.jsx)("div",{className:"p-col-11",children:Object(l.jsxs)("span",{className:"p-input-icon-left",children:[Object(l.jsx)("i",{className:"pi pi-search"}),Object(l.jsx)(f.InputText,{type:"search",onInput:function(e){return G(e.target.value)},placeholder:"Buscar..."})]})})]}),Oe=function(){var e=Object(p.a)(b.a.mark((function e(t){var c,o,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n,o=V.map((function(e){return e.codigo})),c.coordenadas.forEach((function(e){e.seccion.forEach((function(e){if(e.nombre===i){var t=e.productos.filter((function(e){return!o.includes(e.codigo)}));x(t.map((function(e){return Object(j.a)(Object(j.a)({},e),S.find((function(t){return t.codigo===e.codigo})))}))),e.productos=t}}))})),r=new D,console.log(c),e.next=7,r.updateBodega(c).then((function(e){return a(e)}));case 7:s=e.sent,console.log("r",s),q([]),se["".concat(t)](!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=Object(c.useState)(null),fe=Object(r.a)(he,2),me=(fe[0],fe[1],Object(c.useState)(20)),ge=Object(r.a)(me,2),ve=(ge[0],ge[1],Object(c.useState)("")),xe=Object(r.a)(ve,2);xe[0],xe[1];return Object(l.jsx)("div",{className:"datatable-responsive-demo",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)(O.DataTable,{header:pe,style:{width:"100%"},selectionMode:"checkbox",selection:V,onSelectionChange:function(e){return t=e.value,console.log(t),void q(t);var t},value:m,className:"p-datatable-responsive-demo",paginator:!0,rows:10,globalFilter:M,children:[Object(l.jsx)(h.Column,{className:"chbox",selectionMode:"multiple",headerStyle:{width:"3em"}}),Object(l.jsx)(h.Column,{className:"cod",field:"codigo",header:"C\xd3DIGO",body:function(e){return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)("span",{className:"p-column-title",children:"CODIGO"}),Object(l.jsx)("br",{}),e.codigo]})},sortable:!0}),Object(l.jsx)(h.Column,{className:"nom",field:"nombre",header:"NOMBRE",body:function(e){return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)("span",{className:"p-column-title",children:"NOMBRE"}),Object(l.jsx)("br",{}),e.nombre]})},sortable:!0}),Object(l.jsx)(h.Column,{className:"can",field:"cantidad",header:"CANTIDAD",body:function(e){return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)("span",{className:"p-column-title",children:"CANTIDAD"}),Object(l.jsx)("br",{}),e.cantidad]})},sortable:!0}),Object(l.jsx)(h.Column,{className:"obs",field:"observacion",header:"OBSERVACI\xd3N",body:function(e){return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)("span",{className:"p-column-title",children:"OBSERVACI\xd3N"}),Object(l.jsx)("br",{}),e.observacion]})},sortable:!0}),Object(l.jsx)(h.Column,{className:"act",body:function(e){return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)(s.Button,{icon:"pi pi-pencil",className:"p-button-rounded p-button-info p-mr-2",onClick:function(){return function(e){console.log(e),I(e),oe(!0)}(e)}})})}})]}),Object(l.jsx)(v.Dialog,{blockScroll:!0,contentStyle:{overflow:"visible"},header:"Nuevo Producto",visible:Z,onHide:function(){re["".concat("displayResponsive")](!1)},breakpoints:{"960px":"75vw"},style:{width:"40vw"},footer:(be="displayResponsive",Object(l.jsx)("div",{children:Object(l.jsx)(s.Button,{style:{fontSize:"13px"},label:"Guardar",icon:"pi pi-check",onClick:function(){return ue(be)},autoFocus:!0})})),children:Object(l.jsx)(k.ScrollPanel,{style:{width:"100%",height:"310px"},children:Object(l.jsx)(y,{tipos:S,aux:U,setProduct:I,product:A,edit:!1})})}),Object(l.jsx)(v.Dialog,{contentStyle:{overflow:"visible"},header:"Eliminar Producto(s)",visible:Y,onHide:function(){return function(e){se["".concat(e)](!1)}("displayResponsive2")},breakpoints:{"960px":"75vw"},style:{width:"40vw"},footer:function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(s.Button,{style:{fontSize:"13px"},label:"Eliminar",icon:"pi pi-trash",className:"p-button-danger p-button-sm",onClick:function(){return Oe(e)},autoFocus:!0})})}("displayResponsive2"),children:Object(l.jsx)(k.ScrollPanel,{style:{width:"100%",height:"100px"},children:Object(l.jsx)("p",{children:"\xbfEst\xe1 seguro que desea eliminar el/los producto(s) seleccionado(s)?"})})}),Object(l.jsx)(v.Dialog,{blockScroll:!0,contentStyle:{overflow:"visible"},header:"Editar Producto",visible:ce,onHide:function(){return function(e){le["".concat(e)](!1)}("displayResponsive3")},breakpoints:{"960px":"75vw"},style:{width:"40vw"},footer:function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(s.Button,{style:{fontSize:"13px"},label:"Guardar",icon:"pi pi-check",className:"p-button-primary p-button-sm",onClick:function(){return de(e)},autoFocus:!0})})}("displayResponsive3"),children:Object(l.jsx)(k.ScrollPanel,{style:{width:"100%",height:"310px"},children:Object(l.jsx)(y,{tipos:S,aux:U,setProduct:I,product:A,edit:!0})})})]})})}),R=n(36),P=(n(161),n(63)),F=(n(163),function(e){var t=e.nombre,n=e.productos,c=e.bodega,o=e.setBodega;return console.log(e),Object(l.jsxs)("div",{children:[Object(l.jsx)(P.Panel,{header:"NOMBRE DE LA COORDENADA",children:Object(l.jsx)("p",{children:t})}),Object(l.jsx)(I,{nombre:t,productos:n,bodega:c,setBodega:o})]})}),T=function(){var e,t,n=Object(c.useState)(null),o=Object(r.a)(n,2),a=(o[0],o[1]),i=Object(c.useState)(null),d=Object(r.a)(i,2),b=d[0],j=d[1],p=Object(c.useState)([]),O=Object(r.a)(p,2),h=O[0],f=O[1],m=Object(c.useState)({id:"",codigo:"",nombre:"",estado:0,dimension:{x:0,y:0,z:0},coordenadas:[]}),g=Object(r.a)(m,2),v=g[0],N=g[1],w=new D,S=function(e,t){console.log("p",t),f(t),j(e),a(!0)};Object(c.useEffect)((function(){w.getBodega().then((function(e){return N(e)}))}),[]);var y=[];v.dimension&&(y=Array.from({length:v.dimension.z},(function(e,t){return String.fromCharCode("A".charCodeAt(0)+t)})));var k=v.coordenadas.map((function(e){var t=y[e.seccion[0].ubicacion.z];return Object(l.jsx)(R.TabPanel,{header:t,children:Object(l.jsx)(u,{cambio:e,pasar:S})},t)}));return Object(l.jsx)("div",{className:"p-d-flex p-jc-center",children:Object(l.jsx)("div",{className:"tabview-demo",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("br",{}),b?Object(l.jsx)(s.Button,(e={className:"test",icon:"pi pi-arrow-left"},Object(x.a)(e,"className","p-button-rounded p-button-secondary"),Object(x.a)(e,"onClick",(function(){return j(null)})),e)):Object(l.jsx)(s.Button,(t={className:"test",icon:"pi pi-sign-out"},Object(x.a)(t,"className","p-button-rounded p-button-secondary"),Object(x.a)(t,"onClick",(function(){return localStorage.clear(),void window.location.reload()})),t)),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),b?Object(l.jsx)(F,{nombre:b,productos:h,bodega:v,setBodega:N}):Object(l.jsx)(R.TabView,{children:k})]})})})},U=n(64),W=function(){function e(){Object(C.a)(this,e),this.baseUrl="https://distribucion-inventario.herokuapp.com/usuario-mail"}return Object(B.a)(e,[{key:"postUsuarioCheck",value:function(e){return A.a.post(this.baseUrl,e).then((function(e){return e.data}))}}]),e}(),L=(n(164),n.p+"static/media/coordenada.50ee0906.jpg"),z=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)(!1),a=Object(r.a)(o,2),i=a[0],s=a[1],u=Object(c.useState)({codigo:null,mail:null,nombre:null,apellido:null,bodegas:null,rol:null,estado:null}),d=Object(r.a)(u,2),b=(d[0],d[1],function(e){var t=new W,c={mail:e.profileObj.email};t.postUsuarioCheck(c).then((function(e){localStorage.setItem("persona",JSON.stringify(e)),"null"!=localStorage.getItem("persona")?(console.log("Entra"),n(!0)):s(!0)}))});return Object(l.jsx)("div",{children:localStorage.getItem("persona")?Object(l.jsx)(T,{}):Object(l.jsx)("div",{className:"contenedor1",children:Object(l.jsxs)("div",{className:"contenedor2",children:[Object(l.jsx)("div",{className:"content-imagen",children:Object(l.jsx)("img",{src:L,className:"img"})}),Object(l.jsxs)("div",{className:"contenedor3",children:[Object(l.jsx)("div",{children:Object(l.jsx)("label",{className:"tituloApp",children:"COORDENADAS"})}),Object(l.jsx)("div",{className:"contenedor5"}),Object(l.jsxs)("div",{className:"contenedor6",children:[Object(l.jsx)("label",{className:"Inicia",children:"Inicia Sesi\xf3n con:"}),Object(l.jsx)(U.GoogleLogin,{clientId:"930398454466-1bju770rkgrii8cdopo4pgt3rrline75.apps.googleusercontent.com",buttonText:"Google",onSuccess:b,onFailure:b,cookiePolicy:"single_host_origin"})]})]}),i?Object(l.jsx)("div",{className:"label2",children:Object(l.jsx)("label",{children:"Error de autenticacion: No es un usuarios Autorizado"})}):null]})})})};var M=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(z,{})})},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/COORDENADAS_PA_FE",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/COORDENADAS_PA_FE","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(t,e)}))}}(),H()},70:function(e,t,n){},77:function(e,t,n){}},[[166,1,2]]]);
//# sourceMappingURL=main.fbefe459.chunk.js.map