(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a902664"],{1276:function(e,t,r){"use strict";var n=r("d784"),a=r("44e7"),o=r("825a"),c=r("1d80"),u=r("4840"),i=r("8aa5"),l=r("50c4"),d=r("14c3"),s=r("9263"),v=r("9f7f"),b=r("d039"),p=v.UNSUPPORTED_Y,f=[].push,h=Math.min,O=4294967295,j=!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));n("split",(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(c(this)),o=void 0===r?O:r>>>0;if(0===o)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,o);var u,i,l,d=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,p=new RegExp(e.source,v+"g");while(u=s.call(p,n)){if(i=p.lastIndex,i>b&&(d.push(n.slice(b,u.index)),u.length>1&&u.index<n.length&&f.apply(d,u.slice(1)),l=u[0].length,b=i,d.length>=o))break;p.lastIndex===u.index&&p.lastIndex++}return b===n.length?!l&&p.test("")||d.push(""):d.push(n.slice(b)),d.length>o?d.slice(0,o):d}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=c(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,r):n.call(String(a),t,r)},function(e,a){var c=r(n,this,e,a,n!==t);if(c.done)return c.value;var s=o(this),v=String(e),b=u(s,RegExp),f=s.unicode,j=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(p?"g":"y"),m=new b(p?"^(?:"+s.source+")":s,j),g=void 0===a?O:a>>>0;if(0===g)return[];if(0===v.length)return null===d(m,v)?[v]:[];var x=0,k=0,w=[];while(k<v.length){m.lastIndex=p?0:k;var y,P=d(m,p?v.slice(k):v);if(null===P||(y=h(l(m.lastIndex+(p?k:0)),v.length))===x)k=i(v,k,f);else{if(w.push(v.slice(x,k)),w.length===g)return w;for(var _=1;_<=P.length-1;_++)if(w.push(P[_]),w.length===g)return w;k=x=y}}return w.push(v.slice(x)),w}]}),!j,p)},"44e7":function(e,t,r){var n=r("861d"),a=r("c6b6"),o=r("b622"),c=o("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==a(e))}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"9d49":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"container-fluid mt-2"},o={class:"d-sm-flex align-items-center justify-content-between mb-4"},c=Object(n["i"])("h1",{class:"h3 mb-0 text-gray-800"},"Panel de Administración",-1),u=Object(n["h"])("Regresar"),i={class:"row"},l={class:"col-lg-6 m-auto"},d={autocomplete:"off"},s={class:"form-group form-floating mb-3"},v=Object(n["i"])("label",null,"Proveedor",-1);function b(e,t,r,b,p,f){var h=Object(n["C"])("router-link");return Object(n["t"])(),Object(n["e"])("div",null,[Object(n["i"])("div",a,[Object(n["i"])("div",o,[c,Object(n["i"])(h,{to:"/productos",class:"btn btn-primary"},{default:Object(n["O"])((function(){return[u]})),_:1})]),Object(n["i"])("div",i,[Object(n["i"])("div",l,[Object(n["i"])("form",d,[Object(n["i"])("div",s,[v,Object(n["P"])(Object(n["i"])("select",{class:[{"is-invalid":""===b.producto.proveedor_id},"form-control"],id:"proveedor","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.producto.proveedor_id=e}),name:"proveedor"},[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["A"])(b.proveedores,(function(e){return Object(n["P"])((Object(n["t"])(),Object(n["e"])("option",{key:e.id,value:e._id},Object(n["F"])(e.nombre),9,["value"])),[[n["L"],!0===e.status]])})),128))],2),[[n["J"],b.producto.proveedor_id]])]),(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["A"])(b.form,(function(e,t){return Object(n["t"])(),Object(n["e"])("div",{class:"mb-2",key:t},[Object(n["i"])("label",{for:e.valor},Object(n["F"])(e.valor),9,["for"]),e.number?Object(n["f"])("",!0):Object(n["P"])((Object(n["t"])(),Object(n["e"])("input",{key:0,class:[{"is-invalid":""===b.producto[e.valor]},"form-control"],"onUpdate:modelValue":function(t){return b.producto[e.valor]=t},type:"text",placeholder:e.valor,id:e.valor},null,10,["onUpdate:modelValue","placeholder","id"])),[[n["K"],b.producto[e.valor]]]),e.number?Object(n["P"])((Object(n["t"])(),Object(n["e"])("input",{key:1,class:[{"is-invalid":""===b.producto[e.valor]},"form-control"],"onUpdate:modelValue":function(t){return b.producto[e.valor]=t},type:"Number",placeholder:e.valor,id:e.valor},null,10,["onUpdate:modelValue","placeholder","id"])),[[n["K"],b.producto[e.valor],void 0,{number:!0}]]):Object(n["f"])("",!0)])})),128)),Object(n["i"])("button",{onClick:t[2]||(t[2]=Object(n["R"])((function(e){return b.sendProduct()}),["prevent"])),value:"",class:"btn btn-primary"}," Guardar Producto ")])])])])])}var p=r("1da1"),f=(r("96cf"),r("99af"),r("ac1f"),r("1276"),r("4de4"),r("a434"),r("a1e9")),h=r("5502"),O=r("98a0"),j=r("6c02"),m=r("5c40"),g=r("bc3a"),x=r.n(g),k={setup:function(){var e=Object(m["d"])((function(){return t.state.toask})),t=Object(h["b"])(),r=Object(j["c"])();t.dispatch("getProveedores");var n=Object(m["d"])((function(){return t.state.proveedores})),a=Object(m["d"])((function(){return t.state.token})),o=Object(f["k"])([{valor:"nombre"},{valor:"marca"},{valor:"modelo"},{valor:"descripcion"},{valor:"cantidad",number:!0},{valor:"precio",number:!0},{valor:"codigo"},{valor:"iva",number:!0}]),c="",u=Object(f["k"])({proveedor_id:null,nombre:null}),i=Object(m["d"])((function(){return t.state.api})),l=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,u.value.proveedor_id){t.next=4;break}return u.value.proveedor_id="",t.abrupt("return");case 4:if(u.value.nombre){t.next=7;break}return u.value.nombre="",t.abrupt("return");case 7:if(u.value.marca){t.next=10;break}return u.value.marca="",t.abrupt("return");case 10:if(u.value.modelo){t.next=13;break}return u.value.modelo="",t.abrupt("return");case 13:if(u.value.descripcion){t.next=16;break}return u.value.descripcion="",t.abrupt("return");case 16:if(u.value.cantidad){t.next=19;break}return u.value.cantidad="",t.abrupt("return");case 19:if(u.value.precio){t.next=22;break}return u.value.precio="",t.abrupt("return");case 22:if(u.value.codigo){t.next=25;break}return u.value.codigo="",t.abrupt("return");case 25:return t.next=27,x.a.post("".concat(i.value,"/productos/").concat(c),u.value,{headers:{xtoken:a.value}});case 27:if(n=t.sent,o=n.data,!0!==o.status){t.next=37;break}return u.value={proveedor_id:null},r.push("/productos"),c="",Object(O["a"])(o.value,e.value.success),t.abrupt("return");case 37:Object(O["a"])(o.value,e.value.danger);case 38:t.next=43;break;case 40:t.prev=40,t.t0=t["catch"](0),Object(O["a"])("no se pudo conectar al servidor");case 43:case"end":return t.stop()}}),t,null,[[0,40]])})));return function(){return t.apply(this,arguments)}}();function d(){try{var e=window.location.href.split("?");if(2===e.length){var n=Object(m["d"])((function(){return t.state.productos})),a=n.value;if(0===a.length)return void r.push("/productos/add");c=e[1];var i=a.filter((function(e){return e._id===c&&e}));i?(u.value=i[0],o.value.splice(4,2)):u.value={}}}catch(l){}}return d(),{producto:u,form:o,sendProduct:l,proveedores:n,token:a}}};k.render=b;t["default"]=k}}]);
//# sourceMappingURL=chunk-0a902664.561b21f9.js.map