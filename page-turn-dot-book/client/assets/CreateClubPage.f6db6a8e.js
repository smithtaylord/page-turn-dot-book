import{_ as c,M as d,r as p,m as b,N as u,l as m,P as v,c as f,f as t,g as _,h as r,v as n,O as g,o as y,p as h,i as C,a as I}from"./index.1914105c.js";import{c as S}from"./ClubMembersService.3cb0fe72.js";const x={props:{club:{type:d,required:!0}},setup(){const a=p({});return{editable:a,async createClub(){try{const e=a.value,l=await b.createClub(e);a.value={},await S.createMember({clubId:l.id}),l!=null&&l.id&&u.push({name:"Club",params:{clubId:l.id}})}catch(e){m.error(e),v.error(e.message)}}}}},s=a=>(h("data-v-49c033bc"),a=a(),C(),a),w={class:"container-fluid bg-warning container-ht"},M={class:"row"},V={class:"col-12 col-md-6 m-auto mt-5"},q={class:"form-floating"},B=s(()=>t("label",{for:"floatingInput",class:"form-label"},"Name",-1)),N={class:"form-floating my-3"},U=s(()=>t("label",{for:"floatingInput",class:"form-label"},"Bio",-1)),P={class:"form-floating"},k=s(()=>t("label",{for:"floatingInput",class:"form-label"},"Url",-1)),F=s(()=>t("label",{for:"type",class:"form-label m-0 mt-3 text-dark"},"Club Type",-1)),D=I('<option selected value="casual" data-v-49c033bc>Casual</option><option value="elite" data-v-49c033bc>Elite</option><option value="speed" data-v-49c033bc>Speed</option><option value="single cat moms" data-v-49c033bc>Single Cat Moms</option><option value="sci-fi" data-v-49c033bc>Sci-Fi</option><option value="horror" data-v-49c033bc>Horror</option><option value="fantasy" data-v-49c033bc>Fantasy</option><option value="non-fiction" data-v-49c033bc>Non-Fiction</option><option value="series" data-v-49c033bc>Series</option><option value="author-based" data-v-49c033bc>Author Based</option>',10),E=[D],T=s(()=>t("button",{class:"btn bg-danger mt-4",type:"submit"},"Create Club",-1));function A(a,e,l,o,H,O){return y(),f("div",w,[t("div",M,[t("div",V,[t("form",{onSubmit:e[4]||(e[4]=_(i=>o.createClub(),["prevent"]))},[t("div",q,[r(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>o.editable.name=i),required:"",type:"text",class:"form-control",id:"name",maxlength:"20"},null,512),[[n,o.editable.name]]),B]),t("div",N,[r(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>o.editable.bio=i),required:"",type:"text",class:"form-control",id:"bio"},null,512),[[n,o.editable.bio]]),U]),t("div",P,[r(t("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>o.editable.coverImg=i),required:"",type:"text",class:"form-control",id:"coverImg"},null,512),[[n,o.editable.coverImg]]),k]),F,r(t("select",{"onUpdate:modelValue":e[3]||(e[3]=i=>o.editable.type=i),required:"",class:"form-select",id:"type"},E,512),[[g,o.editable.type]]),T],32)])])])}const G=c(x,[["render",A],["__scopeId","data-v-49c033bc"]]);export{G as default};
