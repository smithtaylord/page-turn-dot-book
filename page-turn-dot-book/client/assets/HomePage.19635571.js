import{_ as C,G as x,b as w,e as d,Q as B,H as P,c as e,f as o,y as r,J as g,s as i,F as _,u as k,k as A,P as f,m as N,D as u,o as s,A as b,p as T,i as S}from"./index.a1ed7502.js";const I={setup(){async function c(){try{await A.getNYTBooks()}catch(n){f.error(n,"get NYT books ")}}async function h(){try{await N.getAllClubs()}catch(n){f.error(n)}}return x(()=>{c(),h()}),w(()=>{window.scrollTo(0,0)}),{Books:d(()=>b.Books),clubs:d(()=>b.clubs),account:d(()=>b.account)}},components:{BookCard:B,ClubCard:P}},t=c=>(T("data-v-3b308439"),c=c(),S(),c),Y={class:"container-fluid"},H={class:"row"},L={class:"col-12 d-sm-block d-md-none homePagePic"},V=t(()=>o("p",{class:"text-light py-5 px-2 fs-3 text-shadow"}," At PageTurn.Book, we offer tools for hosting book clubs and tools for finding book club members. ",-1)),F={key:0},G=t(()=>o("button",{class:"mb-3 btn bg-danger selectable"}," Create a Club ",-1)),z={class:"col-12 d-none d-md-block d-xxl-block LGhomePagePic"},D=t(()=>o("p",{class:"text-light py-5 px-2 fs-3 text-shadow"}," At PageTurn.Book, we offer tools for hosting book clubs and tools for finding book club members. ",-1)),E={key:0},J=t(()=>o("button",{class:"mb-3 btn bg-danger selectable"}," Create a Club ",-1)),M={class:"container-fluid"},O={class:"row"},Q={class:"col-12 bg-custom-primary"},U=t(()=>o("h1",{class:"text-center mt-2"}," New & Popular ",-1)),W={key:0,class:"d-flex scroll-x"},j={class:""},q={key:1,class:"bg-custom-warning rounded box-shadow"},K=t(()=>o("p",{class:"p-2"}," We're sorry, but we're currently experiencing issues loading the latest New York Times bestsellers. Our API can only be pinged 10 times a minute, and we may have reached our limit. Please try again later, and we apologize for any inconvenience this may have caused. ",-1)),R=[K],X={class:"container-fluid"},Z={class:"row"},$={class:"col-12 bg-custom-danger"},oo=t(()=>o("h1",{class:"text-center mt-2 pt-3"},"Let's get clubbin'!",-1)),eo={class:"d-flex align-items-center scroll-x mb-3"},so={key:0};function to(c,h,n,a,co,ao){var p;const m=u("router-link"),v=u("BookCard"),y=u("ClubCard");return s(),e(_,null,[o("div",Y,[o("div",H,[o("div",L,[V,a.account.id?(s(),e("div",F,[r(m,{class:"selectable",to:{name:"CreateClub"}},{default:g(()=>[G]),_:1})])):i("",!0)]),o("div",z,[D,a.account.id?(s(),e("div",E,[r(m,{class:"selectable",to:{name:"CreateClub"}},{default:g(()=>[J]),_:1})])):i("",!0)])])]),o("div",M,[o("div",O,[o("div",Q,[U,((p=a.Books)==null?void 0:p.length)>0?(s(),e("div",W,[(s(!0),e(_,null,k(a.Books,l=>(s(),e("div",j,[r(v,{book:l},null,8,["book"])]))),256))])):(s(),e("div",q,R))])])]),o("div",X,[o("div",Z,[o("div",$,[oo,o("div",eo,[(s(!0),e(_,null,k(a.clubs,l=>(s(),e("div",null,[l.isArchived?i("",!0):(s(),e("div",so,[r(y,{club:l},null,8,["club"])]))]))),256))])])])])],64)}const lo=C(I,[["render",to],["__scopeId","data-v-3b308439"]]);export{lo as default};
