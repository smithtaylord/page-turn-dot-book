import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"



class ClubsService {

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