import{_ as C,G as x,b as w,e as d,R as B,H as P,c as o,f as e,y as r,K as g,s as i,F as _,u as k,k as A,P as f,m as N,D as u,o as s,A as b,p as T,i as S}from"./index.9680f572.js";const I={setup(){async function a(){try{await A.getNYTBooks()}catch(n){f.error(n,"get NYT books ")}}async function h(){try{await N.getAllClubs()}catch(n){f.error(n)}}return x(()=>{a(),h()}),w(()=>{window.scrollTo(0,0)}),{Books:d(()=>b.Books),clubs:d(()=>b.clubs),account:d(()=>b.account)}},components:{BookCard:B,ClubCard:P}},t=a=>(T("data-v-6aaee578"),a=a(),S(),a),Y={class:"container-fluid"},H={class:"row"},L={class:"col-12 d-sm-block d-md-none homePagePic"},V=t(()=>e("p",{class:"text-light py-5 px-2 fs-3 text-shadow"}," At PageTurn.Book, we offer tools for hosting book clubs and tools for finding book club members. ",-1)),F={key:0},G=t(()=>e("button",{class:"mb-3 btn bg-danger selectable"}," Create a Club ",-1)),z={class:"col-12 d-none d-md-block d-xxl-block LGhomePagePic"},D=t(()=>e("p",{class:"text-light py-5 px-2 fs-3 text-shadow"}," At PageTurn.Book, we offer tools for hosting book clubs and tools for finding book club members. ",-1)),E={key:0},K=t(()=>e("button",{class:"mb-3 btn bg-danger selectable"}," Create a Club ",-1)),M={class:"container-fluid"},O={class:"row"},R={class:"col-12 bg-custom-primary"},U=t(()=>e("h1",{class:"text-center mt-2"}," New & Popular ",-1)),W={key:0,class:"d-flex scroll-x"},j={class:""},q={key:1,class:"bg-custom-warning rounded box-shadow"},J=t(()=>e("p",{class:"p-2"}," We're sorry, but we're currently experiencing issues loading the latest New York Times bestsellers. Our API can only be pinged 10 times a minute, and we may have reached our limit. Please try again later, and we apologize for any inconvenience this may have caused. ",-1)),Q=[J],X={class:"container-fluid"},Z={class:"row"},$={class:"col-12 bg-custom-danger"},ee=t(()=>e("h1",{class:"text-center mt-2"},"Let's get clubbin'!",-1)),oe={class:"d-flex align-items-center scroll-x mb-3"},se={key:0};function te(a,h,n,c,ae,ce){var p;const m=u("router-link"),v=u("BookCard"),y=u("ClubCard");return s(),o(_,null,[e("div",Y,[e("div",H,[e("div",L,[V,c.account.id?(s(),o("div",F,[r(m,{class:"selectable",to:{name:"CreateClub"}},{default:g(()=>[G]),_:1})])):i("",!0)]),e("div",z,[D,c.account.id?(s(),o("div",E,[r(m,{class:"selectable",to:{name:"CreateClub"}},{default:g(()=>[K]),_:1})])):i("",!0)])])]),e("div",M,[e("div",O,[e("div",R,[U,((p=c.Books)==null?void 0:p.length)>0?(s(),o("div",W,[(s(!0),o(_,null,k(c.Books,l=>(s(),o("div",j,[r(v,{book:l},null,8,["book"])]))),256))])):(s(),o("div",q,Q))])])]),e("div",X,[e("div",Z,[e("div",$,[ee,e("div",oe,[(s(!0),o(_,null,k(c.clubs,l=>(s(),o("div",null,[l.isArchived?i("",!0):(s(),o("div",se,[r(y,{club:l},null,8,["club"])]))]))),256))])])])])],64)}const le=C(I,[["render",te],["__scopeId","data-v-6aaee578"]]);export{le as default};
