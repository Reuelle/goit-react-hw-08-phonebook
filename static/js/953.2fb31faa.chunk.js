"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953],{5953:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var r=n(6907),a=(n(2791),n(9434)),u=n(8416),o="NOT_FOUND";var c=function(t,e){return t===e};function i(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?c:r,u=n.maxSize,i=void 0===u?1:u,s=n.resultEqualityCheck,l=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),f=1===i?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:o},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(e,a){r(e)===o&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,l);function m(){var e=f.get(arguments);if(e===o){if(e=t.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(t){return s(t.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return m.clearCache=function(){return f.clear()},m}function s(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function l(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var u,o=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var l=c,f=l.memoizeOptions,m=void 0===f?n:f,p=Array.isArray(m)?m:[m],d=s(r),h=t.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(p)),v=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return u=h.apply(null,t)}));return Object.assign(v,{resultFunc:i,memoizedResultFunc:h,dependencies:d,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return a}var f=l(i),m=function(t){return t.contacts.items},p=function(t){return t.filter},d=(f([m,p],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),"ContactForm_form__dhl+T"),h="ContactForm_formLabel__TSwxK",v="ContactForm_formName__9bHzl",y="ContactForm_formNumber__UMrmC",x="ContactForm_formBtn__qZGY3",b=n(3329),j=function(){var t=(0,a.I0)(),e=(0,a.v9)(m);return(0,b.jsxs)("form",{className:d,onSubmit:function(n){n.preventDefault();var r=n.target,a=r.elements.name.value,o=r.elements.number.value;r.reset(),e.find((function(t){return t.name===a}))?alert("".concat(a," is already in contacts")):t((0,u.uK)({name:a,number:o}))},autoComplete:"off",children:[(0,b.jsx)("label",{className:h,children:"Name "}),(0,b.jsx)("input",{className:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0,placeholder:"Enter name"}),(0,b.jsx)("label",{className:h,children:"Number "}),(0,b.jsx)("input",{className:y,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.",required:!0,placeholder:"Enter phone number"}),(0,b.jsx)("button",{className:x,type:"submit",children:"Add contact"})]})},_={contactItem:"ContactList_contactItem__ppNQ5",contactListItemBtn:"ContactList_contactListItemBtn__TXYnT"},C=function(t){var e=t.contact,n=(0,a.I0)();return(0,b.jsxs)("div",{children:[(0,b.jsxs)("span",{children:[e.name,": ",(0,b.jsx)("span",{children:e.number})]}),(0,b.jsx)("button",{type:"button",className:_.contactListItemBtn,onClick:function(){return n((0,u.GK)(e.id))},children:"delete"})]})},g=function(){var t=(0,a.v9)(m),e=(0,a.v9)(p);if(!t)return null;var n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,b.jsx)("div",{className:_.wraperContactList,children:(0,b.jsx)("ul",{className:_.contactList,children:n.map((function(t){return(0,b.jsx)("li",{className:_.contactListItem,children:(0,b.jsx)(C,{contact:t})},t.id)}))})})},w=n(7886);var N=function(){var t=(0,a.I0)(),e=(0,a.v9)(p);return(0,a.v9)(m).length<1?(0,b.jsx)("h2",{children:"Add your first contact"}):(0,b.jsx)("input",{type:"text",name:"filter",placeholder:"Search by name",value:e,onChange:function(e){t((0,w.T)(e.target.value.trim()))}})};var k=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(r.B6,{children:[(0,b.jsx)(r.ql,{children:(0,b.jsx)("title",{children:"Phonebook\ud83d\udcf1"})}),(0,b.jsx)(j,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(N,{}),(0,b.jsx)(g,{})]})})}}}]);
//# sourceMappingURL=953.2fb31faa.chunk.js.map