import{_ as u,r as _,w as p,b as m,d as f,P as b,l as h,e as r,c as g,f as e,t as d,g as v,h as n,v as i,F as w,o as x,A as c,p as y,i as S}from"./index.6eb64899.js";const A={setup(){const a=_({});return p(()=>{c.profile.id&&(a.value={...c.profile})}),m(()=>{window.scrollTo(0,0)}),{editable:a,async editAccount(){try{const o=a.value;await f.editAccount(o)}catch(o){b.error(o.message),h.error(o)}},account:r(()=>c.account),profile:r(()=>c.profile)}}},s=a=>(y("data-v-3e56120e"),a=a(),S(),a),I={class:"about text-center"},P=["src"],B={class:"container-fluid bg-warning container-ht"},U={class:"row"},V={class:"col-12 col-md-6 m-auto mt-5"},q={class:"form-floating mb-2"},D=["placeholder"],k=s(()=>e("label",{for:"floatingInput",class:"form-label"},"Picture",-1)),E={class:"form-floating mb-2"},F=["placeholder"],M=s(()=>e("label",{for:"floatingInput",class:"form-label"},"Name",-1)),N={class:"form-floating mb-2"},T=["placeholder"],C=s(()=>e("label",{for:"floatingInput",class:"form-label"},"Bio",-1)),W=s(()=>e("button",{class:"btn bg-danger mb-4",type:"submit"},"Save Changes",-1));function j(a,o,z,t,G,H){return x(),g(w,null,[e("div",I,[e("h1",null,"Welcome "+d(t.account.name),1),e("img",{class:"rounded",src:t.account.picture,alt:""},null,8,P),e("p",null,d(t.account.email),1)]),e("div",B,[e("div",U,[e("div",V,[e("form",{onSubmit:o[3]||(o[3]=v(l=>t.editAccount(),["prevent"]))},[e("div",q,[n(e("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>t.editable.picture=l),placeholder:t.account.picture,required:"",type:"text",class:"form-control",id:"picture"},null,8,D),[[i,t.editable.picture]]),k]),e("div",E,[n(e("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>t.editable.name=l),placeholder:t.account.name,required:"",type:"text",class:"form-control",id:"name"},null,8,F),[[i,t.editable.name]]),M]),e("div",N,[n(e("input",{"onUpdate:modelValue":o[2]||(o[2]=l=>t.editable.bio=l),placeholder:t.account.bio,required:"",type:"text",class:"form-control",id:"bio"},null,8,T),[[i,t.editable.bio]]),C]),W],32)])])])],64)}const K=u(A,[["render",j],["__scopeId","data-v-3e56120e"]]);export{K as default};
