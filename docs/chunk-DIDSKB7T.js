import{S as n,ba as c,ea as p,ga as m,ha as d,ia as f,ja as s,ka as a,qa as u,ua as C,va as _,y as l,za as x}from"./chunk-IVXWDJCI.js";function v(e,t){if(e&1&&(s(0,"li"),C(1),a()),e&2){let o=t.$implicit;n(),_(o)}}function y(e,t){if(e&1&&(s(0,"ul",1),d(1,v,2,1,"li",null,m),a()),e&2){let o=u();n(),f(o.errorList)}}var E=(()=>{let t=class t{constructor(){this.errorList=[]}set errors(i){this.errorList=i?Object.keys(i.errors||{}).map(r=>`${r} ${i.errors[r]}`):[]}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=l({type:t,selectors:[["app-list-errors"]],inputs:{errors:"errors"},standalone:!0,features:[x],decls:1,vars:1,consts:[["class","error-messages"],[1,"error-messages"]],template:function(r,g){r&1&&c(0,y,3,0,"ul",0),r&2&&p(0,g.errorList?0:-1)},encapsulation:2});let e=t;return e})();export{E as a};
