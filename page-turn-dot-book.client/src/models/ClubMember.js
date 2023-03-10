import { Profile } from "./Profile.js"
import { Club } from "./Club.js"
export class ClubMember {
    constructor(data) {
        this.id = data.id
        this.accountId = data.accountId
        // this.clubId = data.clubId
        // this.accountId = new Profile(this.accountId)
        // this.clubId = new Club(data.clubId)
        this.club = data.club
        this.profile = data.profile
    }
}