"use strict";(self["webpackChunkjust_sell"]=self["webpackChunkjust_sell"]||[]).push([[5806],{2096:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3396);const o=["value","placeholder","name","required"];function l(e,t,n,l,u,r){const s=(0,a.Q2)("imask");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{value:e.modelValue,placeholder:e.placeholder?e.$t(e.placeholder):"+38 (0_ _) _ _ _-_ _-_ _",name:e.name,required:e.required,type:"tel",class:"form-field__input",onAccept:t[0]||(t[0]=(...t)=>e.onAccept&&e.onAccept(...t)),onBlur:t[1]||(t[1]=t=>e.$emit("blur"))},null,40,o)),[[s,e.mask]])}var u=n(8877),r=(0,a.aZ)({emits:["update:modelValue","blur"],props:{name:String,placeholder:{type:String,required:!1},required:{type:Boolean,required:!1},modelValue:{type:String,required:!1}},directives:{imask:u.An},data(){return{mask:{mask:"+{38}(000)000-00-00",lazy:!1}}},methods:{onAccept(e){const t=e.detail;this.$emit("update:modelValue",t.unmaskedValue)}}}),s=n(89);const i=(0,s.Z)(r,[["render",l]]);var c=i},513:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(3396),o=n(7139),l=n.p+"img/auth-img.79ee4967.png";const u={class:"auth-layout"},r=(0,a._)("div",{class:"auth-layout__image"},[(0,a._)("img",{src:l,alt:"Sign In"})],-1),s={class:"auth-layout__content"},i={class:"auth-layout__header"},c={class:"auth-layout__logo"},d={class:"auth-layout__header-link"},_={class:"auth-layout__footer"},p={class:"about"},m={href:"#"};function h(e,t,n,l,h,f){const v=(0,a.up)("app-logo"),w=(0,a.up)("app-locales");return(0,a.wg)(),(0,a.iD)("div",u,[r,(0,a._)("div",s,[(0,a._)("div",i,[(0,a._)("div",c,[(0,a.Wm)(v)]),(0,a._)("div",d,[(0,a.WI)(e.$slots,"auth-link")])]),(0,a.WI)(e.$slots,"auth-content"),(0,a._)("div",_,[(0,a.Wm)(w,{direction:"top"}),(0,a._)("div",p,[(0,a._)("a",m,(0,o.zw)(e.$t("Про компанію")),1)])])])])}var f=n(6298),v=n(895),w={components:{AppLocales:f.Z,AppLogo:v.Z}},k=n(89);const y=(0,k.Z)(w,[["render",h]]);var g=y},5151:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(3396),o=n(7139);function l(e,t,n,l,u,r){const s=(0,a.up)("router-link"),i=(0,a.up)("reset-form"),c=(0,a.up)("auth-layout");return(0,a.wg)(),(0,a.j4)(c,null,{"auth-link":(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("Маєте аккаунт?"))+" ",1),(0,a.Wm)(s,{to:"signin"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("Увійти")),1)])),_:1})])),"auth-content":(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1})}var u=n(513);const r={class:"reset-password-content"},s={class:"auth-layout__title reset-password-content__title"},i={class:"auth-layout__form"},c={class:"reset-password-content__actions"};function d(e,t,n,l,u,d){const _=(0,a.up)("tel-field"),p=(0,a.up)("form-field"),m=(0,a.up)("v-button"),h=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("h3",s,(0,o.zw)(e.$t("Забули пароль?")),1),(0,a._)("form",i,[(0,a.Wm)(p,{label:"Введіть ваш номер телефону",centered:!0},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{modelValue:e.tel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.tel=t),name:"phone",placeholder:"+38 (0_ _) _ _ _-_ _-_ _"},null,8,["modelValue"])])),_:1}),(0,a._)("div",c,[(0,a.Wm)(m,{onClick:e.sendCode},{text:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("Надіслати код")),1)])),_:1},8,["onClick"]),(0,a.Wm)(h,{to:{name:"signin"}},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{variant:"secondary"},{text:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("Відмінити")),1)])),_:1})])),_:1})])])])}n(7658);var _=n(4560),p=n(2096),m=n(4610),h=(0,a.aZ)({components:{FormField:_.Z,TelField:p.Z,VButton:m.Z},data(){return{tel:this.$route.query.tel?.toString()||""}},mounted(){this.tel=this.$route.query.tel?.toString()||""},methods:{sendCode(){this.$router.push({name:"confirm",query:{tel:this.tel}})}}}),f=n(89);const v=(0,f.Z)(h,[["render",d]]);var w=v,k={components:{AuthLayout:u.Z,ResetForm:w}};const y=(0,f.Z)(k,[["render",l]]);var g=y}}]);
//# sourceMappingURL=5806.1fd6ccee.js.map