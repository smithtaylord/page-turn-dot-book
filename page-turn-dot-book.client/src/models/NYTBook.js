export class NYTBooks {
    constructor(data) {
        this.isbn = data.isbns[0].isbn10
        this.title = data.title
        this.coverImg = data.book_image
    }
}