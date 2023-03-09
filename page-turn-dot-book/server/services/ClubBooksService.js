import { dbContext } from "../db/DbContext"

class ClubBooksService{
 async deleteClubBookById(id) {
    const book = await dbContext.ClubBooks.findById(id)
    await book.remove()
    return book
  }
  async getClubBooks(clubId) {
    const clubBooks = await dbContext.ClubBooks.find({clubId})
    return clubBooks
 }
 async createClubBook(clubBookData) {
  const clubBook = await dbContext.ClubBooks.create(clubBookData)
  return clubBook
  }

}

export const clubBooksService = new ClubBooksService()