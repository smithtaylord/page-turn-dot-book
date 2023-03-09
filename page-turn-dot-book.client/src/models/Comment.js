export class Comment {
    constructor(data) {
        this.id = data.id
        this.body = data.body
        this.parentId = data.parentId
        this.creatorId = data.creatorId
        this.creator = data.creator
    }
}