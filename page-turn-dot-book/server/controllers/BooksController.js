import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class BooksController extends BaseController{
  constructor(){
    super('api/book')
      this.router
      .get('/:isbn/comments', this.getBookComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }
  async getBookComments(req, res, next){
    try {
      const isbn
    } catch (error) {
      next(error)
    }
  }
}

