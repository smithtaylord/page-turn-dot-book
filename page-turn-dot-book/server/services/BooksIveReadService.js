import { dbContext } from "../db/DbContext"

class BooksIveReadService {
  async getProfileBooks(accountId) {
    const books = await dbContext.BooksIveRead.find({accountId})
    return books
  }
  async  createBookIveRead(readBook) {
     const book = await dbContext.BooksIveRead.create(readBook)
     return book 
    }

}

export const booksIveReadService = new BooksIveReadService() 