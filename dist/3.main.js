(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{135:function(e,t){},138:function(e,t,n){var r=n(16),a=n(139);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},139:function(e,t,n){(t=n(17)(!1)).push([e.i,".entry{border-bottom:2px dotted #d0cece;margin:8px 2px;font-size:1.5em}.writer{font-size:1.1em;font-family:Arial, Helvetica, sans-serif}.pink{color:#eb93de}.red{color:#f16a6a}.green{color:#91ed82}.blue{color:#62bedf}.orange{color:#f9c34e}@media (min-width: 768px){.entry{font-size:1.5em}.writer{font-size:1.1em}}@media (min-width: 1024px){.entry{font-size:1.8em}.writer{font-size:1.3em}}\n",""]),e.exports=t},140:function(e,t,n){var r=n(16),a=n(141);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},141:function(e,t,n){(t=n(17)(!1)).push([e.i,".list{width:98vw;max-height:60vh;overflow-y:scroll}.list::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 3px #0000004d;-moz-box-shadow:inset 0 0 3px #0000004d;box-shadow:inset 0 0 3px #0000004d;border-radius:10px;background-color:white}.list::-webkit-scrollbar{width:12px;background-color:white}.list::-webkit-scrollbar-thumb{border-radius:10px;background-color:#62bedf}@media (min-width: 768px){.list{width:100%;max-height:97vh}.list::-webkit-scrollbar{width:7px}}\n",""]),e.exports=t},143:function(e,t,n){"use strict";n.r(t),n.d(t,"Storii",(function(){return C}));var r=n(105),a=n.n(r),o=n(38),i=n.n(o),c=n(39),s=n.n(c),l=n(40),p=n.n(l),u=n(0),m=n.n(u),d=n(109),f=n.n(d),h=n(9),b=n(48),x=n(4),w=n(49),g=n.n(w),v=n(50),y=(n(138),function(e){var t=e.item,n=e.color,r=t.writer;return m.a.createElement("div",{"data-test":"entry"},m.a.createElement("span",{className:"writer ".concat(n)},r.penName,":")," ",m.a.createElement("span",{className:"entry"},t.content))}),k=n(58),E=(n(140),{}),N=["pink","red","green","blue","orange"],O=function(e){var t=e.items,n=e.Component,r=e.refName;return t.map((function(e){var t=e.writer.penName;void 0===E[t]&&(E[e.writer.penName]=N[Math.floor(Math.random()*N.length)])})),m.a.createElement("div",{className:"list","data-test":"list"},t.map((function(e,t){var r=e.writer.penName;return m.a.createElement(n,{"data-test":"list-item",key:"list-item-".concat(t),item:e,color:E[r]})})),m.a.createElement("div",{id:"bottomOfEntries",ref:r}))};O.defaultProps={items:[]};var j=f()("http://localhost:4000"),C=function(e){var t=e.loadUser,n=e.setAlert,r=e.clearAlert,o=e.user,c=e.storii,l=e.getStorii,d=e.history,f=Object(u.useRef)(null),h=Object(u.useState)([]),b=p()(h,2),x=b[0],w=b[1],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"smooth";f.current.scrollIntoView({behavior:e,block:"end"})},v=function(){var e=s()(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return",!0);case 2:return e.prev=2,e.next=5,t();case 5:return e.abrupt("return",!0);case 8:e.prev=8,e.t0=e.catch(2),n(e.t0.msg),d.push("/LandingPage");case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=s()(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,l("5eec96f102ac44ab161b3b14");case 4:case 6:e.next=9;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n(e.t0.msg);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){j.on("new-message",(function(e){o&&(e.writer._id===o._id?setTimeout((function(){g()}),100):(n("new message!","event"),setTimeout((function(){r()}),2500)));var t=[].concat(a()(x),[e]);w(t)}))}),[x]),Object(u.useEffect)((function(){E()}),[]),Object(u.useEffect)((function(){c.entries&&(w(c.entries),setTimeout((function(){g("auto")}),200))}),[c]);return m.a.createElement("div",{className:"splitview-container-start"},m.a.createElement("div",{className:"scrollable-container"},c&&m.a.createElement(O,{items:x,Component:y,refName:f})),m.a.createElement("div",{className:"sticky-form"},v()&&o&&Object(k.a)((function(e){j.emit("message",e),g()}),o)))};t.default=Object(h.b)((function(e){return{user:e.auth.user,storii:e.storii}}),{getStorii:function(e){return function(){var t=s()(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("".concat("http://localhost:4000","/storii/").concat(e));case 3:r=t.sent,n({type:x.c,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},loadUser:b.a,setAlert:v.b,clearAlert:v.a})(C)},46:function(e,t,n){var r=n(16),a=n(47);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},47:function(e,t,n){(t=n(17)(!1)).push([e.i,".form-wrapper{width:90%;display:flex;flex-direction:column;align-items:center;padding:5px auto;justify-content:space-around;margin:10px auto}.main-wrapper{border-radius:20px;-webkit-box-shadow:2px 12px 20px 0px #d0cece;-moz-box-shadow:2px 12px 20px 0px #d0cece;box-shadow:2px 12px 20px 0px #d0cece}.large-input{border:1px solid black;width:100%;height:80px;outline:none;resize:none}.label{font-size:1.3em}.form-child{font-size:1.1em;width:80%;padding:0px;margin-top:0.5em;margin-bottom:10px}.input{border-radius:3px;padding:7px;text-align:center;outline:none;border:solid black 1px;border-bottom:solid black 3px}.link-note{text-align:center;font-size:1.1em}.highlight{color:#62bedf;cursor:pointer}.button{width:40%;font-size:1.1em;padding:10px;margin-bottom:20px;padding:5px 10px;text-align:center;cursor:pointer;outline:none;background-color:#62bedf;border:none;border-radius:5px;color:#fff;-webkit-box-shadow:2px 2px 5px 0px #767676;-moz-box-shadow:2px 2px 5px 0px #767676;box-shadow:2px 2px 5px 0px #767676}.button:active{background-color:#eb93de;box-shadow:0 1px #767676;transform:translateY(1px)}@media (min-width: 768px){.input{padding:2px 1px;margin-bottom:7px}.label{font-size:1.5em}.form-wrapper{width:95%;margin:5px auto}.main-wrapper{-webkit-box-shadow:2px 5px 10px 0px #767676;-moz-box-shadow:2px 5px 10px 0px #767676;box-shadow:2px 5px 10px 0px #767676}.large-input{margin-top:10px;height:150px}.top-margin{margin-top:50%}}@media (min-width: 1024px){.top-margin{margin-top:17%}.form-wrapper{width:70%}}@media (min-width: 1400px){.form-child{font-size:1.5em}.label{font-size:1.8em}.top-margin{margin-top:3%}}\n",""]),e.exports=t},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(38),a=n.n(r),o=n(39),i=n.n(o),c=n(4),s=n(49),l=n.n(s),p=function(){return function(){var e=i()(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("s-token"),r={headers:{"x-auth-token":n}},e.prev=2,e.next=5,l.a.get("".concat("http://localhost:4000","/auth"),r);case 5:o=e.sent,t({type:c.d,payload:o.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:c.e,payload:{message:e.t0.response.data.msg}});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},u=function(e){var t=e.penName,n=e.email,r=e.password;return function(){var e=i()(a.a.mark((function e(o){var i,s,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={penName:t,email:n,password:r},s={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,l.a.post("".concat("http://localhost:4000","/users"),i,s);case 5:p=e.sent,o({type:c.b}),o({type:c.a,payload:p.data.token}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),o({type:c.e,payload:{message:e.t0.response.data.msg}});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},m=function(e){var t=e.email,n=e.password;return function(){var e=i()(a.a.mark((function e(r){var o,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={email:t,password:n},i={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,l.a.post("".concat("http://localhost:4000","/auth"),o,i);case 5:s=e.sent,r({type:c.b}),r({type:c.a,payload:s.data.token}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r({type:c.e,payload:{message:e.t0.response.data.msg}});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(4),a=function(e,t){return function(n){try{n({type:r.e,payload:{message:e,type:t}})}catch(e){console.error(e)}}},o=function(){return function(e){try{e({type:r.b})}catch(e){console.error(e)}}}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return w}));var r=n(6),a=n.n(r),o=n(0),i=n.n(o),c=n(40),s=n.n(c),l=n(7),p=n.n(l);n(46);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.css||"",n=Object(o.useState)(e.initState),r=s()(n,2),c=r[0],l=r[1],p=function(e){l(m(m({},c),{},a()({},e.target.name,e.target.value)))};return i.a.createElement("div",{className:"form-wrapper main-wrapper ".concat(t),"data-test":"form"},e.children({state:c,onChange:p,onCheckboxChange:function(e){var t=e.target,n=t.name,r=t.checked,a=e.target.attributes.belongsto.value,o=c[a];if(r)return o.push(n),void p({target:{name:a,value:o}});o=o.filter((function(e){return e!==n})),p({target:{name:a,value:o}})}}),i.a.createElement("button",{className:"button",onClick:function(){e.handleSubmit(c)},"data-test":"submit"},e.btnName||"send"))};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}d.propTypes={handleSubmit:p.a.func.isRequired,initState:p.a.object.isRequired};var b=function(e,t){return i.a.createElement(d,{initState:{content:"",writer:h({},t)},btnName:"add",handleSubmit:e,css:"top-margin"},(function(e){var t=e.state,n=e.onChange;return i.a.createElement("div",{className:"form-wrapper"},i.a.createElement("textarea",{className:"form-child large-input",name:"content",onChange:n,value:t.content}))}))},x=function(e,t){return i.a.createElement(d,{initState:{penName:"",email:"",password:"",password2:""},btnName:"create",handleSubmit:e,"data-test":"registerForm"},(function(e){var n=e.state,r=e.onChange,a=n.penName,o=n.email,c=n.password,s=n.password2;return i.a.createElement("div",{className:"form-wrapper"},i.a.createElement("label",{className:"label",htmlFor:"penName"},"Pen Name:"),i.a.createElement("input",{className:"form-child input",name:"penName",onChange:r,value:a,type:"text",required:!0}),i.a.createElement("label",{className:"label",htmlFor:"email"},"Email:"),i.a.createElement("input",{className:"form-child input",name:"email",onChange:r,value:o,type:"email",required:!0}),i.a.createElement("label",{className:"label",htmlFor:""},"Password:"),i.a.createElement("input",{className:"form-child input",name:"password",onChange:r,value:c,type:"password",required:!0,minLength:"6"}),i.a.createElement("label",{className:"label",htmlFor:"password2"},"Confirm password:"),i.a.createElement("input",{className:"form-child input",name:"password2",onChange:r,value:s,type:"password",required:!0,minLength:"6"}),i.a.createElement("p",{className:"form-child link-note"},"Already a writer? ...",i.a.createElement("a",{onClick:function(){return t("login")}},i.a.createElement("span",{className:"highlight"},"Click here"))))}))},w=function(e,t){return i.a.createElement(d,{initState:{email:"",password:""},btnName:"login",handleSubmit:e,"data-test":"loginForm"},(function(e){var n=e.state,r=e.onChange,a=n.email,o=n.password;return i.a.createElement("div",{className:"form-wrapper"},i.a.createElement("label",{className:"label",htmlFor:"email"},"Email:"),i.a.createElement("input",{className:"form-child input",name:"email",onChange:r,value:a,type:"email",required:!0}),i.a.createElement("label",{className:"label",htmlFor:""},"Password:"),i.a.createElement("input",{className:"form-child input",name:"password",onChange:r,value:o,type:"password",required:!0,minLength:"6"}),i.a.createElement("p",{className:"form-child link-note"},"Not yet a writer? ...",i.a.createElement("a",{onClick:function(){return t("register")}},i.a.createElement("span",{className:"highlight"},"Click here"))))}))}}}]);