"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[746],{8746:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(6907),a=n(9439),c=n(2791),s=n(9434),i=n(188),l=n(3329),u=function(){var t=(0,c.useState)(""),e=(0,a.Z)(t,2),n=e[0],r=e[1],u=(0,c.useState)(""),o=(0,a.Z)(u,2),m=o[0],d=o[1],f=(0,s.I0)();return(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f((0,i.uK)({name:n,number:m})),r(""),d("")},children:[(0,l.jsxs)("label",{children:["Name",(0,l.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)}})]}),(0,l.jsxs)("label",{children:["Number",(0,l.jsx)("input",{type:"tel",value:m,onChange:function(t){return d(t.target.value)}})]}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})},o=function(t){var e;return(null===(e=t.contacts)||void 0===e?void 0:e.items)||[]},m=function(t){return t.filter||""},d={contactItem:"ContactList_contactItem__ppNQ5",contactListItemBtn:"ContactList_contactListItemBtn__TXYnT"},f=function(t){var e=t.contact,n=(0,s.I0)();return(0,l.jsxs)("div",{children:[(0,l.jsxs)("span",{children:[e.name,": ",(0,l.jsx)("span",{children:e.number})]}),(0,l.jsx)("button",{type:"button",className:d.contactListItemBtn,onClick:function(){return n((0,i.GK)(e.id))},children:"delete"})]})},h=function(){var t=(0,s.v9)(o),e=(0,s.v9)(m);if(!t)return null;var n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,l.jsx)("div",{className:d.wraperContactList,children:(0,l.jsx)("ul",{className:d.contactList,children:n.map((function(t){return(0,l.jsx)("li",{className:d.contactListItem,children:(0,l.jsx)(f,{contact:t})},t.id)}))})})},x="Filter_filterLabel__+pnW-",j="Filter_filterName__Y2kKA",p=n(7886),v=function(){var t=(0,s.I0)();return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:x,children:"Find contacts by Name "}),(0,l.jsx)("input",{className:j,type:"text",placeholder:"Enter name",onChange:function(e){e.preventDefault();var n=e.target.value;t((0,p.T)(n))},name:"name",autoComplete:"off"})]})};var b=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(r.B6,{children:[(0,l.jsx)(r.ql,{children:(0,l.jsx)("title",{children:"Phonebook\ud83d\udcf1"})}),(0,l.jsx)(u,{}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(v,{}),(0,l.jsx)(h,{})]})})}}}]);
//# sourceMappingURL=746.cf7eb3fe.chunk.js.map