webpackJsonp([1],{0:function(t,e){},"3pj2":function(t,e){},"4b/b":function(t,e){},"6Gc+":function(t,e){},"7Otq":function(t,e,i){t.exports=i.p+"static/img/logo.3fb1211.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{attrs:{gutter:12,id:"intro"}},[s("el-card",{attrs:{shadow:"hover",id:"introCard"}},[s("el-col",{attrs:{span:3}},[s("img",{staticClass:"rounded-circle img-thumbnail",attrs:{src:i("ys0R")}})]),t._v(" "),s("el-col",{attrs:{span:8,offset:1,align:"left"}},[s("h4",[t._v("阿金")]),t._v(" "),s("p",[t._v("无法融入社会的死肥宅……"),s("br"),t._v("\n        曾经是一名吉他手……"),s("br"),t._v("\n        后来又成为了一名程序员……")]),t._v(" "),s("a",{attrs:{href:"https://github.com/curatorjin",target:"_blank"}},[t._v("GitHub")]),t._v(" "),s("span",{staticClass:"col-4"}),t._v(" "),s("a",{attrs:{href:"https://space.bilibili.com/2137919",target:"_blank"}},[t._v("Bilibili")])])],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"Intro"},n,!1,function(t){i("3pj2")},"data-v-ec710f26",null).exports,r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{attrs:{gutter:12,id:"contact"}},[e("el-card",{attrs:{shadow:"hover"}},[e("el-col",{attrs:{span:24}},[this._v("\n      阿金的邮箱："),e("a",{attrs:{href:"mailto:disciple_sneaker@163.com"}},[this._v("disciple_sneaker@163.com")])])],1)],1)},staticRenderFns:[]};var o=i("VU/8")({name:"Contact"},r,!1,function(t){i("kNxr")},"data-v-784323f5",null).exports,l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{attrs:{id:"gitHubWorks"}},[i("el-row",[i("el-col",{attrs:{span:20,push:2}},[i("h5",[t._v("GitHub")])]),t._v(" "),i("el-col",{attrs:{span:2,push:2}},[i("a",{staticClass:"el-icon-arrow-right",attrs:{href:"https://github.com/curatorjin",target:"_blank"}},[t._v("更多")])])],1),t._v(" "),t._l(t.works,function(e,s){return s%3==0?i("el-row",{key:s,staticClass:"row-bg",attrs:{gutter:20,justify:"center"}},t._l(t.works,function(e,n){return n-s<3&&n-s>=0?i("el-col",{key:n,attrs:{span:8}},[i("el-card",{staticClass:"gitWorkCard",attrs:{shadow:"hover"}},[i("h5",{staticClass:"font-weight-bold",staticStyle:{height:"30px"},domProps:{innerHTML:t._s(e.name)}}),t._v(" "),i("p",{staticStyle:{height:"100px"},domProps:{innerHTML:t._s(e.desc)}}),t._v(" "),i("a",{attrs:{href:e.link}},[t._v("去GitHub查看")])])],1):t._e()}),1):t._e()})],2)},staticRenderFns:[]};var c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{attrs:{id:"biliWorks"}},[i("el-row",[i("el-col",{attrs:{span:20,push:2}},[i("h5",[t._v("Bilibili的作品")])]),t._v(" "),i("el-col",{attrs:{span:2,push:2}},[i("a",{staticClass:"el-icon-arrow-right",attrs:{href:"https://space.bilibili.com/2137919",target:"_blank"}},[t._v("更多")])])],1),t._v(" "),t._l(t.works,function(e,s){return s%3==0?i("el-row",{key:s,staticClass:"row-bg",attrs:{gutter:20,justify:"center"}},t._l(t.works,function(e,n){return n-s<3&&n-s>=0?i("el-col",{key:n,attrs:{span:8}},[i("el-card",{attrs:{shadow:"hover"}},[i("img",{attrs:{src:e.pic},on:{click:function(i){return t.viewVideo(e.aid)}}}),t._v(" "),i("div",{staticClass:"video-title",attrs:{title:e.title}},[t._v(t._s(e.title))])])],1):t._e()}),1):t._e()}),t._v(" "),i("el-dialog",{attrs:{title:"",visible:t.dialogVisible,width:"40%","before-close":t.closeModal},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("iframe",{staticStyle:{width:"640px",height:"480px"},attrs:{src:t.playingVideo,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.closeModal}},[t._v("关闭")])],1)])],2)},staticRenderFns:[]};var u={name:"Works",data:function(){return{switchVal:!0,showing:"GitHub"}},methods:{swChange:function(){this.switchVal?this.showing="GitHub":this.showing="Bilibili"}},components:{GitHub:i("VU/8")({name:"GitHub",data:function(){return{works:""}},mounted:function(){this.getGit()},methods:{getGit:function(){this.$http.get("static/github_works.json").then(function(t){this.works=t.data})}}},l,!1,function(t){i("6Gc+")},"data-v-e2addc00",null).exports,Bilibili:i("VU/8")({name:"Bilibili",data:function(){return{works:"",playingVideo:"",dialogVisible:!1}},mounted:function(){this.getBiliWork()},methods:{getBiliWork:function(){this.$http.get("static/bilibili_works.json").then(function(t){var e=t.data.data.vlist;this.works=e})},closeModal:function(){this.dialogVisible=!1,this.playingVideo=""},viewVideo:function(t){this.playingVideo="//player.bilibili.com/player.html?aid="+t+"&cid=68254646&page=1",this.dialogVisible=!0}}},c,!1,function(t){i("UDsu")},"data-v-78a0365d",null).exports}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{attrs:{gutter:12}},[i("el-card",{attrs:{shadow:"hover",id:"works"}},[i("el-row",{staticClass:"row align-items-center"},[i("el-col",{attrs:{span:16,push:4}},[i("h3",{staticStyle:{"padding-top":"15px"}},[t._v("一些作品……")])]),t._v(" "),i("el-col",{attrs:{span:2,push:4}},[t._v(t._s(t.showing))]),t._v(" "),i("el-col",{attrs:{span:2,push:4}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#13ce66"},on:{change:function(e){return t.swChange()}},model:{value:t.switchVal,callback:function(e){t.switchVal=e},expression:"switchVal"}})],1)],1),t._v(" "),i("hr"),t._v(" "),i(t.showing,{tag:"component"})],1)],1)},staticRenderFns:[]};var h={name:"App",data:function(){return{introComp:"Intro",workComp:"Works",contactComp:"Contact"}},components:{Intro:a,Contact:o,Works:i("VU/8")(u,d,!1,function(t){i("4b/b")},"data-v-092c1196",null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:i("7Otq")}}),this._v(" "),e("div",{staticStyle:{width:"60%"}},[e(this.introComp,{tag:"component"}),this._v(" "),e(this.workComp,{tag:"component"}),this._v(" "),e("hr"),this._v(" "),e(this.contactComp,{tag:"component"})],1)])},staticRenderFns:[]};var f=i("VU/8")(h,p,!1,function(t){i("Umdy")},null,null).exports,v=i("/ocq");s.default.use(v.a);var _=new v.a({mode:"history",routes:[]}),g=i("8+8L"),m=i("zL8q"),w=i.n(m);i("tvR6"),i("qb6w");s.default.use(g.a),s.default.use(w.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:_,components:{App:f},template:"<App/>"}),window.AV=i("JnRc"),new(i("FCg/"))({el:"#vcomments",appId:"hewIB5JPfodYOSevWzIaytVK-gzGzoHsz",appKey:"j1Rg5eeaT8Ruk89gaQPItvWU",notify:!1,verify:!1,avatar:"mm",placeholder:"老板留个言呗？"})},UDsu:function(t,e){},Umdy:function(t,e){},kNxr:function(t,e){},qb6w:function(t,e){},tvR6:function(t,e){},ys0R:function(t,e,i){t.exports=i.p+"static/img/head.8d4345b.png"}},["NHnr"]);
//# sourceMappingURL=app.474d4ae9822b6b88a2e2.js.map