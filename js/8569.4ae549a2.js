"use strict";(self["webpackChunkjust_sell"]=self["webpackChunkjust_sell"]||[]).push([[8569],{2729:function(e,l,a){a.d(l,{Z:function(){return h}});var t=a(3396),d=a(7139),o=a(9167);const u=["checked","name","disabled"],c={key:0,for:"#checkbox-field",class:"checkbox-field__label"},n={id:"checkbox-field",class:"checkbox-field__box"},s={key:0,src:o,alt:"Checked"},i={key:0,class:"form-field__error"},m=(0,t.aZ)({emits:["change","update:modelValue"],data(){return{checked:this.$props.modelValue}},computed:{hasError(){return Boolean(this.$props.error)}},watch:{modelValue:{handler(e){this.checked="string"===typeof e?JSON.parse(e):e},immediate:!0}},methods:{check(){this.checked=!this.checked,this.$emit("change",this.checked),this.$emit("update:modelValue",this.checked)}}});var r=(0,t.aZ)({...m,__name:"CheckboxField",props:{name:{},label:{},defaultChecked:{type:Boolean},direction:{default:"right"},variant:{default:"primary"},size:{default:"md"},modelValue:{type:Boolean},disabled:{},error:{},justify:{default:"space-between"}},setup(e){return(e,l)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("input",{type:"checkbox",class:"checkbox-field__input",checked:e.modelValue||e.checked,name:e.name,disabled:e.disabled},null,8,u),(0,t._)("div",{class:(0,d.C_)(["checkbox-field",{"checkbox-field--checked":e.checked,"checkbox-field--disabled":e.disabled,[`checkbox-field--${e.direction}`]:!0,[`checkbox-field--${e.variant}`]:!0,[`checkbox-field--${e.size}`]:!0}]),style:(0,d.j5)({justifyContent:"space-between"===e.justify?"space-between":"flex-start"}),onClick:l[0]||(l[0]=(...l)=>e.check&&e.check(...l))},[Boolean(e.label)?((0,t.wg)(),(0,t.iD)("label",c,(0,d.zw)(e.$t(e.label)),1)):(0,t.kq)("",!0),(0,t._)("div",n,[e.checked?((0,t.wg)(),(0,t.iD)("img",s)):(0,t.kq)("",!0)])],6),e.hasError?((0,t.wg)(),(0,t.iD)("div",i,(0,d.zw)(e.error),1)):(0,t.kq)("",!0)],64))}});const p=r;var h=p},1662:function(e,l,a){a.r(l),a.d(l,{default:function(){return j}});var t=a(3396),d=a(8231),o=a(7863),u=a(4870),c=a(6931),n=a(6890),s=a(9983),i=a(4610),m=a(4560),r=a(2619),p=a(2729);const h={class:"product-form-col"};var f=(0,t.aZ)({__name:"ProductInfoForm",props:{values:{}},setup(e){return(e,l)=>((0,t.wg)(),(0,t.iD)("div",h,[(0,t.Wm)(m.Z,{label:"Точка"},{default:(0,t.w5)((()=>[(0,t.Wm)(r.Z,{modelValue:e.values.point,"onUpdate:modelValue":l[0]||(l[0]=l=>e.values.point=l),name:"point",type:"text",placeholder:"Оберіть одну або декілька точок"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(m.Z,{label:"Назва товару/послуги*:"},{default:(0,t.w5)((()=>[(0,t.Wm)(r.Z,{modelValue:e.values.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.values.name=l),name:"point",type:"text",placeholder:"Напишіть назву товару "},null,8,["modelValue"])])),_:1}),(0,t.Wm)(m.Z,{label:"Ціна за одиницю*:"},{default:(0,t.w5)((()=>[(0,t.Wm)(r.Z,{modelValue:e.values.price,"onUpdate:modelValue":l[2]||(l[2]=l=>e.values.price=l),name:"point",type:"number",placeholder:"00.00"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(p.Z,{modelValue:e.values.taxIncluded,"onUpdate:modelValue":l[3]||(l[3]=l=>e.values.taxIncluded=l),name:"taxIncluded",label:"Податок включений у вартість*:"},null,8,["modelValue"]),(0,t.Wm)(p.Z,{modelValue:e.values.isFiscal,"onUpdate:modelValue":l[4]||(l[4]=l=>e.values.isFiscal=l),name:"taxIncluded",label:"Фіскалізувати*:"},null,8,["modelValue"]),(0,t.Wm)(p.Z,{modelValue:e.values.hasBonus,"onUpdate:modelValue":l[5]||(l[5]=l=>e.values.hasBonus=l),name:"taxIncluded",label:"Бонус з продажів*:"},null,8,["modelValue"])]))}}),v=a(89);const b=(0,v.Z)(f,[["__scopeId","data-v-335b6e34"]]);var k=b,_=a(3147);const w={class:"product-ingredients-form"};var x=(0,t.aZ)({__name:"ProductIngredientsForm",props:{values:{}},setup(e){const l=e,a=(0,u.iH)(l.values.templateId),d=(0,_.hw)();return(0,t.bv)((()=>{d.fetchIngredientTemplates()})),(e,l)=>((0,t.wg)(),(0,t.iD)("div",w,[(0,t.Wm)((0,u.SU)(_.CM),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},null,8,["modelValue"]),(0,t.Wm)((0,u.SU)(_.nN),{"template-id":a.value},null,8,["template-id"]),(0,t.Wm)((0,u.SU)(_.f2))]))}});const V=(0,v.Z)(x,[["__scopeId","data-v-d9621a3a"]]);var Z=V;const g={class:"form-actions form-actions--fixed"};var W=(0,t.aZ)({__name:"ProductForm",props:{initialData:{}},emits:["submit"],setup(e,{emit:l}){const a=e,d=l,o=a.initialData||{point:"",name:"",price:0,tax:"",taxIncluded:!1,isFiscal:!1,photo:"",code:"",hasBonus:!1},m=e=>{d("submit",e)};return(e,l)=>((0,t.wg)(),(0,t.j4)(c.Z,{"class-names":"product-form-container","initial-values":(0,u.SU)(o),onSubmit:m},{fields:(0,t.w5)((({values:e})=>[(0,t.Wm)(n.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s.Z,{title:"Загальна інформація"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{values:e},null,8,["values"])])),_:2},1024),(0,t.Wm)(s.Z,{title:"Інгредієнти"},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{values:e},null,8,["values"])])),_:2},1024)])),_:2},1024),(0,t._)("div",g,[(0,t.Wm)(i.Z,{type:"submit"},{text:(0,t.w5)((()=>[(0,t.Uk)("Додати новий товар")])),_:1})])])),_:1},8,["initial-values"]))}});const y=W;var U=y,I=(0,t.aZ)({__name:"CreateProductPage",setup(e){return(e,l)=>((0,t.wg)(),(0,t.j4)(d.Z,null,{appLoading:(0,t.w5)((()=>[(0,t.Wm)(o.Z,{loading:!1})])),appTitle:(0,t.w5)((()=>[(0,t.Uk)(" Додати новий товар ")])),appContent:(0,t.w5)((()=>[(0,t.Wm)(U)])),_:1}))}});const C=I;var j=C},9167:function(e,l,a){e.exports=a.p+"img/check-icon.972bc3c4.svg"}}]);
//# sourceMappingURL=8569.4ae549a2.js.map