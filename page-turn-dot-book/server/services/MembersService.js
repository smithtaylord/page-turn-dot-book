import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"
import { clubsService } from "./ClubsService.js"




class MembersService {

    async createMember(memberData) {
        const club = await clubsService.getClubById(memberData.clubId)
        if (club.isArchived) {
            throw new Forbidden('This Club Has Been Disbanded')
        }

        const member = await dbContext.ClubMembers.create(memberData)
        await member.populate('profile')
        await member.populate('club')
        return member
    }
}

export const membersService = new MembersService()