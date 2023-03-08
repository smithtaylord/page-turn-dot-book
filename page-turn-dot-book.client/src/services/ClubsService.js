import { AppState } from "../AppState.js"
import { Club } from "../models/Club.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ClubsService {
async getAllClubs() {
    const res = await api.get('/api/clubs')
    logger.log(res.data)
    AppState.clubs = res.data.map(c => new Club(c))
}

}

export const clubsService = new ClubsService()