import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants";

export const BooksIveReadSchema = new Schema(
    {
        accountId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
        title: basicStringType,
        coverImg: basicStringType,
        ISBN: basicStringType,
        // genre: basicStringType,
    }, defaultSchemaOptions
)