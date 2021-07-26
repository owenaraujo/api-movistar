(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7698"],{7768:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),s={class:"container-fluid"},l=Object(a["h"])("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[Object(a["h"])("h1",{class:"h3 mb-0 text-gray-800"},"Panel de Administración")],-1),r={class:"row"},o=Object(a["h"])("div",{class:"card border-left-primary shadow h-100 py-2"},[Object(a["h"])("div",{class:"card-body"},[Object(a["h"])("div",{class:"row no-gutters align-items-center"},[Object(a["h"])("div",{class:"col mr-2"},[Object(a["h"])("div",{class:"text-xs font-weight-bold text-primary text-uppercase mb-1"},"Usuarios"),Object(a["h"])("div",{class:"h5 mb-0 font-weight-bold text-gray-800"})]),Object(a["h"])("div",{class:"col-auto"},[Object(a["h"])("i",{class:"fas fa-user fa-2x text-gray-300"})])])])],-1),b=Object(a["h"])("div",{class:"card border-left-success shadow h-100 py-2"},[Object(a["h"])("div",{class:"card-body"},[Object(a["h"])("div",{class:"row no-gutters align-items-center"},[Object(a["h"])("div",{class:"col mr-2"},[Object(a["h"])("div",{class:"text-xs font-weight-bold text-success text-uppercase mb-1"},"Clientes"),Object(a["h"])("div",{class:"h5 mb-0 font-weight-bold text-gray-800"})]),Object(a["h"])("div",{class:"col-auto"},[Object(a["h"])("i",{class:"fas fa-users fa-2x text-gray-300"})])])])],-1),i=Object(a["h"])("div",{class:"card border-left-info shadow h-100 py-2"},[Object(a["h"])("div",{class:"card-body"},[Object(a["h"])("div",{class:"row no-gutters align-items-center"},[Object(a["h"])("div",{class:"col mr-2"},[Object(a["h"])("div",{class:"text-xs font-weight-bold text-info text-uppercase mb-1"},"Productos"),Object(a["h"])("div",{class:"row no-gutters align-items-center"},[Object(a["h"])("div",{class:"col-auto"},[Object(a["h"])("div",{class:"h5 mb-0 mr-3 font-weight-bold text-gray-800"})]),Object(a["h"])("div",{class:"col"},[Object(a["h"])("div",{class:"progress progress-sm mr-2"},[Object(a["h"])("div",{class:"progress-bar bg-info",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})])])])]),Object(a["h"])("div",{class:"col-auto"},[Object(a["h"])("i",{class:"fas fa-clipboard-list fa-2x text-gray-300"})])])])],-1),h=Object(a["h"])("div",{class:"card border-left-warning shadow h-100 py-2"},[Object(a["h"])("div",{class:"card-body"},[Object(a["h"])("div",{class:"row no-gutters align-items-center"},[Object(a["h"])("div",{class:"col mr-2"},[Object(a["h"])("div",{class:"text-xs font-weight-bold text-warning text-uppercase mb-1"},"Ventas"),Object(a["h"])("div",{class:"h5 mb-0 font-weight-bold text-gray-800"})]),Object(a["h"])("div",{class:"col-auto"},[Object(a["h"])("i",{class:"fas fa-dollar-sign fa-2x text-gray-300"})])])])],-1),n=Object(a["h"])("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[Object(a["h"])("h1",{class:"h3 mb-0 text-gray-800"},"Configuración")],-1),d=Object(a["h"])("div",{class:"row"},[Object(a["h"])("div",{class:"col-lg-6"},[Object(a["h"])("div",{class:"card"},[Object(a["h"])("div",{class:"card-header bg-primary text-white"}," Información Personal "),Object(a["h"])("div",{class:"card-body"},[Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,[Object(a["g"])("Nombre: "),Object(a["h"])("strong")])]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,[Object(a["g"])("Correo: "),Object(a["h"])("strong")])]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,[Object(a["g"])("Rol: "),Object(a["h"])("strong")])]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,[Object(a["g"])("Usuario: "),Object(a["h"])("strong")])]),Object(a["h"])("ul",{class:"list-group"},[Object(a["h"])("li",{class:"list-group-item active"},"Cambiar Contraseña"),Object(a["h"])("form",{action:"",method:" post",name:"frmChangePass",id:"frmChangePass",class:"p-3"},[Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Contraseña Actual"),Object(a["h"])("input",{type:"password",name:"actual",id:"actual",placeholder:"Clave Actual",required:"",class:"form-control"})]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Nueva Contraseña"),Object(a["h"])("input",{type:"password",name:"nueva",id:"nueva",placeholder:"Nueva Clave",required:"",class:"form-control"})]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Confirmar Contraseña"),Object(a["h"])("input",{type:"password",name:"confirmar",id:"confirmar",placeholder:"Confirmar clave",required:"",class:"form-control"})]),Object(a["h"])("div",{class:"alertChangePass",style:{display:"none"}}),Object(a["h"])("div",null,[Object(a["h"])("button",{type:"submit",class:"btn btn-primary btnChangePass"},"Cambiar Contraseña")])])])])])]),Object(a["h"])("div",{class:"col-lg-6 d-none"},[Object(a["h"])("div",{class:"card"},[Object(a["h"])("div",{class:"card-header bg-primary text-white"}," Datos de la Empresa "),Object(a["h"])("div",{class:"card-body"},[Object(a["h"])("form",{action:"",method:"post",id:"frmEmpresa",class:"p-3"},[Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Ruc:"),Object(a["h"])("input",{type:"number",name:"txtDni",value:"<?php echo $dni; ?>",id:"txtDni",placeholder:"Dni de la Empresa",required:"",class:"form-control"})]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Nombre:"),Object(a["h"])("input",{type:"text",name:"txtNombre",class:"form-control",value:"<?php echo $nombre_empresa; ?>",id:"txtNombre",placeholder:"Nombre de la Empresa",required:""})]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Razon Social:"),Object(a["h"])("input",{type:"text",name:"txtRSocial",class:"form-control",value:"<?php echo $razonSocial; ?>",id:"txtRSocial",placeholder:"Razon Social de la Empresa"})]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Teléfono:"),Object(a["h"])("input",{type:"number",name:"txtTelEmpresa",class:"form-control",value:"<?php echo $telEmpresa; ?>",id:"txtTelEmpresa",placeholder:"teléfono de la Empresa",required:""})]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Correo Electrónico:"),Object(a["h"])("input",{type:"email",name:"txtEmailEmpresa",class:"form-control",value:"<?php echo $emailEmpresa; ?>",id:"txtEmailEmpresa",placeholder:"Correo de la Empresa",required:""})]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"Dirección:"),Object(a["h"])("input",{type:"text",name:"txtDirEmpresa",class:"form-control",value:"<?php echo $dirEmpresa; ?>",id:"txtDirEmpresa",placeholder:"Dirreción de la Empresa",required:""})]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("label",null,"IGV (%):"),Object(a["h"])("input",{type:"text",name:"txtIgv",class:"form-control",value:"<?php echo $igv; ?>",id:"txtIgv",placeholder:"IGV de la Empresa",required:""})]),Object(a["h"])("div",null,[Object(a["h"])("button",{type:"submit",class:"btn btn-primary btnChangePass"},[Object(a["h"])("i",{class:"fas fa-save"}),Object(a["g"])(" Guardar Datos")])])])])])]),Object(a["h"])("div",{class:"col-lg-6"},[Object(a["h"])("div",{class:"card"},[Object(a["h"])("div",{class:"card-header bg-primary text-white"}," Datos de la Empresa "),Object(a["h"])("div",{class:"card-body"},[Object(a["h"])("div",{class:"p-3"},[Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("strong",null,"Ruc:"),Object(a["h"])("h6")]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("strong",null,"Nombre:"),Object(a["h"])("h6")]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("strong",null,"Razon Social:"),Object(a["h"])("h6")]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("strong",null,"Teléfono:")]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("strong",null,"Correo Electrónico:"),Object(a["h"])("h6")]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("strong",null,"Dirección:"),Object(a["h"])("h6")]),Object(a["h"])("div",{class:"form-group"},[Object(a["h"])("strong",null,"IGV (%):"),Object(a["h"])("h6")])])])])])],-1);function j(e,t,c,j,O,u){var m=Object(a["B"])("router-link");return Object(a["s"])(),Object(a["e"])("div",s,[l,Object(a["h"])("div",r,[Object(a["h"])(m,{class:"col-xl-3 col-md-6 mb-4",to:"/usuarios"},{default:Object(a["N"])((function(){return[o]})),_:1}),Object(a["h"])(m,{class:"col-xl-3 col-md-6 mb-4",to:"/clientes"},{default:Object(a["N"])((function(){return[b]})),_:1}),Object(a["h"])(m,{class:"col-xl-3 col-md-6 mb-4",to:"/productos"},{default:Object(a["N"])((function(){return[i]})),_:1}),Object(a["h"])(m,{class:"col-xl-3 col-md-6 mb-4",to:"/ventas"},{default:Object(a["N"])((function(){return[h]})),_:1})]),n,d])}var O={};O.render=j;t["default"]=O}}]);
//# sourceMappingURL=chunk-2d0d7698.04a77ac2.js.map