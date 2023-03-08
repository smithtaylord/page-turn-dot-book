import { dbContext } from "../db/DbContext.js"



class ClubsService {
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