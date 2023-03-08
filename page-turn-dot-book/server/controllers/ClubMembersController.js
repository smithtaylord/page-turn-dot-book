import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { membersService } from "../services/MembersService.js";



export class ClubMembersController extends BaseController {

    constructor() {
        super('api/members')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createMember)
        .delete('/:memberId', this.deleteMember)
    }


    async createMember(req, res, next) {
        try {
            const memberData = req.body
            memberData.accountId = req.userInfo.id
            const member = await membersService.createMember(memberData)
            res.send(member)
        } catch (error) {
            next(error)
        }
    }

    async deleteMember(req, res, next) {
        try {
            const memberId = req.params.memberId
            const userId = req.userInfo.id
            const member = await membersService.deleteMember(memberId, userId)
            res.send(member)
        } catch (error) {
            next(error)
        }
    }
}