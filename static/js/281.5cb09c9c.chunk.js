"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[281],{8320:function(e,t,a){var n=a(8935),r=a(9410),l=a(7689),o=a(9434),i=a(2119),c=a(2664),s=a(184);t.Z=function(){var e=(0,l.s0)(),t=(0,o.v9)(i.JS),a=(0,o.I0)();return(0,s.jsx)("div",{className:"loading-container",children:(0,s.jsx)(n.ZP,{status:"404",title:"ERROR",subTitle:t,extra:(0,s.jsx)(r.ZP,{type:"primary",onClick:function(){a((0,c.q$)()),e(-1)},children:"Go Back"})})})}},6172:function(e,t,a){var n=a(1965),r=a(184);t.Z=function(){return(0,r.jsx)("div",{className:"loading-container",children:(0,r.jsx)(n.ko,{height:"120",width:"120",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#F4442E",barColor:"#51E5FF"})})}},2281:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var n=a(2791),r=a(9434),l=a(2119),o=a(7209),i=a(184),c=function(){var e=(0,r.v9)(l.Af),t=(0,r.I0)(),a=(0,n.useRef)(),c=(0,n.useRef)();return(0,i.jsx)("div",{children:(0,i.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=a.current.value,l=c.current.value;if(!/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' -]?[a-zA-Z\u0430-\u044f\u0410-\u042f ]?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(r)&&r.length>0)alert(a.current.title);else{if(!/^\+?[\d\s-]+$/.test(l)&&l.length>0)alert(c.current.title);else{if(e){var i=e.find((function(e){return e.name===r}));if(i)return void alert("".concat(i.name," is already in contacts"))}var s={name:r,number:l};t((0,o.ky)(s)),n.target.reset()}}},className:"phonebookForm",children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name"}),(0,i.jsx)("input",{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,ref:a}),(0,i.jsx)("label",{htmlFor:"number",children:"Number"}),(0,i.jsx)("input",{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,ref:c}),(0,i.jsx)("button",{type:"submit",children:"Add Contact"})]})})},s=function(e){return e.modal.isOpen},m=function(e){return e.modal.contactName},d=function(e){return e.modal.id},u=function(e){return e.modal.modalFor},h=function(){return{isOpen:(0,r.v9)(s),contactName:(0,r.v9)(m),id:(0,r.v9)(d),modalFor:(0,r.v9)(u)}},p=a(9671),g=a(2381),f=function(){var e=(0,r.I0)(),t=h(),a=t.contactName,n=t.id;return(0,i.jsx)("aside",{className:"modal-container",children:(0,i.jsxs)("div",{className:"modal",children:[(0,i.jsxs)("h4",{children:["Remove the ",a," contact?"]}),(0,i.jsxs)("div",{className:"btn-container",children:[(0,i.jsx)("button",{type:"button",className:"btn confirm-btn",onClick:function(){e((0,o.GK)(n)),e((0,g.Mr)())},children:"confirm"}),(0,i.jsx)("button",{type:"button",className:"btn clear-btn",onClick:function(){e((0,g.Mr)())},children:"cancel"})]})]})})},v=function(){var e=(0,r.I0)(),t=h(),a=t.id,c=t.contactName,s=(0,r.v9)(l.Af).find((function(e){return e.id===a})),m=(0,n.useRef)(),d=(0,n.useRef)();return(0,i.jsx)("aside",{className:"modal-container",children:(0,i.jsxs)("div",{className:"modal",children:[(0,i.jsxs)("h4",{children:["Edit the ",(0,i.jsx)("span",{className:"edit-name",children:c})," contact"]}),(0,i.jsxs)("form",{className:"phonebookForm",children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name"}),(0,i.jsx)("input",{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,ref:m,defaultValue:s.name?s.name:"unknown"}),(0,i.jsx)("label",{htmlFor:"number",children:"Number"}),(0,i.jsx)("input",{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,ref:d,defaultValue:s.number?s.number:"unknown"}),(0,i.jsxs)("div",{className:"btn-container",children:[(0,i.jsx)("button",{type:"button",className:"btn confirm-btn",onClick:function(){var t=m.current.value,n=d.current.value;if(!/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' -]?[a-zA-Z\u0430-\u044f\u0410-\u042f ]?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(t)&&t.length>0)alert(m.current.title);else{if(!/^\+?[\d\s-]+$/.test(n)&&n.length>0)alert(d.current.title);else{var r={name:t,number:n};e((0,o.mP)({id:a,contact:r})),e((0,g.Mr)())}}},children:"edit"}),(0,i.jsx)("button",{type:"button",className:"btn clear-btn",style:{backgroundColor:"#8b0000"},onClick:function(){e((0,g.Mr)())},children:"cancel"})]})]})]})})},x=a(2664),b=function(){var e=(0,r.I0)(),t=(0,r.v9)(l.AD);return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Find contacts by name"}),(0,i.jsx)("input",{className:"filter-input",type:"text",name:"searchName",title:"Type the contact you want to find",value:t,onChange:function(t){var a=t.target.value.trim();e((0,x.KJ)({typedName:a}))}})]})},y=a(9439),C=a(3853),j=a(8820),N=a(4942),E=a(1694),w=a.n(E),S=a(1929),k=a(6661),P=a(9391),$=a(4007);var F=function(){var e=(0,$.Z)(),t=(0,y.Z)(e,2)[1],a=new P.C(t.colorBgBase).toHsl().l<.5?{opacity:.65}:{};return n.createElement("svg",{style:a,width:"184",height:"152",viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(24 31.67)"},n.createElement("ellipse",{fillOpacity:".8",fill:"#F5F5F7",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),n.createElement("path",{d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",fill:"#AEB8C2"}),n.createElement("path",{d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",fill:"url(#linearGradient-1)",transform:"translate(13.56)"}),n.createElement("path",{d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",fill:"#F5F5F7"}),n.createElement("path",{d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",fill:"#DCE0E6"})),n.createElement("path",{d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",fill:"#DCE0E6"}),n.createElement("g",{transform:"translate(149.65 15.383)",fill:"#FFF"},n.createElement("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),n.createElement("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}))))};var M=function(){var e=(0,$.Z)(),t=(0,y.Z)(e,2)[1],a=t.colorFill,r=t.colorFillTertiary,l=t.colorFillQuaternary,o=t.colorBgContainer,i=(0,n.useMemo)((function(){return{borderColor:new P.C(a).onBackground(o).toHexShortString(),shadowColor:new P.C(r).onBackground(o).toHexShortString(),contentColor:new P.C(l).onBackground(o).toHexShortString()}}),[a,r,l,o]),c=i.borderColor,s=i.shadowColor,m=i.contentColor;return n.createElement("svg",{width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},n.createElement("ellipse",{fill:s,cx:"32",cy:"33",rx:"32",ry:"7"}),n.createElement("g",{fillRule:"nonzero",stroke:c},n.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),n.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:m}))))},Z=a(653),A=a(9922),T=function(e){var t,a,n=e.componentCls,r=e.margin,l=e.marginXS,o=e.marginXL,i=e.fontSize,c=e.lineHeight;return(0,N.Z)({},n,(a={marginInline:l,fontSize:i,lineHeight:c,textAlign:"center"},(0,N.Z)(a,"".concat(n,"-image"),{height:e.emptyImgHeight,marginBottom:l,opacity:e.opacityImage,img:{height:"100%"},svg:{maxWidth:"100%",height:"100%",margin:"auto"}}),(0,N.Z)(a,"".concat(n,"-description"),{color:e.colorText}),(0,N.Z)(a,"".concat(n,"-footer"),{marginTop:r}),(0,N.Z)(a,"&-normal",(t={marginBlock:o,color:e.colorTextDisabled},(0,N.Z)(t,"".concat(n,"-description"),{color:e.colorTextDisabled}),(0,N.Z)(t,"".concat(n,"-image"),{height:e.emptyImgHeightMD}),t)),(0,N.Z)(a,"&-small",(0,N.Z)({marginBlock:l,color:e.colorTextDisabled},"".concat(n,"-image"),{height:e.emptyImgHeightSM})),a))},O=(0,Z.Z)("Empty",(function(e){var t=e.componentCls,a=e.controlHeightLG,n=(0,A.TS)(e,{emptyImgCls:"".concat(t,"-img"),emptyImgHeight:2.5*a,emptyImgHeightMD:a,emptyImgHeightSM:.875*a});return[T(n)]})),H=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},I=n.createElement(F,null),z=n.createElement(M,null),_=function(e){var t,a=e.className,r=e.rootClassName,l=e.prefixCls,o=e.image,i=void 0===o?I:o,c=e.description,s=e.children,m=e.imageStyle,d=e.style,u=H(e,["className","rootClassName","prefixCls","image","description","children","imageStyle","style"]),h=n.useContext(S.E_),p=h.getPrefixCls,g=h.direction,f=h.empty,v=p("empty",l),x=O(v),b=(0,y.Z)(x,2),C=b[0],j=b[1],E=(0,k.Z)("Empty"),P=(0,y.Z)(E,1)[0],$="undefined"!==typeof c?c:null===P||void 0===P?void 0:P.description,F="string"===typeof $?$:"empty",M=null;return M="string"===typeof i?n.createElement("img",{alt:F,src:i}):i,C(n.createElement("div",Object.assign({className:w()(j,v,null===f||void 0===f?void 0:f.className,(t={},(0,N.Z)(t,"".concat(v,"-normal"),i===z),(0,N.Z)(t,"".concat(v,"-rtl"),"rtl"===g),t),a,r),style:Object.assign(Object.assign({},null===f||void 0===f?void 0:f.style),d)},u),n.createElement("div",{className:"".concat(v,"-image"),style:m},M),$&&n.createElement("div",{className:"".concat(v,"-description")},$),s&&n.createElement("div",{className:"".concat(v,"-footer")},s)))};_.PRESENTED_IMAGE_DEFAULT=I,_.PRESENTED_IMAGE_SIMPLE=z;var R=_,D=a(9410),L=function(e){var t=e.setCloseNoResult;return(0,i.jsx)(R,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:60},description:(0,i.jsx)("span",{children:"No contact was found. Try something else"}),children:(0,i.jsx)(D.ZP,{type:"primary",onClick:function(){return t(!1)},children:"Ok"})})},Y=function(){var e=(0,r.v9)(l.Af),t=(0,r.v9)(l.AD),a=(0,r.I0)(),o=(0,n.useState)(!0),c=(0,y.Z)(o,2),s=c[0],m=c[1],d=t?function(e,t){var a=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(a)}))}(e,t):e;return t&&t.length>0&&0===d.length&&s?(0,i.jsx)(L,{setCloseNoResult:m}):(0,i.jsxs)("div",{className:"display-contacts",children:[(0,i.jsx)("h2",{children:"Contacts"}),(0,i.jsx)("ul",{className:"contacts-list",children:d.map((function(e){var t=e.id;return(0,i.jsxs)("li",{className:"contact",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)("span",{children:[B(e.name),": "]}),e.number]}),(0,i.jsxs)("div",{className:"btns-container",children:[(0,i.jsx)("button",{type:"button",className:"remove-button",onClick:function(){a((0,g.qh)({id:t})),a((0,g.qC)({name:e.name})),a((0,g.hM)({modalFor:"delete"})),a((0,g.h7)())},children:(0,i.jsx)(j.YK6,{className:"delete-icon"})}),(0,i.jsx)("button",{type:"button",className:"edit-button",onClick:function(){a((0,g.qh)({id:t})),a((0,g.qC)({name:e.name})),a((0,g.hM)({modalFor:"edit"})),a((0,g.h7)())},children:(0,i.jsx)(C.IYd,{className:"delete-icon"})})]})]},t)}))})]})};function B(e){return e.split(/[ -]/).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}var q=a(8320),V=a(6172),U=function(){var e=(0,r.I0)();(0,n.useEffect)((function(){e((0,o.yF)())}),[e]);var t=(0,r.v9)(l.Af),a=(0,r.v9)(l.AD),s=(0,p.n)(),m=s.isError,d=s.isLoading,u=h(),g=u.isOpen,x=u.modalFor;return(0,i.jsxs)("main",{className:"contacts-main",children:[(0,i.jsx)(c,{}),t.length>0&&(0,i.jsx)(Y,{}),t.length>1&&(0,i.jsx)(b,{}),g&&"delete"===x&&(0,i.jsx)(f,{}),g&&"edit"===x&&(0,i.jsx)(v,{}),a&&0===t.length&&0===a.length&&(0,i.jsx)("h3",{children:"Add contacts to be displayed"}),m&&(0,i.jsx)(q.Z,{}),d&&(0,i.jsx)(V.Z,{})]})}},9671:function(e,t,a){a.d(t,{n:function(){return l}});var n=a(9434),r=a(2119),l=function(){return{isError:(0,n.v9)(r.N8),isLoading:(0,n.v9)(r.xU)}}},8915:function(e,t,a){a.d(t,{Z:function(){return i}});var n={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},r={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},l={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},n),timePickerLocale:Object.assign({},r)},o="${label} is not a valid ${type}",i={locale:"en",Pagination:{items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},DatePicker:l,TimePicker:r,Calendar:l,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:o,method:o,array:o,object:o,number:o,date:o,boolean:o,integer:o,float:o,regexp:o,email:o,url:o,hex:o},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}}},6661:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(2791),r=(0,n.createContext)(void 0),l=a(8915),o=function(e,t){var a=n.useContext(r);return[n.useMemo((function(){var n,r=t||l.Z[e],o=null!==(n=null===a||void 0===a?void 0:a[e])&&void 0!==n?n:{};return Object.assign(Object.assign({},"function"===typeof r?r():r),o||{})}),[e,t,a]),n.useMemo((function(){var e=null===a||void 0===a?void 0:a.locale;return(null===a||void 0===a?void 0:a.exist)&&!e?l.Z.locale:e}),[a])]}}}]);
//# sourceMappingURL=281.5cb09c9c.chunk.js.map