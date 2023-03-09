import { Auth0Provider } from "@bcwdev/auth0provider";
import { booksIveReadService } from "../services/BooksIveReadService";
import BaseController from "../utils/BaseController";


export class BooksIveReadController extends BaseController{
    constructor(){
        super('api/booksIveRead')
            this.router
                .use(Auth0Provider.getAuthorizedUserInfo)
                .post('', this.createBookIveRead)
                
    }
    async createBookIveRead(req, res, next) {
       try {
        const readBook = req.body
        readBook.accountId = req.userInfo.id
        const book = await booksIveReadService.createBookIveRead(readBook)
        return res.send(book)
       } catch (error) {
        next(error)
       }
    }
}