(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f430f518","chunk-2d21f315"],{"1f4c":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={key:0,class:"container-fluid"},r={class:"text-right"},o=Object(a["h"])("i",{class:"fas fa-user-plus"},null,-1),l=Object(a["g"])(" Nuevo Cliente"),u={class:"row"},i={class:"col-sm-3"},s=Object(a["h"])("h4",{class:""},"Datos del Cliente",-1),d={style:{"font-size":"16px","text-transform":"uppercase",color:"blue"}},b=Object(a["h"])("label",{for:"buscarCliente"},"busqueda de cliente",-1),O={key:0,class:"resultado"},j={multiple:"",class:"custom-select scrollbar-light-blue"},h={class:"col-lg-12"},p=Object(a["h"])("h4",{class:"text-center"},"Datos Venta",-1),f={class:"table-responsive"},m={ref:"table",class:"table table-hover"},v={class:"thead-dark"},g=Object(a["h"])("tr",null,[Object(a["h"])("th",{width:"100px"},"Código"),Object(a["h"])("th",null,"modelo"),Object(a["h"])("th",null,"Stock"),Object(a["h"])("th",{width:"100px"},"IVA"),Object(a["h"])("th",{class:"textright"},"Precio"),Object(a["h"])("th",{class:"textright"},"Precio Total"),Object(a["h"])("th",null,"Acciones")],-1),k={key:0,class:"resultado2"},C={multiple:"",class:"custom-select scrollbar-light-blue"},y={id:"txt_descripcion"},x={id:"txt_existencia"},w={id:"txt_precio",class:"textright"},V={id:"txt_precio_total",class:"txtright"},_=Object(a["h"])("tr",null,[Object(a["h"])("th",null,"Código"),Object(a["h"])("th",null,"modelo"),Object(a["h"])("th",null,"IMEI"),Object(a["h"])("th",null,"cantidad"),Object(a["h"])("th",{class:"textright"},"Precio"),Object(a["h"])("th",{class:"textright"},"Precio Total"),Object(a["h"])("th",null,"Acciones")],-1),P={id:"detalle_venta"},E={id:"detalle_totales"},A=Object(a["h"])("td",{colspan:"6",class:"textright"},"Sub-total",-1),B=Object(a["h"])("td",{colspan:"6",class:"textright"},"iva",-1),N=Object(a["h"])("td",{colspan:"6",class:"textright"},"total a pagar",-1),L={class:"col-lg-12 text-center"},F=Object(a["h"])("label",null,"Acciones",-1),U={class:"form-group"},z=Object(a["h"])("i",{class:"fas fa-save"},null,-1),J=Object(a["g"])(" Generar Venta "),I={key:2},K={class:"modal fade show",id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel",style:{display:"block"},"aria-modal":"true"},S={class:"modal-dialog modal-center"},T={class:"modal-content"},q={class:"modal-header"},G=Object(a["h"])("h5",{class:"modal-title",id:"staticBackdropLabel"},"Modal title",-1),$=Object(a["h"])("span",{"aria-hidden":"true"},"×",-1),D={class:"modal-body"},M={key:0},H={class:"form-check"},R=Object(a["h"])("label",{class:"form-check-label",for:"defaultCheck1"}," Reportar venta como prestamo ",-1),Q=Object(a["h"])("label",{for:"inputNota"},null,-1),W={key:1,class:"text-center"},X=Object(a["h"])("p",null,[Object(a["h"])("strong",{class:"mt-4"},"que desea hacer?")],-1),Y=Object(a["h"])("br",null,null,-1),Z={class:"modal-footer"},tt=Object(a["h"])("div",{class:"modal-backdrop fade show"},null,-1);function et(t,e,c,et,ct,at){var nt=Object(a["B"])("router-link"),rt=Object(a["B"])("Popper"),ot=Object(a["B"])("ListProductos"),lt=Object(a["B"])("NoAccess");return Object(a["s"])(),Object(a["e"])(a["a"],null,[et.usuario.rol.grado<=2?(Object(a["s"])(),Object(a["e"])("div",n,[Object(a["h"])("div",r,[Object(a["h"])(nt,{to:"/clientes/add",onClick:e[1]||(e[1]=function(t){return et.sendUrl()}),class:"mt-2 btn btn-primary text-rigth btn_new_cliente"},{default:Object(a["N"])((function(){return[o,l]})),_:1})]),Object(a["h"])("div",u,[Object(a["h"])("div",i,[s,Object(a["O"])(Object(a["h"])("div",null,[Object(a["h"])("h5",d,Object(a["E"])(et.datosCliente.nombre)+" "+Object(a["E"])(et.datosCliente.apellido),1),Object(a["h"])("p",null,Object(a["E"])(et.datosCliente.dni),1)],512),[[a["K"],et.dataCliente]]),Object(a["O"])(Object(a["h"])("div",null,[b,Object(a["O"])(Object(a["h"])("input",{autocomplete:"off","onUpdate:modelValue":e[2]||(e[2]=function(t){return et.buscarClientes=t}),id:"buscarCliente",type:"text",class:"form-control mb-2"},null,512),[[a["J"],et.buscarClientes]]),et.buscarClientes?(Object(a["s"])(),Object(a["e"])("div",O,[Object(a["h"])("select",j,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(et.clientes,(function(t){return Object(a["O"])((Object(a["s"])(),Object(a["e"])("option",{onClick:function(e){return et.selectCliente(t)},key:t._id,value:t._id},Object(a["E"])(t.nombre),9,["onClick","value"])),[[a["K"],-1!=t.nombre.toLowerCase().indexOf(et.buscarClientes.toLowerCase())||-1!=t.dni.toLowerCase().indexOf(et.buscarClientes.toLowerCase())]])})),128))])])):Object(a["f"])("",!0)],512),[[a["K"],!et.dataCliente]])]),Object(a["h"])("div",h,[p,Object(a["h"])("div",f,[Object(a["h"])("table",m,[Object(a["h"])("thead",v,[g,Object(a["h"])("tr",null,[Object(a["h"])("td",null,[Object(a["O"])(Object(a["h"])("input",{autocomplete:"off",type:"text",class:"form-control form-control-md",name:"txt_cod_producto",id:"txt_cod_producto","onUpdate:modelValue":e[3]||(e[3]=function(t){return et.buscarProducto=t})},null,512),[[a["J"],et.buscarProducto]]),et.buscarProducto?(Object(a["s"])(),Object(a["e"])("div",k,[Object(a["h"])("select",C,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(et.productos,(function(t){return Object(a["O"])((Object(a["s"])(),Object(a["e"])("option",{onClick:function(e){return et.selectProducto(t)},key:t._id,value:t._id},Object(a["E"])(t.nombre)+"-"+Object(a["E"])(t.codigo),9,["onClick","value"])),[[a["K"],-1!=t.codigo.toLowerCase().indexOf(et.buscarProducto.toLowerCase())]])})),128))])])):Object(a["f"])("",!0)]),Object(a["h"])("td",y,Object(a["E"])(et.inputsAgregar.modelo||"-"),1),Object(a["h"])("td",x,Object(a["E"])(et.inputsAgregar.cantidad||0),1),Object(a["h"])("td",null,[Object(a["h"])(rt,{class:"dark-popper",arrow:"",hover:"",placement:"left",content:t.numeralFormat((et.total-et.inputsAgregar.precio)*et.dolar||0)+" Bs"},{default:Object(a["N"])((function(){return[Object(a["g"])(Object(a["E"])(t.numeralFormat(et.total-et.inputsAgregar.precio,"0,0.0")||0)+"$ ",1)]})),_:1},8,["content"])]),Object(a["h"])("td",w,[Object(a["h"])(rt,{class:"dark-popper",arrow:"",hover:"",placement:"left",content:t.numeralFormat(et.inputsAgregar.precio*et.dolar||0)+" Bs"},{default:Object(a["N"])((function(){return[Object(a["g"])(Object(a["E"])(et.inputsAgregar.precio||0)+"$(+"+Object(a["E"])(et.inputsAgregar.iva)+"% iva ) ",1)]})),_:1},8,["content"])]),Object(a["h"])("td",V,[Object(a["h"])(rt,{class:"dark-popper",arrow:"",hover:"",placement:"left",content:t.numeralFormat(et.total*et.dolar||0)+" Bs"},{default:Object(a["N"])((function(){return[Object(a["g"])(Object(a["E"])(et.total||0)+"$ ",1)]})),_:1},8,["content"])]),Object(a["h"])("td",null,[et.inputsAgregar.cantidad?Object(a["O"])((Object(a["s"])(),Object(a["e"])("button",{key:0,onClick:e[4]||(e[4]=function(t){return et.agregarCarrito()}),id:"add_product_venta",class:"btn btn-dark",disabled:0===et.inputsAgregar.cantidad}," Agregar ",8,["disabled"])),[[a["K"],et.cantidad>0]]):Object(a["f"])("",!0)])]),_]),Object(a["h"])("tbody",P,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(et.productosVenta,(function(t,e){return Object(a["s"])(),Object(a["e"])(ot,{indice:e,key:e,producto:t},null,8,["indice","producto"])})),128))]),Object(a["h"])("tfoot",E,[Object(a["h"])("tr",null,[A,Object(a["h"])("td",null,[Object(a["h"])(rt,{class:"dark-popper",arrow:"",hover:"",placement:"left",content:t.numeralFormat(et.totalVenta*et.dolar,"0,00")+" Bs"},{default:Object(a["N"])((function(){return[Object(a["g"])(Object(a["E"])(et.totalVenta),1)]})),_:1},8,["content"])])]),Object(a["h"])("tr",null,[B,Object(a["h"])("td",null,[Object(a["h"])(rt,{class:"dark-popper",arrow:"",hover:"",placement:"left",content:t.numeralFormat(et.iva*et.dolar)+" Bs"},{default:Object(a["N"])((function(){return[Object(a["g"])(Object(a["E"])(et.iva),1)]})),_:1},8,["content"])])]),Object(a["h"])("tr",null,[N,Object(a["h"])("td",null,[Object(a["h"])(rt,{class:"dark-popper",arrow:"",hover:"",placement:"left",content:t.numeralFormat((et.iva+et.totalVenta)*et.dolar)+" Bs"},{default:Object(a["N"])((function(){return[Object(a["g"])(Object(a["E"])(et.iva+et.totalVenta),1)]})),_:1},8,["content"])])])])],512)]),Object(a["h"])("div",L,[F,Object(a["h"])("div",U,[Object(a["h"])("button",{onClick:e[5]||(e[5]=function(t){return et.cancelVenta()}),class:"btn btn-danger mr-2"}," Anular "),Object(a["h"])("button",{onClick:e[6]||(e[6]=function(t){return et.preGuardarCompra()}),class:"btn btn-primary",id:"btn_facturar_venta"},[z,J])])])])])])):(Object(a["s"])(),Object(a["e"])(lt,{key:1})),et.modalVenta?(Object(a["s"])(),Object(a["e"])("div",I,[Object(a["h"])("div",K,[Object(a["h"])("div",S,[Object(a["h"])("div",T,[Object(a["h"])("div",q,[G,Object(a["h"])("button",{type:"button",class:"close",onClick:e[7]||(e[7]=function(t){return et.modalVenta=!1}),"data-dismiss":"modal","aria-label":"Close"},[$])]),Object(a["h"])("div",D,[et.statusVenta?Object(a["f"])("",!0):(Object(a["s"])(),Object(a["e"])("div",M,[Object(a["h"])("div",H,[Object(a["O"])(Object(a["h"])("input",{class:"form-check-input","onUpdate:modelValue":e[8]||(e[8]=function(t){return et.prestamo=t}),type:"checkbox",id:"defaultCheck1"},null,512),[[a["H"],et.prestamo]]),R]),Q,Object(a["O"])(Object(a["h"])("input",{"onUpdate:modelValue":e[9]||(e[9]=function(t){return et.notaVenta=t}),type:"text",id:"inputNota",placeholder:"agregar una nota",class:"form-control"},null,512),[[a["J"],et.notaVenta]])])),et.statusVenta?(Object(a["s"])(),Object(a["e"])("div",W,[X,Y,Object(a["h"])("button",{onClick:e[10]||(e[10]=function(){return et.newVenta&&et.newVenta.apply(et,arguments)}),class:"btn btn-primary mr-2"},"registrar otra venta"),Object(a["h"])("button",{onClick:e[11]||(e[11]=function(){return et.generarPdf&&et.generarPdf.apply(et,arguments)}),class:"btn btn-success"},"inprimir factura")])):Object(a["f"])("",!0)]),Object(a["h"])("div",Z,[Object(a["h"])("button",{onClick:e[12]||(e[12]=function(t){return et.modalVenta=!1}),class:"btn btn-secondary","data-dismiss":"modal"}," Cerrar "),Object(a["h"])("button",{onClick:e[13]||(e[13]=function(t){return et.guardarCompra()}),class:"btn btn-primary"}," Comprar ")])])])]),tt])):Object(a["f"])("",!0)],64)}c("d81d");var ct=c("d97a"),at=c("5502"),nt=c("a1e9"),rt={class:""},ot=Object(a["h"])("i",{class:"fas fa-trash"},null,-1),lt=Object(a["h"])("i",{class:"svg-inline--fa fas fa-trash-alt fa-w-14"},null,-1),ut=Object(a["g"])(" Eliminar ");function it(t,e,c,n,r,o){var l=Object(a["B"])("Popper");return Object(a["s"])(),Object(a["e"])("tr",null,[Object(a["h"])("th",null,Object(a["E"])(c.producto.codigo),1),Object(a["h"])("th",null,Object(a["E"])(c.producto.marca)+"-"+Object(a["E"])(c.producto.modelo),1),Object(a["h"])("th",rt,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(c.producto.imei,(function(t,e){return Object(a["s"])(),Object(a["e"])("div",{class:"form-row align-items-center",key:e},[Object(a["O"])(Object(a["h"])("input",{class:[{"is-invalid":""==n.Producto.imei[e].value},"form-control col-md-9 my-1"],placeholder:"imei","onUpdate:modelValue":function(t){return n.Producto.imei[e].value=t},type:"tel",maxlength:"15"},null,10,["onUpdate:modelValue"]),[[a["J"],n.Producto.imei[e].value,void 0,{number:!0}]]),Object(a["h"])("button",{onClick:function(t){return n.deleteOneItem(e)},class:"btn btn-danger ml-2 col-md-2 my-1"},[ot],8,["onClick"])])})),128))]),Object(a["h"])("th",null,Object(a["E"])(c.producto.cantidad),1),Object(a["h"])("th",null,[Object(a["h"])(l,{class:"dark-popper",arrow:"",hover:"",placement:"left",content:t.numeralFormat(c.producto.precio*n.dolar)+" Bs"},{default:Object(a["N"])((function(){return[Object(a["g"])(Object(a["E"])(c.producto.precio)+" (+"+Object(a["E"])(c.producto.iva)+"% iva) ",1)]})),_:1},8,["content"])]),Object(a["h"])("th",null,[Object(a["h"])(l,{class:"dark-popper",arrow:"",hover:"",placement:"left",content:t.numeralFormat(n.total*n.dolar)+" Bs"},{default:Object(a["N"])((function(){return[Object(a["g"])(Object(a["E"])(n.total),1)]})),_:1},8,["content"])]),Object(a["h"])("th",null,[Object(a["h"])("button",{onClick:e[1]||(e[1]=function(t){return n.deleteProduct(c.indice)}),class:"btn btn-danger"},[lt,ut])])])}c("a434");var st=c("5c40"),dt=c("4b43"),bt={props:["producto","indice"],components:{Popper:dt["a"]},setup:function(t){var e=Object(at["b"])(),c=Object(nt["k"])(t.producto),a=Object(st["d"])((function(){return e.state.system.info.dolar})),n=Object(st["d"])((function(){var t=c.value,e=t.precio*t.iva/100*t.cantidad,a=t.precio*t.cantidad;return a||(a=0),e||(e=0),a+e}));function r(t){e.dispatch("resProducto",{id:c.value.producto_id,indice:t}),c.value.imei.splice(t,1)}function o(t){e.dispatch("deleteStore",t)}return{total:n,dolar:a,deleteProduct:o,Producto:c,deleteOneItem:r}}};bt.render=it;var Ot=bt,jt=c("98a0"),ht={props:["param"],components:{ListProductos:Ot,Popper:dt["a"],NoAccess:ct["default"]},setup:function(){var t=Object(at["b"])();t.dispatch("getProductos"),t.dispatch("buscar"),t.dispatch("getClientes");var e=Object(nt["a"])((function(){return t.state.system.info.dolar})),c=Object(nt["k"])(!1),a=Object(nt["k"])(""),n=Object(nt["k"])({}),r=Object(nt["k"])(1),o=Object(nt["k"])(""),l=Object(nt["a"])((function(){return t.state.toask})),u=Object(nt["a"])((function(){return t.state.usuario})),i=Object(nt["a"])((function(){return t.state.productosVenta})),s=Object(nt["a"])((function(){return t.state.statusVenta})),d=Object(nt["k"])(""),b=Object(nt["k"])(!1),O=Object(nt["a"])((function(){var t=n.value,e=t.precio*t.iva/100*r.value,c=t.precio*r.value;return c||(c=0),e||(e=0),c+e})),j=Object(nt["a"])((function(){return t.state.dataCliente})),h=Object(nt["a"])((function(){return t.state.datosCliente})),p=Object(nt["a"])((function(){return i.value.reduce((function(t,e){return t+e.cantidad*e.precio}),0)})),f=Object(nt["a"])((function(){return i.value.reduce((function(t,e){return t+e.cantidad*e.precio*e.iva/100}),0)})),m=Object(nt["a"])((function(){return t.state.productosTrue})),v=Object(nt["a"])((function(){return t.state.clientesActivos}));function g(){t.dispatch("vaciarVenta"),d.value="",b.value=!1,c.value=!1}function k(e){o.value="",t.dispatch("guardarCliente",e)}var C=function(){var e={ruta:"/ventas/add"};t.dispatch("sendUrl",e)};function y(){if(!j.value)return Object(jt["a"])("especifique un cliente",l.value.warning);if(0==i.value.length)return Object(jt["a"])("no se puede hacer una venta vacia",l.value.warning);var t=i.value.map((function(t){var e=t.imei.map((function(t){return!!t.value||(t.value="",!1)}));return-1==e.indexOf(!1)}));if(-1!=t.indexOf(!1))return Object(jt["a"])("el campo imei no puede estar vacio",l.value.warning);c.value=!0}function x(t){a.value="",n.value=t}function w(){r.value>n.value.cantidad&&(r.value=n.value.cantidad)}function V(){var e={productName:n.value.nombre,modelo:n.value.modelo,marca:n.value.marca,precio:n.value.precio,codigo:n.value.codigo,imei:[{value:null}],cantidad:r.value,iva:n.value.iva,producto_id:n.value._id};t.dispatch("agregarToCarrito",e)}function _(){t.dispatch("deleteProccessVenta"),n.value={},r.value=1}function P(){t.dispatch("generarPdf")}function E(){t.dispatch("comprar",{nota:d.value,prestamo:b.value})}return{usuario:u,newVenta:g,generarPdf:P,statusVenta:s,dolar:e,prestamo:b,modalVenta:c,notaVenta:d,preGuardarCompra:y,guardarCompra:E,iva:f,totalVenta:p,cancelVenta:_,agregarCarrito:V,productosVenta:i,verifyStock:w,total:O,cantidad:r,inputsAgregar:n,selectProducto:x,buscarProducto:a,sendUrl:C,selectCliente:k,productos:m,buscarClientes:o,clientes:v,dataCliente:j,datosCliente:h}}};c("d515");ht.render=et;e["default"]=ht},cc73:function(t,e,c){},d515:function(t,e,c){"use strict";c("cc73")},d97a:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={style:{height:"70vh"},id:"layoutError"},r={id:"layoutError_content"},o={class:"container"},l={class:"row mt-5 justify-content-center"},u={class:"col-lg-6"},i={class:"text-center mt-4"},s=Object(a["h"])("h1",{class:"display-1"},"403",-1),d=Object(a["h"])("p",{class:"lead"},"sin autorizacion",-1),b=Object(a["h"])("p",null,"su acceso a esta area no esta permitido.",-1),O=Object(a["h"])("i",{class:"fas fa-arrow-left me-1"},null,-1),j=Object(a["g"])(" regresar al inicio ");function h(t,e){var c=Object(a["B"])("router-link");return Object(a["s"])(),Object(a["e"])("div",n,[Object(a["h"])("div",r,[Object(a["h"])("main",null,[Object(a["h"])("div",o,[Object(a["h"])("div",l,[Object(a["h"])("div",u,[Object(a["h"])("div",i,[s,d,b,Object(a["h"])(c,{to:"/"},{default:Object(a["N"])((function(){return[O,j]})),_:1})])])])])])])])}const p={};p.render=h;e["default"]=p}}]);
//# sourceMappingURL=chunk-f430f518.ca2ba6ba.js.map