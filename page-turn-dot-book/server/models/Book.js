import { Schema } from "mongoose";
import { basicStringType } from "../db/Constants";

export const BookSchema = new Schema(
    {
        title: basicStringType,
        coverImg: basicStringType,
        isbn: basicStringType,
        // genre: basicStringType,
    }
)