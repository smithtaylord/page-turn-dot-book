import { Auth0Provider } from "@bcwdev/auth0provider";
import { clubBooksService } from "../services/ClubBooksService";
import BaseController from "../utils/BaseController";

export class ClubBooksController extends BaseController{
  constructor(){
    super('api/clubBooks')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createClubBook)
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