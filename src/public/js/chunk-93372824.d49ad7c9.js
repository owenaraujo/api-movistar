(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93372824"],{1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),l=n("825a"),i=n("1d80"),u=n("4840"),c=n("8aa5"),o=n("50c4"),s=n("14c3"),b=n("9263"),d=n("9f7f"),v=n("d039"),f=d.UNSUPPORTED_Y,p=[].push,h=Math.min,O=4294967295,g=!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),l=void 0===n?O:n>>>0;if(0===l)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,l);var u,c,o,s=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,f=new RegExp(e.source,d+"g");while(u=b.call(f,r)){if(c=f.lastIndex,c>v&&(s.push(r.slice(v,u.index)),u.length>1&&u.index<r.length&&p.apply(s,u.slice(1)),o=u[0].length,v=c,s.length>=l))break;f.lastIndex===u.index&&f.lastIndex++}return v===r.length?!o&&f.test("")||s.push(""):s.push(r.slice(v)),s.length>l?s.slice(0,l):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,this,e,a,r!==t);if(i.done)return i.value;var b=l(this),d=String(e),v=u(b,RegExp),p=b.unicode,g=(b.ignoreCase?"i":"")+(b.multiline?"m":"")+(b.unicode?"u":"")+(f?"g":"y"),j=new v(f?"^(?:"+b.source+")":b,g),m=void 0===a?O:a>>>0;if(0===m)return[];if(0===d.length)return null===s(j,d)?[d]:[];var x=0,w=0,k=[];while(w<d.length){j.lastIndex=f?0:w;var y,C=s(j,f?d.slice(w):d);if(null===C||(y=h(o(j.lastIndex+(f?w:0)),d.length))===x)w=c(d,w,p);else{if(k.push(d.slice(x,w)),k.length===m)return k;for(var R=1;R<=C.length-1;R++)if(k.push(C[R]),k.length===m)return k;w=x=y}}return k.push(d.slice(x)),k}]}),!g,f)},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),l=n("b622"),i=l("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"6a50":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"container-fluid"},l={class:"d-sm-flex align-items-center justify-content-between mb-4"},i=Object(r["i"])("h1",{class:"h3 mb-0 text-gray-800"},"Panel de Administración",-1),u=Object(r["h"])("Regresar"),c={class:"row"},o={class:"col-lg-6 m-auto"},s={autocomplete:"off"},b={class:"form-group"};function d(e,t,n,d,v,f){var p=Object(r["C"])("router-link");return Object(r["t"])(),Object(r["e"])("div",a,[Object(r["i"])("div",l,[i,Object(r["i"])(p,{to:d.ruta,class:"btn btn-primary mt-2"},{default:Object(r["O"])((function(){return[u]})),_:1},8,["to"])]),Object(r["i"])("div",c,[Object(r["i"])("div",o,[Object(r["i"])("form",s,[Object(r["i"])("div",b,[(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["A"])(d.form,(function(e){return Object(r["t"])(),Object(r["e"])("div",{key:e,class:"form-floating"},[Object(r["i"])("label",{for:e.value},Object(r["F"])(e.value),9,["for"]),e.number?Object(r["P"])((Object(r["t"])(),Object(r["e"])("input",{key:0,"onUpdate:modelValue":function(t){return d.newCliente[e.value]=t},class:[{"is-invalid":""===d.newCliente[e.value]},"form-control"],type:"number",placeholder:"Ingrese "+e.value,id:e.value},null,10,["onUpdate:modelValue","placeholder","id"])),[[r["K"],d.newCliente[e.value],void 0,{number:!0}]]):Object(r["P"])((Object(r["t"])(),Object(r["e"])("input",{key:1,"onUpdate:modelValue":function(t){return d.newCliente[e.value]=t},class:[{"is-invalid":""===d.newCliente[e.value]},"form-control"],type:"text",placeholder:"Ingrese "+e.value,id:e.value},null,10,["onUpdate:modelValue","placeholder","id"])),[[r["K"],d.newCliente[e.value]]])])})),128))]),d.newCliente.boton?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["e"])("button",{key:0,type:"submit",onClick:t[1]||(t[1]=Object(r["R"])((function(e){return d.save()}),["prevent"])),class:"btn btn-primary"}," Guardar Cliente "))])])])])}var v=n("1da1"),f=(n("96cf"),n("99af"),n("ac1f"),n("1276"),n("4de4"),n("a434"),n("a1e9")),p=n("5c40"),h=n("5502"),O=n("bc3a"),g=n.n(O),j=n("98a0"),m=n("6c02"),x={setup:function(){var e=Object(f["k"])([{value:"dni",number:!0},{value:"nombre"},{value:"apellido"},{value:"telefono",number:!0},{value:"direccion"}]),t=Object(h["b"])(),n=Object(m["c"])(),r=Object(p["d"])((function(){return t.state.toask})),a=Object(f["k"])({dni:null,nombre:null,telefono:null,direccion:null,boton:!1}),l=Object(p["d"])((function(){return t.state.api})),i=Object(p["d"])((function(){return t.state.usuario})),u="",c=function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var c,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,c=a.value,c.dni){t.next=4;break}return t.abrupt("return",c.dni="");case 4:if(c.nombre){t.next=6;break}return t.abrupt("return",c.nombre="");case 6:if(c.telefono){t.next=8;break}return t.abrupt("return",c.telefono="");case 8:if(c.direccion){t.next=10;break}return t.abrupt("return",c.direccion="");case 10:return c.user_id=i.value._id,a.value.boton=!0,t.next=14,g.a.post("".concat(l.value,"/clientes/").concat(u),c);case 14:if(o=t.sent,s=o.data,a.value.boton=!1,0!=s.status&&null!==s.status){t.next=19;break}return t.abrupt("return",Object(j["a"])(s.value,r.value.danger));case 19:Object(j["a"])(s.value,r.value.success),u="",n.push("/clientes/add"),e.value=[{value:"dni",number:!0},{value:"nombre"},{value:"apellido"},{value:"telefono",number:!0},{value:"direccion"}],a.value={},t.next=30;break;case 26:t.prev=26,t.t0=t["catch"](0),Object(j["a"])("no hay acceso al servidor"),a.value.boton=!1;case 30:case"end":return t.stop()}}),t,null,[[0,26]])})));return function(){return t.apply(this,arguments)}}(),o=window.location.href.split("?");if(1!=o.length){u=o[1];var s=Object(p["d"])((function(){return t.state.clientes})),b=s.value.filter((function(e){return e._id===u?e:0}));0===b.length?n.push("/clientes/add"):(a.value=b[0],e.value.splice(0,1))}var d=Object(p["d"])((function(){return t.state.linkclientes}));return{ruta:d,newCliente:a,form:e,save:c}}};x.render=d;t["default"]=x},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}}}]);
//# sourceMappingURL=chunk-93372824.d49ad7c9.js.map