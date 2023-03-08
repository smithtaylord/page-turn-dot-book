import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"



class ClubsService {
    async archiveClub(clubId, userId){
        const club = await this.getClubById(clubId)
        if (club.creatorId.toString() != userId) {
            throw new Forbidden('You Are Not A Club Owner!!')
        }
        club.isArchived = true
        await club.save()
        return club
    }

    async getClubById(clubId) {
        const club = await dbContext.Clubs.findById(clubId)
        if (!club) {
            throw new BadRequest('Invalid Club Id Loser')
        }
        return club
    }
    async createClub(body) {
        const club = await dbContext.Clubs.create(body)
        return club
    }

    async getAllClubs() {
        const clubs = await dbContext.Clubs.find()
        return clubs
    }

}

export const clubsService = new ClubsService()