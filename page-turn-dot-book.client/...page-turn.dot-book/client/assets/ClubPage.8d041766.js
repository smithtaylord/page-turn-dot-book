import{_ as X,w as Y,G as Z,j as $,e as m,P as i,l as u,m as h,A as a,H as ee,C as oe,q as te,c,f as o,s as _,t as v,F as x,u as w,y as k,x as K,z as se,I as Q,D as y,o as n,J as ce,B as ne,p as re,i as ae,E as le}from"./index.621a5639.js";import{c as f}from"./ClubMembersService.a93181df.js";const de={setup(){const d=se(),r=ne();async function p(){try{const t=d.params.clubId;await h.getClubBooks(t)}catch(t){i.error(t,"getting club books")}}async function e(){try{const t=d.params.clubId;u.log(t),await h.getClubById(t)}catch{i.error("getting club by id"),r.push("/")}}async function I(){try{const t=d.params.clubId;await f.getMembersByClubId(t)}catch(t){i.error(t.message)}}async function B(){try{const t=d.params.clubId;await le.getCommentsByClubId(t)}catch(t){u.error(t),i.error(t.message)}}function C(){try{Q.emit("joined:room",{roomName:d.params.clubId})}catch(t){console.error(t),i.error("[ERROR]",t.message)}}function g(){try{Q.emit("left:room",{roomName:a.clubId})}catch(t){console.error(t),i.error("[ERROR]",t.message)}}return Y(()=>{d.params.clubId&&(C(),e(),I(),p(),B())}),Z(()=>{window.scrollTo(0,0)}),$(()=>{g()}),{route:d,club:m(()=>a.activeClub),members:m(()=>a.members),foundMember:m(()=>a.members.find(t=>t.accountId==a.account.id)),myMembership:m(()=>a.members.find(t=>t.club.id==a.activeClub.id)),account:m(()=>a.account),clubBooksId:m(()=>a.activeClubBooks),activeClubBook:m(()=>a.activeClubBook),comments:m(()=>a.comments),expanded:m(()=>a.expanded),clubBooks:m(()=>a.activeClubBooks.sort((t,l)=>l.voteId.length-t.voteId.length)),async createMember(){try{await f.createMember({clubId:d.params.clubId})}catch(t){i.error("creating member"),u.error(t)}},async clubBookVoting(t){try{let l=this.account;l.voteId=this.account.id,u.log(l,"getting the members Id"),await f.clubBookVoting(t,l)}catch(l){i.error("add and unadd vote to Book"),u.error(l)}},async removeMember(t){try{await i.confirm()&&(await f.removeMember(t),u.log(t))}catch(l){i.error("removing member"),u.error(l)}},async setBookActive(t){try{const l=d.params.clubId;await h.setBookActive(t,l)}catch(l){i.error(l,"[setting book to active]")}},async removeClubBook(t){try{await i.confirm("Are you sure you want to remove this book from the club?","Some members might not like that...")&&await h.removeClubBook(t)}catch(l){i.error(l,"[removing club book]")}},expand(){u.log(a.expanded),a.expanded?a.expanded=!1:a.expanded=!0,u.log(a.expanded)},async archiveClub(){try{const t=d.params.clubId;await i.confirm("Are you sure you want to archive this club?","Make sure to let all your members know, some of them might be sad...")&&await h.archiveClub(t)}catch(t){i.error(t,"[archive club]")}}}},components:{ClubCard:ee,CommentComponent:oe,CreateCommentForm:te}},b=d=>(re("data-v-f6e3983f"),d=d(),ae(),d),ie={class:"container-fluid"},me={class:"row"},be={class:"col-3 d-none d-md-block bg-custom-primary scroll-y"},ue={class:"card text-start mt-2"},_e=["src","alt"],ve={key:0,class:"text-end icon-container"},he={class:"card-body"},ke={class:"card-title"},ge={class:"card-text"},ye={class:"row justify-content-end"},fe={key:0,class:"col-6 text-end m-2"},Ce=["disabled"],xe=["disabled"],we={class:"col-md-9 scroll-y"},pe={class:"row"},Ie={class:"col-md-9 m-auto"},Be={class:"row"},Me={class:"col-12 d-md-none bg-custom-primary pb-3"},Ae={class:"card text-start mt-2"},Re=["src","alt"],Se={key:0,class:"text-end icon-container"},je={class:"card-body"},Ve={class:"card-title"},Pe={class:"card-text"},Ne={class:"row justify-content-end"},Ee={key:0,class:"col-6 text-end m-2"},Fe=["disabled"],ze=["disabled"],Je={class:"col-12 mt-3 bg-danger p-2 my-3 rounded box-shadow"},Le=b(()=>o("h4",null,"Club Members",-1)),Oe={class:"d-flex"},De=["src","alt"],qe={class:"col-12 text-center bg-custom-primary rounded box-shadow my-3"},Ge=b(()=>o("h1",{class:"my-3"},"Currently Reading",-1)),He={key:0},Te=b(()=>o("img",{class:"mb-3 bookCover",src:"https://jackchovet.files.wordpress.com/2022/05/placeholder-cover-to-be-revealed.png?w=335",alt:""},null,-1)),Ue=b(()=>o("p",{class:"mb-3 px-2 text-start"},"We're eagerly awaiting the club's next book selection. Please reach out to your club owner for more information on the upcoming book.",-1)),We=[Te,Ue],Ke={key:1},Qe={class:"my-3"},Xe={class:"col-12 bg-custom-warning my-md-3 rounded box-shadow p-3 my-3"},Ye=b(()=>o("h3",{class:"text-center py-3"}," Club Comments! ",-1)),Ze={key:0},$e={class:"row"},eo={key:1},oo=b(()=>o("div",{class:"bg-dark text-light p-3 rounded box-shadow indent"},[o("p",null,"no comments... yet?")],-1)),to=[oo],so={key:2,class:"d-flex flex-column align-items-center"},co={class:"col-12 bg-custom-danger my-md-3 rounded box-shadow p-3 my-3"},no=b(()=>o("div",{class:"text-center"},[o("h1",null,"Vote On Next Book")],-1)),ro={class:"d-flex align-items-center scroll-x voting-area"},ao={class:"d-flex justify-content-between align-items-baseline px-3 pt-2"},lo=["onClick"],io={class:"fw-bold"},mo={key:0},bo=b(()=>o("div",{type:"button",class:"","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"selectable text-dark mdi mdi-dots-horizontal fs-3",title:"remove/set active book"})],-1)),uo={class:"dropdown-menu text-center fs-1"},_o={class:"d-flex justify-content-evenly"},vo=["onClick"],ho=b(()=>o("div",null,"|",-1)),ko=["onClick"],go=b(()=>o("div",{class:"list-group"},null,-1));function yo(d,r,p,e,I,B){var M,A,R,S,j,V,P,N,E,F,z,J,L,O,D,q,G;const C=y("router-link"),g=y("BookCard"),t=y("CreateCommentForm"),l=y("CommentComponent");return n(),c("div",ie,[o("div",me,[o("div",be,[o("div",ue,[o("img",{class:"clubImg image-container",src:(M=e.club)==null?void 0:M.coverImg,alt:(A=e.club)==null?void 0:A.name},null,8,_e),!((R=e.club)!=null&&R.isArchived)&&((S=e.club)==null?void 0:S.creatorId)==e.account.id?(n(),c("div",ve,[o("i",{class:"mdi mdi-bookmark-remove selectable fs-1 px-2 pb-1 mx-2 glass-card rounded",onClick:r[0]||(r[0]=(...s)=>e.archiveClub&&e.archiveClub(...s))})])):_("",!0),o("div",he,[o("h4",ke,v((j=e.club)==null?void 0:j.name),1),o("p",ge,v((V=e.club)==null?void 0:V.bio),1)]),o("div",ye,[e.account.id?(n(),c("div",fe,[e.foundMember?(n(),c("button",{key:1,class:"btn bg-danger box-shadow",onClick:r[2]||(r[2]=s=>e.removeMember(e.foundMember.id)),disabled:(N=e.club)==null?void 0:N.isArchived},"Leave Club",8,xe)):(n(),c("button",{key:0,class:"btn bg-success box-shadow",onClick:r[1]||(r[1]=s=>e.createMember()),disabled:(P=e.club)==null?void 0:P.isArchived},"Join Club",8,Ce))])):_("",!0)])])]),o("div",we,[o("div",pe,[o("div",Ie,[o("div",Be,[o("div",Me,[o("div",Ae,[o("img",{class:"clubImg image-container",src:(E=e.club)==null?void 0:E.coverImg,alt:(F=e.club)==null?void 0:F.name},null,8,Re),!((z=e.club)!=null&&z.isArchived)&&((J=e.club)==null?void 0:J.creatorId)==e.account.id?(n(),c("div",Se,[o("i",{class:"mdi mdi-bookmark-remove selectable fs-1 px-2 pb-1 mx-2 glass-card rounded",onClick:r[3]||(r[3]=(...s)=>e.archiveClub&&e.archiveClub(...s))})])):_("",!0),o("div",je,[o("h4",Ve,v((L=e.club)==null?void 0:L.name),1),o("p",Pe,v((O=e.club)==null?void 0:O.bio),1)]),o("div",Ne,[e.account.id?(n(),c("div",Ee,[e.foundMember?(n(),c("button",{key:1,class:"btn bg-danger box-shadow",onClick:r[5]||(r[5]=s=>e.removeMember(e.foundMember.id)),disabled:(q=e.club)==null?void 0:q.isArchived},"Leave Club",8,ze)):(n(),c("button",{key:0,class:"btn bg-success box-shadow",onClick:r[4]||(r[4]=s=>e.createMember()),disabled:(D=e.club)==null?void 0:D.isArchived},"Join Club",8,Fe))])):_("",!0)])])]),o("div",Je,[Le,o("div",Oe,[(n(!0),c(x,null,w(e.members,s=>(n(),c("div",null,[k(C,{class:"selectable",to:{name:"Profile",params:{profileId:s.profile.id}}},{default:ce(()=>[o("img",{src:s.profile.picture,alt:s.name,class:"profilePic m-1"},null,8,De)]),_:2},1032,["to"])]))),256))])]),o("div",qe,[Ge,e.activeClubBook?(n(),c("div",Ke,[o("div",null,[k(g,{book:e.activeClubBook},null,8,["book"])]),o("h3",Qe,v(e.activeClubBook.title),1)])):(n(),c("div",He,We))]),o("div",Xe,[Ye,e.foundMember&&!((G=e.club)!=null&&G.isArchived)?(n(),c("div",Ze,[k(t)])):_("",!0),o("div",$e,[e.comments.length>0?(n(),c("div",{key:0,class:K(e.expanded?"expanded":"expandable")},[(n(!0),c(x,null,w(e.comments,s=>(n(),c("div",null,[k(l,{comment:s},null,8,["comment"])]))),256))],2)):(n(),c("div",eo,to)),e.comments.length>2?(n(),c("div",so,[e.expanded?(n(),c("button",{key:0,onClick:r[6]||(r[6]=(...s)=>e.expand&&e.expand(...s)),class:"btn-cool text-center"},"read less")):(n(),c("button",{key:1,onClick:r[7]||(r[7]=(...s)=>e.expand&&e.expand(...s)),class:"btn-cool text-center"},"read more"))])):_("",!0)])]),o("div",co,[no,o("div",null,[o("div",ro,[(n(!0),c(x,null,w(e.clubBooks,s=>{var H,T,U;return n(),c("div",null,[o("div",null,[k(g,{book:s},null,8,["book"]),o("div",ao,[o("div",null,[o("i",{onClick:W=>e.clubBookVoting(s.id),class:K(`fs-4 ${s.voteId.includes(e.account.id)?"mdi mdi-star selectable":"mdi mdi-star-outline selectable"}`),title:"vote for book"},null,10,lo)]),o("p",io,"Votes "+v((H=s==null?void 0:s.voteId)==null?void 0:H.length),1),e.account.id==((T=e.club)==null?void 0:T.creatorId)&&!((U=e.club)!=null&&U.isArchived)?(n(),c("div",mo,[bo,o("div",uo,[o("div",_o,[o("i",{class:"mdi mdi-book-heart-outline text-dark selectable fs-1",title:"set book active",onClick:W=>e.setBookActive(s.id)},null,8,vo),ho,o("i",{onClick:W=>e.removeClubBook(s.id),class:"mdi mdi-cancel text-danger selectable fs-1",title:"remove book from club"},null,8,ko)]),go])])):_("",!0)])])])}),256))])])])])])])])])])}const xo=X(de,[["render",yo],["__scopeId","data-v-f6e3983f"]]);export{xo as default};