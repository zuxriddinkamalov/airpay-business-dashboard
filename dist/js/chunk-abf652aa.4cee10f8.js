(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abf652aa"],{"0bfb":function(e,t,n){"use strict";var a=n("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1c77":function(e,t,n){},"31d7":function(e,t,n){},3464:function(e,t,n){"use strict";var a=n("8adf"),i=n.n(a);i.a},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},6760:function(e,t,n){"use strict";var a=n("31d7"),i=n.n(a);i.a},6995:function(e,t,n){},"6b54":function(e,t,n){"use strict";n("3846");var a=n("cb7c"),i=n("0bfb"),o=n("9e1e"),s="toString",r=/./[s],c=function(e){n("2aba")(RegExp.prototype,s,e,!0)};n("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?i.call(e):void 0)}):r.name!=s&&c(function(){return r.call(this)})},"8adf":function(e,t,n){},b132:function(e,t,n){"use strict";n("6b54");var a=n("b17e");t["a"]={methods:{omitEmpty:function(e){return Object(a["fromPairs"])(Object(a["filter"])(function(e){if(e[1])return e},Object(a["toPairs"])(e)))},guid:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}}},cd59:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:e.loading,expression:"loading",modifiers:{fullscreen:!0}}],staticClass:"dashboard",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-background":"#ebeef4"}},[e.loading?e._e():n("el-container",[n("el-aside",{staticClass:"side-bar",attrs:{width:"260px"}},[n("VSidebarHeader"),n("VMenu")],1),n("el-container",[n("el-header",{attrs:{height:"auto"}},[n("VHeader")],1),n("el-main",[n("router-view")],1)],1)],1)],1)},i=[],o=n("c93e"),s=n("b17e"),r=n("2f62"),c=n("b132"),u=n("6eec"),l=n("9530"),d=n.n(l);function f(){var e=Object(u["a"])(["\n  query {\n    me {\n      account {\n        logo\n        email\n        name\n        id\n      }\n      organizations {\n        id\n        name\n        logo\n      }\n    }\n  }\n"]);return f=function(){return e},e}var g=d()(f()),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dropdown",{staticClass:"sidebar-header",attrs:{trigger:"click"}},[n("div",{staticClass:"el-dropdown-link"},[n("div",{staticClass:"logo",style:{backgroundImage:"url("+(e.activeBusiness.logo||"images/no-logo.png")+")",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#fff"}}),n("div",{staticClass:"title bold"},[n("span",[e._v(e._s(e.activeBusiness.name))]),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})])]),n("el-dropdown-menu",{staticClass:"sidebar-header-items",attrs:{slot:"dropdown"},slot:"dropdown"},[e._l(e.organizations,function(t){return n("el-dropdown-item",{key:t.id,nativeOn:{click:function(n){e.changeOrganization(t.id)}}},[n("div",{staticClass:"businesses-item"},[n("div",{staticClass:"logo",style:{backgroundImage:"url("+(t.logo||"images/no-logo.png")+")",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),n("div",{staticClass:"business-name"},[e._v("\n                    "+e._s(t.name)+"\n                ")])])])}),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.createBusiness(t)}}},[e._v("\n            Create business\n        ")])],2)],1)},m=[],p=(n("cadf"),n("551c"),n("097d"),n("16b7")),v={name:"SidebarHeader",mounted:function(){console.warn(this.$store)},methods:{changeOrganization:function(e){var t=Object(s["find"])(Object(s["propEq"])("id",e))(this.organizations);Object(s["equals"])(t,this.activeBusiness)||this.$store.commit("dashboard/".concat(p["a"]),{key:"activeBusiness",value:t})},createBusiness:function(){console.warn("Create business")}},computed:Object(o["a"])({},Object(r["c"])({organizations:function(e){return e.dashboard.organizations},activeBusiness:function(e){return e.dashboard.activeBusiness}}))},h=v,k=(n("6760"),n("2877")),w=Object(k["a"])(h,b,m,!1,null,"3d5ac20b",null);w.options.__file="SidebarHeader.vue";var C=w.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"search-header",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",{attrs:{xs:24,md:12}},[n("el-input",{staticClass:"search-keyword",attrs:{placeholder:"Search"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[n("i",{staticClass:"fa fa-search",attrs:{slot:"prefix","aria-hidden":"true"},slot:"prefix"})])],1),n("el-col",{staticClass:"logo-container",attrs:{xs:24,md:12}},[n("el-dropdown",{staticClass:"sidebar-header",attrs:{trigger:"click"}},[n("div",{staticClass:"el-dropdown-link"},[n("div",{staticClass:"logo",style:{backgroundImage:"url("+e.user.logo+")",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#fff"}})]),n("el-dropdown-menu",{staticClass:"sidebar-header-items",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(t){return e.openSettings(t)}}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}})]),e._v("\n                    Settings\n                ")]),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}})]),e._v("\n                    Logout\n                ")])],1)],1)],1)],1)},_=[],O=(n("5091"),n("1a2d")),j=n("36c9"),x={name:"Header",data:function(){return{keyword:"",user:{logo:"https://s3.us-east-2.amazonaws.com/airpay-network/logo/dappband_logo.jpg"}}},mounted:function(){var e=this;this.$watchAsObservable("keyword").pipe(Object(O["a"])(500)).subscribe(function(t){var n=t.newValue,a=(t.oldValue,e.$route.query);e.$router.push({query:Object(o["a"])({},a,{search:n})})},function(e){return console.error(e)},function(){return console.log("complete")})},methods:{openSettings:function(){this.$router.push({name:j["E"]})},logout:function(){sessionStorage.removeItem("token"),location.reload(!0)}}},$=x,z=(n("cf03"),Object(k["a"])($,y,_,!1,null,null,null));z.options.__file="Header.vue";var S=z.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-items"},[n("ul",e._l(e.menu,function(t){return n("router-link",{key:t.name,class:["menu-link",{"side-bar-menu-open":e.route.name===t.name}],attrs:{tag:"li",to:{name:t.name},exact:""}},[n("a",[n("span",{staticClass:"icon",domProps:{innerHTML:e._s(t.icon)}}),e._v(e._s(t.title))]),t.divider?n("div",{staticClass:"divider"}):e._e()])}))])},q=[],E=[{name:j["q"],to:j["r"],title:"Dashboard",icon:'<i class="fa fa-home" aria-hidden="true"></i>'},{name:j["y"],to:j["z"],title:"Transfers",icon:'<i class="fa fa-exchange-alt" aria-hidden="true"></i>'},{name:j["e"],to:j["f"],title:"Crowdsales",icon:'<i class="fa fa-piggy-bank" aria-hidden="true"></i>'},{name:j["s"],to:j["t"],title:"Tokens",icon:'<i class="fa fa-coins" aria-hidden="true"></i>'},{name:j["C"],to:j["D"],title:"Users",icon:'<i class="fa fa-users" aria-hidden="true"></i>',divider:!0},{name:j["i"],to:j["j"],title:"Wallets",icon:'<i class="fas fa-wallet" aria-hidden="true"></i>'},{name:j["c"],to:j["d"],title:"Business settings",icon:'<i class="fa fa-cog" aria-hidden="true"></i>'}],H={name:"Menu",data:function(){return{menu:E}},computed:Object(o["a"])({},Object(r["c"])(["route"]))},V=H,M=(n("dd02"),Object(k["a"])(V,B,q,!1,null,"542dcc4b",null));M.options.__file="Menu.vue";var R=M.exports,I={name:"Dashboard",data:function(){return{loading:!0}},components:{VHeader:S,VMenu:R,VSidebarHeader:C},computed:Object(o["a"])({},Object(r["c"])({activeBusiness:function(e){return e.dashboard.activeBusiness}})),watch:{activeBusiness:{deep:!0,handler:function(){this.$router.push({query:{},name:j["q"]})}}},mounted:function(){var e=this;this.$apollo.query({query:g}).then(function(t){var n=Object(s["path"])(["data","me","organizations"],t),a=Object(s["path"])(["data","me","account"],t),i=Object(s["defaultTo"])(null,Object(s["nth"])(0,n));e.$store.commit("dashboard/".concat(p["a"]),{key:"organizations",value:n}),e.$store.commit("dashboard/".concat(p["a"]),{key:"account",value:a}),e.$store.commit("dashboard/".concat(p["a"]),{key:"activeBusiness",value:i}),e.loading=!1}).catch(function(t){e.$message.error(t),e.loading=!1})},mixins:[c["a"]]},P=I,T=(n("3464"),Object(k["a"])(P,a,i,!1,null,"61c520f3",null));T.options.__file="Index.vue";t["default"]=T.exports},cf03:function(e,t,n){"use strict";var a=n("1c77"),i=n.n(a);i.a},dd02:function(e,t,n){"use strict";var a=n("6995"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-abf652aa.4cee10f8.js.map