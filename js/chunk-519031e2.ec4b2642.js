(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-519031e2"],{1276:function(t,e,n){"use strict";var i=n("d784"),a=n("44e7"),s=n("825a"),r=n("1d80"),l=n("4840"),o=n("8aa5"),u=n("50c4"),c=n("14c3"),d=n("9263"),f=n("d039"),g=[].push,h=Math.min,p=4294967295,v=!f((function(){return!RegExp(p,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(r(this)),s=void 0===n?p:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,s);var l,o,u,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,f+"g");while(l=d.call(v,i)){if(o=v.lastIndex,o>h&&(c.push(i.slice(h,l.index)),l.length>1&&l.index<i.length&&g.apply(c,l.slice(1)),u=l[0].length,h=o,c.length>=s))break;v.lastIndex===l.index&&v.lastIndex++}return h===i.length?!u&&v.test("")||c.push(""):c.push(i.slice(h)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a,n):i.call(String(a),e,n)},function(t,a){var r=n(i,t,this,a,i!==e);if(r.done)return r.value;var d=s(t),f=String(this),g=l(d,RegExp),m=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),y=new g(v?d:"^(?:"+d.source+")",x),I=void 0===a?p:a>>>0;if(0===I)return[];if(0===f.length)return null===c(y,f)?[f]:[];var b=0,k=0,C=[];while(k<f.length){y.lastIndex=v?k:0;var $,S=c(y,v?f:f.slice(k));if(null===S||($=h(u(y.lastIndex+(v?0:k)),f.length))===b)k=o(f,k,m);else{if(C.push(f.slice(b,k)),C.length===I)return C;for(var O=1;O<=S.length-1;O++)if(C.push(S[O]),C.length===I)return C;k=b=$}}return C.push(f.slice(b)),C}]}),!v)},"1edd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"myself"},[n("div",{staticClass:"my-bg",style:{backgroundImage:"url('"+t.userInfo.userBg+"')"}},[n("van-uploader",{staticClass:"upload-box",attrs:{"after-read":t.uploadFile}})],1),n("div",{staticClass:"my-info"},[n("div",{staticClass:"clearfix"},[n("div",{staticClass:"fl my-img"},[n("img",{staticClass:"auto-img",attrs:{src:t.userInfo.userImg,alt:""}})]),n("div",{staticClass:"fl my-info-box"},[n("div",{staticClass:"user-name"},[t._v(t._s(t.userInfo.nickName))]),n("div",{staticClass:"user-desc"},[t._v(" "+t._s(""==t.userInfo.desc?"这家伙很懒，什么都么有留下...":t.userInfo.desc)+" ")])])]),n("div",{staticClass:"list-box"},t._l(t.listData,(function(e,i){return n("van-cell",{key:i,attrs:{title:e.title,"is-link":""},on:{click:function(n){return t.goPage(e.name)}}})})),1)])])},a=[],s=(n("c975"),n("a15b"),n("ac1f"),n("5319"),n("1276"),n("df8d"),{name:"Myself",data:function(){return{listData:[{title:"个人资料",name:"Account"},{title:"我的订单",name:"Order"},{title:"我的收藏",name:"Collect"},{title:"地址管理",name:"Address"},{title:"安全中心",name:"Secure"}],userInfo:{}}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this,e=localStorage.getItem("tokenStr");if(!e)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findMy",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),700==e.data.code?t.$router.push({name:"Login"}):"A001"==e.data.code&&(t.userInfo=e.data.result[0])})).catch((function(e){t.$toast.clear()}))},uploadFile:function(t){var e=this,n=["png","gif","jpg","jpeg"],i=1,a=t.file.type.split("/")[1];if(-1!=n.indexOf(a)){var s=t.file.size/1024/1024;if(s>i)this.$toast("文件允许最大不能超过".concat(i,"MB"));else{var r=t.content.replace(/^data:image\/[A-Za-z]+;base64,/,""),l=localStorage.getItem("tokenStr");if(!l)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updateUserBg",data:{appkey:this.appkey,tokenString:l,imgType:a,serverBase64Img:r}}).then((function(t){e.$toast.clear(),700==t.data.code?e.$router.push({name:"Login"}):"I001"==t.data.code&&(e.userInfo.userBg=t.data.userBg),e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}}else this.$toast("文件类型不支持".concat(n.join(",")))},goPage:function(t){this.$router.push({name:t})}}}),r=s,l=n("2877"),o=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=o.exports},a15b:function(t,e,n){"use strict";var i=n("23e7"),a=n("44ad"),s=n("fc6a"),r=n("a640"),l=[].join,o=a!=Object,u=r("join",",");i({target:"Array",proto:!0,forced:o||!u},{join:function(t){return l.call(s(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},c975:function(t,e,n){"use strict";var i=n("23e7"),a=n("4d64").indexOf,s=n("a640"),r=n("ae40"),l=[].indexOf,o=!!l&&1/[1].indexOf(1,-0)<0,u=s("indexOf"),c=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:o||!u||!c},{indexOf:function(t){return o?l.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},df8d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-519031e2.ec4b2642.js.map