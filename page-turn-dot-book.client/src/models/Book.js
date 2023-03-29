const defaultImg = 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'

export class Book {
    constructor(data) {
        this.id = data.id
        this.isbn = data.primary_isbn10 || data.volumeInfo.industryIdentifiers[0].identifier
        this.title = data.title || data.volumeInfo.title
        this.coverImg = data.volumeInfo ? data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : defaultImg : data.book_image
        this.altImg = data.altImg || null
        this.voteId = data.voteId


    }
}




