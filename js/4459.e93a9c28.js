"use strict";(self["webpackChunkjust_sell"]=self["webpackChunkjust_sell"]||[]).push([[4459],{9902:function(e,l,a){a.d(l,{m:function(){return u}});var t=a(2578),o=a(2483),s=a(4870),n=a(4677),r=a(1729),m=a(3904);const d=(0,n.pm)(),i=(0,o.tv)(),u=(0,t.Q_)("ecomm-terminal",(()=>{const e=(0,s.iH)(!1),l=(0,s.iH)(!1),a=(0,s.iH)([]),t=(0,s.iH)(null),o=(0,s.iH)(0);async function n(l){try{e.value=!0;const a=(0,m.fH)(l);await(0,r.nt)(a),d.success("Термінал успішно створено")}catch(a){console.log(a),d.error("Помилка при створенні терміналу")}finally{e.value=!1}}async function u(l,a){try{e.value=!0;const t=(0,m.fH)(a);await(0,r.Lq)(l,t),d.success("Термінал успішно змінено"),i.back()}catch(t){d.error("Помилка при редагуванні терміналу")}finally{e.value=!1}}async function c(e){try{l.value=!0;const t=await(0,r.tj)((0,m.Co)(e)),s=t.list.map(m.cQ);a.value=s,o.value=t.totalCount}catch(t){console.error(t)}finally{l.value=!1}}async function p(e){console.log("getEcommTerminal"),l.value=!0;const a=await(0,r.uY)(e);t.value=(0,m.cQ)(a),l.value=!1}return{isFormLoading:e,isFetching:l,terminals:a,terminal:t,total:o,createEcommTerminal:n,editEcommTerminal:u,getEcommTerminals:c,getEcommTerminal:p}}))},4795:function(e,l,a){a.d(l,{Z:function(){return U}});var t=a(3396);const o=["type","placeholder","name","required","value"],s={class:"form-field__extra-container"};function n(e,l,a,n,r,m){const d=(0,t.up)("password-visibility-button"),i=(0,t.up)("password-generate-button");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("input",{type:e.type,placeholder:e.placeholder?e.$t(e.placeholder):"",name:e.name,required:e.required,value:e.password,class:"form-field__input",onInput:l[0]||(l[0]=l=>e.input(l)),onBlur:l[1]||(l[1]=l=>e.$emit("blur"))},null,40,o),(0,t._)("div",s,[(0,t.Wm)(d,{onChange:e.changeType},null,8,["onChange"]),e.hasGenerateButton?((0,t.wg)(),(0,t.j4)(i,{key:0,onGeneratedPassword:e.onGeneratePassword},null,8,["onGeneratedPassword"])):(0,t.kq)("",!0)])],64)}var r=a.p+"img/eye_hidden.08669155.svg",m=a.p+"img/eye_visible.cfc84e83.svg";const d={key:0,src:r,alt:"Show\n    password"},i={key:1,src:m,alt:"Show\n    password"};function u(e,l,a,o,s,n){return(0,t.wg)(),(0,t.iD)("button",{type:"button",class:"form-field__extra password-visibility-button",tabindex:"-1",onClick:l[0]||(l[0]=(...l)=>e.changeVisibility&&e.changeVisibility(...l))},[e.visibility?((0,t.wg)(),(0,t.iD)("img",i)):((0,t.wg)(),(0,t.iD)("img",d))])}var c=(0,t.aZ)({emits:["change"],data(){return{visibility:!1}},watch:{visibility(e){const l=e?"text":"password";this.$emit("change",l)}},methods:{changeVisibility(){this.visibility=!this.visibility}}}),p=a(89);const _=(0,p.Z)(c,[["render",u]]);var y=_,v=a.p+"img/key_icon.9e7583e7.svg";const h=(0,t._)("img",{src:v,alt:"Generate"},null,-1),f=[h];function g(e,l,a,o,s,n){return(0,t.wg)(),(0,t.iD)("button",{type:"button",class:"form-field__extra password-visibility-button",tabindex:"-1",onClick:l[0]||(l[0]=(...l)=>e.generatePassword&&e.generatePassword(...l))},f)}var V=(0,t.aZ)({emits:["generatedPassword"],data(){return{generatedPassword:""}},watch:{generatedPassword(e){this.$emit("generatedPassword",e)}},methods:{generatePassword(){const e="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",l=15;let a="";const t=window.crypto,o=new Uint32Array(1);for(let s=0;s<l;s++){const l=t.getRandomValues(o)[0];a+=e[l%e.length]}this.generatedPassword=a}}});const b=(0,p.Z)(V,[["render",g]]);var w=b,k=(0,t.aZ)({props:{name:{type:String,required:!0},placeholder:{type:String,required:!1},required:{type:Boolean,required:!1},hasGenerateButton:{type:Boolean,default:!1},modelValue:String},emits:["update:modelValue","blur"],components:{PasswordVisibilityButton:y,PasswordGenerateButton:w},data(){return{type:"password",password:this.modelValue||""}},watch:{modelValue(e){this.password=e}},methods:{changeType(e){this.type=e},input(e){const l=e.target?.value;this.$emit("update:modelValue",l)},onGeneratePassword(e){this.$emit("update:modelValue",e)}}});const Z=(0,p.Z)(k,[["render",n]]);var U=Z},8503:function(e,l,a){a.d(l,{Z:function(){return c}});var t=a(3396),o=a(7139),s=a(2729);const n={class:"select-field__item-value"},r={class:"select-field__item-content"},m={class:"select-field__item-hint"},d=(0,t.aZ)({emits:["select"],components:{CheckboxField:s.Z},data(){return{selected:this.checked}},watch:{checked:{handler(e){this.selected=e},immediate:!0}}});var i=(0,t.aZ)({...d,__name:"OptionItemWithCheckbox",props:{option:{},checked:{type:Boolean}},setup(e){return(e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"select-field__item",onClick:l[1]||(l[1]=l=>e.$emit("select",e.option))},[(0,t._)("div",n,[(0,t.Wm)(s.Z,{name:"",modelValue:e.selected,"onUpdate:modelValue":l[0]||(l[0]=l=>e.selected=l),label:e.option.label,direction:"left",size:"sm"},null,8,["modelValue","label"]),(0,t._)("div",r,[(0,t._)("span",m,(0,o.zw)(e.option.hint),1)])])]))}});const u=i;var c=u},5071:function(e,l,a){a.d(l,{Z:function(){return _}});var t=a(3396),o=a(7139),s=a(9242),n=a(5572),r=a(8445),m=a(8503);const d=["name"],i={class:"select-field__dropdown"},u=(0,t.aZ)({emits:["update:modelValue"],components:{SearchInput:n.Z,SelectedInput:r.Z,OptionItem:m.Z},data(){return{opened:!1,value:this.modelValue||"",selectedLabel:"",selected:[]}},mounted(){document.addEventListener("keydown",this.onEscapePressed)},beforeUnmount(){document.removeEventListener("keydown",this.onEscapePressed)},watch:{selected(){this.value=this.selected?.label||""},options(){this.selectedLabel=this.setSelectedLabel(this.modelValue)},modelValue:{handler(e){this.selectedLabel=this.setSelectedLabel(e)},immediate:!0}},methods:{open(){this.opened=!0},toggle(){this.opened=!this.opened},close(){this.opened=!1},select(e){this.selected.some((l=>e.value===l))?this.selected=this.selected.filter((l=>l!=e.value)):this.selected=[...this.selected,e.value],this.selectedLabel=this.setSelectedLabel(this.selected),this.$emit("update:modelValue",this.selected)},clear(){this.value=""},onEscapePressed(e){"Escape"===e.key&&this.close()},setSelectedLabel(e=[]){if(!e)return"";const l=Array.isArray(e)?e:[e],a=this.options.filter((({value:e})=>l.some((l=>l==e)))).map((e=>e.label));return a.join(",")}}});var c=(0,t.aZ)({...u,__name:"SelectFieldMultiple",props:{name:{},options:{},inputPlaceholder:{},searchPlaceholder:{},hasSearch:{type:Boolean,default:!0},modelValue:{},disabled:{},size:{default:"md"}},setup(e){return(e,l)=>{const a=(0,t.Q2)("click-outside");return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",{class:(0,o.C_)(["select-field",{"select-field--active":e.opened,"select-field--disabled":e.disabled}]),ref:"selectField"},[(0,t._)("input",{type:"text",name:e.name,class:"select-input-hidden"},null,8,d),(0,t._)("div",{class:(0,o.C_)(["select-field__container form-field__input",`form-field__input--${e.size}`]),onClick:l[0]||(l[0]=l=>e.hasSearch?e.open():e.toggle())},[(0,t.wy)((0,t.Wm)(r.Z,{label:e.selectedLabel,placeholder:e.$t(e.inputPlaceholder||"Select")},null,8,["label","placeholder"]),[[s.F8,!e.hasSearch||!e.opened]]),(0,t.wy)((0,t.Wm)(n.Z,{placeholder:e.$t(e.searchPlaceholder||"Search"),onClear:e.clear,name:e.name},null,8,["placeholder","onClear","name"]),[[s.F8,e.opened&&e.hasSearch]])],2),(0,t._)("div",i,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.options,(l=>((0,t.wg)(),(0,t.j4)(m.Z,{key:l.value,option:l,checked:e.selected?.some((e=>e.value==l.value)),onSelect:e.select},null,8,["option","checked","onSelect"])))),128))])],2)),[[a,e.close]])}}});const p=c;var _=p},9983:function(e,l,a){a.d(l,{Z:function(){return u}});var t=a(3396),o=a(9242);const s={class:"tab-pane"};function n(e,l,a,n,r,m){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",s,[(0,t.WI)(e.$slots,"default")],512)),[[o.F8,n.isActive]])}var r=a(4870),m={props:["title"],setup(e){const l=(0,r.iH)(!1),a=(0,t.f3)("TabsProvider");return(0,t.YP)((()=>a.selectedIndex),(()=>{l.value=e.title===a.selectedIndex})),(0,t.wF)((()=>{l.value=e.title===a.selectedIndex})),{isActive:l}}},d=a(89);const i=(0,d.Z)(m,[["render",n]]);var u=i},6890:function(e,l,a){a.d(l,{Z:function(){return _}});var t=a(3396),o=a(7139);const s={class:"tabs"},n={class:"tabs-pills"},r=["onClick"],m={class:"tabs-panes"};function d(e,l,a,d,i,u){return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",n,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.tabs,(l=>((0,t.wg)(),(0,t.iD)("div",{class:(0,o.C_)(["tab-pill",{active:e.selectedIndex===l.props.title}]),key:l.props.title,onClick:a=>e.selectTab(l.props.title)},(0,o.zw)(e.$t(l.props.title)),11,r)))),128))]),(0,t._)("div",m,[(0,t.WI)(e.$slots,"default")])])}var i=a(4870),u=(0,t.aZ)({setup(e,{slots:l,emit:a}){const o=(0,i.qj)({selectedIndex:null,tabs:[],count:0});(0,t.JJ)("TabsProvider",o);const s=e=>{o.selectedIndex=e,a("change",e)},n=()=>{l.default&&(o.tabs=l.default())};return(0,t.wF)((()=>n())),(0,t.Xn)((()=>n())),(0,t.bv)((()=>{s(o.tabs.at(0).props.title)})),{...(0,i.BK)(o),selectTab:s}}}),c=a(89);const p=(0,c.Z)(u,[["render",d]]);var _=p},4887:function(e,l,a){a.d(l,{Z:function(){return i}});var t=a(3396);function o(e,l,a,o,s,n){const r=(0,t.up)("select-field"),m=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(m,{label:e.label||"Тип запиту",error:e.error},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{options:e.types,name:"callback_req_type","input-placeholder":"Оберіть тип запиту","search-placeholder":"Введіть тип запиту","model-value":e.modelValue,"onUpdate:modelValue":e.select,"has-search":!1},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["label","error"])}var s=a(4560),n=a(2946),r=(0,t.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],components:{FormField:s.Z,SelectField:n.Z},data(){return{types:[{value:"json",label:"JSON"},{value:"xml",label:"XML"},{value:"x-www-form",label:"X-WWW-FORM"}]}},methods:{select(e){this.$emit("update:modelValue",e)}}}),m=a(89);const d=(0,m.Z)(r,[["render",o]]);var i=d},5449:function(e,l,a){a.d(l,{Z:function(){return y}});var t=a(3396),o=a(7139);const s={class:"hint-more"},n={class:"hint-more__title"},r=["onClick"];function m(e,l,a,m,d,i){const u=(0,t.up)("textarea-field"),c=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(c,{label:e.label||"Структура підпису (SHA256WithRSA)",error:e.error},{hint:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t._)("div",n,(0,o.zw)(e.$t("Натисніть на потрібний елемент, щоб додати до шаблону")),1),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.hint,(({name:l,message:a})=>((0,t.wg)(),(0,t.iD)("div",{key:l,class:(0,o.C_)(["hint-more__item",{"hint-more__item--selected":e.payload.includes(l)}]),onClick:a=>e.addTemplateElement(l)},[(0,t._)("span",null,(0,o.zw)(l)+" "+(0,o.zw)(a),1)],10,r)))),128)),(0,t._)("div",{class:"hint-more-btn",onClick:l[0]||(l[0]=l=>e.hintOpened=!e.hintOpened)},(0,o.zw)(e.hintOpened?e.$t("Показати меньше"):e.$t("Показати більше")),1)])])),default:(0,t.w5)((()=>[(0,t.Wm)(u,{"model-value":e.modelValue,"onUpdate:modelValue":e.input,"onUpdate:selection":e.changeSelection,name:"sign_stract",placeholder:"Наприклад, ${transaction_id}${pay_time}${get_time}"},null,8,["model-value","onUpdate:modelValue","onUpdate:selection"])])),_:1},8,["label","error"])}var d=a(4560),i=a(6686),u=a(2354),c=(0,t.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],data(){return{payload:"",hintOpened:!1,selectionStart:0,selectionEnd:0,hintMessages:[{name:"${transaction_id}",message:" - ідентифікатор платежу"},{name:"${pay_time}",message:" – час платежу"},{name:"${get_time}",message:" - час отримання"},{name:"${device_id}",message:" – ідентифікатор пристрою"},{name:"${pay_inst}",message:" - идентификатор платежа"},{name:"${pay_mask}",message:" – маска платежу"},{name:"${end_pay_time}",message:" - час закінчення платежу"},{name:"${transaction_type}",message:" – тип транзакції"},{name:"${amount}",message:" – кількість"},{name:"${ticket_num}",message:" – номер квитка"},{name:"${pan_mask}",message:"- маскований номер карти"},{name:"${code}",message:" - код результату транзакції"},{name:"${msg}",message:" - повідомлення коду помилки"},{name:"${rrn}",message:" - інтифікатор в системах МПС"},{name:"${is_test}",message:" - тип транзакції, тестова чи продова"}]}},mounted(){this.modelValue&&(this.payload=this.modelValue)},computed:{hint(){return this.hintOpened?this.hintMessages:this.hintMessages.slice(0,3)}},watch:{payload(e){const l=(0,u.m)(e);this.payload=(0,u.m)(e),this.$emit("update:modelValue",l)}},methods:{input(e){this.payload=e},addTemplateElement(e){this.payload.includes(e)?this.payload=this.payload.replace(e,""):(this.payload.substring(this.selectionEnd,this.payload.length),this.payload=this.payload.substring(0,this.selectionStart)+e+this.payload.substring(this.selectionEnd,this.payload.length)),this.$emit("update:modelValue",this.payload)},changeSelection(e){this.selectionStart=e.start,this.selectionEnd=e.end}},components:{FormField:d.Z,TextareaField:i.Z}}),p=a(89);const _=(0,p.Z)(c,[["render",m]]);var y=_},7092:function(e,l,a){a.d(l,{Z:function(){return we}});var t=a(3396),o=a(7139),s=a(6931),n=a(4610),r=a(4560),m=a(2619),d=a(4795),i=a(9983),u=a(6890);function c(e,l,a,o,s,n){const r=(0,t.up)("select-field"),m=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(m,{label:e.label||"Тип завершения оплаты",error:e.error},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{options:e.types,name:"end_client_type","input-placeholder":"Оберіть тип","search-placeholder":"Введіть тип","model-value":e.modelValue,"onUpdate:modelValue":e.select,"has-search":!1},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["label","error"])}var p=a(2946),_=(0,t.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],components:{FormField:r.Z,SelectField:p.Z},data(){return{types:[{value:"page",label:"Page"},{value:"redirect",label:"Redirect"}]}},methods:{select(e){this.$emit("update:modelValue",e)}}}),y=a(89);const v=(0,y.Z)(_,[["render",c]]);var h=v,f=a(4887),g=a(5375),V=a(5449),b=a(999);function w(e,l,a,o,s,n){const r=(0,t.up)("select-field"),m=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(m,{label:"Тип розподілу комісії",error:e.error},{hint:(0,t.w5)((()=>[])),default:(0,t.w5)((()=>[(0,t.Wm)(r,{options:e.comissionTypes,name:"comissionTypes","input-placeholder":"Оберіть тип розподілу комісії","search-placeholder":"Введіть тип розподілу комісії","has-search":!1,"model-value":e.modelValue?.toString(),"onUpdate:modelValue":e.select},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["error"])}var k=(0,t.aZ)({props:{modelValue:String,error:String},emits:["update:modelValue"],components:{FormField:r.Z,SelectField:p.Z},computed:{comissionTypes(){const e=this.$store.state.terminals.terminalsRef;return e?e.comis_type.map((e=>({value:e.id.toString(),label:e.name||""}))):[]}},methods:{select(e){this.$emit("update:modelValue",e)}}});const Z=(0,y.Z)(k,[["render",w]]);var U=Z;function W(e,l,a,o,s,n){const r=(0,t.up)("select-field"),m=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(m,{label:"Тип підключення",error:e.error},{hint:(0,t.w5)((()=>[])),default:(0,t.w5)((()=>[(0,t.Wm)(r,{options:e.connectionTypes,name:"request_type","input-placeholder":"Оберіть тип підключення","search-placeholder":"Введіть тип підключення","has-search":!1,"model-value":e.modelValue?.toString(),"onUpdate:modelValue":e.select},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["error"])}var E=(0,t.aZ)({props:{modelValue:String,error:String},emits:["update:modelValue"],components:{FormField:r.Z,SelectField:p.Z},computed:{connectionTypes(){const e=this.$store.state.terminals.terminalsRef;return e?e.request_type.map((e=>({value:e.id.toString(),label:e.name||"",hint:e.opis}))):[]}},methods:{select(e){this.$emit("update:modelValue",e)}}});const q=(0,y.Z)(E,[["render",W]]);var x=q,S=a.p+"img/duplicate-icon-accent.45fe2a14.svg",$=a(5071),F=a(638),C=(0,t.aZ)({__name:"AcquirerType",props:{modelValue:{default:""},modelModifiers:{}},emits:["update:modelValue"],setup(e){const l=(0,F.c)(),a=(0,t.tT)(e,"modelValue"),o=(0,t.Fl)((()=>{const e=l.refs;return e?e.banks_list.map((e=>({value:e.id.toString(),label:e.name||""}))):[]}));return(e,l)=>((0,t.wg)(),(0,t.j4)(r.Z,{label:"Еквайер"},{hint:(0,t.w5)((()=>[])),default:(0,t.w5)((()=>[(0,t.Wm)($.Z,{options:o.value,name:"comissionTypes","input-placeholder":"Оберіть тип еквайер","search-placeholder":"Введіть тип еквайер","has-search":!1,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},null,8,["options","modelValue"])])),_:1}))}});const T=C;var D=T,j=(0,t.aZ)({__name:"BalanceType",props:{modelValue:{default:""},modelModifiers:{}},emits:["update:modelValue"],setup(e){const l=(0,F.c)(),a=(0,t.tT)(e,"modelValue"),o=(0,t.Fl)((()=>{const e=l.refs;return e?e.balancer_type.map((e=>({value:e.id.toString(),label:e.name||"",hint:e.opis}))):[]}));return(e,l)=>((0,t.wg)(),(0,t.j4)(r.Z,{label:"Балансування"},{hint:(0,t.w5)((()=>[])),default:(0,t.w5)((()=>[(0,t.Wm)(p.Z,{options:o.value,name:"ballanceTypes","input-placeholder":"Оберіть тип балансування","search-placeholder":"Введіть тип балансування","has-search":!1,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},null,8,["options","modelValue"])])),_:1}))}});const P=j;var B=P;const H={key:0,class:"balancer"},M={key:1,class:"fields-row"};var A=(0,t.aZ)({__name:"BalancerField",props:(0,t.Vf)({selectedBanks:{default:()=>[]}},{balancer_type:{default:null},balancer_typeModifiers:{},balancer_rules:{default:{}},balancer_rulesModifiers:{}}),emits:["update:balancer_type","update:balancer_rules"],setup(e){const l=(0,F.c)(),a=e,o=(0,t.Fl)((()=>a.selectedBanks.length>1)),s=(0,t.Fl)((()=>{const e=l.refs;return e?e.banks_list.map((e=>({id:e.id,name:e.name}))):[]})),n=(0,t.tT)(e,"balancer_type"),d=(0,t.tT)(e,"balancer_rules"),i=e=>{const l=s.value.map((e=>e.id)),a={1:"",2:"",3:"",4:[]};d.value=l.reduce(((l,t)=>(l[t]=a[e],l)),{})};return(0,t.YP)((()=>n.value),i),(e,l)=>o.value?((0,t.wg)(),(0,t.iD)("div",H,[o.value?((0,t.wg)(),(0,t.j4)(B,{key:0,modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e)},null,8,["modelValue"])):(0,t.kq)("",!0),n.value?((0,t.wg)(),(0,t.iD)("div",M,["1"==n.value?((0,t.wg)(!0),(0,t.iD)(t.HY,{key:0},(0,t.Ko)(s.value,(e=>((0,t.wg)(),(0,t.j4)(r.Z,{key:e.id,label:`${e.name} (%)`},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"value",modelValue:d.value[e.id],"onUpdate:modelValue":l=>d.value[e.id]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128)):(0,t.kq)("",!0),"3"==n.value?((0,t.wg)(!0),(0,t.iD)(t.HY,{key:1},(0,t.Ko)(s.value,(e=>((0,t.wg)(),(0,t.j4)(r.Z,{key:e.id,label:`${e.name} (грн)`},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"value",modelValue:d.value[e.id],"onUpdate:modelValue":l=>d.value[e.id]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128)):(0,t.kq)("",!0),"4"==n.value?((0,t.wg)(!0),(0,t.iD)(t.HY,{key:2},(0,t.Ko)(s.value,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.id,class:"balancer-fields-row"},[(0,t.Wm)(r.Z,{label:`${e.name} (від)`},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"value",modelValue:d.value[e.id][0],"onUpdate:modelValue":l=>d.value[e.id][0]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"]),(0,t.Wm)(r.Z,{label:`${e.name} (до)`},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"value",modelValue:d.value[e.id][1],"onUpdate:modelValue":l=>d.value[e.id][1]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])])))),128)):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])):(0,t.kq)("",!0)}});const I=A;var L=I,O=a(2729),R=a(9242),z=a(4870);const G=e=>((0,t.dD)("data-v-3dea3d03"),e=e(),(0,t.Cn)(),e),Y={key:0,class:"reorder-container"},K=["onClick"],Q=G((()=>(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,t._)("path",{d:"M8 6L12 2L16 6"}),(0,t._)("path",{d:"M12 2V22"})],-1))),J=[Q],X=["onClick"],N=G((()=>(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,t._)("path",{d:"M8 18L12 22L16 18"}),(0,t._)("path",{d:"M12 2V22"})],-1))),ee=[N];var le=(0,t.aZ)({__name:"ReorderField",props:{modelValue:{default:[]},modelModifiers:{}},emits:["update:modelValue"],setup(e){const l=(0,F.c)(),a=(0,t.tT)(e,"modelValue"),s=(0,t.Fl)((()=>{const e=l.refs;return console.log("REF",e),e?e?.banks_list.map((e=>({id:e.id,name:e.name||""}))):[]}));console.log("banks",s);const n=(0,z.qj)(a.value.map((e=>s.value.find((l=>(console.log("bank.id",l.id),console.log("gateway",e),console.log("bank.id == gateway",l.id==e),l.id==e))))));console.log("items",n);const r=e=>{const l=n.indexOf(e),t=n[l-1];n[l-1]=e,n[l]=t,a.value[l-1]=e.id,a.value[l]=t.id},m=e=>{const l=n.indexOf(e),t=n[l+1];n[l+1]=e,n[l]=t,a.value[l+1]=e.id,a.value[l]=t.id};return(e,l)=>n?.length?((0,t.wg)(),(0,t.iD)("div",Y,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{key:e?.id,class:"reorder-item"},[(0,t._)("div",null,(0,o.zw)(e?.name),1),(0,t._)("div",null,[0!==l?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:(0,R.iM)((l=>r(e)),["prevent"]),class:"reoder-button"},J,8,K)):(0,t.kq)("",!0),l!==n.length-1?((0,t.wg)(),(0,t.iD)("button",{key:1,onClick:(0,R.iM)((l=>m(e)),["prevent"]),class:"reoder-button"},ee,8,X)):(0,t.kq)("",!0)])])))),128))])):(0,t.kq)("",!0)}});const ae=(0,y.Z)(le,[["__scopeId","data-v-3dea3d03"]]);var te=ae;const oe={class:"container"};var se=(0,t.aZ)({__name:"AutoResendField",props:{seq_gateway_requests:{type:Boolean,default:!1},seq_gateway_requestsModifiers:{},gateways:{default:[]},gatewaysModifiers:{}},emits:["update:seq_gateway_requests","update:gateways"],setup(e){const l=(0,t.tT)(e,"seq_gateway_requests"),a=(0,t.tT)(e,"gateways");return console.log("seqGatewayRequests",l.value),console.log("gateways",a.value),(e,o)=>((0,t.wg)(),(0,t.iD)("div",oe,[(0,t.Wm)(O.Z,{direction:"left",name:"auto_send_next",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),label:"Автоматично відправляти запит на іншого экваера, якщо отримали помилку"},null,8,["modelValue"]),l.value?((0,t.wg)(),(0,t.j4)(te,{key:0,modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e)},null,8,["modelValue"])):(0,t.kq)("",!0)]))}});const ne=(0,y.Z)(se,[["__scopeId","data-v-531fda40"]]);var re=ne;const me={class:"terminal-form__extra"},de=(0,t._)("img",{src:S,alt:""},null,-1),ie={key:0,class:"fields-row"};var ue=(0,t.aZ)({__name:"AdditionConnectForm",props:(0,t.Vf)({prefix:{}},{formValues:{},formValuesModifiers:{},"form-error":{},"form-errorModifiers":{}}),emits:["update:formValues","update:form-error"],setup(e){const l=e,a=(0,t.tT)(e,"formValues"),s=((0,t.tT)(e,"form-error"),()=>{const e=a.value.Ecomm,t=Object.keys(e).reduce(((l,a)=>(l[a]=e[a],l)),{});a.value[l.prefix]=t});return(e,l)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",me,[(0,t._)("div",null,[(0,t.Wm)(n.Z,{variant:"ghost",hasMaxWidth:!1,onClick:s},{beforeIcon:(0,t.w5)((()=>[de])),text:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("Дублювати з Ecomm")),1)])),_:1})])]),(0,t.Wm)(g.Z,{label:"Тип запиту зворотного виклику",modelValue:a.value[e.prefix].callback_type,"onUpdate:modelValue":l[0]||(l[0]=l=>a.value[e.prefix].callback_type=l)},null,8,["modelValue"]),(0,t.Wm)(f.Z,{modelValue:a.value[e.prefix].callback_req_type,"onUpdate:modelValue":l[1]||(l[1]=l=>a.value[e.prefix].callback_req_type=l)},null,8,["modelValue"]),(0,t.Wm)(h,{modelValue:a.value[e.prefix].end_client_type,"onUpdate:modelValue":l[2]||(l[2]=l=>a.value[e.prefix].end_client_type=l)},null,8,["modelValue"]),(0,t.Wm)(r.Z,{label:"Endpoint для повідомлень про результати транзакцій"},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"ecomm-callback",modelValue:a.value[e.prefix]["callback_url"],"onUpdate:modelValue":l[3]||(l[3]=l=>a.value[e.prefix]["callback_url"]=l),placeholder:"Наприклад, ?param_name=param_value"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(r.Z,{label:"GET параметри для передачі"},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"add_get",modelValue:a.value[e.prefix]["callback_get_param"],"onUpdate:modelValue":l[4]||(l[4]=l=>a.value[e.prefix]["callback_get_param"]=l),placeholder:"Наприклад, ?param_name=param_value"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(b.Z,{modelValue:a.value[e.prefix]["callback_req_tmpl"],"onUpdate:modelValue":l[5]||(l[5]=l=>a.value[e.prefix]["callback_req_tmpl"]=l)},null,8,["modelValue"]),(0,t.Wm)(r.Z,{label:"Redirect url"},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"redirect_url",modelValue:a.value[e.prefix]["redirect_url"],"onUpdate:modelValue":l[6]||(l[6]=l=>a.value[e.prefix]["redirect_url"]=l),placeholder:"Введіть Redirect url"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(r.Z,{label:"Secret Key (підпис HmacSHA256)"},{hint:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("Фраза-ключ для підпису запиту через API та перевірки повідомлень від системи")),1)])),default:(0,t.w5)((()=>[(0,t.Wm)(d.Z,{name:"secrey_key",modelValue:a.value[e.prefix]["secret_key"],"onUpdate:modelValue":l[7]||(l[7]=l=>a.value[e.prefix]["secret_key"]=l),hasGenerateButton:!0,placeholder:"Введіть або згенеруйте"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(V.Z,{modelValue:a.value[e.prefix]["sign_stract"],"onUpdate:modelValue":l[8]||(l[8]=l=>a.value[e.prefix]["sign_stract"]=l)},null,8,["modelValue"]),(0,t.Wm)(U,{modelValue:a.value[e.prefix]["comis_type"],"onUpdate:modelValue":l[9]||(l[9]=l=>a.value[e.prefix]["comis_type"]=l)},null,8,["modelValue"]),"3"===a.value[e.prefix]["comis_type"]?((0,t.wg)(),(0,t.iD)("div",ie,[(0,t.Wm)(r.Z,{label:"Комісія клієнта"},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{type:"number",name:"client_comis",placeholder:"Введіть комісію клієнта",modelValue:a.value[e.prefix].comis_rules.client_comis,"onUpdate:modelValue":l[10]||(l[10]=l=>a.value[e.prefix].comis_rules.client_comis=l)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(r.Z,{label:"Комісія мерчента"},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{type:"number",name:"merch_comis",placeholder:"Введіть комісію мерчента",modelValue:a.value[e.prefix].comis_rules.merch_comis,"onUpdate:modelValue":l[11]||(l[11]=l=>a.value[e.prefix].comis_rules.merch_comis=l)},null,8,["modelValue"])])),_:1})])):(0,t.kq)("",!0),(0,t.Wm)(x,{modelValue:a.value[e.prefix]["request_type"],"onUpdate:modelValue":l[12]||(l[12]=l=>a.value[e.prefix]["request_type"]=l)},null,8,["modelValue"]),(0,t.Wm)(D,{modelValue:a.value[e.prefix]["gateways"],"onUpdate:modelValue":l[13]||(l[13]=l=>a.value[e.prefix]["gateways"]=l)},null,8,["modelValue"]),(0,t.Wm)(L,{"model-value":a.value[e.prefix]["balancer_type"],"selected-banks":a.value[e.prefix]["gateway"]},null,8,["model-value","selected-banks"]),(0,t.Wm)(re,{modelValue:a.value[e.prefix].auto_send_next,"onUpdate:modelValue":l[14]||(l[14]=l=>a.value[e.prefix].auto_send_next=l),acquirers:a.value[e.prefix].gateways},null,8,["modelValue","acquirers"])],64))}});const ce=ue;var pe=ce;function _e(e){return e&&"object"===typeof e&&!Array.isArray(e)}function ye(e,...l){if(!l.length)return e;const a=l.shift();if(_e(e)&&_e(a))for(const t in a)_e(a[t])?(e[t]||Object.assign(e,{[t]:{}}),ye(e[t],a[t])):Object.assign(e,{[t]:a[t]});return ye(e,...l)}const ve={class:"terminal-form__container"},he={class:"terminal-form ecomm-form__container"},fe={key:0,class:"fields-row"},ge={class:"terminal-form"};var Ve=(0,t.aZ)({__name:"EcommTerminalForm",props:{actionsFixed:{type:Boolean},initialValues:{},loading:{type:Boolean}},emits:["submit"],setup(e,{emit:l}){const a=e,c=l,p={name:"",site:"",systems:{Ecomm:{callback_type:"",callback_url:"",callback_get_param:"",callback_req_tmpl:"",callback_req_type:"",redirect_url:"",secret_key:"",sign_stract:"",comis_type:null,comis_rules:{},request_type:null,end_client_type:"",timeout:null,gateways:[],balancer_type:null,balancer_rules:{},seq_gateway_requests:null},A2C:{},C2A:{}}},_=(0,t.Fl)((()=>ye(p,a.initialValues))),y=e=>{c("submit",e)};return(e,l)=>((0,t.wg)(),(0,t.iD)("div",ve,[Boolean(_.value)?((0,t.wg)(),(0,t.j4)(s.Z,{key:0,"initial-values":_.value,onSubmit:y},{fields:(0,t.w5)((({values:l,errors:a})=>[(0,t.Wm)(u.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{title:"Ecomm"},{default:(0,t.w5)((()=>[(0,t._)("div",he,[(0,t.Wm)(r.Z,{label:"Назва",error:a?.name},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"name",modelValue:l.name,"onUpdate:modelValue":e=>l.name=e,placeholder:"Введіть назву термінала"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(r.Z,{label:"Сайт",error:a?.site},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"ecomm-site",modelValue:l.site,"onUpdate:modelValue":e=>l.site=e,placeholder:"Введіть адресу сайта"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(g.Z,{label:"Тип запиту зворотного виклику",modelValue:l.systems.Ecomm.callback_type,"onUpdate:modelValue":e=>l.systems.Ecomm.callback_type=e,error:a?.systems?.Ecomm.callback_type},null,8,["modelValue","onUpdate:modelValue","error"]),(0,t.Wm)(f.Z,{modelValue:l.systems.Ecomm.callback_req_type,"onUpdate:modelValue":e=>l.systems.Ecomm.callback_req_type=e,error:a?.systems?.Ecomm.callback_req_type},null,8,["modelValue","onUpdate:modelValue","error"]),(0,t.Wm)(h,{modelValue:l.systems.Ecomm.end_client_type,"onUpdate:modelValue":e=>l.systems.Ecomm.end_client_type=e,error:a?.systems?.Ecomm.end_client_type},null,8,["modelValue","onUpdate:modelValue","error"]),(0,t.Wm)(r.Z,{label:"Endpoint для повідомлень про результати транзакцій",error:a?.systems?.Ecomm.callback_url},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"ecomm-callback",modelValue:l.systems.Ecomm.callback_url,"onUpdate:modelValue":e=>l.systems.Ecomm.callback_url=e,placeholder:"Наприклад, ?param_name=param_value"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(r.Z,{label:"GET параметри для передачі",error:a?.systems?.Ecomm.callback_get_param},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"ecomm-callback_get",modelValue:l.systems.Ecomm.callback_get_param,"onUpdate:modelValue":e=>l.systems.Ecomm.callback_get_param=e,placeholder:"Наприклад, ?param_name=param_value"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(b.Z,{modelValue:l.systems.Ecomm.callback_req_tmpl,"onUpdate:modelValue":e=>l.systems.Ecomm.callback_req_tmpl=e,error:a?.systems?.Ecomm.callback_req_tmpl},null,8,["modelValue","onUpdate:modelValue","error"]),(0,t.Wm)(r.Z,{label:"Redirect url",error:a?.systems?.Ecomm.redirect_url},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"ecomm-redirect",modelValue:l.systems.Ecomm.redirect_url,"onUpdate:modelValue":e=>l.systems.Ecomm.redirect_url=e,placeholder:"Введіть Redirect url"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(r.Z,{label:"Secret Key (підпис HmacSHA256)",error:a?.systems?.Ecomm.secret_key},{hint:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("Фраза-ключ для підпису запиту через API та перевірки повідомлень від системи")),1)])),default:(0,t.w5)((()=>[(0,t.Wm)(d.Z,{name:"ecomm-secret_key",modelValue:l.systems.Ecomm.secret_key,"onUpdate:modelValue":e=>l.systems.Ecomm.secret_key=e,hasGenerateButton:!0,placeholder:"Введіть або згенеруйте"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(V.Z,{modelValue:l.systems.Ecomm.sign_stract,"onUpdate:modelValue":e=>l.systems.Ecomm.sign_stract=e},null,8,["modelValue","onUpdate:modelValue"]),(0,t.Wm)(U,{modelValue:l.systems.Ecomm.comis_type,"onUpdate:modelValue":e=>l.systems.Ecomm.comis_type=e},null,8,["modelValue","onUpdate:modelValue"]),"3"==l.systems.Ecomm.comis_type?((0,t.wg)(),(0,t.iD)("div",fe,[(0,t.Wm)(r.Z,{label:"Комісія клієнта"},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{type:"number",name:"client_comis",placeholder:"Введіть комісію клієнта",modelValue:l.systems.Ecomm.comis_rules.client_comis,"onUpdate:modelValue":e=>l.systems.Ecomm.comis_rules.client_comis=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(r.Z,{label:"Комісія мерчента"},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{type:"number",name:"merch_comis",placeholder:"Введіть комісію мерчента",modelValue:l.systems.Ecomm.comis_rules.merch_comis,"onUpdate:modelValue":e=>l.systems.Ecomm.comis_rules.merch_comis=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])):(0,t.kq)("",!0),(0,t.Wm)(x,{modelValue:l.systems.Ecomm.request_type,"onUpdate:modelValue":e=>l.systems.Ecomm.request_type=e},null,8,["modelValue","onUpdate:modelValue"]),(0,t.Wm)(r.Z,{label:"Час очікування на введення картки клієнтом",error:a.systems?.Ecomm.timeout},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z,{name:"ecomm-time_out",modelValue:l.systems.Ecomm.timeout,"onUpdate:modelValue":e=>l.systems.Ecomm.timeout=e,placeholder:"Наприклад, 30"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(D,{modelValue:l.systems.Ecomm.gateways,"onUpdate:modelValue":e=>l.systems.Ecomm.gateways=e},null,8,["modelValue","onUpdate:modelValue"]),l.systems.Ecomm.gateways?.length?((0,t.wg)(),(0,t.j4)(L,{key:1,balancer_type:l.systems.Ecomm.balancer_type,"onUpdate:balancer_type":e=>l.systems.Ecomm.balancer_type=e,balancer_rules:l.systems.Ecomm.balancer_rules,"onUpdate:balancer_rules":e=>l.systems.Ecomm.balancer_rules=e,"selected-banks":l.systems.Ecomm.gateways},null,8,["balancer_type","onUpdate:balancer_type","balancer_rules","onUpdate:balancer_rules","selected-banks"])):(0,t.kq)("",!0),(0,t.Wm)(re,{seq_gateway_requests:l.systems.Ecomm.seq_gateway_requests,"onUpdate:seq_gateway_requests":e=>l.systems.Ecomm.seq_gateway_requests=e,gateways:l.systems.Ecomm.gateways,"onUpdate:gateways":e=>l.systems.Ecomm.gateways=e},null,8,["seq_gateway_requests","onUpdate:seq_gateway_requests","gateways","onUpdate:gateways"])])])),_:2},1024),(0,t.Wm)(i.Z,{title:"Account to Card"},{default:(0,t.w5)((()=>[(0,t._)("div",ge,[(0,t.Wm)(pe,{"form-values":l.systems,"onUpdate:formValues":e=>l.systems=e,prefix:"A2C"},null,8,["form-values","onUpdate:formValues"])])])),_:2},1024)])),_:2},1024),(0,t._)("div",{class:(0,o.C_)(["form-actions",{"form-actions--fixed":e.actionsFixed}])},[(0,t.Wm)(n.Z,{type:"submit",loading:e.loading},{text:(0,t.w5)((()=>[(0,t.Uk)("Додати налаштування")])),_:1},8,["loading"])],2)])),_:1},8,["initial-values"])):(0,t.kq)("",!0)]))}});const be=Ve;var we=be}}]);
//# sourceMappingURL=4459.e93a9c28.js.map