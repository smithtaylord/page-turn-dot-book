const defaultImg = 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0dGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=129&h=192&q=60'

export class Book {
    constructor(data) {
        this.isbn = data.primary_isbn10 || data.volumeInfo.industryIdentifiers[0].identifier
        this.title = data.title || data.volumeInfo.title
        this.coverImg = data.volumeInfo ? data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : defaultImg : data.book_image


    }
}




