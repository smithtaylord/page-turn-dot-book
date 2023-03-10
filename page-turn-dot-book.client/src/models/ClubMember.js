

export class ClubMember {
    constructor(data) {
        this.id = data.id
        this.accountId = data.accountId
        this.clubId = data.clubId
        // this.accountId = new Profile(this.accountId)
        // this.clubId = new club(data.clubId)
        this.club = data.club
        // this.profile = data.profile
    }
}