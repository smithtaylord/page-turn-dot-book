import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";

export class BooksController extends BaseController{
  constructor(){
    super('api/book')
      this.router
      .get('/:isbn/comments', this.getBookComments)
  }
  async getBookComments(req, res, next){
    try {
      const isbn = req.params.isbn
      const comments = await commentsService.getCommentbyParentId(isbn)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }
}

