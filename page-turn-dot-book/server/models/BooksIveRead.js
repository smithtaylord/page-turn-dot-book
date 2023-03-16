import { Schema } from "mongoose";
import { basicStringType, defaultSchemaOptions } from "../db/Constants";

export const BooksIveReadSchema = new Schema(
    {
        accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
        title: basicStringType,
        coverImg: basicStringType,
        altImg: { type: String, minLength: 3, maxLength: 5000 },
        isbn: basicStringType,
        // genre: basicStringType,                     
    }, defaultSchemaOptions
)