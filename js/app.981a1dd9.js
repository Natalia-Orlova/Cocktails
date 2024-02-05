(function(){"use strict";var t={8722:function(t,e,n){var i=n(9070),a=(n(4415),n(9242)),s=n(1020),r=n(3396),l={__name:"App",setup(t){return(t,e)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}}};const o=l;var c=o,u=n(2483);const d="https://www.thecocktaildb.com/api/json/v1/1/",v=`${d}list.php?i=list`,p=`${d}filter.php?i=`,g=`${d}lookup.php?i=`,k=`${d}random.php`,f="https://www.thecocktaildb.com/images/ingredients/",m={HOME:"/",COCKTAIL:"/cocktails/:rid",RANDOM_COCKTAIL:"/random"};var _=n(4870),w=n(7139),b=(n(560),n(2748));const h={class:"root"},y={class:"main"},C={class:"btns"};var O={__name:"AppLayout",props:{imgUrl:{type:String,required:!0},backFunc:{type:Function},isBackButtonVisible:{type:Boolean,default:!0}},setup(t){const e=t,n=(0,u.yj)(),i=(0,u.tv)(),a=(0,r.Fl)((()=>n.name));function s(){i.push(m.RANDOM_COCKTAIL),a.value===m.RANDOM_COCKTAIL&&i.go(0)}function l(){e.backFunc?e.backFunc():i.go(-1)}return(e,n)=>{const i=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("div",{style:(0,w.j5)(`background-image: url(${t.imgUrl})`),class:"img"},null,4),(0,r._)("div",y,[(0,r._)("div",C,[t.isBackButtonVisible?((0,r.wg)(),(0,r.j4)(i,{key:0,class:"back",onClick:l,type:"primary",icon:(0,_.SU)(b.eJh),circle:""},null,8,["icon"])):(0,r.kq)("",!0),(0,r.Wm)(i,{class:"btn",onClick:s},{default:(0,r.w5)((()=>[(0,r.Uk)("Get random cocktail")])),_:1})]),(0,r.WI)(e.$slots,"default")])])}}},I=n(89);const D=(0,I.Z)(O,[["__scopeId","data-v-1f432a54"]]);var U=D;const j={class:"root"},S={class:"name"};var T={__name:"CocktailThumb",props:{cocktail:{type:Object,required:!0}},setup(t){return(e,n)=>{const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",j,[(0,r.Wm)(i,{to:`/cocktails/${t.cocktail.idDrink}`},{default:(0,r.w5)((()=>[(0,r._)("div",{style:(0,w.j5)(`background-image: url(${t.cocktail.strDrinkThumb})`),class:"pic"},null,4)])),_:1},8,["to"]),(0,r._)("div",S,(0,w.zw)(t.cocktail.strDrink),1)])}}};const $=(0,I.Z)(T,[["__scopeId","data-v-024f4824"]]);var A=$,K=n(1076);const H=(0,s.Q_)("root",{state:()=>({ingredients:[],ingredient:null,cocktails:[]}),actions:{async getIngredients(){const t=await K.Z.get(v);this.ingredients=t?.data?.drinks},async getCocktails(t){const e=await K.Z.get(`${p}${t}`);this.cocktails=e?.data?.drinks},setIngredient(t){this.ingredient=t}}}),M=t=>((0,r.dD)("data-v-01b1a75d"),t=t(),(0,r.Cn)(),t),F={class:"wrapper"},z={key:0,class:"info"},L=M((()=>(0,r._)("div",{class:"title"},"Choose your drink",-1))),Z=M((()=>(0,r._)("div",{class:"line"},null,-1))),W={class:"select-wrapper"},q=M((()=>(0,r._)("div",{class:"text"}," Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator. ",-1))),x=M((()=>(0,r._)("img",{src:"img/cocktails.png",alt:"cocktails_photo",class:"img"},null,-1))),P={key:1,class:"info"},B={class:"title"},R=M((()=>(0,r._)("div",{class:"line"},null,-1))),N={class:"cocktails"};var V={__name:"HomePage",setup(t){const e=H();e.getIngredients();const{ingredients:n,ingredient:i,cocktails:a}=(0,s.Jk)(e);function l(){e.getCocktails(e.ingredient)}function o(){e.setIngredient(null)}return(t,s)=>{const c=(0,r.up)("el-option"),u=(0,r.up)("el-select");return(0,r.wg)(),(0,r.j4)(U,{imgUrl:"img/main1.jpg",backFunc:o,"is-back-button-visible":!!(0,_.SU)(i)},{default:(0,r.w5)((()=>[(0,r._)("div",F,[(0,_.SU)(i)&&(0,_.SU)(a)?((0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("div",B,"COCKTAILS WITH "+(0,w.zw)((0,_.SU)(i)),1),R,(0,r._)("div",N,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,_.SU)(a),(t=>((0,r.wg)(),(0,r.j4)(A,{key:t.idDrink,cocktail:t},null,8,["cocktail"])))),128))])])):((0,r.wg)(),(0,r.iD)("div",z,[L,Z,(0,r._)("div",W,[(0,r.Wm)(u,{modelValue:(0,_.SU)(e).ingredient,"onUpdate:modelValue":s[0]||(s[0]=t=>(0,_.SU)(e).ingredient=t),placeholder:"Choose main ingredient",size:"large",filterable:"","allow-create":"",style:{width:"240px"},class:"select",onChange:l},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,_.SU)(n),(t=>((0,r.wg)(),(0,r.j4)(c,{key:t.strIngredient1,label:t.strIngredient1,value:t.strIngredient1},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),q,x]))])])),_:1},8,["is-back-button-visible"])}}};const Y=(0,I.Z)(V,[["__scopeId","data-v-01b1a75d"]]);var E=Y;const J=t=>((0,r.dD)("data-v-6375be3e"),t=t(),(0,r.Cn)(),t),G={key:0,class:"wrap"},Q={class:"wrapper"},X={class:"info"},tt={class:"title"},et=J((()=>(0,r._)("div",{class:"line"},null,-1))),nt={class:"list"},it={class:"instructions"};var at={__name:"CocktailPage",setup(t){const e=(0,u.yj)(),n=(0,_.iH)(null),i=(0,r.Fl)((()=>e.path.split("/").pop())),a=(0,r.Fl)((()=>{const t=[];for(let e=1;e<=15;e++){if(!n.value[`strIngredient${e}`])break;const i={};i.name=n.value[`strIngredient${e}`],i.measure=n.value[`strMeasure${e}`],t.push(i)}return t}));async function s(){const t=await K.Z.get(`${g}${i.value}`);n.value=t?.data?.drinks[0]}return s(),(t,e)=>n.value?((0,r.wg)(),(0,r.iD)("div",G,[(0,r.Wm)(U,{imgUrl:n.value.strDrinkThumb},{default:(0,r.w5)((()=>[(0,r._)("div",Q,[(0,r._)("div",X,[(0,r._)("div",tt,(0,w.zw)(n.value.strDrink),1),et,(0,r._)("div",nt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.value,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"list-item"},[(0,r.Uk)((0,w.zw)(t.name)+" ",1),t.measure?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Uk)(" | "+(0,w.zw)(t.measure),1)],64)):(0,r.kq)("",!0)])))),128))]),(0,r._)("div",it,(0,w.zw)(n.value.strInstructions),1)])])])),_:1},8,["imgUrl"])])):(0,r.kq)("",!0)}};const st=(0,I.Z)(at,[["__scopeId","data-v-6375be3e"]]);var rt=st,lt=n(1923);const ot=t=>((0,r.dD)("data-v-e1151164"),t=t(),(0,r.Cn)(),t),ct={key:0,class:"wrap"},ut={class:"wrapper"},dt={class:"info"},vt={class:"title"},pt=ot((()=>(0,r._)("div",{class:"line"},null,-1))),gt={class:"slider"},kt=["src"],ft={class:"name"},mt={class:"instructions"};var _t={__name:"RandomCocktail",setup(t){const e=(0,_.iH)(null),n=(0,r.Fl)((()=>{const t=[];for(let n=1;n<=15;n++){if(!e.value[`strIngredient${n}`])break;const i=e.value[`strIngredient${n}`];t.push(i)}return t}));async function i(){const t=await K.Z.get(k);e.value=t?.data?.drinks[0]}return i(),(t,i)=>e.value?((0,r.wg)(),(0,r.iD)("div",ct,[(0,r.Wm)(U,{imgUrl:e.value.strDrinkThumb},{default:(0,r.w5)((()=>[(0,r._)("div",ut,[(0,r._)("div",dt,[(0,r._)("div",vt,(0,w.zw)(e.value.strDrink),1),pt,(0,r._)("div",gt,[(0,r.Wm)((0,_.SU)(lt.tq),{"slides-per-view":3,"space-between":50,class:"swiper"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.value,((t,e)=>((0,r.wg)(),(0,r.j4)((0,_.SU)(lt.o5),{key:e},{default:(0,r.w5)((()=>[(0,r._)("img",{src:`${(0,_.SU)(f)}${t}-Small.png`,alt:"ingredient_pic"},null,8,kt),(0,r._)("div",ft,(0,w.zw)(t),1)])),_:2},1024)))),128))])),_:1})]),(0,r._)("div",mt,(0,w.zw)(e.value.strInstructions),1)])])])),_:1},8,["imgUrl"])])):(0,r.kq)("",!0)}};const wt=(0,I.Z)(_t,[["__scopeId","data-v-e1151164"]]);var bt=wt;const ht=(0,u.p7)({history:(0,u.PO)("/cocktails/"),routes:[{path:m.HOME,name:m.HOME,component:E},{path:m.COCKTAIL,name:m.COCKTAIL,component:rt},{path:m.RANDOM_COCKTAIL,name:m.RANDOM_COCKTAIL,component:bt}]});var yt=ht;const Ct=(0,a.ri)(c);Ct.use((0,s.WB)()),Ct.use(yt),Ct.use(i.Z),Ct.mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,s){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],s=t[u][2];for(var l=!0,o=0;o<i.length;o++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[o])}))?i.splice(o--,1):(l=!1,s<r&&(r=s));if(l){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,r=i[0],l=i[1],o=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(o)var u=o(n)}for(e&&e(i);c<r.length;c++)s=r[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},i=self["webpackChunkcocktails"]=self["webpackChunkcocktails"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8722)}));i=n.O(i)})();
//# sourceMappingURL=app.981a1dd9.js.map