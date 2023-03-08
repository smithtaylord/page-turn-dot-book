import { Schema } from "mongoose";
import { defaultSchemaOptions } from "../db/Constants.js";

export const ClubMemberSchema = new Schema(
    {
        clubId: {type: Schema.Types.ObjectId, ref: 'Clubs', required: true},
        accountId: {type: Schema.Types.ObjectId, ref: 'Account', required: true}
    }, defaultSchemaOptions
)

ClubMemberSchema.virtual('profile', {
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})

ClubMemberSchema.virtual('club', {
    localField: 'clubId',
    foreignField: '_id',
    justOne: true,
    ref: 'Clubs'
})

