(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fc63bc7"],{"078b":function(e,t,a){},"3c06":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"retrievePassword"},[a("van-nav-bar",{attrs:{"left-text":"返回","right-text":"返回"},on:{"click-right":e.goState},scopedSlots:e._u([{key:"left",fn:function(){return[a("div",{staticClass:"nav-left"},[a("div",{staticClass:"logo"}),a("div",{staticClass:"logo-text"},[e._v("Luckin Coffee")])])]},proxy:!0}])}),a("div",{staticClass:"user-box"},[e._m(0),a("van-form",{directives:[{name:"show",rawName:"v-show",value:!e.isNext,expression:"!isNext"}]},[a("van-field",{attrs:{name:"邮箱",label:"邮箱",placeholder:"邮箱",autocomplete:"off"},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}}),a("van-field",{attrs:{name:"验证码",label:"验证码",placeholder:"验证码(6个字符)",autocomplete:"off",maxlength:"6"},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{size:"small",color:"rgba(0,0,0,0.8)",disabled:e.isSend},on:{click:e.getValidCode}},[e._v(e._s(e.text))])]},proxy:!0}]),model:{value:e.userInfo.code,callback:function(t){e.$set(e.userInfo,"code",t)},expression:"userInfo.code"}}),a("div",{staticClass:"forgotpass"},[a("span",{on:{click:function(t){return e.goState("Login")}}},[e._v("已有账号，立即登录")])]),a("div",{staticClass:"commit-btn"},[a("van-button",{attrs:{round:"",block:"",color:"rgba(0,0,0,0.8)"},on:{click:e.next}},[e._v(" 下一步 ")])],1)],1),a("van-form",{directives:[{name:"show",rawName:"v-show",value:e.isNext,expression:"isNext"}]},[a("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号",autocomplete:"off"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}}),a("van-field",{attrs:{type:e.isRegisterPassword?"password":"text",name:"密码",label:"密码",placeholder:"密码必须为字母开头","right-icon":e.isRegisterPassword?"closed-eye":"eye-o",autocomplete:"off"},on:{"click-right-icon":e.toggleRegsiterPasswordType},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}}),a("div",{staticClass:"forgotpass"},[a("span",{on:{click:function(t){return e.goState("Login")}}},[e._v("已有账号，立即登录")])]),a("div",{staticClass:"commit-btn"},[a("van-button",{attrs:{round:"",block:"",color:"rgba(0,0,0,0.8)"},on:{click:e.commit}},[e._v(" 提交 ")])],1),a("div",{staticClass:"commit-btn"},[a("van-button",{attrs:{round:"",block:"",type:"default"},on:{click:function(t){return e.back()}}},[e._v(" 返回 ")])],1)],1)],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-title"},[a("div",{staticClass:"welcome"},[e._v("找回密码")]),a("div",{staticClass:"sub-title"},[e._v("Retrieve password")])])}],i=(a("078b"),a("e3a8")),n={name:"RetrievePassword",data:function(){return{userInfo:{phone:"",password:"",email:"",code:""},isNext:!1,isSend:!1,isShow:!1,text:"发送验证码",isRegisterPassword:!0}},methods:{toggleRegisterBox:function(){this.isShow=!0},toggleRegsiterPasswordType:function(){this.isRegisterPassword=!this.isRegisterPassword},back:function(){this.isNext=!1},next:function(){var e=this,t={email:{value:this.userInfo.email,errorMsg:"邮箱格式不正确",reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/},code:{value:this.userInfo.code,errorMsg:"验证码格式不正确",reg:/^[A-Za-z\d]{6}$/}},a=i["a"].valid(t);a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/checkValidCode",data:{appkey:this.appkey,validCode:this.userInfo.code}}).then((function(t){e.$toast.clear(),e.$toast(t.data.msg),"K001"==t.data.code&&(e.isNext=!0)})).catch((function(t){e.$toast.clear()})))},getValidCode:function(){var e=this,t={email:{value:this.userInfo.email,errorMsg:"邮箱格式不正确",reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}},a=i["a"].valid(t);if(a){var s=60;this.isSend=!0,this.text="".concat(s,"秒后重新发送");var o=setInterval((function(){s<=0?(clearInterval(o),o=null,s=60,e.isSend=!1):(s--,e.text="".concat(s,"秒后重新发送"))}),1e3);this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/emailValidCode",data:{appkey:this.appkey,email:this.userInfo.email}}).then((function(t){e.$toast.clear(),e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}},commit:function(){var e=this,t={phone:{value:this.userInfo.phone,errorMsg:"手机号格式不正确",reg:/^1[3-9]\d{9}$/},password:{value:this.userInfo.password,errorMsg:"新密码由数字字母下划线组合(6-16字符)",reg:/^[A-Za-z]\w{5,15}$/}},a=i["a"].valid(t);a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/retrievePassword",data:{appkey:this.appkey,phone:this.userInfo.phone,password:this.userInfo.password}}).then((function(t){e.$toast.clear(),e.$toast(t.data.msg),"L001"==t.data.code&&setTimeout((function(){e.goState("Login")}),800)})).catch((function(t){e.$toast.clear()})))},goState:function(){var e=this;this.$toast.loading({message:"加载中...",forbidclick:!0,duration:0}),setTimeout((function(){e.$toast.clear(),e.$router.go(-1)}),1e3)}}},r=n,c=a("2877"),l=Object(c["a"])(r,s,o,!1,null,null,null);t["default"]=l.exports},e3a8:function(e,t,a){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}a.d(t,"a",(function(){return l}));a("a6919");var n=a("01e2"),r=a("2b0e");r["a"].use(n["a"]);var c=function(){function e(){s(this,e)}return i(e,[{key:"valid",value:function(e){for(var t in e)if(!e[t].reg.test(e[t].value))return Object(n["a"])(e[t].errorMsg),!1;return!0}}]),e}(),l=new c}}]);
//# sourceMappingURL=chunk-0fc63bc7.dbce09ea.js.map