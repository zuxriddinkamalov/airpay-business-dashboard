(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-778ae21a"],{"033a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("v-container")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body"},[n("el-container",{staticClass:"container"},[n("div",{staticClass:"container-content"},[n("v-header"),n("div",{staticClass:"main"},[n(e.login.tab,{tag:"component"})],1)],1)])],1)},i=[],s=n("c93e"),l=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo",style:{background:"url(https://s3.us-east-2.amazonaws.com/airpay-network/logo/an_logo.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}})])},c=[],m={name:"Header"},f=m,d=(n("72b7"),n("2877")),p=Object(d["a"])(f,u,c,!1,null,"0b9919f2",null);p.options.__file="Header.vue";var b=p.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submit(t):null}}},[n("el-form",{ref:"loginForm",attrs:{model:e.form},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{staticClass:"email",attrs:{rules:[{required:!0,message:"Email required",trigger:"blur"},{type:"email",message:"Please enter valid email",trigger:"blur"}],prop:"email"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("Please enter your email")])]),n("el-input",{attrs:{placeholder:"Please enter email",type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],2),e.$R.prop("hash",e.login)?e._e():n("div",{},[n("el-button",{staticClass:"button",attrs:{loading:e.loading,type:"primary"},on:{click:function(t){e.loginSubmit("loginForm")}}},[e._v("\n                Login\n            ")])],1)],1),e.$R.prop("hash",e.login)?n("div",{staticClass:"verification"},[n("el-form",{ref:"authorizationForm",attrs:{model:e.form},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{staticClass:"code input-with-button",attrs:{prop:"code",rules:[{required:!0,message:"Please enter verification code 4 digits",trigger:"blur"}]}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("we send code to your email")])]),n("el-input",{attrs:{autofocus:"true",pattern:"\\d*",type:"number",placeholder:"Verification code"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}},[n("el-button",{staticClass:"input-button",attrs:{slot:"append",type:"text"},on:{click:function(t){e.loginSubmit("loginForm")}},slot:"append"},[e._v("Resend")])],1)],2),n("el-button",{staticClass:"button",attrs:{loading:e.loading,type:"primary"},on:{click:function(t){e.authorization("authorizationForm")}}},[e._v("\n                Authentication\n            ")])],1)],1):e._e()],1)},v=[],h=(n("ac6a"),n("b17e")),$=n("d77e"),_=n("6eec"),y=(n("cadf"),n("551c"),n("097d"),n("9530")),k=n.n(y);function C(){var e=Object(_["a"])(["\n  mutation($input: Input!, $logo: Upload!) {\n    createBusiness(input: $input, logo: $logo)\n  }\n"]);return C=function(){return e},e}function O(){var e=Object(_["a"])(["\n  mutation($personalInput: getStartedPersonal!, $organizationInput: getStartedOrganization!) {\n    getStarted(personalInput: $personalInput, organizationInput: $organizationInput)\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(_["a"])(["\n  mutation($hash: String!, $code: Int!) {\n    accountAuth(hash: $hash, code: $code) {\n      isStarted\n      authorization\n    }\n  }\n"]);return j=function(){return e},e}function x(){var e=Object(_["a"])(["\n  mutation($email: String!) {\n    accountEnter(email: $email)\n  }\n"]);return x=function(){return e},e}var F=k()(x()),q=k()(j()),w=k()(O()),S=(k()(C()),n("4786")),I=n("36c9"),z={name:"LoginForm",data:function(){return{loading:!1,form:{email:"",code:""}}},methods:{submit:function(){this.loading||(Object(h["prop"])("hash",this.login)?this.authorization("authorizationForm"):this.loginSubmit("loginForm"))},loginSubmit:function(e){var t=this;this.$refs[e].validate(function(e,n){if(!e){var a=Object($["c"])(n);return t.$message({dangerouslyUseHTMLString:!0,type:"error",message:a}),!1}t.loading=!0,t.$apollo.mutate({mutation:F,variables:{email:t.form.email}}).then(function(e){var n=Object(h["path"])(["data","accountEnter"],e);t.$store.commit("login/".concat(S["a"]),{key:"hash",value:n}),t.loading=!1}).catch(function(e){t.loading=!1})})},authorization:function(e){var t=this,n=new Promise(function(e,n){t.$refs["loginForm"].validate(function(n,a){if(n)e();else{var o=Object($["c"])(a);t.$message({dangerouslyUseHTMLString:!0,type:"error",message:o})}})}),a=new Promise(function(n,a){t.$refs[e].validate(function(e,t){e&&n()})});Promise.all([n,a]).then(function(){t.loading=!0,t.$apollo.mutate({mutation:q,variables:{hash:Object(h["prop"])("hash",t.login),code:Object(h["prop"])("code",t.form)}}).then(function(e){var n=Object(h["path"])(["data","accountAuth"],e),a=Object(h["prop"])("isStarted",n),o=Object(h["prop"])("authorization",n);t.$store.commit("login/".concat(S["a"]),{key:"accountAuth",value:n}),sessionStorage.setItem("token",o),a?t.$store.commit("login/".concat(S["a"]),{key:"tab",value:"VBusinessInfo"}):(t.$store.commit("login/".concat(S["a"]),{key:"login",value:!0}),t.$router.push({name:I["q"]})),t.loading=!1}).catch(function(e){t.loading=!1})})}},computed:Object(s["a"])({},Object(l["c"])(["login"]))},N=z,M=(n("5cc3"),Object(d["a"])(N,g,v,!1,null,null,null));M.options.__file="Login.vue";var P=M.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submit("businessForm")}}},[n("el-form",{ref:"businessForm",attrs:{model:e.form},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-row",{attrs:{gutter:15}},[n("el-col",{attrs:{xs:24,md:12}},[n("el-form-item",{attrs:{rules:[{required:!0,message:"First name required",trigger:"blur"}],prop:"firstName"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("First name")])]),n("el-input",{model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})],2)],1),n("el-col",{attrs:{xs:24,md:12}},[n("el-form-item",{attrs:{rules:[{required:!0,message:"Last name required",trigger:"blur"}],prop:"lastName"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("Last name")])]),n("el-input",{model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})],2)],1)],1),n("el-form-item",{attrs:{rules:[{required:!0,message:"Phone number required",trigger:"blur"}],prop:"phone"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("Phone number")])]),n("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],2),n("el-form-item",{attrs:{rules:[{required:!0,message:"Business name is required",trigger:"blur"}],prop:"name"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("Business name")])]),n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],2),n("el-form-item",{attrs:{rules:[{required:!0,message:"Website is required",trigger:"blur"}],prop:"website"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("Website")])]),n("el-input",{model:{value:e.form.website,callback:function(t){e.$set(e.form,"website",t)},expression:"form.website"}})],2),n("el-form-item",{attrs:{rules:[{required:!0,message:"Fundraising method required",trigger:"blur"}],prop:"fundMethod"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("Fundraising method")])]),n("el-input",{model:{value:e.form.fundMethod,callback:function(t){e.$set(e.form,"fundMethod",t)},expression:"form.fundMethod"}})],2),n("el-row",{attrs:{gutter:15}},[n("el-col",{attrs:{xs:24,md:12}},[n("el-form-item",{attrs:{rules:[{required:!0,message:"Fundraise start date required",trigger:"blur"}],prop:"fundDate"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("Fundraise start date")])]),n("el-date-picker",{attrs:{type:"date","prefix-icon":null,format:"dd/MM/yyyy"},model:{value:e.form.fundDate,callback:function(t){e.$set(e.form,"fundDate",t)},expression:"form.fundDate"}})],2)],1),n("el-col",{attrs:{xs:24,md:12}},[n("el-form-item",{attrs:{rules:[{required:!0,message:"Fundraise goal required",trigger:"blur"}],prop:"fundGoal"}},[e._t("label",[n("div",{staticClass:"uppercase label"},[e._v("Fundraise goal")])]),n("el-input",{attrs:{type:"number",pattern:"*\\d"},model:{value:e.form.fundGoal,callback:function(t){e.$set(e.form,"fundGoal",t)},expression:"form.fundGoal"}},[n("i",{staticClass:"fas fa-dollar-sign",attrs:{slot:"prefix"},slot:"prefix"})])],2)],1)],1),n("div",{},[n("el-button",{staticClass:"button",attrs:{loading:e.loading,type:"primary"},on:{click:function(t){e.submit("businessForm")}}},[e._v("\n                Get started\n            ")])],1)],1)],1)},E=[],L=(n("7f7f"),{name:"BusinessInfo",data:function(){return{loading:!1,form:{firstName:"",lastName:"",phone:"",name:"",webSite:"",fundMethod:"",fundDate:"",fundGoal:""}}},methods:{submit:function(e){var t=this;this.$refs[e].validate(function(e,n){if(!e){var a=Object($["c"])(n);return t.$message({dangerouslyUseHTMLString:!0,type:"error",message:a}),!1}t.loading=!0,t.$apollo.mutate({mutation:w,variables:{personalInput:{firstName:t.form.firstName,lastName:t.form.lastName,phone:t.form.phone},organizationInput:{name:t.form.name,website:t.form.website,fundMethod:t.form.fundMethod,fundGoal:parseFloat(t.form.fundGoal),fundDate:t.form.fundDate}}}).then(function(e){var n=Object(h["path"])(["data","getStarted"],e);n&&(t.$store.commit("login/".concat(S["a"]),{key:"login",value:!0}),t.$router.push({name:I["q"]})),t.loading=!1}).catch(function(e){t.loading=!1})})}}}),G=L,B=(n("ba81"),Object(d["a"])(G,D,E,!1,null,null,null));B.options.__file="BusinessInfo.vue";var V=B.exports,H={name:"Container",components:{VHeader:b,VLoginForm:P,VBusinessInfo:V},computed:Object(s["a"])({},Object(l["c"])(["login"]))},A=H,R=(n("2b4cb"),Object(d["a"])(A,r,i,!1,null,"217f716d",null));R.options.__file="Container.vue";var U=R.exports,T={name:"login",mounted:function(){this.$store.commit("login/".concat(S["a"]),{key:"tab",value:"VLoginForm"})},components:{VContainer:U}},J=T,W=(n("5351"),Object(d["a"])(J,a,o,!1,null,"9e8813da",null));W.options.__file="Index.vue";t["default"]=W.exports},"2b4cb":function(e,t,n){"use strict";var a=n("77c3"),o=n.n(a);o.a},5351:function(e,t,n){"use strict";var a=n("663d"),o=n.n(a);o.a},"5cc3":function(e,t,n){"use strict";var a=n("7f7c"),o=n.n(a);o.a},6463:function(e,t,n){},"663d":function(e,t,n){},"72b7":function(e,t,n){"use strict";var a=n("ab21"),o=n.n(a);o.a},"77c3":function(e,t,n){},"7f7c":function(e,t,n){},ab21:function(e,t,n){},ba81:function(e,t,n){"use strict";var a=n("6463"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-778ae21a.a29dd2e6.js.map