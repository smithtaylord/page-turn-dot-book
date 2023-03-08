import { Auth0Provider } from "@bcwdev/auth0provider";
import { clubsService } from "../services/ClubsService.js";
import BaseController from "../utils/BaseController.js";





export class ClubsController extends BaseController {

    constructor() {
        super('api/clubs')
        this.router
        .get('', this.getAllClubs)
        .get('/:clubId', this.getClubById)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createClub)
        // TODO adding the update club
        .delete('/:clubId', this.archiveClub)
    }

    
    async getAllClubs(req, res, next) {
        try {
            const clubs = await clubsService.getAllClubs()
            res.send(clubs)
        } catch (error) {
            next(error)
        }
    }

    async getClubById(req,res,next) {
        try {
            const clubId = req.params.clubId
            const club = await clubsService.getClubById(clubId)
            res.send(club)
        } catch (error) {
            next(error)
        }
    }

    async createClub(req, res, next) {
        try {
            let body = req.body
            body.creatorId = req.userInfo.id
            const club = await clubsService.createClub(body)
            res.send(club)
        } catch (error) {
            next(error)
        }
    }

    async archiveClub(req, res, next) {
        try {
            const clubId = req.params.clubId
            const userId = req.userInfo.id
            const club = await clubsService.archiveClub(clubId, userId)
            res.send(club)
        } catch (error) {
            next(error)
        }
    }
}