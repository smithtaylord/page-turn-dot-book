import { Schema } from "mongoose";
import { basicStringType } from "../db/Constants";

export const BookSchema = new Schema(
    {
        title: basicStringType,
        coverImg: basicStringType,
        ISBN: {type: Number, required: true},
        genre: basicStringType,
    }
)