import { Auth0Provider } from "@bcwdev/auth0provider"
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";
export class CommentsController extends BaseController{
  constructor(){
    super('api/comments')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createComment)
    .delete('/:commentId', this.deleteComment)
  }

  async createComment(req, res, next){
    try {
      const commentData = req.body
      commentData.creatorId = req.userInfo.id
      const comment = await commentsService.createComment(commentData)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next){
    try {
      const commentId = req.params.commentId
      const userId = req.userInfo.id
      const comment = await commentsService.deleteComment(commentId, userId)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}