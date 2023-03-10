import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants";

export const ClubBookSchema = new Schema(
    {
        clubId: { type: Schema.Types.ObjectId, required: true, ref: 'Club' },
        title: basicStringType,
        coverImg: basicStringType,
        ISBN: { type: Number, required: true },
        // genre: basicStringType,
        // isActive: {type: Boolean, required: true, default: false}
        // NOTE come back and maybe add votes somehow, maybe
        // NOTE come back and think about how a book moves to "books the club has read"
    }, defaultSchemaOptions
)