"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[747],{8747:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(6907),a=(n(2791),n(9434)),o=n(188),u="NOT_FOUND";var c=function(e,t){return e===t};function i(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?c:r,o=n.maxSize,i=void 0===o?1:o,l=n.resultEqualityCheck,s=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),f=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:u},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(s):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return u}return{get:r,put:function(t,a){r(t)===u&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,s);function m(){var t=f.get(arguments);if(t===u){if(t=e.apply(null,arguments),l){var n=f.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return m.clearCache=function(){return f.clear()},m}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,u=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,f=s.memoizeOptions,m=void 0===f?n:f,p=Array.isArray(m)?m:[m],d=l(r),h=e.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return o=h.apply(null,e)}));return Object.assign(v,{resultFunc:i,memoizedResultFunc:h,dependencies:d,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return a}var f=s(i),m=function(e){return e.contacts.items},p=function(e){return e.filter},d=(f([m,p],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),"ContactForm_form__dhl+T"),h="ContactForm_formLabel__TSwxK",v="ContactForm_formName__9bHzl",y="ContactForm_formNumber__UMrmC",x="ContactForm_formBtn__qZGY3",_=n(3329),b=function(){var e=(0,a.I0)(),t=(0,a.v9)(m);return(0,_.jsxs)("form",{className:d,onSubmit:function(n){n.preventDefault();var r=n.target,a=r.elements.name.value,u=r.elements.number.value;r.reset(),t.find((function(e){return e.name===a}))?alert("".concat(a," is already in contacts")):e((0,o.uK)({name:a,number:u}))},autoComplete:"off",children:[(0,_.jsx)("label",{className:h,children:"Name "}),(0,_.jsx)("input",{className:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0,placeholder:"Enter name"}),(0,_.jsx)("label",{className:h,children:"Number "}),(0,_.jsx)("input",{className:y,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.",required:!0,placeholder:"Enter phone number"}),(0,_.jsx)("button",{className:x,type:"submit",children:"Add contact"})]})},j={contactItem:"ContactList_contactItem__ppNQ5",contactListItemBtn:"ContactList_contactListItemBtn__TXYnT"},C=function(e){var t=e.contact,n=(0,a.I0)();return(0,_.jsxs)("div",{children:[(0,_.jsxs)("span",{children:[t.name,": ",(0,_.jsx)("span",{children:t.number})]}),(0,_.jsx)("button",{type:"button",className:j.contactListItemBtn,onClick:function(){return n((0,o.GK)(t.id))},children:"delete"})]})},N=function(){var e=(0,a.v9)(m),t=(0,a.v9)(p);if(!e)return null;var n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,_.jsx)("div",{className:j.wraperContactList,children:(0,_.jsx)("ul",{className:j.contactList,children:n.map((function(e){return(0,_.jsx)("li",{className:j.contactListItem,children:(0,_.jsx)(C,{contact:e})},e.id)}))})})},g="Filter_filterLabel__+pnW-",w="Filter_filterName__Y2kKA",k=n(7886),L=function(){var e=(0,a.I0)();return(0,_.jsxs)("div",{children:[(0,_.jsx)("label",{className:g,children:"Find contacts by Name "}),(0,_.jsx)("input",{className:w,type:"text",placeholder:"Enter name",onChange:function(t){t.preventDefault();var n=t.target.value;e((0,k.T)(n))},name:"name",autoComplete:"off"})]})};var F=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(r.B6,{children:[(0,_.jsx)(r.ql,{children:(0,_.jsx)("title",{children:"Phonebook"})}),(0,_.jsx)(b,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(L,{}),(0,_.jsx)(N,{})]})})}}}]);
//# sourceMappingURL=747.112ac7a3.chunk.js.map