export class GoogleBook {
    constructor(data) {
        this.title = data.volumeInfo.title
        this.author = data.volumeInfo.authors[0]
        this.id = data.id
        this.description = data.volumeInfo.description
        this.genre = data.volumeInfo.categories
        this.img = `https://covers.openlibrary.org/b/isbn/${data.volumeInfo.industryIdentifiers[1].identifier}-L.jpg?default=false`
        this.googleImg = data.volumeInfo.imageLinks.thumbnail
    }
}