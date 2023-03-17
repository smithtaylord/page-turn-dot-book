import { AppState } from "../AppState.js"
import { Book } from "../models/Book.js"
import { BookIveRead } from "../models/BookIveRead.js"
import { GoogleBook } from "../models/GoogleBook.js"
import { logger } from "../utils/Logger.js"
import { api, apiNYT } from "./AxiosService.js"
import { googleAPI } from "./AxiosService.js"

class BooksService {


    async searchBooks(searchData) {
        // logger.log(searchData, '[Search Data]')
        const res = await googleAPI.get('/v1/volumes?q=' + searchData.query)
        logger.log(res.data.items, '[Google Book Search Results (hopefully)]')
        AppState.googleBooks = res.data.items.filter(c => c.volumeInfo.industryIdentifiers ? c.volumeInfo.industryIdentifiers[0].type != 'OTHER': null).map(gb => new Book(gb))
        //  AppState.googleBooks = res.data.items.forEach(gb=>{
        //     logger.log('author test',gb.volumeInfo.authors[0])
        //  })
        // AppState.googleBooks = new GoogleBook( res.data.items[4] ) 
        // logger.log(AppState.googleBooks)
        // NOTE WE KNOW THIS ^^^ WORKS, need to get it to work for all books
    }
    async getNYTBooks() {
        const res = await apiNYT.get('/v3/lists/current/hardcover-fiction.json')
        // logger.log(res.data.results.books, 'res.data for NYT books data looks like...')
        AppState.Books = res.data.results.books.map(b => new Book(b))
    }

    async getBookByISBN(isbn) {
        const res = await googleAPI.get(`/v1/volumes?q=+isbn:${isbn}`)
        // logger.log(res.data.items[0], 'RES . DATA FOR ISBN GET FROM GOOGLE API LOOKS LIKE>>>>>>>')
        AppState.googleBook = new GoogleBook(res.data.items[0])
    }

    async getProfilesBooks(profileId) {
        const res = await api.get('/api/profiles/' + profileId + '/booksIveRead')
        AppState.readBooks = res.data.map(b => new BookIveRead(b))
        logger.log(AppState.readBooks, 'this is the book i read')
    }

    async getOtherProfilesBooks(profileId){
        const res = await api.get('/api/profiles/' + profileId + '/booksIveRead')
        AppState.profileReadBooks = res.data.map(b => new BookIveRead(b))
    }

    async addBookToReadBooks(book) {
        const res = await api.post('/api/booksIveRead', book)
        AppState.readBooks.push(new BookIveRead(res.data))
        // AppState.readBook.push(new BooksService(res.data))
        logger.log(res.data)
    }

    clearBooks(){
        AppState.googleBook = []
    }

}

export const booksService = new BooksService()