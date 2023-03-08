import { Auth0Provider } from "@bcwdev/auth0provider";
import { clubsService } from "../services/ClubsService.js";
import BaseController from "../utils/BaseController.js";





export class ClubsController extends BaseController {

    constructor() {
        super('api/clubs')
        this.router
        .get('', this.getAllClubs)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createClub)
    }

    async getAllClubs(req, res, next) {
        try {
            const clubs = await clubsService.getAllClubs()
            res.send(clubs)
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
}