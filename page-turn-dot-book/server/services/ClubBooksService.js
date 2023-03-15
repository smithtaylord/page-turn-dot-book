import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class ClubBooksService {
 async addClubBookVote(clubBookId, clubMember) {
  let clubBook = await this.getClubBookById(clubBookId)

  // For loop to look in voteIds

  // If statement to look for where the clubMember.Id != account.id

  // If the clubMember.id already exists in the voteIds array then do not push the vote 

  if(clubBook.voteId == clubMember){

  }
  clubBook.voteId.push(clubMember)
  await clubBook.save()
  //  const CB = await dbContext.ClubBooks.put(clubBookId)
   return clubBook

  }
  async deleteClubBookById(id) {
    const book = await this.getClubBookById(id)
    await book.remove()
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