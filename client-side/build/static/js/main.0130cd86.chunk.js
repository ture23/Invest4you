(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{443:function(e,t,a){},444:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=a(33),s=a(75),l=a(223),u=a(85),d=a(262),j="CREATE",p="UPDATE",b="DELETE",h="FETCH_ALL",O="AUTH",m="LOGOUT",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;case b:return e.filter((function(e){return e._id!==t.payload}));case j:return console.log("kreirano"),[].concat(Object(d.a)(e),[t.payload]);case p:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},f=a(18),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log("doslo dovde"),localStorage.setItem("profile",JSON.stringify(Object(f.a)({},null===t||void 0===t?void 0:t.data))),Object(f.a)(Object(f.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case m:return localStorage.clear(),console.log("ovdwe isto"),Object(f.a)(Object(f.a)({},e),{},{authData:null});default:return e}},v=Object(s.c)({company:x,auth:g}),y=a(508),w=a(30),k=a(490),S=a(19),C=a(495),N=a(229),I=a.n(N),P=a(525),F=a(494),T=a(492),L=a(526),W=a(261),B=a(496),D=a(497),z=a(91),A=a(224),E=a(2),M=Object(k.a)((function(e){return{root:{flexGrow:1,marginBottom:"4%"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,marginLeft:"5px",fontSize:"35px"},name:{flexGrow:1,marginLeft:"5px"}}}));function V(){var e,t=M(),a=r.a.useState(!0),c=Object(S.a)(a,2),i=c[0],s=c[1],l=r.a.useState(null),d=Object(S.a)(l,2),j=d[0],p=d[1],b=Boolean(j),h=Object(n.useState)(JSON.parse(localStorage.getItem("profile1"))),O=Object(S.a)(h,2),m=O[0],x=O[1],f=Object(o.b)(),g=Object(w.f)(),v=Object(w.g)();Object(n.useEffect)((function(e,t){var a=null===t||void 0===t?void 0:t.token;a&&(1e3*Object(A.a)(a).exp<(new Date).getTime()&&e());x(JSON.parse(localStorage.getItem("profile")))}),[v]);var y=function(e){s(e.target.checked)};return Object(E.jsxs)("div",{className:t.root,children:[Object(E.jsx)(T.a,{children:m?Object(E.jsx)(F.a,{control:Object(E.jsx)(P.a,{checked:i,onChange:y,onClick:function(){f({type:"LOGOUT"}),g.push("/"),x(null)},"aria-label":"login switch"}),label:"Logout"}):Object(E.jsx)(F.a,{control:Object(E.jsx)(P.a,{component:u.c,to:"/auth",checked:i,onChange:y,"aria-label":"login switch"}),label:"Login"})}),Object(E.jsx)(B.a,{position:"static",children:Object(E.jsxs)(D.a,{children:[m?Object(E.jsx)(C.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"}):null,Object(E.jsx)(z.a,{name:"hover-feedback",onClick:function(){g.push("/")},variant:"h6",className:t.title,children:Object(E.jsx)(C.a,{color:"inherit",children:"Invest4You"})}),m&&Object(E.jsxs)("div",{children:[Object(E.jsxs)(C.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit",children:[Object(E.jsx)(I.a,{}),Object(E.jsx)(z.a,{className:t.name,variant:"h6",children:null===m||void 0===m||null===(e=m.result)||void 0===e?void 0:e.name})]}),Object(E.jsxs)(W.a,{id:"menu-appbar",anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:function(){p(null)},children:[Object(E.jsx)(L.a,{onClick:function(){g.push("/IR"),p(null)},children:"Investor Relations"}),Object(E.jsx)(L.a,{onClick:function(){g.push("/MyAccount"),p(null)},children:"Dashboard"})]})]})]})})]})}var _=a(498),G=a(507),H=a(506),J=a(43),R=Object(k.a)((function(e){return Object(J.a)({mainContainer:{display:"flex",alignItems:"center",position:"relative"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"},container:{position:"relative",maxWidth:"100%"},item:{maxWidth:"25%"}},e.breakpoints.down("xs"),{item:{maxWidth:"none"}})})),U=a(6),Y=a(499),$=a(500),q=a(501),K=a(502),X=a(503),Z=a(505),Q=a(527),ee=a(233),te=a.n(ee),ae=a(234),ne=a.n(ae),re=a(232),ce=a.n(re),ie=Object(k.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative",padding:"2%"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),oe=a(231),se=a.n(oe),le=a(170),ue=a.n(le),de=a(504),je=a(235),pe=a.n(je),be=a(29),he=a.n(be),Oe=a(50),me=a(230),xe=a.n(me).a.create({baseURL:"https://invest4you.herokuapp.com/"});xe.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var fe=function(e,t){return xe.patch("/api/v1/companies/".concat(e),t)},ge=function(e){return xe.delete("/api/v1/companies/".concat(e))},ve=function(e){return xe.patch("/api/v1/companies/".concat(e,"/likeCompany"))},ye=function(e){return xe.post("api/v1/users/login",e)},we=function(e){return xe.post("api/v1/users/signup",e)},ke=function(){return function(){var e=Object(Oe.a)(he.a.mark((function e(t){var a,n;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.get("/api/v1/companies");case 3:a=e.sent,n=a.data,t({type:h,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Se=function(e){var t,a,n=e.company,c=e.setCurrentId,i=ie(),s=r.a.useState(!1),l=Object(S.a)(s,2),u=l[0],d=l[1],j=JSON.parse(localStorage.getItem("profile")),h=Object(o.b)(),O=function(){return n.likes.length>0?n.likes.find((function(e){var t,a;return e===((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)||(null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a._id))}))?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(se.a,{fontSize:"small"}),"\xa0",n.likes.length>2?"You and ".concat(n.likes.length-1," others"):"".concat(n.likes.length," like").concat(n.likes.length>1?"s":"")]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(ue.a,{fontSize:"small"}),"\xa0",n.likes.length," ",1===n.likes.length?"Like":"Likes"]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(ue.a,{fontSize:"small"}),"\xa0Like"]})};return Object(E.jsxs)(Y.a,{className:i.root,children:[Object(E.jsx)($.a,{avatar:Object(E.jsx)(Q.a,{"aria-label":"recipe",className:i.avatar,children:n.name[0]}),action:"admin"===(null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.role)?Object(E.jsx)(C.a,{"aria-label":"settings",onClick:function(){return c(n._id)},children:Object(E.jsx)(ce.a,{onclick:void window.scrollBy(0,1500)})}):Object(E.jsx)(z.a,{}),title:n.name,subheader:n.dateOfPurchase}),Object(E.jsx)(q.a,{className:i.media,image:n.selectedFile,title:"Paella dish"}),Object(E.jsxs)(K.a,{children:[Object(E.jsxs)(z.a,{variant:"body2",color:"textSecondary",component:"p",children:["Adresa: ",n.address]}),Object(E.jsx)(z.a,{variant:"body2",color:"textSecondary",component:"p",children:n.descriptionSmall})]}),Object(E.jsxs)(X.a,{disableSpacing:!0,children:[Object(E.jsx)(de.a,{size:"small",color:"primary",onClick:function(){return h((e=n._id,function(){var t=Object(Oe.a)(he.a.mark((function t(a){var n,r;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ve(e);case 3:n=t.sent,r=n.data,a({type:p,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(E.jsx)(O,{})}),Object(E.jsx)(C.a,{"aria-label":"share",children:Object(E.jsx)(te.a,{})}),j&&Object(E.jsx)(C.a,{className:Object(U.a)(i.expand,Object(J.a)({},i.expandOpen,u)),onClick:function(){d(!u)},"aria-expanded":u,"aria-label":"show more",children:Object(E.jsx)(ne.a,{})}),"admin"===(null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a.role)?Object(E.jsx)(C.a,{"aria-label":"delete",className:i.dalete,onClick:function(){return h((e=n._id,function(){var t=Object(Oe.a)(he.a.mark((function t(a){return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ge(e);case 3:a({type:b,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(E.jsx)(pe.a,{fontSize:"small"})}):Object(E.jsx)(z.a,{})]}),Object(E.jsx)(Z.a,{in:u,timeout:"auto",unmountOnExit:!0,children:Object(E.jsxs)(K.a,{children:[Object(E.jsxs)(z.a,{paragraph:!0,children:["Kupovna cijena: ",n.bothPrice,"$"]}),Object(E.jsxs)(z.a,{paragraph:!0,children:["Trenutna cijena: ",n.currentPrice,"$"]}),Object(E.jsxs)(z.a,{paragraph:!0,children:[" Broj Dionica ",n.numberOfStocks]}),Object(E.jsxs)(z.a,{paragraph:!0,children:[" Izracunata Vrijdnost ",n.myValuePrice,"$"]}),Object(E.jsxs)(z.a,{paragraph:!0,children:[" Podrucje: ",n.industry]}),Object(E.jsx)(z.a,{paragraph:!0,children:n.descriptionFull}),Object(E.jsx)(z.a,{})]})})]})},Ce=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.company})),n=R();return a.length?Object(E.jsx)(G.a,{className:n.container,"direction-sm-row":!0,container:!0,alignItems:"center",spacing:6,children:a.map((function(e){return Object(E.jsx)(G.a,{kay:e._id,className:n.item,alignItems:"center","direction-xs-row":!0,item:!0,xs:12,sm:6,children:Object(E.jsx)(Se,{className:n.item,company:e,setCurrentId:t})})}))}):Object(E.jsx)(H.a,{})},Ne=a(236),Ie=a.n(Ne),Pe=a(265),Fe=a(522),Te=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Le=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({name:"",address:"",descriptionFull:"",descriptionSmall:"",bothPrice:"",currentPrice:"",myValuePrice:"",numberOfStocks:"",dateOfPurchase:"",selectedFile:"",industry:""}),c=Object(S.a)(r,2),i=c[0],s=c[1],l=Object(o.c)((function(e){return t?e.company.find((function(e){return e._id===t})):null})),u=Te(),d=Object(o.b)(),b=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){l&&s(l)}),[l]);var h=function(){a(null),s({name:"",address:"",descriptionFull:"",descriptionSmall:"",bothPrice:"",currentPrice:"",myValuePrice:"",numberOfStocks:"",dateOfPurchase:"",selectedFile:"",industry:""})};return"user"===b.result.role?Object(E.jsx)(Pe.a,{className:u.paper,children:Object(E.jsx)(z.a,{variant:"h6",align:"center",children:"Please Sing In to create post!!!!"})}):"admin"===b.result.role?Object(E.jsx)(Pe.a,{className:u.paper,children:Object(E.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(u.form," ").concat(u.form),onSubmit:function(e){var a,n,r;e.preventDefault(),console.log(i),d(0===t?(r=i,function(){var e=Object(Oe.a)(he.a.mark((function e(t){var a,n;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c=r,xe.post("/api/v1/companies",c);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}var c}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()):(a=t,n=i,function(){var e=Object(Oe.a)(he.a.mark((function e(t){var r,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe(a,n);case 3:r=e.sent,c=r.data,t({type:p,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),h(),h(),setTimeout((function(){window.location.reload()}),1e3)},children:[Object(E.jsxs)(z.a,{variant:"h6",children:[" ",t?"Editing":"Creating"," Company"]}),"                                                   ",Object(E.jsx)(Fe.a,{name:"name",variant:"outlined",label:"name",fullWidth:!0,value:i.name,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{name:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"address",variant:"outlined",label:"address",fullWidth:!0,value:i.address,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{address:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"descriptionSmall",variant:"outlined",label:"descriptionSmall",fullWidth:!0,value:i.descriptionSmall,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{descriptionSmall:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"descriptionFull",variant:"outlined",label:"descriptionFull",fullWidth:!0,multiline:!0,rows:4,value:i.descriptionFull,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{descriptionFull:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"bothPrice",variant:"outlined",label:"bothPrice",fullWidth:!0,value:i.bothPrice,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{bothPrice:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"currentPrice",variant:"outlined",label:"currentPrice",fullWidth:!0,value:i.currentPrice,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{currentPrice:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"myValuePrice",variant:"outlined",label:"myValuePrice",fullWidth:!0,value:i.myValuePrice,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{myValuePrice:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"numberOfStocks",variant:"outlined",label:"numberOfStocks",fullWidth:!0,value:i.numberOfStocks,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{numberOfStocks:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"dateOfPurchase",variant:"outlined",label:"dateOfPurchase",fullWidth:!0,value:i.dateOfPurchase,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{dateOfPurchase:e.target.value}))}}),Object(E.jsx)(Fe.a,{name:"industry",variant:"outlined",label:"industry",fullWidth:!0,value:i.industry,onChange:function(e){return s(Object(f.a)(Object(f.a)({},i),{},{industry:e.target.value}))}}),Object(E.jsx)("div",{className:u.fileInput,children:Object(E.jsx)(Ie.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(f.a)(Object(f.a)({},i),{},{selectedFile:t}))}})}),Object(E.jsx)(de.a,{className:u.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(E.jsx)(de.a,{variant:"contained",color:"secondary",size:"small",onClick:h,fullWidth:!0,children:"Clear"})]})}):void 0},We=Object(k.a)((function(e){return{container:{maxWidth:"100%",width:"100%"},grid:{maxWidth:"50%",float:"right"},text:{fontSize:"22px",textAlign:"center"},item:{maxWidth:"20%"}}})),Be=function(){var e,t,a=We(),r=Object(n.useState)(0),c=Object(S.a)(r,2),i=c[0],s=c[1],l=Object(o.b)(),u=JSON.parse(localStorage.getItem("profile"));return Object(n.useEffect)((function(){l(ke())}),[i,l]),Object(E.jsx)(y.a,{className:a.container,children:Object(E.jsx)(_.a,{in:!0,children:Object(E.jsx)(y.a,{className:a.container,children:Object(E.jsxs)(G.a,{container:!0,className:a.container,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(E.jsx)(G.a,{className:a.container,"direction-sm-row":!0,children:Object(E.jsx)(Ce,{className:a.item,setCurrentId:s})}),"admin"===(null===u||void 0===u||null===(e=u.result)||void 0===e?void 0:e.role)&&Object(E.jsx)(G.a,{item:!0,xs:12,sm:4,children:Object(E.jsx)(Le,{currentId:i,setCurrentId:s})}),("user"===(null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.role)||!u)&&Object(E.jsx)(G.a,{className:a.grid,variant:"h6",align:"center",children:Object(E.jsx)(z.a,{className:a.text})})]})})})})},De=a(240),ze=a.n(De),Ae=a(237),Ee=Object(k.a)((function(e){return Object(J.a)({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},container:{width:"50%"},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(3),marginTop:"2%"}},e.breakpoints.down("xs"),{container:{width:"95%"}})})),Me=a(509),Ve=a(238),_e=a.n(Ve),Ge=a(239),He=a.n(Ge),Je=function(e){var t=e.half,a=e.handleChange,n=e.handelShowPassword,r=e.name,c=e.label,i=e.autoFocus,o=e.type;return Object(E.jsx)(G.a,{item:!0,xs:12,sm:t?6:12,children:Object(E.jsx)(Fe.a,{name:r,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:c,autoFocus:i,type:o,InputProps:"password"===r&&{endAdornment:Object(E.jsx)(Me.a,{position:"end",children:Object(E.jsx)(C.a,{onClick:n,children:"password"===o?Object(E.jsx)(_e.a,{}):Object(E.jsx)(He.a,{})})})}})})},Re=function(){return Object(E.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(E.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Ue={firstname:"",lastname:"",email:"",password:"",passwordConfirm:""},Ye=function(){var e=Ee(),t=Object(n.useState)(!1),a=Object(S.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(S.a)(i,2),l=s[0],u=s[1],d=Object(o.b)(),j=Object(w.f)(),p=Object(n.useState)(Ue),b=Object(S.a)(p,2),h=b[0],m=b[1],x=function(e){m(Object(f.a)(Object(f.a)({},h),{},Object(J.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(Oe.a)(he.a.mark((function e(t){var a,n;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{d({type:"AUTH",data:{result:a,token:n}}),j.push("/"),window.location.reload()}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(y.a,{className:e.container,component:"main",maxwidth:"xs",children:Object(E.jsxs)(Pe.a,{className:e.paper,elevation:3,children:[Object(E.jsx)(Q.a,{className:e.avatar,children:Object(E.jsx)(ze.a,{})}),Object(E.jsx)(z.a,{variant:"h5",children:l?"Sing Up":"Log In"}),Object(E.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),d(l?function(e,t,a){return function(){var a=Object(Oe.a)(he.a.mark((function a(n){var r,c;return he.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,we(e);case 3:r=a.sent,c=r.data,n({type:O,data:c}),t.push("/"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),t.push("/auth"),alert("Incorect Credencials");case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(h,j):function(e,t,a){return function(){var a=Object(Oe.a)(he.a.mark((function a(n){var r,c;return he.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ye(e);case 3:r=a.sent,c=r.data,n({type:O,data:c}),t.push("/"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),t.push("/auth"),alert("Incorect Credencials");case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(h,j)),j.push("/")},children:[Object(E.jsxs)(G.a,{container:!0,spacing:2,children:[l&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Je,{name:"firstname",label:"First Name",handleChange:x,half:!0}),Object(E.jsx)(Je,{name:"lastname",label:"Last Name",handleChange:x,half:!0})]}),Object(E.jsx)(Je,{name:"email",label:"Email Address",handleChange:x,type:"email"}),Object(E.jsx)(Je,{name:"password",label:"password",handleChange:x,type:r?"text":"password",handelShowPassword:function(){return c((function(e){return!e}))}}),l&&Object(E.jsx)(Je,{name:"passwordConfirm",label:"Repeat Password",handleChange:x,type:"passwordConfirm"})]}),Object(E.jsx)(de.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:l?"Sing Up":"Log In"}),Object(E.jsx)(Ae.GoogleLogin,{clientId:"613985626492-46m31uene351eqnomljqrk2j9utk0pfn.apps.googleusercontent.com",render:function(t){return Object(E.jsx)(de.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(E.jsx)(Re,{}),variant:"contained",children:"Google Log In"})},onSuccess:g,onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"}),Object(E.jsx)(G.a,{container:!0,justify:"flex-end",children:Object(E.jsx)(G.a,{item:!0,children:Object(E.jsx)(de.a,{onClick:function(){u((function(e){return!e})),c(!1)},children:l?"Have Account!!! Log In ":"Don't have Account!!! Sing Up"})})})]})]})})},$e=Object(k.a)((function(e){return{row:{marginLeft:"67%",marginTop:"5%"}}}));var qe=function(){var e=$e();return Object(E.jsxs)("footer",{children:[Object(E.jsx)("div",{children:Object(E.jsx)("div",{className:"col span-1-of-2"})}),Object(E.jsx)("div",{className:e.row,children:Object(E.jsx)("p",{className:"copyright",children:"copyright \xa9 2019 by Invest4You. all rights reserved  This page is made exclusively for Invest4You purposes."})})]})},Ke=a(521),Xe=a(523),Ze=a(520),Qe=a(72),et=a(510),tt=a(511),at=a(256),nt=a(257),rt=a(49),ct=a(263);function it(e){return Object(E.jsx)(z.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function ot(e,t){return{time:e,amount:t}}var st=[ot("28.08.20",4e3),ot("28.09.20",5e3),ot("28.10.20",4800),ot("28.11.20",5200),ot("28.12.20",5800),ot("01.01.21",5850),ot("28.01.21",6100),ot("28.04.21",6700),ot("24.06.21",8100),ot("28.08.21",void 0)];function lt(){var e=Object(Qe.a)();return Object(E.jsxs)(r.a.Fragment,{children:[Object(E.jsx)(it,{children:"Stanje od prvog ulaganja"}),Object(E.jsx)(et.a,{children:Object(E.jsxs)(tt.a,{data:st,margin:{top:16,right:16,bottom:0,left:24},children:[Object(E.jsx)(at.a,{dataKey:"time",stroke:e.palette.text.secondary}),Object(E.jsx)(nt.a,{stroke:e.palette.text.secondary,children:Object(E.jsx)(rt.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"Dobit (\u20ac)"})}),Object(E.jsx)(ct.a,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})}var ut=a(258);function dt(e){return Object(E.jsx)(y.a,{children:Object(E.jsx)("div",{fontSize:"small",children:Object(E.jsx)(ut.a,{width:"600px",height:"400px",chartType:"PieChart",loader:Object(E.jsx)("div",{children:"Loading Chart"}),data:[["Ivestitor","Postotak ulaganja"],["Marko Olivera Turic",1e3],["Franjo Dujo",1e3],["Nikola Marina Vukovic",1e3],["Goran Terezija Grebenar",1e3],["Marko Ivana Matosevic",1e3]],options:{title:"Udio Investitora"},rootProps:{"data-testid":"7"}})})})}var jt=Object(k.a)({depositContext:{flex:1}});function pt(e){var t,a=jt(),n=e.companies,c=[];return n.forEach((function(e){var a=e.numberOfStocks*e.currentPrice;c.push(a);t=.85*c.reduce((function(e,t){return e+t}))-2300})),console.log(t),Object(E.jsxs)(r.a.Fragment,{children:[Object(E.jsx)(it,{children:"Trenutni Kapital"}),Object(E.jsxs)(z.a,{component:"p",variant:"h4",children:[t," \u20ac"]}),Object(E.jsx)(z.a,{color:"textSecondary",className:a.depositContext,children:"24 Lip, 2021"})]})}var bt=a(515),ht=a(519),Ot=a(518),mt=a(516),xt=a(517);function ft(e){e.preventDefault()}var gt=Object(k.a)((function(e){return{display:{display:"none",displayPrint:"none",visibility:"hidden"},root:{width:"25%"},container:{maxHeight:440},seeMore:{marginTop:e.spacing(3)}}})),vt=function(e){var t=e.company,a=t.numberOfStocks*t.currentPrice,n=gt();return Object(E.jsxs)(r.a.Fragment,{children:[Object(E.jsxs)(bt.a,{size:"small",children:[Object(E.jsx)(mt.a,{align:"center",children:Object(E.jsxs)(xt.a,{children:[Object(E.jsx)(Ot.a,{children:"Date of purchase"}),Object(E.jsx)(Ot.a,{children:"Company"}),Object(E.jsx)(Ot.a,{children:"Stocks"}),Object(E.jsx)(Ot.a,{children:"Price of purchase"}),Object(E.jsx)(Ot.a,{children:"Current price"}),Object(E.jsx)(Ot.a,{align:"right",children:"Profit(+-)"})]})}),Object(E.jsx)(ht.a,{children:Object(E.jsxs)(xt.a,{width:"25%",children:[Object(E.jsx)(Ot.a,{children:t.dateOfPurchase}),Object(E.jsx)(Ot.a,{width:"25%",children:t.name}),Object(E.jsxs)(Ot.a,{width:"25%",children:[t.numberOfStocks," "]}),Object(E.jsxs)(Ot.a,{width:"25%",children:[t.bothPrice," $"]}),Object(E.jsxs)(Ot.a,{width:"25%",children:[t.currentPrice," $"]}),Object(E.jsxs)(Ot.a,{width:"25%",align:"right",children:[a," $"]})]},t.id)})]}),"\xb4",Object(E.jsx)("div",{className:n.seeMore,children:Object(E.jsx)(Ze.a,{color:"primary",href:"#",onClick:ft,children:"See more orders"})})]})};function yt(){return Object(E.jsxs)(z.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(E.jsx)(Ze.a,{color:"inherit",href:"https://material-ui.com/",children:"Invest4You"})," ",(new Date).getFullYear(),"."]})}var wt=Object(k.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(f.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(J.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function kt(e){var t=wt(),a=Object(n.useState)(0),r=Object(S.a)(a,2),c=r[0],i=(r[1],Object(o.c)((function(e){return e.company}))),s=Object(o.b)(),l=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),u=Object(S.a)(l,2),d=u[0];u[1];Object(n.useEffect)((function(){window.performance&&s(ke())}),[c,s]);var j=Object(U.a)(t.paper,t.fixedHeight);return Object(E.jsx)("div",{children:d?Object(E.jsxs)("div",{className:t.root,children:[Object(E.jsx)(Ke.a,{}),Object(E.jsxs)("main",{className:t.content,children:[Object(E.jsx)("div",{className:t.appBarSpacer}),Object(E.jsxs)(y.a,{maxWidth:"lg",className:t.container,children:[Object(E.jsxs)(G.a,{container:!0,spacing:3,children:[Object(E.jsx)(G.a,{item:!0,xs:12,md:8,lg:9,children:Object(E.jsx)(Pe.a,{className:j,children:Object(E.jsx)(lt,{})})}),Object(E.jsx)(G.a,{item:!0,xs:12,md:4,lg:3,children:Object(E.jsx)(Pe.a,{className:j,children:Object(E.jsx)(pt,{companies:i})})}),Object(E.jsx)(G.a,{item:!0,xs:12,children:Object(E.jsxs)(Pe.a,{className:t.paper,children:[" Current Portfolio",i.map((function(e){return Object(E.jsx)(vt,{company:e})}))]})})]}),Object(E.jsx)(Xe.a,{pt:4,children:Object(E.jsx)(yt,{})})]})]})]}):Object(E.jsx)(Pe.a,{className:t.paper,variant:"outlined",children:Object(E.jsx)(z.a,{variant:"h6",align:"center",children:"Please Sing In to see more!!!!"})})})}var St=Object(k.a)((function(e){return{container:{maxWidth:"2100px"}}})),Ct=function(){var e=St();return Object(E.jsx)(u.a,{children:Object(E.jsxs)(y.a,{className:e.container,maxwidth:"100%",children:[Object(E.jsx)(V,{}),Object(E.jsxs)(w.c,{children:[Object(E.jsx)(w.a,{path:"/",exact:!0,component:Be}),Object(E.jsx)(w.a,{path:"/auth",exact:!0,component:Ye}),Object(E.jsx)(w.a,{path:"/MyAccount",exact:!0,component:kt}),Object(E.jsx)(w.a,{path:"/IR",exact:!0,component:dt})]}),Object(E.jsx)(qe,{})]})})},Nt=(a(443),Object(s.e)(v,Object(s.d)(Object(s.a)(l.a))));i.a.render(Object(E.jsx)(u.b,{children:Object(E.jsx)(o.a,{store:Nt,children:Object(E.jsx)(Ct,{})})}),document.getElementById("root"))}},[[444,1,2]]]);
//# sourceMappingURL=main.0130cd86.chunk.js.map