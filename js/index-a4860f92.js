import{d as s}from"./vendor-2ac6fe9f.js";import{n as i,M as r}from"./index-44a143ec.js";const o={name:"IdeaItem",components:{Markdown:r},props:{idea:{type:String,default:""},create:{type:String,default:""}}};var c=function(){var t=this,a=t._self._c;return a("div",{staticClass:"idea-wrap"},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:t.$config.avatar,alt:"avatar"}})]),a("div",{staticClass:"idea"},[a("h3",{staticClass:"author"},[t._v(" "+t._s(t.$config.author)+" ")]),a("div",{staticClass:"content"},[a("Markdown",{attrs:{content:t.idea,"need-parsed":!0}})],1),a("div",{staticClass:"publish-time"},[t._v(" 发布于 "+t._s(t.create)+" ")])])])},d=[],_=i(o,c,d,!1,null,"e2bf1bc5",null,null);const l=_.exports;const p={name:"Inspiration",components:{IdeaItem:l},data(){return{ideas:[],loading:!0}},created(){this.getInspirationFn()},methods:{...s({getInspirationCountAction:"github/getInspirationCountAction",getInspirationAction:"github/getInspirationAction"}),async getInspirationCountFn(){return await this.getInspirationCountAction().catch(n=>{throw this.$message({content:"获取灵感总数失败",type:"error"}),new Error(n)})},async getInspirationFn(){const n=await this.getInspirationCountFn();this.ideas=await this.getInspirationAction({page:1,pageSize:n}).catch(t=>{throw this.$message({content:"获取灵感失败",type:"error"}),new Error(t)}).finally(()=>{this.loading=!1})}}};var u=function(){var t=this,a=t._self._c;return a("div",{staticClass:"inspiration-wrap"},[a("div",{staticClass:"inspiration"},[a("h2",[a("SvgIcon",{attrs:{name:"tongzhi"}}),t._v(" "+t._s(t.$t("ideas")))],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"ideas-wrap"},[a("transition",{attrs:{name:"from-bottom"}},[t.loading?t._e():a("div",t._l(t.ideas,function(e){return a("div",{key:e.id,staticClass:"idea-item"},[a("IdeaItem",{attrs:{idea:e.body,create:e.created_at.slice(0,10)}})],1)}),0)])],1)])])},g=[],v=i(p,u,g,!1,null,"fcb0f442",null,null);const h=v.exports;export{h as default};
