import { Profile } from "./Account";

export class ClubMember extends Profile{
    constructor(data) {
        super(data.profile)
        this.id = data.id
        this.accountId = new  Profile(this.accountId)
        this.clubId = new club(data.clubId)
        this.club = data.club
    }
}