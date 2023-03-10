import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class ClubBooksService {
  async deleteClubBookById(id) {
    const book = await dbContext.ClubBooks.findById(id)
    await book?.remove()
    return book
  }
  async getClubBooks(clubId) {
    const clubBooks = await dbContext.ClubBooks.find({ clubId })
    return clubBooks
  }

  async getClubBookById(bookId) {
    const book = await dbContext.ClubBooks.findById(bookId)
    if (!book) {
      throw new BadRequest('No Book Found')
    }
    return book
  }
  async createClubBook(clubBookData) {
    const clubBook = await dbContext.ClubBooks.create(clubBookData)
    return clubBook
  }

}

export const clubBooksService = new ClubBooksService()