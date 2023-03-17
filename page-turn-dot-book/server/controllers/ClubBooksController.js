import { Auth0Provider } from "@bcwdev/auth0provider";
import { clubBooksService } from "../services/ClubBooksService";
import BaseController from "../utils/BaseController";
import { socketProvider } from "../SocketProvider.js";
// import { ClubBookSchema } from "../models/ClubBook.js";

export class ClubBooksController extends BaseController {
  constructor() {
    super('api/clubBooks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .put('/:clubBookId', this.addClubBookVote)
      .post('', this.createClubBook)
      .delete('/:id', this.deleteClubBookById)
  }
  async addClubBookVote(req, res, next) {
    try {
      let clubBookId = req.params.clubBookId
      // voteData = req.body
    let clubMember = req.body.voteId
    // clubBookId.accountId = req.userInfo.id
    const clubBook = await clubBooksService.addClubBookVote(clubBookId, clubMember)
    socketProvider.messageRoom(clubBook.voteId.toString(), 'new:vote', clubBook)
    return res.send(clubBook)
    } catch (error) {
      next(error)
    }
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


  async createClubBook(req, res, next) {
    try {
      const clubBookData = req.body
      const clubBook = await clubBooksService.createClubBook(clubBookData)
      return res.send(clubBook)
    } catch (error) {
      next(error)
    }
  }
}