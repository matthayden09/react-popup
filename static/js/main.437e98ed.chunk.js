(this["webpackJsonpreact-popup"]=this["webpackJsonpreact-popup"]||[]).push([[0],{23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(12),i=a.n(c),l=(a(23),a(16)),o=a(13),r=a(14),m=a(18),d=a(17),h=a(15),u=a.n(h),b=a(0),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={name:"",email:"",message:""},s}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),u()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"message",children:"Message"}),Object(b.jsx)("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(n.a.Component),p=(a(43),function(e){var t=e.show,a=e.close;return Object(b.jsxs)("div",{className:"modal-wrapper",style:{transform:t?"translateY(0vh)":"translateY(-100vh)",opacity:t?"1":"0"},children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("p",{children:"Please enter your contact information"}),Object(b.jsx)("span",{onClick:a,className:"close-modal-btn",children:"x"})]}),Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsx)(j,{})}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{onClick:a,className:"btn-cancel",children:"Close"})})]})]})});var O=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=function(){return n(!1)};return Object(b.jsxs)("div",{children:[a?Object(b.jsx)("div",{onClick:c,className:"back-drop"}):null,Object(b.jsx)("button",{onClick:function(){return n(!0)},className:"btn-openModal",children:"Welcome to Abe"}),Object(b.jsx)(p,{show:a,close:c})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.437e98ed.chunk.js.map