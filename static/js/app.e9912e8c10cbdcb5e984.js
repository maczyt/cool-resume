webpackJsonp([3],{"+skl":function(n,e){},"1ByQ":function(n,e){},BvrH:function(n,e,i){n.exports=i.p+"static/img/avatar.16d24a6.jpg"},NHnr:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=i("/5sW"),o=i("2Pnh"),a=i.n(o),c={name:"App",data:function(){return{isShowModal:!1,isShowCanvas:!1}},computed:{isEdit:function(){return"edit"===this.$route.name}},methods:{handleToEdit:function(){this.isShowModal=!1,this.$router.push("/edit")},handleToShow:function(){this.isShowModal=!1,this.$router.push("/")},handleToImage:function(){var n=this,e=this.$refs.routerView.$el;a()(e).then(function(e){n.isShowModal=!1,n.isShowCanvas=!0,n.$nextTick(function(){document.getElementById("show-canvas").appendChild(e)})})}},mounted:function(){}},l={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view",{ref:"routerView"}),n._v(" "),i("div",{staticClass:"menu",attrs:{title:"操作"},on:{click:function(e){n.isShowModal=!0}}},[i("Icon",{attrs:{type:"md-menu",size:"40"}})],1),n._v(" "),i("Modal",{attrs:{"footer-hide":""},model:{value:n.isShowModal,callback:function(e){n.isShowModal=e},expression:"isShowModal"}},[n.isEdit?i("Row",{attrs:{gutter:16}},[i("i-col",[i("Button",{nativeOn:{click:function(e){return n.handleToShow(e)}}},[n._v("完成")])],1)],1):i("Row",{attrs:{gutter:16}},[i("i-col",{attrs:{span:"8"}},[i("Button",{nativeOn:{click:function(e){return n.handleToEdit(e)}}},[n._v("编辑")])],1),n._v(" "),i("i-col",{attrs:{span:"8"}},[i("Button",{nativeOn:{click:function(e){return n.handleToImage(e)}}},[n._v("生成图片")])],1),n._v(" "),i("i-col",{attrs:{span:"8"}},[i("Button",[n._v("生成pdf")])],1)],1)],1),n._v(" "),n.isShowCanvas?i("div",{attrs:{id:"show-canvas"}},[i("h2",[n._v("右键保存为图片")])]):n._e()],1)},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(n){i("1ByQ")},null,null).exports,r=i("/ocq");t.default.use(r.a);var s=new r.a({routes:[{path:"/",name:"show",component:function(){return i.e(1).then(i.bind(null,"sTGA"))}},{path:"/edit",name:"edit",component:function(){return i.e(0).then(i.bind(null,"5RGg"))}}]}),d=i("NYxO"),h=i("BvrH"),v={avatarUrl:i.n(h).a,personInfo:{name:"周xx",vocation:"前端xxxx",detail:"我是一个xxxxxxxx"},work:[{vocation:"前端工程师",company:"dha",time:[new Date("2018-01"),new Date("2019-01")],detail:"校新手卡激活圣诞节卡撒打回电话萨"}],education:[{profession:"软件工程",school:"杭州电子科技大学",time:[new Date("2018-01"),new Date("2019-01")],detail:"sadsadadad"}],contact:[{label:"电话",icon:"icon-dianhua",value:"1375084xxxx"}],interest:[{label:"音乐",icon:"icon-yinyue"}],skill:[{label:"ps",value:90}],contactSelect:[{name:"电话",value:"icon-dianhua"},{name:"邮箱",value:"icon-xitongtubiaoicon"},{name:"网站",value:"icon-wangzhan"},{name:"QQ",value:"icon-qq"},{name:"微信",value:"icon-weixin"},{name:"微博",value:"icon-weibo"},{name:"Github",value:"icon-github"},{name:"地址",value:"icon-place"}],interestSelect:[{name:"骑车",value:"icon-cycleqiche"},{name:"音乐",value:"icon-yinyue"},{name:"篮球",value:"icon-lanqiu"},{name:"游泳",value:"icon-yongchi"},{name:"画画",value:"icon-huahua"},{name:"跑步",value:"icon-paobu"},{name:"电影",value:"icon-dianying"},{name:"旅游",value:"icon-lvyou"}],iconSelect:[{label:"电话",icon:"icon-dianhua"},{label:"邮箱",icon:"icon-xitongtubiaoicon"},{label:"网站",icon:"icon-wangzhan"},{label:"QQ",icon:"icon-qq"},{label:"微信",icon:"icon-weixin"},{label:"微博",icon:"icon-weibo"},{label:"Github",icon:"icon-github"},{label:"骑车",icon:"icon-cycleqiche"},{label:"音乐",icon:"icon-yinyue"},{label:"篮球",icon:"icon-lanqiu"},{label:"游泳",icon:"icon-yongchi"},{label:"画画",icon:"icon-huahua"},{label:"跑步",icon:"icon-paobu"},{label:"电影",icon:"icon-dianying"},{label:"旅游",icon:"icon-lvyou"}]},f=i("c/Tr"),m=i.n(f),p={interestGetter:function(n){return m()({length:Math.ceil(n.interest.length/3)},function(e,i){return n.interest.slice(3*i,3*i+3)})}};t.default.use(d.a);var w=new d.a.Store({state:v,getters:p,mutations:{setAvatar:function(n,e){n.avatarUrl=e},addWork:function(n,e){n.work.unshift(e)},removeWork:function(n,e){n.work.splice(e,1)},editWork:function(n,e){var i=e.index,t=e.work;n.work.splice(i,1,t)},addEducation:function(n,e){n.education.unshift(e)},removeEducation:function(n,e){n.education.splice(e,1)},editEducation:function(n,e){var i=e.index,t=e.item;n.education.splice(i,1,t)},addContact:function(n){n.contact.push({})},removeContact:function(n,e){n.contact.splice(e,1)},setInterest:function(n,e){n.interest=e},addSkill:function(n){n.skill.push({})},removeSkill:function(n,e){n.skill.splice(e,1)}},actions:{}}),b=i("BTaQ"),x=i.n(b);i("+skl"),i("muQq");t.default.use(x.a),t.default.config.productionTip=!1,new t.default({el:"#app",router:s,store:w,render:function(n){return n(u)}})},muQq:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.e9912e8c10cbdcb5e984.js.map