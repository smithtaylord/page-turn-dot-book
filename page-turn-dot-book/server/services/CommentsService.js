import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"

class CommentsService {
  async deleteComment(commentId, userId) {
    const comment = await dbContext.Comments.findById(commentId)
    if (!comment) {
      throw new BadRequest('Comment does not exist')
    }
    if (comment.creatorId.toString() != userId) {
      throw new Forbidden('You are not the comment creator, punk!')
    }
    await comment.remove()
    return comment
  }
  async createComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('creator')
    return comment
  }

  async getCommentbyParentId(parentId) {
    const comment = await dbContext.Comments.find({ parentId }).populate('creator', 'name picture')
    return comment
  }
}

export const commentsService = new CommentsService()