webpackJsonp([0],{"+nWh":function(t,i){},0:function(t,i){},"6WAn":function(t,i){},"6noN":function(t,i){},"7Otq":function(t,i,s){t.exports=s.p+"static/img/logo.3fb1211.png"},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"board img-thumbnail",attrs:{id:"intro"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{src:s("ys0R")}})]),t._v(" "),a("div",{staticClass:"col-9",attrs:{align:"left"}},[a("h4",[t._v("阿金")]),t._v(" "),a("p",[t._v("无法融入社会的死肥宅……"),a("br"),t._v("\n        曾经是一名吉他手……"),a("br"),t._v("\n        后来又成为了一名程序员……")]),t._v(" "),a("a",{attrs:{href:"https://github.com/curatorjin",target:"_blank"}},[t._v("GitHub")]),t._v(" "),a("span",{staticClass:"col-4"}),t._v(" "),a("a",{attrs:{href:"https://space.bilibili.com/2137919",target:"_blank"}},[t._v("Bilibili")])])])])}]};var e=s("VU/8")({name:"Intro"},n,!1,function(t){s("6noN")},"data-v-21923fa7",null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"board img-thumbnail",attrs:{id:"contact"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[this._v("\n      阿金的邮箱："),i("a",{attrs:{href:"mailto:disciple_sneaker@163.com"}},[this._v("disciple_sneaker@163.com")])])])])}]};var r=s("VU/8")({name:"Contact"},o,!1,function(t){s("pEww")},"data-v-3eadc986",null).exports,c={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{d:"gitHubWorks"}},[t._m(0),t._v(" "),s("div",{staticClass:"d-flex justify-content-left flex-wrap mb-3"},t._l(t.works,function(i){return s("div",{key:i.id,staticClass:"p-2 card"},[s("h5",{staticClass:"font-weight-bold",staticStyle:{height:"30px"},domProps:{innerHTML:t._s(i.name)}}),t._v(" "),s("p",{staticStyle:{height:"160px"},domProps:{innerHTML:t._s(i.desc)}}),t._v(" "),s("a",{attrs:{href:i.link}},[t._v("去GitHub查看")])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row align-items-center"},[i("h5",{staticClass:"col"},[this._v("GitHub "),i("a",{staticClass:"btn btn-info float-right",attrs:{href:"https://github.com/curatorjin",target:"_blank"}},[this._v("更多")])])])}]};var l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"align-items-center",attrs:{id:"biliWorks"}},[t._m(0),t._v(" "),s("div",{staticClass:"d-flex justify-content-center flex-wrap mb-3"},t._l(t.works,function(i){return s("div",{key:i.id,staticClass:"p-2 video card",attrs:{"data-toggle":"modal","data-target":"#videoModal"},on:{click:function(s){return t.showVideo(i.aid)}}},[s("div",{staticClass:"imgContent"},[s("img",{staticClass:" img-thumbnail",attrs:{src:i.pic}})]),t._v(" "),s("div",{staticClass:"video-title",attrs:{title:i.title}},[t._v(t._s(i.title))])])}),0),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"videoModal","aria-hidden":"true","data-backdrop":"static"}},[s("div",{staticClass:"modal-dialog modal-lg",staticStyle:{width:"1000px",height:"1000px"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("iframe",{staticStyle:{width:"640px",height:"480px"},attrs:{src:t.playingVideo,scrolling:"no",frameborder:"no",allowfullscreen:"true"}})]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.closeModal}},[t._v("返回\n          ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row align-items-center"},[i("h5",{staticClass:"col"},[this._v("bilibili的作品 "),i("a",{staticClass:"btn btn-info float-right",attrs:{href:"https://space.bilibili.com/2137919",target:"_blank"}},[this._v("更多")])])])}]};var d={name:"Works",data:function(){return{showing:"GitHub"}},methods:{githubWorks:function(){$("#biliBtn").removeClass("active"),$("#gitBtn").addClass("active"),this.showing="GitHub"},biliWorks:function(){$("#gitBtn").removeClass("active"),$("#biliBtn").addClass("active"),this.showing="Bilibili"}},components:{GitHub:s("VU/8")({name:"GitHub",data:function(){return{works:""}},mounted:function(){this.getBiliWork()},methods:{getBiliWork:function(){this.$http.get("static/github_works.json").then(function(t){this.works=t.data})}}},c,!1,function(t){s("yWRN")},"data-v-0c01dddf",null).exports,Bilibili:s("VU/8")({name:"Bilibili",data:function(){return{works:"",playingVideo:""}},mounted:function(){this.getBiliWork()},methods:{getBiliWork:function(){this.$http.get("static/bilibili_works.json").then(function(t){var i=t.data.data.vlist;this.works=i})},showVideo:function(t){this.playingVideo="//player.bilibili.com/player.html?aid="+t+"&cid=68254646&page=1"},closeModal:function(){this.playingVideo=""}}},l,!1,function(t){s("fuxY")},"data-v-58bc0ef2",null).exports}},u={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"board img-thumbnail",attrs:{id:"works"}},[s("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),s("div",{staticClass:"col-2"},[s("div",{staticClass:"btn-group",staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[s("button",{staticClass:"btn btn-info active",attrs:{id:"gitBtn",type:"button"},on:{click:t.githubWorks}},[t._v("\n          GitHub\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-info",attrs:{id:"biliBtn",type:"button"},on:{click:t.biliWorks}},[t._v("Bilibili\n        ")])])])]),t._v(" "),s("hr"),t._v(" "),s(t.showing,{tag:"component"}),t._v(" "),s("div",{staticClass:"row"})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-10"},[i("h3",{staticClass:"text-center",staticStyle:{"padding-top":"15px"}},[this._v("一些作品……")])])}]};var v={name:"App",data:function(){return{introComp:"Intro",workComp:"Works",contactComp:"Contact"}},components:{Intro:e,Contact:r,Works:s("VU/8")(d,u,!1,function(t){s("6WAn")},"data-v-6407d644",null).exports}},h={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{src:s("7Otq")}}),this._v(" "),i("div",{staticStyle:{width:"60%"}},[i(this.introComp,{tag:"component"}),this._v(" "),i(this.workComp,{tag:"component"}),this._v(" "),i("hr"),this._v(" "),i(this.contactComp,{tag:"component"})],1)])},staticRenderFns:[]};var m=s("VU/8")(v,h,!1,function(t){s("+nWh")},null,null).exports,f=s("/ocq");a.a.use(f.a);var p=new f.a({mode:"history",routes:[]}),_=s("8+8L");a.a.use(_.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:m},template:"<App/>"}),window.AV=s("JnRc"),new(s("FCg/"))({el:"#vcomments",appId:"hewIB5JPfodYOSevWzIaytVK-gzGzoHsz",appKey:"j1Rg5eeaT8Ruk89gaQPItvWU",notify:!1,verify:!1,avatar:"mm",placeholder:"老板留个言呗？"})},fuxY:function(t,i){},pEww:function(t,i){},yWRN:function(t,i){},ys0R:function(t,i,s){t.exports=s.p+"static/img/head.8d4345b.png"}},["NHnr"]);
//# sourceMappingURL=app.5487d663639efee16c15.js.map