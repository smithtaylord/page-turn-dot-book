import { AppState } from "../AppState.js"
import { Club } from "../models/Club.js"
import { ClubMember } from "../models/ClubMember.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ClubsService {


    async addBookToClub(book){
        // logger.log(book,'this is addbook to club function, and you are looking at the book object that is created' )
const res = await api.post('api/clubBooks',book)
logger.log(res.data, 'book added to club')
    }

    async getMyClubs(profileId) {
        const res = await api.get('/api/profiles/' + profileId + '/profileBookClubs')
        logger.log(res.data, "Gotten Clubs")
        AppState.myClubs = res.data.map(c => new ClubMember(c))
        logger.log(AppState.myClubs)
    }

async getAllClubs() {
    const res = await api.get('/api/clubs')
    logger.log(res.data)
    AppState.clubs = res.data.map(c => new Club(c))
}

async getClubById(clubId){
    const res = await api.get('api/clubs/' + clubId)
    logger.log(res.data)
    AppState.activeClub = new Club(res.data)
}

}

export const clubsService = new ClubsService()