import{_ as d,r as _,G as m,A as l,b as u,e as p,k as g,P as f,l as h,c,f as e,g as v,h as k,v as y,F as x,u as B,o as n,y as b,K as S,p as w,i as I,D as P}from"./index.d2641df4.js";const j={setup(){const o=_({});return m(()=>{l.googleBooks=[]}),u(()=>{window.scrollTo(0,0)}),{editable:o,googleBooks:p(()=>l.googleBooks),async searchBooks(){try{let s=o.value;await g.searchBooks(s)}catch(s){f.error(s.message),h.error(s)}}}}},r=o=>(w("data-v-aa5fc107"),o=o(),I(),o),D={class:"container-fluid bg-custom-success"},M={class:"row"},V={class:"col-12 mt-2 d-flex flex-row justify-content-center justify-content-sm-end"},q=r(()=>e("div",null,[e("button",{class:"btn bg-danger",type:"submit"},[e("i",{class:"mdi mdi-magnify"})])],-1)),A={class:"col-6 col-md-4"},C={class:"my-3"},F={class:"card"},N=["src","alt","title"],R={key:1,class:"col-12 d-flex flex-row justify-content-center align-items-center mt-5 text-dark"},T=r(()=>e("div",null,[e("h1",null,"Search Something"),e("p",{class:"text-center"},[e("i",{class:"mdi mdi-magnify mdi-spin fs-1"})])],-1)),U=[T];function E(o,s,G,a,K,L){const i=P("router-link");return n(),c("div",D,[e("div",M,[e("div",V,[e("form",{onSubmit:s[1]||(s[1]=v(t=>a.searchBooks(),["prevent"])),class:"d-flex"},[e("div",null,[k(e("input",{"p-3":"","onUpdate:modelValue":s[0]||(s[0]=t=>a.editable.query=t),type:"text",class:"form-control",placeholder:"Search"},null,512),[[y,a.editable.query]])]),q],32)]),a.googleBooks[0]?(n(!0),c(x,{key:0},B(a.googleBooks,t=>(n(),c("div",A,[e("div",C,[b(i,{to:{name:"Book",params:{isbn:t.isbn}}},{default:S(()=>[e("div",F,[e("img",{src:t.coverImg,alt:t.title,class:"bookImg",title:t.title},null,8,N)])]),_:2},1032,["to"])])]))),256)):(n(),c("div",R,U))])])}const H=d(j,[["render",E],["__scopeId","data-v-aa5fc107"]]);export{H as default};
