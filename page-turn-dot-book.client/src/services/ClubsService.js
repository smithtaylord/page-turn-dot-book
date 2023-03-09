import { AppState } from "../AppState.js"
import { Club } from "../models/Club.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ClubsService {
    async getMyClubs() {
        const res = await api.get('account/clubs')
        logger.log(res.data, "Gotten Clubs")
        AppState.myClubs = res.data.map(c => new Club(c))
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