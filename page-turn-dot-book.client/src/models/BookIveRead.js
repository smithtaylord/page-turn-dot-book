


export class BookIveRead {
    constructor(data) {
        this.accountId = data.accountId
        this.title = data.title
        this.coverImg = data.coverImg
        this.altImg = data.altImg || null
        this.isbn = data.isbn
    }
}