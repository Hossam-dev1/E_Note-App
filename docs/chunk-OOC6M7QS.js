import{a as E}from"./chunk-EJ5B3IGY.js";import{a as F}from"./chunk-OY2JLTLI.js";import"./chunk-2THVLUZ7.js";import"./chunk-ZYTFNW7I.js";import{Ba as I,F as v,K as h,Ka as L,L as m,S as l,Sa as b,T as d,Z as y,_a as T,ba as C,ca as c,eb as j,fb as x,j as u,ja as o,ka as r,la as f,pa as A,t as p,ua as a,wa as S,y as g,za as k}from"./chunk-IVXWDJCI.js";import"./chunk-OLEEAF3F.js";var D=(()=>{let t=class t{constructor(e){this.http=e}getAll(){return this.http.get("/tags").pipe(u(e=>e.tags))}};t.\u0275fac=function(n){return new(n||t)(h(b))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function _(i,t){i&1&&(o(0,"div",13)(1,"div",14)(2,"h1",15),a(3,"conduit"),r(),o(4,"p"),a(5,"A place to share your "),o(6,"i"),a(7,"Angular"),r(),a(8," knowledge."),r()()())}var w=i=>({active:i}),X=(()=>{let t=class t{constructor(e,n){this.router=e,this.userService=n,this.isAuthenticated=!1,this.listConfig={type:"all",filters:{}},this.tags$=m(D).getAll().pipe(p(()=>this.tagsLoaded=!0)),this.tagsLoaded=!1,this.destroyRef=m(y)}ngOnInit(){this.userService.isAuthenticated.pipe(p(e=>{e?this.setListTo("feed"):this.setListTo("all")}),x(this.destroyRef)).subscribe(e=>this.isAuthenticated=e)}setListTo(e="",n={}){if(e==="feed"&&!this.isAuthenticated){this.router.navigate(["/login"]);return}this.listConfig={type:e,filters:n}}};t.\u0275fac=function(n){return new(n||t)(d(T),d(j))},t.\u0275cmp=g({type:t,selectors:[["app-home-page"]],standalone:!0,features:[k],decls:15,vars:8,consts:[[1,"home-page"],["class","banner",4,"ifAuthenticated"],[1,"container","page"],[1,"row"],[1,"col-md-9"],[1,"feed-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],[1,"nav-link",3,"ngClass","click"],[1,"nav-item",3,"hidden"],[1,"nav-link","active"],[1,"ion-pound"],[3,"limit","config"],[1,"banner"],[1,"container"],[1,"logo-font"]],template:function(n,s){n&1&&(o(0,"div",0),C(1,_,9,0,"div",1),o(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"ul",6)(7,"li",7)(8,"a",8),A("click",function(){return s.setListTo("all")}),a(9," Global Feed "),r()(),o(10,"li",9)(11,"a",10),f(12,"i",11),a(13),r()()()(),f(14,"app-article-list",12),r()()()()),n&2&&(l(),c("ifAuthenticated",!1),l(7),c("ngClass",I(6,w,s.listConfig.type==="all"&&!s.listConfig.filters.tag)),l(2),c("hidden",!s.listConfig.filters.tag),l(3),S(" ",s.listConfig.filters.tag," "),l(),c("limit",50)("config",s.listConfig))},dependencies:[L,F,E],styles:[".nav-link[_ngcontent-%COMP%], .tag-pill[_ngcontent-%COMP%]{cursor:pointer}"]});let i=t;return i})();export{X as default};
