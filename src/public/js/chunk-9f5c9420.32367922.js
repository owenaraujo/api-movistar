(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f5c9420","chunk-2d21f315"],{1276:function(e,t,r){"use strict";var a=r("d784"),n=r("44e7"),c=r("825a"),o=r("1d80"),u=r("4840"),l=r("8aa5"),i=r("50c4"),s=r("14c3"),d=r("9263"),v=r("9f7f"),b=r("d039"),p=v.UNSUPPORTED_Y,f=[].push,h=Math.min,O=4294967295,j=!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));a("split",(function(e,t,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var a=String(o(this)),c=void 0===r?O:r>>>0;if(0===c)return[];if(void 0===e)return[a];if(!n(e))return t.call(a,e,c);var u,l,i,s=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,p=new RegExp(e.source,v+"g");while(u=d.call(p,a)){if(l=p.lastIndex,l>b&&(s.push(a.slice(b,u.index)),u.length>1&&u.index<a.length&&f.apply(s,u.slice(1)),i=u[0].length,b=l,s.length>=c))break;p.lastIndex===u.index&&p.lastIndex++}return b===a.length?!i&&p.test("")||s.push(""):s.push(a.slice(b)),s.length>c?s.slice(0,c):s}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var n=o(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,n,r):a.call(String(n),t,r)},function(e,n){var o=r(a,this,e,n,a!==t);if(o.done)return o.value;var d=c(this),v=String(e),b=u(d,RegExp),f=d.unicode,j=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"g":"y"),m=new b(p?"^(?:"+d.source+")":d,j),g=void 0===n?O:n>>>0;if(0===g)return[];if(0===v.length)return null===s(m,v)?[v]:[];var k=0,x=0,y=[];while(x<v.length){m.lastIndex=p?0:x;var w,_=s(m,p?v.slice(x):v);if(null===_||(w=h(i(m.lastIndex+(p?x:0)),v.length))===k)x=l(v,x,f);else{if(y.push(v.slice(k,x)),y.length===g)return y;for(var E=1;E<=_.length-1;E++)if(y.push(_[E]),y.length===g)return y;x=k=w}}return y.push(v.slice(k)),y}]}),!j,p)},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),c=r("b622"),o=c("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"9d49":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n={key:0},c={class:"container-fluid mt-2"},o={class:"d-sm-flex align-items-center justify-content-between mb-4"},u=Object(a["h"])("h1",{class:"h3 mb-0 text-gray-800"},"Panel de Administración",-1),l=Object(a["g"])("Regresar"),i={class:"row"},s={class:"col-lg-6 m-auto"},d={autocomplete:"off"},v={class:"form-group form-floating mb-3"},b=Object(a["h"])("label",null,"Proveedor",-1),p={class:"form-check mb-4"},f=Object(a["h"])("label",{for:"iva",class:"form-check-label"},"iva 16%",-1);function h(e,t,r,h,O,j){var m=Object(a["B"])("router-link"),g=Object(a["B"])("NoAccess");return h.usuario.rol.grado<=1?(Object(a["s"])(),Object(a["e"])("div",n,[Object(a["h"])("div",c,[Object(a["h"])("div",o,[u,Object(a["h"])(m,{to:"/productos",class:"btn btn-primary"},{default:Object(a["N"])((function(){return[l]})),_:1})]),Object(a["h"])("div",i,[Object(a["h"])("div",s,[Object(a["h"])("form",d,[Object(a["h"])("div",v,[b,Object(a["O"])(Object(a["h"])("select",{class:[{"is-invalid":""===h.producto.proveedor_id},"form-control"],id:"proveedor","onUpdate:modelValue":t[1]||(t[1]=function(e){return h.producto.proveedor_id=e}),name:"proveedor"},[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(h.proveedores,(function(e){return Object(a["O"])((Object(a["s"])(),Object(a["e"])("option",{key:e.id,value:e._id},Object(a["E"])(e.nombre),9,["value"])),[[a["K"],!0===e.status]])})),128))],2),[[a["I"],h.producto.proveedor_id]])]),(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(h.form,(function(e,t){return Object(a["s"])(),Object(a["e"])("div",{class:"mb-2",key:t},[Object(a["h"])("label",{for:e.valor},Object(a["E"])(e.valor),9,["for"]),e.number?Object(a["f"])("",!0):Object(a["O"])((Object(a["s"])(),Object(a["e"])("input",{key:0,class:[{"is-invalid":""===h.producto[e.valor]},"form-control"],"onUpdate:modelValue":function(t){return h.producto[e.valor]=t},type:"text",placeholder:e.valor,id:e.valor},null,10,["onUpdate:modelValue","placeholder","id"])),[[a["J"],h.producto[e.valor]]]),e.number?Object(a["O"])((Object(a["s"])(),Object(a["e"])("input",{key:1,class:[{"is-invalid":""===h.producto[e.valor]},"form-control"],"onUpdate:modelValue":function(t){return h.producto[e.valor]=t},type:"Number",placeholder:e.valor,id:e.valor},null,10,["onUpdate:modelValue","placeholder","id"])),[[a["J"],h.producto[e.valor],void 0,{number:!0}]]):Object(a["f"])("",!0)])})),128)),Object(a["h"])("div",p,[Object(a["O"])(Object(a["h"])("input",{class:"form-check-input ","onUpdate:modelValue":t[2]||(t[2]=function(e){return h.producto.iva=e}),type:"checkbox",id:"iva"},null,512),[[a["H"],h.producto.iva]]),f]),Object(a["h"])("button",{onClick:t[3]||(t[3]=Object(a["Q"])((function(e){return h.sendProduct()}),["prevent"])),value:"",class:"btn btn-primary"}," Guardar Producto ")])])])])])):(Object(a["s"])(),Object(a["e"])(g,{key:1}))}var O=r("1da1"),j=(r("96cf"),r("99af"),r("ac1f"),r("1276"),r("4de4"),r("a434"),r("a1e9")),m=r("5502"),g=r("98a0"),k=r("6c02"),x=r("5c40"),y=r("bc3a"),w=r.n(y),_=r("d97a"),E={components:{NoAccess:_["default"]},setup:function(){var e=Object(x["d"])((function(){return t.state.toask})),t=Object(m["b"])(),r=Object(k["c"])();t.dispatch("getProveedores");var a=Object(x["d"])((function(){return t.state.proveedores})),n=Object(x["d"])((function(){return t.state.token})),c=Object(j["k"])([{valor:"nombre"},{valor:"marca"},{valor:"modelo"},{valor:"descripcion"},{valor:"cantidad",number:!0},{valor:"precio",number:!0},{valor:"codigo"}]),o="",u=Object(j["k"])({proveedor_id:null,nombre:null}),l=Object(x["d"])((function(){return t.state.api})),i=function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,u.value.proveedor_id){t.next=4;break}return u.value.proveedor_id="",t.abrupt("return");case 4:if(u.value.nombre){t.next=7;break}return u.value.nombre="",t.abrupt("return");case 7:if(u.value.marca){t.next=10;break}return u.value.marca="",t.abrupt("return");case 10:if(u.value.modelo){t.next=13;break}return u.value.modelo="",t.abrupt("return");case 13:if(u.value.descripcion){t.next=16;break}return u.value.descripcion="",t.abrupt("return");case 16:if(u.value.cantidad){t.next=19;break}return u.value.cantidad="",t.abrupt("return");case 19:if(u.value.precio){t.next=22;break}return u.value.precio="",t.abrupt("return");case 22:if(u.value.codigo){t.next=25;break}return u.value.codigo="",t.abrupt("return");case 25:return u.value.iva||(u.value.iva=0),u.value.iva&&(u.value.iva=16),t.next=29,w.a.post("".concat(l.value,"/productos/").concat(o),u.value,{headers:{xtoken:n.value}});case 29:if(a=t.sent,c=a.data,!0!==c.status){t.next=39;break}return u.value={proveedor_id:null},r.push("/productos"),o="",Object(g["a"])(c.value,e.value.success),t.abrupt("return");case 39:Object(g["a"])(c.value,e.value.danger);case 40:t.next=45;break;case 42:t.prev=42,t.t0=t["catch"](0),Object(g["a"])("no se pudo conectar al servidor");case 45:case"end":return t.stop()}}),t,null,[[0,42]])})));return function(){return t.apply(this,arguments)}}();function s(){try{var e=window.location.href.split("?");if(2===e.length){var a=Object(x["d"])((function(){return t.state.productos})),n=a.value;if(0===n.length)return void r.push("/productos/add");o=e[1];var l=n.filter((function(e){return e._id===o&&e}));l?(u.value=l[0],l[0].iva?l[0].iva=!0:l[0].iva=!1,c.value.splice(4,2)):u.value={}}}catch(i){}}s();var d=Object(x["d"])((function(){return t.state.usuario}));return{producto:u,form:c,sendProduct:i,proveedores:a,token:n,usuario:d}}};E.render=h;t["default"]=E},d97a:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n={style:{height:"70vh"},id:"layoutError"},c={id:"layoutError_content"},o={class:"container"},u={class:"row mt-5 justify-content-center"},l={class:"col-lg-6"},i={class:"text-center mt-4"},s=Object(a["h"])("h1",{class:"display-1"},"403",-1),d=Object(a["h"])("p",{class:"lead"},"sin autorizacion",-1),v=Object(a["h"])("p",null,"su acceso a esta area no esta permitido.",-1),b=Object(a["h"])("i",{class:"fas fa-arrow-left me-1"},null,-1),p=Object(a["g"])(" regresar al inicio ");function f(e,t){var r=Object(a["B"])("router-link");return Object(a["s"])(),Object(a["e"])("div",n,[Object(a["h"])("div",c,[Object(a["h"])("main",null,[Object(a["h"])("div",o,[Object(a["h"])("div",u,[Object(a["h"])("div",l,[Object(a["h"])("div",i,[s,d,v,Object(a["h"])(r,{to:"/"},{default:Object(a["N"])((function(){return[b,p]})),_:1})])])])])])])])}const h={};h.render=f;t["default"]=h}}]);
//# sourceMappingURL=chunk-9f5c9420.32367922.js.map