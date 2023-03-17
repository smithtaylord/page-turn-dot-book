import{_ as x,G as y,b as w,e as d,Q as B,H as P,c as e,f as o,y as l,J as p,s as g,F as i,u as k,k as N,P as f,m as A,D as _,o as s,A as u,p as T,i as S}from"./index.621a5639.js";const I={setup(){async function c(){try{await N.getNYTBooks()}catch(n){f.error(n,"get NYT books ")}}async function b(){try{await A.getAllClubs()}catch(n){f.error(n)}}return y(()=>{c(),b()}),w(()=>{window.scrollTo(0,0)}),{Books:d(()=>u.Books),clubs:d(()=>u.clubs),account:d(()=>u.account)}},components:{BookCard:B,ClubCard:P}},t=c=>(T("data-v-2e4abb1b"),c=c(),S(),c),Y={class:"container-fluid"},H={class:"row"},L={class:"col-12 d-sm-block d-md-none homePagePic"},V=t(()=>o("p",{class:"text-light py-5 px-2 fs-3 text-shadow"}," At PageTurn.Book, we offer tools for hosting book clubs and tools for finding book club members. ",-1)),F={key:0},G=t(()=>o("button",{class:"mb-3 btn bg-danger selectable"}," Create a Club ",-1)),z={class:"col-12 d-none d-md-block d-xxl-block LGhomePagePic"},D=t(()=>o("p",{class:"text-light py-5 px-2 fs-3 text-shadow"}," At PageTurn.Book, we offer tools for hosting book clubs and tools for finding book club members. ",-1)),E={key:0},J=t(()=>o("button",{class:"mb-3 btn bg-danger selectable"}," Create a Club ",-1)),M={class:"container-fluid"},O={class:"row"},Q={class:"col-12 bg-custom-primary"},U=t(()=>o("h1",{class:"text-center mt-2"}," New & Popular ",-1)),W={key:0,class:"d-flex scroll-x"},j={class:""},q={key:1,class:"bg-custom-warning rounded box-shadow"},K=t(()=>o("p",{class:"p-2"}," We're sorry, but we're currently experiencing issues loading the latest New York Times bestsellers. Our API can only be pinged 10 times a minute, and we may have reached our limit. Please try again later, and we apologize for any inconvenience this may have caused. ",-1)),R=[K],X={class:"container-fluid"},Z={class:"row"},$={class:"col-12 bg-custom-danger"},oo=t(()=>o("h1",{class:"text-center mt-2"},"Let's get clubbin'!",-1)),eo={class:"d-flex align-items-center scroll-x mb-3"};function so(c,b,n,a,to,co){var m;const h=_("router-link"),v=_("BookCard"),C=_("ClubCard");return s(),e(i,null,[o("div",Y,[o("div",H,[o("div",L,[V,a.account.id?(s(),e("div",F,[l(h,{class:"selectable",to:{name:"CreateClub"}},{default:p(()=>[G]),_:1})])):g("",!0)]),o("div",z,[D,a.account.id?(s(),e("div",E,[l(h,{class:"selectable",to:{name:"CreateClub"}},{default:p(()=>[J]),_:1})])):g("",!0)])])]),o("div",M,[o("div",O,[o("div",Q,[U,((m=a.Books)==null?void 0:m.length)>0?(s(),e("div",W,[(s(!0),e(i,null,k(a.Books,r=>(s(),e("div",j,[l(v,{book:r},null,8,["book"])]))),256))])):(s(),e("div",q,R))])])]),o("div",X,[o("div",Z,[o("div",$,[oo,o("div",eo,[(s(!0),e(i,null,k(a.clubs,r=>(s(),e("div",null,[l(C,{club:r},null,8,["club"])]))),256))])])])])],64)}const no=x(I,[["render",so],["__scopeId","data-v-2e4abb1b"]]);export{no as default};