import { AppState } from "../AppState.js"
import { NYTBook } from "../models/NYTBook.js"
import { logger } from "../utils/Logger.js"
import { apiNYT } from "./AxiosService.js"

class BooksService {
  
    async getNYTBooks(){
        const res = await apiNYT.get('/v3/lists/current/hardcover-fiction.json')
        logger.log(res.data.results.books, 'res.data for NYT books data looks like...')
        AppState.NYTBooks = res.data.results.books.map(b => new NYTBook(b))
    }
}

export const booksService = new BooksService()