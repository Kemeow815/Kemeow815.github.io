import{C as a}from"./index-e18cd1ad.js";import{n as o,M as r,a as c}from"./index-44a143ec.js";import"./vendor-2ac6fe9f.js";const l=""+new URL("../png/like-63b04684.png",import.meta.url).href;const u={name:"About",components:{Comment:a,Markdown:r},data(){return{about:"",isLiked:"notLiked",likeTimes:0,loading:!0}},created(){localStorage.getItem("isLiked")==="undefined"?(localStorage.setItem("isLiked","notLiked"),this.isLiked="notLiked"):this.isLiked=localStorage.getItem("isLiked"),this.getAboutFn()},mounted(){localStorage.getItem("configLeancloud")==="yes"&&this.queryLikeFn()},methods:{async getAboutFn(){const i=await this.$store.dispatch("github/getAboutAction").catch(n=>{throw this.$message({content:"获取关于内容失败",type:"error"}),new Error(n)}).finally(()=>{this.loading=!1}),t=(i==null?void 0:i.body)||"",s=await new c().parse(t).catch(n=>{throw this.$message({content:"解析 markdown 失败",type:"error"}),new Error(n)});this.about=s==null?void 0:s.content,this.appendBusuanzi(s==null?void 0:s.content)},async queryLikeFn(){const i=await this.$store.dispatch("leancloud/queryLikeAction","getTimes").catch(t=>{throw this.$message({content:"获取点赞次数失败",type:"error"}),new Error(t)});i!=="undefined"&&(this.likeTimes=i)},async likeClick(){if(localStorage.getItem("configLeancloud")==="no"){this.$message({content:"博主还没有设置 Leancloud，点赞无效",type:"error"});return}if(this.isLiked==="isLiked"){this.$message({content:"您已经点过赞了哦~",type:"warning"});return}this.likeTimes=await this.$store.dispatch("leancloud/queryLikeAction").catch(i=>{throw this.$message({content:"点赞失败",type:"error"}),new Error(i)}),this.isLiked="isLiked",localStorage.setItem("isLiked","isLiked"),this.$message({content:"谢谢您的点赞~",type:"success"})},appendBusuanzi(i){if(!i)return;if(i.includes("busuanzi")){const e=document.querySelector('script[src*="busuanzi"]');e&&e.remove();const s=document.createElement("script");s.src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",document.body.appendChild(s)}}}};var d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-wrap"},[e("div",{staticClass:"about"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"about-content"},[e("Markdown",{attrs:{content:t.about}})],1),e("div",{staticClass:"like"},[t._m(0),e("div",{staticClass:"info"},[e("h2",[t._v("喜欢就点赞 疼爱就打赏")]),e("p",[t._v("觉得博客不错的话，就点个赞吧")]),e("div",{staticClass:"like-btn",attrs:{"data-text":`已经有 ${t.likeTimes} 人点赞了~`},on:{click:t.likeClick}},[e("SvgIcon",{attrs:{name:"like"}})],1)]),e("figure",{staticClass:"alipay-qr"},[e("img",{attrs:{src:t.$config.alipay_qr,alt:"支付宝二维码"}})])])]),e("Comment")],1)},m=[function(){var i=this,t=i._self._c;return t("figure",{staticClass:"like-img"},[t("img",{attrs:{src:l,alt:"like"}})])}],h=o(u,d,m,!1,null,"33069414",null,null);const _=h.exports;export{_ as default};
