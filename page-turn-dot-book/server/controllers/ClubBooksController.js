import { Auth0Provider } from "@bcwdev/auth0provider";
import { clubBooksService } from "../services/ClubBooksService";
import BaseController from "../utils/BaseController";

export class ClubBooksController extends BaseController{
  constructor(){
    super('api/clubBooks')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .delete('/:id', this.deleteClubBookById)
    .post('', this.createClubBook)
  }
  async deleteClubBookById(req, res, next) {
    try {
      const id = req.params.id
      const removedBook = await clubBooksService.deleteClubBookById(id)
      return res.send(removedBook)
    } catch (error) {
      next(error)
    }
  }


  async createClubBook(req, res, next){
    try {
      const clubBookData = req.body
      const clubBook = await clubBooksService.createClubBook(clubBookData)
      return res.send(clubBook)
    } catch (error) {
      next(error)
    }
  }
}