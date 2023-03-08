export class GoogleBook {
    constructor(data) {
        this.title = data.volumeInfo.title
        this.author = data.volumeInfo.authors
        this.id = data.id
        this.description = data.volumeInfo.description
        this.genre = data.volumeInfo.categories
        this.img = data.volumeInfo.imageLinks.thumbnail + '&zoom=1'
    }
}