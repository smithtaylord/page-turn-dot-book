import{_ as Y,w as Z,G as $,j as ee,e as m,P as i,l as u,m as h,A as r,H as oe,C as te,q as se,c,f as o,s as _,t as v,F as w,u as p,y as k,x as Q,I as ce,z as ne,J as X,D as y,o as n,K as re,B as ae,p as le,i as de,E as ie}from"./index.a1f4981e.js";import{c as C}from"./ClubMembersService.44300e16.js";const me={setup(){const d=ne(),a=ae();async function I(){try{const t=d.params.clubId;await h.getClubBooks(t)}catch(t){i.error(t,"getting club books")}}async function e(){try{const t=d.params.clubId;u.log(t),await h.getClubById(t)}catch{i.error("getting club by id"),a.push("/")}}async function B(){try{const t=d.params.clubId;await C.getMembersByClubId(t)}catch(t){i.error(t.message)}}async function M(){try{const t=d.params.clubId;await ie.getCommentsByClubId(t)}catch(t){u.error(t),i.error(t.message)}}function f(){try{X.emit("joined:room",{roomName:d.params.clubId})}catch(t){console.error(t),i.error("[ERROR]",t.message)}}function g(){try{X.emit("left:room",{roomName:r.clubId})}catch(t){console.error(t),i.error("[ERROR]",t.message)}}function x(){r.expanded=!1}return Z(()=>{d.params.clubId&&(f(),e(),B(),I(),M())}),$(()=>{window.scrollTo(0,0)}),ee(()=>{g(),x()}),{route:d,club:m(()=>r.activeClub),members:m(()=>r.members),foundMember:m(()=>r.members.find(t=>t.accountId==r.account.id)),myMembership:m(()=>r.members.find(t=>t.club.id==r.activeClub.id)),account:m(()=>r.account),clubBooksId:m(()=>r.activeClubBooks),activeClubBook:m(()=>r.activeClubBook),comments:m(()=>r.comments),expanded:m(()=>r.expanded),clubBooks:m(()=>r.activeClubBooks.sort((t,l)=>l.voteId.length-t.voteId.length)),async createMember(){try{await C.createMember({clubId:d.params.clubId})}catch(t){i.error("creating member"),u.error(t)}},async clubBookVoting(t){try{let l=this.account;l.voteId=this.account.id,u.log(l,"getting the members Id"),await C.clubBookVoting(t,l)}catch(l){i.error("add and unadd vote to Book"),u.error(l)}},async removeMember(t){try{await i.confirm()&&(await C.removeMember(t),u.log(t))}catch(l){i.error("removing member"),u.error(l)}},async setBookActive(t){try{const l=d.params.clubId;await h.setBookActive(t,l)}catch(l){i.error(l,"[setting book to active]")}},async removeClubBook(t){try{await i.confirm("Are you sure you want to remove this book from the club?","Some members might not like that...")&&await h.removeClubBook(t)}catch(l){i.error(l,"[removing club book]")}},expand(){u.log(r.expanded),r.expanded?r.expanded=!1:r.expanded=!0,u.log(r.expanded)},async archiveClub(){try{const t=d.params.clubId;await i.confirm("Are you sure you want to archive this club?","Make sure to let all your members know, some of them might be sad...")&&await h.archiveClub(t)}catch(t){i.error(t,"[archive club]")}}}},components:{ClubCard:oe,CommentComponent:te,CreateCommentForm:se}},b=d=>(le("data-v-95887b4a"),d=d(),de(),d),be={class:"container-fluid"},ue={class:"row"},_e={class:"col-3 d-none d-md-block bg-custom-primary scroll-y"},ve={class:"card text-start mt-2"},he=["src","alt"],ke={key:0,class:"text-end icon-container"},ge={class:"card-body"},ye={class:"card-title"},Ce={class:"card-text"},fe={class:"row justify-content-end"},xe={key:0,class:"col-6 text-end m-2"},we=["disabled"],pe=["disabled"],Ie={class:"col-md-9 scroll-y"},Be={class:"row"},Me={class:"col-md-9 m-auto"},Ae={class:"row"},Re={class:"col-12 d-md-none bg-custom-primary pb-3"},Se={class:"card text-start mt-2"},je=["src","alt"],Ve={key:0,class:"text-end icon-container"},Pe={class:"card-body"},Ee={class:"card-title"},Ne={class:"card-text"},Fe={class:"row justify-content-end"},ze={key:0,class:"col-6 text-end m-2"},Je=["disabled"],Le=["disabled"],Oe={class:"col-12 mt-3 bg-danger p-2 my-3 rounded box-shadow"},De=b(()=>o("h4",null,"Club Members",-1)),qe={class:"d-flex"},Ge=["src","alt"],He={class:"col-12 text-center bg-custom-primary rounded box-shadow my-3"},Ke=b(()=>o("h1",{class:"my-3"},"Currently Reading",-1)),Te={key:0},Ue=b(()=>o("img",{class:"mb-3 bookCover",src:"https://jackchovet.files.wordpress.com/2022/05/placeholder-cover-to-be-revealed.png?w=335",alt:""},null,-1)),We=b(()=>o("p",{class:"mb-3 px-2 text-start"},"We're eagerly awaiting the club's next book selection. Please reach out to your club owner for more information on the upcoming book.",-1)),Qe=[Ue,We],Xe={key:1},Ye={class:"my-3"},Ze={class:"col-12 bg-custom-warning my-md-3 rounded box-shadow p-3 my-3"},$e=b(()=>o("h3",{class:"text-center py-3"}," Club Comments! ",-1)),eo={key:0},oo={class:"row"},to={key:1},so=b(()=>o("div",{class:"bg-dark text-light p-3 rounded box-shadow indent"},[o("p",null,"no comments... yet?")],-1)),co=[so],no={key:2,class:"d-flex flex-column align-items-center"},ro={class:"col-12 bg-custom-danger my-md-3 rounded box-shadow p-3 my-3"},ao=b(()=>o("div",{class:"text-center"},[o("h1",null,"Vote On Next Book")],-1)),lo={class:"d-flex align-items-center scroll-x voting-area"},io={class:"d-flex justify-content-between align-items-baseline px-3 pt-2"},mo=["onClick"],bo={class:"fw-bold"},uo={key:0},_o=b(()=>o("div",{type:"button",class:"","data-bs-toggle":"dropdown","aria-expanded":"false"},[o("i",{class:"selectable text-dark mdi mdi-dots-horizontal fs-3",title:"remove/set active book"})],-1)),vo={class:"dropdown-menu text-center fs-1"},ho={class:"d-flex justify-content-evenly"},ko=["onClick"],go=b(()=>o("div",null,"|",-1)),yo=["onClick"],Co=b(()=>o("div",{class:"list-group"},null,-1));function fo(d,a,I,e,B,M){var l,A,R,S,j,V,P,E,N,F,z,J,L,O,D,q,G,H;const f=y("router-link"),g=y("BookCard"),x=y("CreateCommentForm"),t=y("CommentComponent");return n(),c("div",{style:ce((l=e.club)!=null&&l.isArchived?{filter:"grayscale(100%)"}:{})},[o("div",be,[o("div",ue,[o("div",_e,[o("div",ve,[o("img",{class:"clubImg image-container",src:(A=e.club)==null?void 0:A.coverImg,alt:(R=e.club)==null?void 0:R.name},null,8,he),!((S=e.club)!=null&&S.isArchived)&&((j=e.club)==null?void 0:j.creatorId)==e.account.id?(n(),c("div",ke,[o("i",{class:"mdi mdi-bookmark-remove selectable fs-1 px-2 pb-1 mx-2 glass-card rounded",onClick:a[0]||(a[0]=(...s)=>e.archiveClub&&e.archiveClub(...s))})])):_("",!0),o("div",ge,[o("h4",ye,v((V=e.club)==null?void 0:V.name),1),o("p",Ce,v((P=e.club)==null?void 0:P.bio),1)]),o("div",fe,[e.account.id?(n(),c("div",xe,[e.foundMember?(n(),c("button",{key:1,class:"btn bg-danger box-shadow",onClick:a[2]||(a[2]=s=>e.removeMember(e.foundMember.id)),disabled:(N=e.club)==null?void 0:N.isArchived},"Leave Club",8,pe)):(n(),c("button",{key:0,class:"btn bg-success box-shadow",onClick:a[1]||(a[1]=s=>e.createMember()),disabled:(E=e.club)==null?void 0:E.isArchived},"Join Club",8,we))])):_("",!0)])])]),o("div",Ie,[o("div",Be,[o("div",Me,[o("div",Ae,[o("div",Re,[o("div",Se,[o("img",{class:"clubImg image-container",src:(F=e.club)==null?void 0:F.coverImg,alt:(z=e.club)==null?void 0:z.name},null,8,je),!((J=e.club)!=null&&J.isArchived)&&((L=e.club)==null?void 0:L.creatorId)==e.account.id?(n(),c("div",Ve,[o("i",{class:"mdi mdi-bookmark-remove selectable fs-1 px-2 pb-1 mx-2 glass-card rounded",onClick:a[3]||(a[3]=(...s)=>e.archiveClub&&e.archiveClub(...s))})])):_("",!0),o("div",Pe,[o("h4",Ee,v((O=e.club)==null?void 0:O.name),1),o("p",Ne,v((D=e.club)==null?void 0:D.bio),1)]),o("div",Fe,[e.account.id?(n(),c("div",ze,[e.foundMember?(n(),c("button",{key:1,class:"btn bg-danger box-shadow",onClick:a[5]||(a[5]=s=>e.removeMember(e.foundMember.id)),disabled:(G=e.club)==null?void 0:G.isArchived},"Leave Club",8,Le)):(n(),c("button",{key:0,class:"btn bg-success box-shadow",onClick:a[4]||(a[4]=s=>e.createMember()),disabled:(q=e.club)==null?void 0:q.isArchived},"Join Club",8,Je))])):_("",!0)])])]),o("div",Oe,[De,o("div",qe,[(n(!0),c(w,null,p(e.members,s=>(n(),c("div",null,[k(f,{class:"selectable",to:{name:"Profile",params:{profileId:s.profile.id}}},{default:re(()=>[o("img",{src:s.profile.picture,alt:s.name,class:"profilePic m-1"},null,8,Ge)]),_:2},1032,["to"])]))),256))])]),o("div",He,[Ke,e.activeClubBook?(n(),c("div",Xe,[o("div",null,[k(g,{book:e.activeClubBook},null,8,["book"])]),o("h3",Ye,v(e.activeClubBook.title),1)])):(n(),c("div",Te,Qe))]),o("div",Ze,[$e,e.foundMember&&!((H=e.club)!=null&&H.isArchived)?(n(),c("div",eo,[k(x)])):_("",!0),o("div",oo,[e.comments.length>0?(n(),c("div",{key:0,class:Q(e.expanded?"expanded":"expandable")},[(n(!0),c(w,null,p(e.comments,s=>(n(),c("div",null,[k(t,{comment:s},null,8,["comment"])]))),256))],2)):(n(),c("div",to,co)),e.comments.length>2?(n(),c("div",no,[e.expanded?(n(),c("button",{key:0,onClick:a[6]||(a[6]=(...s)=>e.expand&&e.expand(...s)),class:"btn-cool text-center"},"read less")):(n(),c("button",{key:1,onClick:a[7]||(a[7]=(...s)=>e.expand&&e.expand(...s)),class:"btn-cool text-center"},"read more"))])):_("",!0)])]),o("div",ro,[ao,o("div",null,[o("div",lo,[(n(!0),c(w,null,p(e.clubBooks,s=>{var K,T,U;return n(),c("div",null,[o("div",null,[k(g,{book:s},null,8,["book"]),o("div",io,[o("div",null,[e.foundMember?(n(),c("i",{key:0,onClick:W=>e.clubBookVoting(s.id),class:Q(`fs-4 ${s.voteId.includes(e.account.id)?"mdi mdi-star selectable":"mdi mdi-star-outline selectable"}`),title:"vote for book"},null,10,mo)):_("",!0)]),o("p",bo,"Votes "+v((K=s==null?void 0:s.voteId)==null?void 0:K.length),1),e.account.id==((T=e.club)==null?void 0:T.creatorId)&&!((U=e.club)!=null&&U.isArchived)?(n(),c("div",uo,[_o,o("div",vo,[o("div",ho,[o("i",{class:"mdi mdi-book-heart-outline text-dark selectable fs-1",title:"set book active",onClick:W=>e.setBookActive(s.id)},null,8,ko),go,o("i",{onClick:W=>e.removeClubBook(s.id),class:"mdi mdi-cancel text-danger selectable fs-1",title:"remove book from club"},null,8,yo)]),Co])])):_("",!0)])])])}),256))])])])])])])])])])],4)}const po=Y(me,[["render",fo],["__scopeId","data-v-95887b4a"]]);export{po as default};
