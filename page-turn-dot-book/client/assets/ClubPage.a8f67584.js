import{_ as X,w as Y,G as Z,j as $,e as m,P as i,l as u,m as h,A as a,H as ee,C as oe,q as te,c,f as o,s as _,t as v,F as f,u as x,y as k,x as K,I as se,z as ce,D as g,o as n,J as ne,B as le,p as ae,i as re,E as de}from"./index.5f8f3f21.js";import{c as y}from"./ClubMembersService.794d2f65.js";const ie={setup(){const d=ce(),l=le();async function w(){try{const t=d.params.clubId;await h.getClubBooks(t)}catch(t){i.error(t,"getting club books")}}async function e(){try{const t=d.params.clubId;u.log(t),await h.getClubById(t)}catch{i.error("getting club by id"),l.push("/")}}async function p(){try{const t=d.params.clubId;await y.getMembersByClubId(t)}catch(t){i.error(t.message)}}async function I(){try{const t=d.params.clubId;await de.getCommentsByClubId(t)}catch(t){u.error(t),i.error(t.message)}}function C(){a.expanded=!1}return Y(()=>{d.params.clubId&&(e(),p(),w(),I())}),Z(()=>{window.scrollTo(0,0)}),$(()=>{C()}),{route:d,club:m(()=>a.activeClub),members:m(()=>a.members),foundMember:m(()=>a.members.find(t=>t.accountId==a.account.id)),myMembership:m(()=>a.members.find(t=>t.club.id==a.activeClub.id)),account:m(()=>a.account),clubBooksId:m(()=>a.activeClubBooks),activeClubBook:m(()=>a.activeClubBook),comments:m(()=>a.comments),expanded:m(()=>a.expanded),clubBooks:m(()=>a.activeClubBooks.sort((t,r)=>r.voteId.length-t.voteId.length)),async createMember(){try{await y.createMember({clubId:d.params.clubId})}catch(t){i.error("creating member"),u.error(t)}},async clubBookVoting(t){try{let r=this.account;r.voteId=this.account.id,u.log(r,"getting the members Id"),await y.clubBookVoting(t,r)}catch(r){i.error("add and unadd vote to Book"),u.error(r)}},async removeMember(t){try{await i.confirm()&&(await y.removeMember(t),u.log(t))}catch(r){i.error("removing member"),u.error(r)}},async setBookActive(t){try{const r=d.params.clubId;await h.setBookActive(t,r)}catch(r){i.error(r,"[setting book to active]")}},async removeClubBook(t){try{await i.confirm("Are you sure you want to remove this book from the club?","Some members might not like that...")&&await h.removeClubBook(t)}catch(r){i.error(r,"[removing club book]")}},expand(){u.log(a.expanded),a.expanded?a.expanded=!1:a.expanded=!0,u.log(a.expanded)},async archiveClub(){try{const t=d.params.clubId;await i.confirm("Are you sure you want to archive this club?","Make sure to let all your members know, some of them might be sad...")&&await h.archiveClub(t)}catch(t){i.error(t,"[archive club]")}}}},components:{ClubCard:ee,CommentComponent:oe,CreateCommentForm:te}},b=d=>(ae("data-v-25c56305"),d=d(),re(),d),me={class:"container-fluid"},be={class:"row"},ue={class:"col-3 d-none d-md-block bg-custom-primary scroll-y"},_e={class:"card text-start mt-2"},ve=["src","alt"],he={key:0,class:"text-end icon-container"},ke={class:"card-body"},ge={class:"card-title"},ye={class:"card-text"},Ce={class:"row justify-content-end"},fe={key:0,class:"col-6 text-end m-2"},xe=["disabled"],we=["disabled"],pe={class:"col-md-9 scroll-y"},Ie={class:"row"},Be={class:"col-md-9 m-auto"},Me={class:"row"},Ae={class:"col-12 d-md-none bg-custom-primary pb-3"},Se={class:"card text-start mt-2"},Ve=["src","alt"],Pe={key:0,class:"text-end icon-container"},je={class:"card-body"},Fe={class:"card-title"},ze={class:"card-text"},Ee={class:"row justify-content-end"},Ne={key:0,class:"col-6 text-end m-2"},Je=["disabled"],Le=["disabled"],Re={class:"col-12 mt-3 bg-danger p-2 my-3 rounded box-shadow"},De=b(()=>o("h4",null,"Club Members",-1)),qe={class:"d-flex flex-wrap"},Ge=["src","alt"],He={class:"col-12 text-center bg-custom-primary rounded box-shadow my-3"},Oe=b(()=>o("h1",{class:"my-3"},"Currently Reading",-1)),Te={key:0},Ue=b(()=>o("img",{class:"mb-3 bookCover",src:"https://jackchovet.files.wordpress.com/2022/05/placeholder-cover-to-be-revealed.png?w=335",alt:""},null,-1)),We=b(()=>o("p",{class:"mb-3 px-2 text-start"},"We're eagerly awaiting the club's next book selection. Please reach out to your club owner for more information on the upcoming book.",-1)),Ke=[Ue,We],Qe={key:1},Xe={class:"my-3"},Ye={class:"col-12 bg-custom-warning my-md-3 rounded box-shadow p-3 my-3"},Ze=b(()=>o("h3",{class:"text-center py-3"}," Club Comments! ",-1)),$e={key:0},eo={class:"row"},oo={key:1},to=b(()=>o("div",{class:"bg-dark text-light p-3 rounded box-shadow indent"},[o("p",null,"no comments... yet?")],-1)),so=[to],co={key:2,class:"d-flex flex-column align-items-center"},no={class:"col-12 bg-custom-danger my-md-3 rounded box-shadow p-3 my-3"},lo=b(()=>o("div",{class:"text-center"},[o("h1",null,"Vote On Next Book")],-1)),ao={class:"d-flex align-items-center scroll-x voting-area"},ro={class:"d-flex justify-content-between align-items-baseline px-3 pt-2"},io=["onClick"],mo={class:"fw-bold"},bo={key:0},uo=b(()=>o("div",{type:"button",class:"","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"selectable text-dark mdi mdi-dots-horizontal fs-3",title:"remove/set active book"})],-1)),_o={class:"dropdown-menu text-center fs-1"},vo={class:"d-flex justify-content-evenly"},ho=["onClick"],ko=b(()=>o("div",null,"|",-1)),go=["onClick"],yo=b(()=>o("div",{class:"list-group"},null,-1));function Co(d,l,w,e,p,I){var B,M,A,S,V,P,j,F,z,E,N,J,L,R,D,q,G,H;const C=g("router-link"),t=g("BookCard"),r=g("CreateCommentForm"),Q=g("CommentComponent");return n(),c("div",{style:se((B=e.club)!=null&&B.isArchived?{filter:"grayscale(100%)"}:{})},[o("div",me,[o("div",be,[o("div",ue,[o("div",_e,[o("img",{class:"clubImg image-container",src:(M=e.club)==null?void 0:M.coverImg,alt:(A=e.club)==null?void 0:A.name},null,8,ve),!((S=e.club)!=null&&S.isArchived)&&((V=e.club)==null?void 0:V.creatorId)==e.account.id?(n(),c("div",he,[o("i",{class:"mdi mdi-bookmark-remove selectable fs-1 px-2 pb-1 mx-2 glass-card rounded",onClick:l[0]||(l[0]=(...s)=>e.archiveClub&&e.archiveClub(...s))})])):_("",!0),o("div",ke,[o("h4",ge,v((P=e.club)==null?void 0:P.name),1),o("p",ye,v((j=e.club)==null?void 0:j.bio),1)]),o("div",Ce,[e.account.id?(n(),c("div",fe,[e.foundMember?(n(),c("button",{key:1,class:"btn bg-danger box-shadow",onClick:l[2]||(l[2]=s=>e.removeMember(e.foundMember.id)),disabled:(z=e.club)==null?void 0:z.isArchived},"Leave Club",8,we)):(n(),c("button",{key:0,class:"btn bg-success box-shadow",onClick:l[1]||(l[1]=s=>e.createMember()),disabled:(F=e.club)==null?void 0:F.isArchived},"Join Club",8,xe))])):_("",!0)])])]),o("div",pe,[o("div",Ie,[o("div",Be,[o("div",Me,[o("div",Ae,[o("div",Se,[o("img",{class:"clubImg image-container",src:(E=e.club)==null?void 0:E.coverImg,alt:(N=e.club)==null?void 0:N.name},null,8,Ve),!((J=e.club)!=null&&J.isArchived)&&((L=e.club)==null?void 0:L.creatorId)==e.account.id?(n(),c("div",Pe,[o("i",{class:"mdi mdi-bookmark-remove selectable fs-1 px-2 pb-1 mx-2 glass-card rounded",onClick:l[3]||(l[3]=(...s)=>e.archiveClub&&e.archiveClub(...s))})])):_("",!0),o("div",je,[o("h4",Fe,v((R=e.club)==null?void 0:R.name),1),o("p",ze,v((D=e.club)==null?void 0:D.bio),1)]),o("div",Ee,[e.account.id?(n(),c("div",Ne,[e.foundMember?(n(),c("button",{key:1,class:"btn bg-danger box-shadow",onClick:l[5]||(l[5]=s=>e.removeMember(e.foundMember.id)),disabled:(G=e.club)==null?void 0:G.isArchived},"Leave Club",8,Le)):(n(),c("button",{key:0,class:"btn bg-success box-shadow",onClick:l[4]||(l[4]=s=>e.createMember()),disabled:(q=e.club)==null?void 0:q.isArchived},"Join Club",8,Je))])):_("",!0)])])]),o("div",Re,[De,o("div",qe,[(n(!0),c(f,null,x(e.members,s=>(n(),c("div",null,[k(C,{class:"selectable",to:{name:"Profile",params:{profileId:s.profile.id}}},{default:ne(()=>[o("img",{src:s.profile.picture,alt:s.name,class:"profilePic m-1"},null,8,Ge)]),_:2},1032,["to"])]))),256))])]),o("div",He,[Oe,e.activeClubBook?(n(),c("div",Qe,[o("div",null,[k(t,{book:e.activeClubBook},null,8,["book"])]),o("h3",Xe,v(e.activeClubBook.title),1)])):(n(),c("div",Te,Ke))]),o("div",Ye,[Ze,e.foundMember&&!((H=e.club)!=null&&H.isArchived)?(n(),c("div",$e,[k(r)])):_("",!0),o("div",eo,[e.comments.length>0?(n(),c("div",{key:0,class:K(e.expanded?"expanded":"expandable")},[(n(!0),c(f,null,x(e.comments,s=>(n(),c("div",null,[k(Q,{comment:s},null,8,["comment"])]))),256))],2)):(n(),c("div",oo,so)),e.comments.length>2?(n(),c("div",co,[e.expanded?(n(),c("button",{key:0,onClick:l[6]||(l[6]=(...s)=>e.expand&&e.expand(...s)),class:"btn-cool text-center"},"read less")):(n(),c("button",{key:1,onClick:l[7]||(l[7]=(...s)=>e.expand&&e.expand(...s)),class:"btn-cool text-center"},"read more"))])):_("",!0)])]),o("div",no,[lo,o("div",null,[o("div",ao,[(n(!0),c(f,null,x(e.clubBooks,s=>{var O,T,U;return n(),c("div",null,[o("div",null,[k(t,{book:s},null,8,["book"]),o("div",ro,[o("div",null,[e.foundMember?(n(),c("i",{key:0,onClick:W=>e.clubBookVoting(s.id),class:K(`fs-4 ${s.voteId.includes(e.account.id)?"mdi mdi-star selectable":"mdi mdi-star-outline selectable"}`),title:"vote for book"},null,10,io)):_("",!0)]),o("p",mo,"Votes "+v((O=s==null?void 0:s.voteId)==null?void 0:O.length),1),e.account.id==((T=e.club)==null?void 0:T.creatorId)&&!((U=e.club)!=null&&U.isArchived)?(n(),c("div",bo,[uo,o("div",_o,[o("div",vo,[o("i",{class:"mdi mdi-book-heart-outline text-dark selectable fs-1",title:"set book active",onClick:W=>e.setBookActive(s.id)},null,8,ho),ko,o("i",{onClick:W=>e.removeClubBook(s.id),class:"mdi mdi-cancel text-danger selectable fs-1",title:"remove book from club"},null,8,go)]),yo])])):_("",!0)])])])}),256))])])])])])])])])])],4)}const wo=X(ie,[["render",Co],["__scopeId","data-v-25c56305"]]);export{wo as default};
