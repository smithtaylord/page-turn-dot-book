import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants";

export const CommentSchema = new Schema({
    creatorId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    // NOTE come back to this and find out if it needs to be an ObjectID
    parentId: {type: String, required: true},
    body: basicStringType,

    }, defaultSchemaOptions)

    CommentSchema.virtual('creator', {
        localField: 'creatorId',
        foreignField: '_id',
        justOne: true,
        ref: 'Account'
    })