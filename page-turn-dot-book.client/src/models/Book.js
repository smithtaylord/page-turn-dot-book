export class Book {
    constructor(data) {
        this.isbn = data.primary_isbn10
        this.title = data.title
        this.coverImg = data.book_image
    }
}