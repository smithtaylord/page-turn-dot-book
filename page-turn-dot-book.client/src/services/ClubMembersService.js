import { AppState } from "../AppState";
import { ClubMember } from "../models/ClubMember";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class ClubMembersService {

  async getMembersByClubId(clubId){
    const res = await api.get(`api/clubs/${clubId}/members`)
    logger.log('getting members by id', res.data)
    AppState.members = res.data.map(m => new ClubMember(m))
  }

  async createMember(memberData){
    logger.log(memberData, 'this is the member data we are sending')
    const res = await api.post('api/members', memberData)
    logger.log(res.data, 'getting the member data back')
    AppState.members.push(new ClubMember(res.data));
  }

  async removeMember(memberId){
    console.log(memberId);
    const res = await api.delete('api/members/' + memberId)
    logger.log('Removed Member', res.data)
    const memberIndex = AppState.members.findIndex(m => m.memberId == memberId)
    logger.log(memberIndex)
    if(memberIndex != -1){
      AppState.members.splice(memberIndex, 1)
    }
  }

}

export const clubMembersService = new ClubMembersService()