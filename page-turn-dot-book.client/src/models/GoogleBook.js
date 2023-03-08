export class GoogleBook {
    constructor(data) {
        this.kind = data.kind
        this.id = data.id
        this.selfLink = data.selfLink
        this.volumeInfo = data.volumeInfo
    }
}