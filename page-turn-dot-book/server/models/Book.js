import { Schema } from "mongoose";
import { basicStringType } from "../db/Constants";

export const BookSchema = new Schema(
    {
        title: basicStringType,
        coverImg: basicStringType,
        altImg: { type: String, minLength: 3, maxLength: 5000 },
        isbn: basicStringType,
        // genre: basicStringType,
    }
)