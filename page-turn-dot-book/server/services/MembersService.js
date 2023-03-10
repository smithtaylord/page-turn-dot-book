import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { clubsService } from "./ClubsService.js"




class MembersService {
    async getProfileBookClubs(accountId) {
        const club = await dbContext.ClubMembers.find({ accountId }).populate('club')
        return club
    }
    async deleteMember(memberId, userId) {
        const member = await dbContext.ClubMembers.findById(memberId)
        if (!member) {
            throw new BadRequest('Member Does Not Exist...')
        }
        if (member.accountId != userId) {
            throw new Forbidden('You Are Not This Member')
        }

        const club = await clubsService.getClubById(member.clubId)
        await member.remove(memberId)
        await member.populate('club')
        club.save()
        return member
    }

    async getClubMembers(clubId) {
        const members = await dbContext.ClubMembers.find({ clubId })
            .populate('profile')
            .populate('club')
        return members
    }

    async getMyClubs(accountId) {
        const clubs = await dbContext.ClubMembers.find({ accountId }).populate('club')
        return clubs
    }

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