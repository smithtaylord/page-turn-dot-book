import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants.js";

export const ClubSchema = new Schema(
    {
        name: {...basicStringType, maxLength: 20},
        bio: basicStringType,
        coverImg: basicStringType,
        isArchived: { type: Boolean, required: true, default: false},
        // type: {...basicStringType, enum: ['speed-readers', 'casual-readers', 'cat-moms', 'history-buffs', 'fiction-fans', 'other']}
        clubBookId: { type: Schema.Types.ObjectId, ref: 'ClubBooks'},
        creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true},
    }, defaultSchemaOptions
)

ClubSchema.virtual('creator', {
    ref: 'Account',
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
})

// NOTE set up a virtual for the club book
ClubSchema.virtual('activeBook', {
    ref: 'ClubBooks',
    localField: 'clubBookId',
    foreignField: '_id',
    justOne: true,
})