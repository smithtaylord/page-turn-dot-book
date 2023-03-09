import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"



class ClubsService {
    async setActiveBook(clubId, bookData) {
        const club = await this.getClubById(clubId)
        // NOTE check to see who is making this request
        // NOTE go and make sure that this id we sent up can get a clubBook for this club
        
        club.clubBookId = bookData.clubBookId
        club.populate('activeBook')
        // populate the clubBook here
        await club.save()
        return club
    }

    async archiveClub(clubId, userId){
        const club = await this.getClubById(clubId)
        if (club.creatorId.toString() != userId) {
            throw new Forbidden('You Are Not A Club Owner!!')
        }
        club.isArchived = true
        await club.save()
        return club
    }

    async editClub(updateData, clubId, userId) {
        const club = await dbContext.Clubs.findById(clubId)
        if (!club) {
            throw new BadRequest('Club Not Found')
        }
        if (club.creatorId != userId) {
            throw new Forbidden('You Are Not The Club Owner')
        }
        if (club.isArchived == true) {
            throw new BadRequest('This Club Has Been Disbanded')
        }

        else {
            club.name = updateData.name || club.name
            club.coverImg = updateData.coverImg || club.coverImg
            club.bio = updateData.bio || club.bio
        }

        await club.save()
        return club
    }

    async getClubById(clubId) {
        const club = await dbContext.Clubs.findById(clubId).populate('activeBook')
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