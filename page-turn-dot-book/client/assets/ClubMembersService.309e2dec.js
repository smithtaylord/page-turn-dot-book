import{K as m,l as t,A as o,L as r}from"./index.a1ed7502.js";class l{async clubBookVoting(e,a){let s=a.voteId;const i=await m.put("/api/clubBooks/"+e,{voteId:s});t.log(i.data,"this is the vote");let b=o.activeClubBooks.findIndex(c=>c.id==i.data.id);o.activeClubBooks.splice(b,1),o.activeClubBooks.push(i.data)}async getMembersByClubId(e){const a=await m.get(`api/clubs/${e}/members`);t.log("getting members by id",a.data),o.members=a.data.map(s=>new r(s))}async createMember(e){t.log(e,"this is the member data we are sending");const a=await m.post("api/members",e);t.log(a.data,"getting the member data back"),o.members.push(new r(a.data))}async removeMember(e){t.log(e);const a=await m.delete("api/members/"+e);t.log("Removed Member",a.data);const s=o.members.findIndex(i=>i.id==e);t.log(s),s!=-1&&o.members.splice(s,1)}}const g=new l;export{g as c};
