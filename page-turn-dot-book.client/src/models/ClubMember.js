import { Profile } from "./Account";

export class ClubMember extends Profile{
    constructor(data) {
        super(data.profile)
        this.memberId = data.id
    }
}