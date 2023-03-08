import { Auth0Provider } from "@bcwdev/auth0provider";
import { clubsService } from "../services/ClubsService.js";
import { commentsService } from "../services/CommentsService.js";
import { membersService } from "../services/MembersService.js";
import BaseController from "../utils/BaseController.js";





export class ClubsController extends BaseController {

    constructor() {
        super('api/clubs')
        this.router
        .get('', this.getAllClubs)
        .get('/:clubId', this.getClubById)
        .get('/:clubId/members', this.getClubMembers)
        .get('/:parentId/comments', this.getClubComments)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createClub)
        .put('/:clubId', this.editClub)
        .delete('/:clubId', this.archiveClub)
    }

    async getClubComments(req, res, next){
        try {
            const parentId = req.params.parentId
            const comments = await commentsService.getCommentbyParentId(parentId)
            return res.send(comments)
        } catch (error) {
            next(error)
        }
    }
    async getClubMembers(req, res, next) {
        try {
            const clubId = req.params.clubId
            const member = await membersService.getClubMembers(clubId)
            res.send(member)
        } catch (error) {
            next(error)
        }
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

    async editClub(req, res, next) {
        try {
            const clubId = req.params.clubId
            const updateData = req.body
            const userId = req.userInfo.id
            const updatedClub = await clubsService.editClub(updateData, clubId, userId)
            res.send(updatedClub)
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