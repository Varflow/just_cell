"use strict";(self["webpackChunkjust_sell"]=self["webpackChunkjust_sell"]||[]).push([[9484],{2375:function(e,t,a){a.d(t,{Cb:function(){return r},oh:function(){return i},zo:function(){return o}});var l=a(7736),n=a(7629);const o=(0,n.Ry)({terminal_id:(0,n.Z_)().required(l.r.REQUIRED_FIELD),can_offline:(0,n.O7)().required(l.r.REQUIRED_FIELD),can_user_reversal:(0,n.O7)().required(l.r.REQUIRED_FIELD),callback_req_type:(0,n.Z_)().required(l.r.REQUIRED_FIELD),callback_type:(0,n.Z_)().required(l.r.REQUIRED_FIELD),inShifts:(0,n.O7)().required(l.r.REQUIRED_FIELD)}),i=(0,n.Ry)({id:(0,n.Z_)().required(l.r.REQUIRED_FIELD),secret_key:(0,n.Z_)().required(l.r.REQUIRED_FIELD)}),r=(0,n.Ry)({secret_key:(0,n.Z_)().required(l.r.REQUIRED_FIELD),req_type:(0,n.Z_)().required(l.r.REQUIRED_FIELD),settings:(0,n.Z_)().required(l.r.REQUIRED_FIELD),sync_type:(0,n.Z_)().required(l.r.REQUIRED_FIELD),max_offline_sum:(0,n.Rx)().required(l.r.REQUIRED_FIELD).min(1,l.r.MIN_NUMBER),endpoint_result:(0,n.Z_)().required(l.r.REQUIRED_FIELD),payload:(0,n.Z_)().required(l.r.REQUIRED_FIELD),sign_stract:(0,n.Z_)().required(l.r.REQUIRED_FIELD),card_wait:(0,n.Rx)().required(l.r.REQUIRED_FIELD).min(1,l.r.MIN_NUMBER),sync_period:(0,n.Rx)().required(l.r.REQUIRED_FIELD).min(1,l.r.MIN_NUMBER)})},4795:function(e,t,a){a.d(t,{Z:function(){return R}});var l=a(3396);const n=["type","placeholder","name","required","value"],o={class:"form-field__extra-container"};function i(e,t,a,i,r,d){const s=(0,l.up)("password-visibility-button"),u=(0,l.up)("password-generate-button");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("input",{type:e.type,placeholder:e.placeholder?e.$t(e.placeholder):"",name:e.name,required:e.required,value:e.password,class:"form-field__input",onInput:t[0]||(t[0]=t=>e.input(t)),onBlur:t[1]||(t[1]=t=>e.$emit("blur"))},null,40,n),(0,l._)("div",o,[(0,l.Wm)(s,{onChange:e.changeType},null,8,["onChange"]),e.hasGenerateButton?((0,l.wg)(),(0,l.j4)(u,{key:0,onGeneratedPassword:e.onGeneratePassword},null,8,["onGeneratedPassword"])):(0,l.kq)("",!0)])],64)}var r=a.p+"img/eye_hidden.08669155.svg",d=a.p+"img/eye_visible.cfc84e83.svg";const s={key:0,src:r,alt:"Show\n    password"},u={key:1,src:d,alt:"Show\n    password"};function m(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)("button",{type:"button",class:"form-field__extra password-visibility-button",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.changeVisibility&&e.changeVisibility(...t))},[e.visibility?((0,l.wg)(),(0,l.iD)("img",u)):((0,l.wg)(),(0,l.iD)("img",s))])}var c=(0,l.aZ)({emits:["change"],data(){return{visibility:!1}},watch:{visibility(e){const t=e?"text":"password";this.$emit("change",t)}},methods:{changeVisibility(){this.visibility=!this.visibility}}}),p=a(89);const _=(0,p.Z)(c,[["render",m]]);var h=_,f=a.p+"img/key_icon.9e7583e7.svg";const y=(0,l._)("img",{src:f,alt:"Generate"},null,-1),g=[y];function V(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)("button",{type:"button",class:"form-field__extra password-visibility-button",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.generatePassword&&e.generatePassword(...t))},g)}var w=(0,l.aZ)({emits:["generatedPassword"],data(){return{generatedPassword:""}},watch:{generatedPassword(e){this.$emit("generatedPassword",e)}},methods:{generatePassword(){const e="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=15;let a="";const l=window.crypto,n=new Uint32Array(1);for(let o=0;o<t;o++){const t=l.getRandomValues(n)[0];a+=e[t%e.length]}this.generatedPassword=a}}});const b=(0,p.Z)(w,[["render",V]]);var v=b,E=(0,l.aZ)({props:{name:{type:String,required:!0},placeholder:{type:String,required:!1},required:{type:Boolean,required:!1},hasGenerateButton:{type:Boolean,default:!1},modelValue:String},emits:["update:modelValue","blur"],components:{PasswordVisibilityButton:h,PasswordGenerateButton:v},data(){return{type:"password",password:this.modelValue||""}},watch:{modelValue(e){this.password=e}},methods:{changeType(e){this.type=e},input(e){const t=e.target?.value;this.$emit("update:modelValue",t)},onGeneratePassword(e){this.$emit("update:modelValue",e)}}});const U=(0,p.Z)(E,[["render",i]]);var R=U},3377:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(3396),n=a(7139);const o={class:"form-title__content"};function i(e,t,a,i,r,d){return(0,l.wg)(),(0,l.iD)("div",{class:(0,n.C_)(["form-title",`form-title--${e.direction}`])},[(0,l._)("div",o,[(0,l.WI)(e.$slots,"title")])],2)}var r=(0,l.aZ)({props:{direction:{type:String,required:!1,default:"bottom"}}}),d=a(89);const s=(0,d.Z)(r,[["render",i]]);var u=s},8482:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(3396);function n(e,t,a,n,o,i){return(0,l.WI)(e.$slots,"content",{canRender:e.canRender})}var o=a(6601),i=(0,l.aZ)({props:{rule:{type:String,required:!0}},data(){return{canRender:!1}},mounted(){this.canRender=this.init()},methods:{init(){const e=(0,o.nO)();if(!e)return!1;const t=e.map((e=>e.tag));return t?.includes(this.rule)||!1}}}),r=a(89);const d=(0,r.Z)(i,[["render",n]]);var s=d},6235:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(3396);function n(e,t,a,n,o,i){const r=(0,l.up)("select-field"),d=(0,l.up)("form-field");return(0,l.wg)(),(0,l.j4)(d,{label:"Тип встановлення",error:e.error},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{options:e.allocTypes,name:"syncTypes","input-placeholder":"Оберіть тип встановлення","search-placeholder":"Введіть тип встановлення","has-search":!1,"model-value":e.value,"onUpdate:modelValue":e.select},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["error"])}a(7658);var o=a(4560),i=a(2946),r=(0,l.aZ)({props:{modelValue:String,error:String},emits:["update:modelValue"],components:{FormField:o.Z,SelectField:i.Z},data(){return{value:""}},computed:{allocTypes(){const e=this.$store.state.terminals.terminalsRef;if(!e)return[];const t=e.alloc_type.map((e=>({value:e.id.toString(),label:e.name||""})));return t.push({label:"Не вибрано",value:""}),t}},watch:{modelValue:{handler(e){if(Number.isNaN(parseInt(e)))return this.value=this.allocTypes.find((t=>t.label===e))?.value||"",void this.$emit("update:modelValue",this.value);this.value=e},immediate:!0}},methods:{select(e){this.$emit("update:modelValue",e)}}}),d=a(89);const s=(0,d.Z)(r,[["render",n]]);var u=s},4887:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(3396);function n(e,t,a,n,o,i){const r=(0,l.up)("select-field"),d=(0,l.up)("form-field");return(0,l.wg)(),(0,l.j4)(d,{label:e.label||"Тип запиту",error:e.error},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{options:e.types,name:"callback_req_type","input-placeholder":"Оберіть тип запиту","search-placeholder":"Введіть тип запиту","model-value":e.modelValue,"onUpdate:modelValue":e.select,"has-search":!1},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["label","error"])}var o=a(4560),i=a(2946),r=(0,l.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],components:{FormField:o.Z,SelectField:i.Z},data(){return{types:[{value:"json",label:"JSON"},{value:"xml",label:"XML"},{value:"x-www-form",label:"X-WWW-FORM"}]}},methods:{select(e){this.$emit("update:modelValue",e)}}}),d=a(89);const s=(0,d.Z)(r,[["render",n]]);var u=s},5449:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(3396),n=a(7139);const o={class:"hint-more"},i={class:"hint-more__title"},r=["onClick"];function d(e,t,a,d,s,u){const m=(0,l.up)("textarea-field"),c=(0,l.up)("form-field");return(0,l.wg)(),(0,l.j4)(c,{label:e.label||"Структура підпису (SHA256WithRSA)",error:e.error},{hint:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l._)("div",i,(0,n.zw)(e.$t("Натисніть на потрібний елемент, щоб додати до шаблону")),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.hint,(({name:t,message:a})=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:(0,n.C_)(["hint-more__item",{"hint-more__item--selected":e.payload.includes(t)}]),onClick:a=>e.addTemplateElement(t)},[(0,l._)("span",null,(0,n.zw)(t)+" "+(0,n.zw)(a),1)],10,r)))),128)),(0,l._)("div",{class:"hint-more-btn",onClick:t[0]||(t[0]=t=>e.hintOpened=!e.hintOpened)},(0,n.zw)(e.hintOpened?e.$t("Показати меньше"):e.$t("Показати більше")),1)])])),default:(0,l.w5)((()=>[(0,l.Wm)(m,{"model-value":e.modelValue,"onUpdate:modelValue":e.input,"onUpdate:selection":e.changeSelection,name:"sign_stract",placeholder:"Наприклад, ${transaction_id}${pay_time}${get_time}"},null,8,["model-value","onUpdate:modelValue","onUpdate:selection"])])),_:1},8,["label","error"])}var s=a(4560),u=a(6686),m=a(2354),c=(0,l.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],data(){return{payload:"",hintOpened:!1,selectionStart:0,selectionEnd:0,hintMessages:[{name:"${transaction_id}",message:" - ідентифікатор платежу"},{name:"${pay_time}",message:" – час платежу"},{name:"${get_time}",message:" - час отримання"},{name:"${device_id}",message:" – ідентифікатор пристрою"},{name:"${pay_inst}",message:" - идентификатор платежа"},{name:"${pay_mask}",message:" – маска платежу"},{name:"${end_pay_time}",message:" - час закінчення платежу"},{name:"${transaction_type}",message:" – тип транзакції"},{name:"${amount}",message:" – кількість"},{name:"${ticket_num}",message:" – номер квитка"},{name:"${pan_mask}",message:"- маскований номер карти"},{name:"${code}",message:" - код результату транзакції"},{name:"${msg}",message:" - повідомлення коду помилки"},{name:"${rrn}",message:" - інтифікатор в системах МПС"},{name:"${is_test}",message:" - тип транзакції, тестова чи продова"}]}},mounted(){this.modelValue&&(this.payload=this.modelValue)},computed:{hint(){return this.hintOpened?this.hintMessages:this.hintMessages.slice(0,3)}},watch:{payload(e){const t=(0,m.m)(e);this.payload=(0,m.m)(e),this.$emit("update:modelValue",t)}},methods:{input(e){this.payload=e},addTemplateElement(e){this.payload.includes(e)?this.payload=this.payload.replace(e,""):(this.payload.substring(this.selectionEnd,this.payload.length),this.payload=this.payload.substring(0,this.selectionStart)+e+this.payload.substring(this.selectionEnd,this.payload.length)),this.$emit("update:modelValue",this.payload)},changeSelection(e){this.selectionStart=e.start,this.selectionEnd=e.end}},components:{FormField:s.Z,TextareaField:u.Z}}),p=a(89);const _=(0,p.Z)(c,[["render",d]]);var h=_},6815:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var l=a(3396),n=a(7139);function o(e,t,a,o,i,r){const d=(0,l.up)("app-loading"),s=(0,l.up)("offline-terminal-form"),u=(0,l.up)("app-layout");return(0,l.wg)(),(0,l.j4)(u,null,(0,l.Nv)({appTitle:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Активація термінала")),1)])),appLoading:(0,l.w5)((()=>[(0,l.Wm)(d,{loading:e.loading},null,8,["loading"])])),appContent:(0,l.w5)((()=>[(0,l.Wm)(s,{showTerminalName:!0,configData:e.configData,"actions-fixed":!0},null,8,["configData"])])),_:2},[e.canEdit?void 0:{name:"appSubtitle",fn:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Ви не маєте прав для редагування налаштувань терміналу")),1)])),key:"0"}]),1024)}var i=a(8231);const r={key:0,class:"terminal-form__container"},d={class:"checkbox-container"},s={class:"checkbox-container"};function u(e,t,a,o,i,u){const m=(0,l.up)("input-field"),c=(0,l.up)("form-field"),p=(0,l.up)("checkbox-field"),_=(0,l.up)("alloc-type-field"),h=(0,l.up)("password-field"),f=(0,l.up)("form-title"),y=(0,l.up)("textarea-field"),g=(0,l.up)("payload-field"),V=(0,l.up)("sign-stract-field"),w=(0,l.up)("request-method-select"),b=(0,l.up)("request-type-select"),v=(0,l.up)("v-button"),E=(0,l.up)("v-protected"),U=(0,l.up)("v-form");return Boolean(this.configData)?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(U,{action:"#",class:"terminal-form",schema:e.activateTerminalSchema,"initial-values":e.initialValues,onSubmit:e.activeTerminal},{fields:(0,l.w5)((({values:t,errors:a})=>[(0,l.Wm)(c,{label:"ID терміналу",error:a.id},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:t.id,"onUpdate:modelValue":e=>t.id=e,name:"id",type:"text",placeholder:"Введіть id термінала"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),e.showTerminalName?((0,l.wg)(),(0,l.j4)(c,{key:0,label:"Назва терміналу"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:t.name,"onUpdate:modelValue":e=>t.name=e,name:"name",type:"text",placeholder:"Введіть назву термінала"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):(0,l.kq)("",!0),(0,l._)("div",d,[(0,l.Wm)(c,null,{hint:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("У всіх нових терміналах буде дозволена робота в режимі offline")),1)])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"is_default_offline",modelValue:t.is_default_offline,"onUpdate:modelValue":e=>t.is_default_offline=e,label:"Оффлайн"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)]),(0,l.Wm)(c,{label:"Максимальна сума для оффлайн платежу"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:t.max_offline_sum,"onUpdate:modelValue":e=>t.max_offline_sum=e,name:"max_offline_sum",type:"number",placeholder:"Введіть максимальну суму для оффлайн платежу"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.Wm)(_,{modelValue:t.allocation_type,"onUpdate:modelValue":e=>t.allocation_type=e},null,8,["modelValue","onUpdate:modelValue"]),"1"===t.allocation_type?((0,l.wg)(),(0,l.j4)(c,{key:1,label:"Ідентифікатор ПТКС",error:a.ptks_num},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:t.ptks_num,"onUpdate:modelValue":e=>t.ptks_num=e,name:"ptks_num",type:"number",placeholder:"Введіть ідентифікатор ПТКС"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"])):(0,l.kq)("",!0),(0,l.Wm)(c,{label:"Secret Key (підпис HmacSHA256)",error:a.secret_key},{hint:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Потрібне для підпису запитів зі сторони клієнтів (наприклад запит статусу транзакції)")),1)])),default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"secrey_key",modelValue:t.secret_key,"onUpdate:modelValue":e=>t.secret_key=e,hasGenerateButton:!0,placeholder:"Введіть або згенеруйте"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,l.Wm)(f,null,{title:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Ви можете отримувати результати транзакцій на свій backend. \n Для цього заповніть поля нижче")),1)])),_:1}),(0,l.Wm)(c,{label:"Endpoint для повідомлень про результати транзакцій"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:t.endpoint_result,"onUpdate:modelValue":e=>t.endpoint_result=e,name:"endpoint_result",placeholder:"Наприклад, https://example.com/callback"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.Wm)(c,{label:"GET параметри для передачі"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:t.add_get,"onUpdate:modelValue":e=>t.add_get=e,name:"add_get",placeholder:"Наприклад, ?param_name=param_value"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.Wm)(c,{label:"Headers запиту"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{modelValue:t.headers,"onUpdate:modelValue":e=>t.headers=e,name:"headers",placeholder:"Наприклад, Content-type: application/json; Host:example.it"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.Wm)(g,{modelValue:t.payload,"onUpdate:modelValue":e=>t.payload=e},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Wm)(V,{modelValue:t.sign_stract,"onUpdate:modelValue":e=>t.sign_stract=e},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Wm)(w,{modelValue:t.req_type,"onUpdate:modelValue":e=>t.req_type=e,label:"Тип запиту зворотного виклику"},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Wm)(b,{label:"Тип зворотного виклику",modelValue:t.callback_req_type,"onUpdate:modelValue":e=>t.callback_req_type=e,error:a.callback_req_type},null,8,["modelValue","onUpdate:modelValue","error"]),(0,l.Wm)(c,{label:"Час очікування картки, в секундах"},{hint:(0,l.w5)((()=>[(0,l.Uk)(" Час, який термінал очікує, що клієнт прикладе платіжний пристрій ")])),default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:t.card_wait,"onUpdate:modelValue":e=>t.card_wait=e,name:"card_wait",placeholder:"Наприклад, 30",type:"number"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l._)("div",s,[(0,l.Wm)(c,null,{hint:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Робота на терміналі не почнеться, якщо не буде користувач не проведе авторизацію по відкриттю зміни")),1)])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{modelValue:t.need_shift,"onUpdate:modelValue":e=>t.need_shift=e,name:"need_shift",label:"Необхідне відкриття зміни"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)]),(0,l.Wm)(c,{label:"Час синхронізації, в секундах"},{hint:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Як часто термінал буде виходити на зв’язок з сервером для передачі та отримання даних")),1)])),default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:t.sync_period,"onUpdate:modelValue":e=>t.sync_period=e,name:"sync_period",placeholder:"Наприклад, 30",type:"number"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.Wm)(c,{label:"Додаткова інформація"},{hint:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Будь-які додаткові дані, які необхідні для роботи або інтеграції з іншими додатками, наприклад, токен для авторизації на сторонньому сервері. Їх можна отримувати на самому терміналі запитом /Config/get")),1)])),default:(0,l.w5)((()=>[(0,l.Wm)(y,{modelValue:t.add_data,"onUpdate:modelValue":e=>t.add_data=e,maxLength:1500,placeholder:"Введіть додадкову інформацію"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l._)("div",{class:(0,n.C_)(["form-actions",{"form-actions--fixed":e.actionsFixed}])},[(0,l.Wm)(E,{rule:e.Rules.ADD_TERMINAL},{content:(0,l.w5)((({canRender:t})=>[(0,l.Wm)(v,{type:"submit",loading:e.loading,fixed:"",disabled:!t},{text:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$t("Активувати термінал")),1)])),_:2},1032,["loading","disabled"])])),_:1},8,["rule"])],2)])),_:1},8,["schema","initial-values","onSubmit"])])):(0,l.kq)("",!0)}var m=a(4677),c=a(4560),p=a(2619),_=a(2729),h=a(6686),f=a(999),y=a(5449),g=a(4610),V=a(6931),w=a(8482),b=a(3377),v=a(4795),E=a(6235),U=a(2375),R=a(5384),k=a(5375),Z=a(4887),D=a(5577);const I={id:"",name:"",secret_key:"",max_offline_sum:0,is_default_offline:!1,is_for_all_card:!0,can_user_add_card:!1,endpoint_result:"",add_get:"",headers:"",payload:"",sign_stract:"",card_wait:30,req_type:"",need_shift:!1,sync_period:30,add_data:"",callback_req_type:"",allocation_type:"",ptks_num:""};var $=(0,l.aZ)({inject:["rules"],props:{actionsFixed:{type:Boolean,required:!1,default:!1},showTerminalName:{type:Boolean,required:!1,default:!1},configData:{type:Object,required:!1,default(){return I}},isActivateForm:{type:Boolean,required:!1,default:!1}},components:{FormField:c.Z,InputField:p.Z,CheckboxField:_.Z,TextareaField:h.Z,RequestTypeSelect:Z.Z,RequestMethodSelect:k.Z,PayloadField:f.Z,VButton:g.Z,SignStractField:y.Z,VForm:V.Z,FormTitle:b.Z,PasswordField:v.Z,VProtected:w.Z,AllocTypeField:E.Z},setup(){const e=(0,m.pm)();return{toast:e,activateTerminalSchema:U.oh,Rules:D.i}},data(){return{canEdit:!1,canEditId:!1,initialValues:this.configData}},mounted(){const e=this.$route.query.id;this.initialValues={...this.$props.configData,id:e},this.canEdit=Boolean(null!==this.rules),this.canEditId=Boolean(e?.length)},watch:{configData(e){this.initialValues={...this.initialValues,...e}}},computed:{loading(){return this.$store.state.terminals.formLoading}},methods:{activeTerminal(e){this.$store.dispatch(R.T.ACTIVATE_TERMINAL,{terminalConfig:e,toast:this.toast})}}}),q=a(89);const F=(0,q.Z)($,[["render",u]]);var W=F,S=a(7863),x=(0,l.aZ)({inject:["rules"],components:{AppLayout:i.Z,AppLoading:S.Z,OfflineTerminalForm:W},data(){return{canEdit:!1}},computed:{loading(){return this.$store.state.terminals.loading},configData(){return this.$store.state.terminals.terminalConfig}},async mounted(){this.canEdit=Boolean(null!==this.rules),this.$store.dispatch(R.T.GET_TERMINALS_REF),this.$store.dispatch(R.T.GET_TERMINAL_CONFIG,{alloc_type:""})}});const T=(0,q.Z)(x,[["render",o]]);var L=T}}]);
//# sourceMappingURL=9484.a488ce19.js.map