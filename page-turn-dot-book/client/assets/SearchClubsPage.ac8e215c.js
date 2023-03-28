import{_ as u,r as b,G as c,b as g,e as C,H as p,c as i,f as n,t as m,F as y,u as v,m as w,P as f,o as s,y as F,A as a,D as h}from"./index.39d1cdcf.js";const k={setup(){const r=b("");async function t(){try{await w.getAllClubs()}catch(l){f.error(l)}}return c(()=>{t()}),g(()=>{window.scrollTo(0,0)}),{filterCategory:r,clubs:C(()=>r.value?a.clubs.filter(l=>l.type==r.value):a.clubs),changeFilterCategory(l){r.value=l}}},components:{ClubCard:p}},S={class:"container-fluid"},x={class:"row"},A={class:"col-12 dropdown text-end mt-2"},B={class:"btn bg-danger dropdown-toggle",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},M={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},N={class:"row"},P={class:"col-md-4 d-flex justify-content-center"};function R(r,t,l,e,_,D){const d=h("ClubCard");return s(),i("div",S,[n("div",x,[n("div",A,[n("button",B," Filter Clubs by Type: "+m(e.filterCategory),1),n("div",M,[n("button",{onClick:t[0]||(t[0]=o=>e.changeFilterCategory("")),class:"dropdown-item",href:"#"},"All"),n("button",{onClick:t[1]||(t[1]=o=>e.changeFilterCategory("casual")),class:"btn btn-outline-light dropdown-item"},"Casual Readers"),n("button",{onClick:t[2]||(t[2]=o=>e.changeFilterCategory("speed")),class:"btn btn-outline-light dropdown-item"},"Speed Readers"),n("button",{onClick:t[3]||(t[3]=o=>e.changeFilterCategory("single cat moms")),class:"btn btn-outline-light dropdown-item"},"Single Cat Moms"),n("button",{onClick:t[4]||(t[4]=o=>e.changeFilterCategory("horror")),class:"btn btn-outline-light dropdown-item"},"Horror"),n("button",{onClick:t[5]||(t[5]=o=>e.changeFilterCategory("series")),class:"btn btn-outline-light dropdown-item"},"Series"),n("button",{onClick:t[6]||(t[6]=o=>e.changeFilterCategory("fantasy")),class:"btn btn-outline-light dropdown-item"},"Fantasy"),n("button",{onClick:t[7]||(t[7]=o=>e.changeFilterCategory("author-based")),class:"btn btn-outline-light dropdown-item"},"Author Based"),n("button",{onClick:t[8]||(t[8]=o=>e.changeFilterCategory("non-fiction")),class:"btn btn-outline-light dropdown-item"},"Non-Fiction"),n("button",{onClick:t[9]||(t[9]=o=>e.changeFilterCategory("elite")),class:"btn btn-outline-light dropdown-item"},"Elite Readers"),n("button",{onClick:t[10]||(t[10]=o=>e.changeFilterCategory("sci-fi")),class:"btn btn-outline-light dropdown-item"},"Sci-Fi")])])]),n("div",N,[(s(!0),i(y,null,v(e.clubs,o=>(s(),i("div",P,[F(d,{club:o},null,8,["club"])]))),256))])])}const H=u(k,[["render",R]]);export{H as default};
