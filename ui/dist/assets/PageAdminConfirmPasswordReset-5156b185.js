import{S as E,i as G,s as I,F as K,c as R,m as A,t as B,a as N,d as T,C as M,q as J,e as _,w as P,b as k,f,r as L,g as b,h as c,u as j,v as O,j as Q,l as U,o as w,A as V,p as W,B as X,D as Y,x as Z,z as q}from"./index-7d8498e9.js";function y(i){let e,n,s;return{c(){e=P("for "),n=_("strong"),s=P(i[3]),f(n,"class","txt-nowrap")},m(l,t){b(l,e,t),b(l,n,t),c(n,s)},p(l,t){t&8&&Z(s,l[3])},d(l){l&&(w(e),w(n))}}}function x(i){let e,n,s,l,t,u,p,d;return{c(){e=_("label"),n=P("New password"),l=k(),t=_("input"),f(e,"for",s=i[8]),f(t,"type","password"),f(t,"id",u=i[8]),t.required=!0,t.autofocus=!0},m(r,a){b(r,e,a),c(e,n),b(r,l,a),b(r,t,a),q(t,i[0]),t.focus(),p||(d=j(t,"input",i[6]),p=!0)},p(r,a){a&256&&s!==(s=r[8])&&f(e,"for",s),a&256&&u!==(u=r[8])&&f(t,"id",u),a&1&&t.value!==r[0]&&q(t,r[0])},d(r){r&&(w(e),w(l),w(t)),p=!1,d()}}}function ee(i){let e,n,s,l,t,u,p,d;return{c(){e=_("label"),n=P("New password confirm"),l=k(),t=_("input"),f(e,"for",s=i[8]),f(t,"type","password"),f(t,"id",u=i[8]),t.required=!0},m(r,a){b(r,e,a),c(e,n),b(r,l,a),b(r,t,a),q(t,i[1]),p||(d=j(t,"input",i[7]),p=!0)},p(r,a){a&256&&s!==(s=r[8])&&f(e,"for",s),a&256&&u!==(u=r[8])&&f(t,"id",u),a&2&&t.value!==r[1]&&q(t,r[1])},d(r){r&&(w(e),w(l),w(t)),p=!1,d()}}}function te(i){let e,n,s,l,t,u,p,d,r,a,g,S,C,v,h,F,z,m=i[3]&&y(i);return u=new J({props:{class:"form-field required",name:"password",$$slots:{default:[x,({uniqueId:o})=>({8:o}),({uniqueId:o})=>o?256:0]},$$scope:{ctx:i}}}),d=new J({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[ee,({uniqueId:o})=>({8:o}),({uniqueId:o})=>o?256:0]},$$scope:{ctx:i}}}),{c(){e=_("form"),n=_("div"),s=_("h4"),l=P(`Reset your admin password
                `),m&&m.c(),t=k(),R(u.$$.fragment),p=k(),R(d.$$.fragment),r=k(),a=_("button"),g=_("span"),g.textContent="Set new password",S=k(),C=_("div"),v=_("a"),v.textContent="Back to login",f(s,"class","m-b-xs"),f(n,"class","content txt-center m-b-sm"),f(g,"class","txt"),f(a,"type","submit"),f(a,"class","btn btn-lg btn-block"),a.disabled=i[2],L(a,"btn-loading",i[2]),f(e,"class","m-b-base"),f(v,"href","/login"),f(v,"class","link-hint"),f(C,"class","content txt-center")},m(o,$){b(o,e,$),c(e,n),c(n,s),c(s,l),m&&m.m(s,null),c(e,t),A(u,e,null),c(e,p),A(d,e,null),c(e,r),c(e,a),c(a,g),b(o,S,$),b(o,C,$),c(C,v),h=!0,F||(z=[j(e,"submit",O(i[4])),Q(U.call(null,v))],F=!0)},p(o,$){o[3]?m?m.p(o,$):(m=y(o),m.c(),m.m(s,null)):m&&(m.d(1),m=null);const D={};$&769&&(D.$$scope={dirty:$,ctx:o}),u.$set(D);const H={};$&770&&(H.$$scope={dirty:$,ctx:o}),d.$set(H),(!h||$&4)&&(a.disabled=o[2]),(!h||$&4)&&L(a,"btn-loading",o[2])},i(o){h||(B(u.$$.fragment,o),B(d.$$.fragment,o),h=!0)},o(o){N(u.$$.fragment,o),N(d.$$.fragment,o),h=!1},d(o){o&&(w(e),w(S),w(C)),m&&m.d(),T(u),T(d),F=!1,V(z)}}}function se(i){let e,n;return e=new K({props:{$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},m(s,l){A(e,s,l),n=!0},p(s,[l]){const t={};l&527&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){T(e,s)}}}function le(i,e,n){let s,{params:l}=e,t="",u="",p=!1;async function d(){if(!p){n(2,p=!0);try{await W.admins.confirmPasswordReset(l==null?void 0:l.token,t,u),X("Successfully set a new admin password."),Y("/")}catch(g){W.error(g)}n(2,p=!1)}}function r(){t=this.value,n(0,t)}function a(){u=this.value,n(1,u)}return i.$$set=g=>{"params"in g&&n(5,l=g.params)},i.$$.update=()=>{i.$$.dirty&32&&n(3,s=M.getJWTPayload(l==null?void 0:l.token).email||"")},[t,u,p,s,d,l,r,a]}class ae extends E{constructor(e){super(),G(this,e,le,se,I,{params:5})}}export{ae as default};
