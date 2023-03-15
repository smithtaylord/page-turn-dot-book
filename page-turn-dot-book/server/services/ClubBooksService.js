import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class ClubBooksService {
 async addClubBookVote(clubBookId, clubMember) {
  let clubBook = await this.getClubBookById(clubBookId)
  // if(clubBook.voteId === clubMember){
  //   clubBook.voteId.splice(clubMember)
  //   await clubBook.save()
  
    clubBook.voteId.push(clubMember)
    await clubBook.save()
  // }else{
  return clubBook
  }
  //  const CB = await dbContext.ClubBooks.put(clubBookId)

  
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