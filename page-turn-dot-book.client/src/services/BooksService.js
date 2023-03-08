import { logger } from "../utils/Logger.js"
import { apiNYT } from "./AxiosService.js"

class BooksService {
  
    async getNYTBooks(){
        const res = await apiNYT.get('/v3/lists/current/hardcover-fiction.json')
        logger.log(res.data.results.books, 'res.data for NYT books data looks like...')
    }
}

export const booksService = new BooksService()