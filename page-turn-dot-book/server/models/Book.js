import { Schema } from "mongoose";
import { basicStringType } from "../db/Constants";

export const BookSchema = new Schema(
    {
        title: basicStringType,
        coverImg: basicStringType,
        ISBN: basicStringType,
        // genre: basicStringType,
    }
)