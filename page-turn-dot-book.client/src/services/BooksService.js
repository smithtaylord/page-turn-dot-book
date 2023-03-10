import { AppState } from "../AppState.js"
import { Book } from "../models/Book.js"
import { GoogleBook } from "../models/GoogleBook.js"
import { logger } from "../utils/Logger.js"
import { apiNYT } from "./AxiosService.js"
import { googleAPI } from "./AxiosService.js"

class BooksService {
  

    async searchBooks(searchData){
        // logger.log(searchData, '[Search Data]')
        const res = await googleAPI.get('/v1/volumes?q=' + searchData.query)
        logger.log(res.data.items, '[Google Book Search Results (hopefully)]')
        AppState.googleBooks = res.data.items.map(gb => new Book(gb))
        //  AppState.googleBooks = res.data.items.forEach(gb=>{
        //     logger.log('author test',gb.volumeInfo.authors[0])
        //  })
        // AppState.googleBooks = new GoogleBook( res.data.items[4] ) 
        // logger.log(AppState.googleBooks)
        // NOTE WE KNOW THIS ^^^ WORKS, need to get it to work for all books
    }
    async getNYTBooks(){
        const res = await apiNYT.get('/v3/lists/current/hardcover-fiction.json')
        // logger.log(res.data.results.books, 'res.data for NYT books data looks like...')
        AppState.Books = res.data.results.books.map(b => new Book(b))
    }

    async getBookByISBN(isbn) {
        const res = await googleAPI.get(`/v1/volumes?q=+isbn:${isbn}`)
        // logger.log(res.data.items[0], 'RES . DATA FOR ISBN GET FROM GOOGLE API LOOKS LIKE>>>>>>>')
        AppState.googleBook = new GoogleBook( res.data.items[0] )
    }



}

export const booksService = new BooksService()