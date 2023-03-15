export class Club {
    constructor(data) {
        this.activeBook = data.activeBook || null
        this.bio = data.bio
        this.coverImg = data.coverImg
        this.creatorId = data.creatorId
        this.id = data.id
        this.name = data.name
        this.isArchived = data.isArchived
        
    }
}