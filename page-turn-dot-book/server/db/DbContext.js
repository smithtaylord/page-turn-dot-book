import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ClubSchema } from '../models/Club.js';
import { ClubMemberSchema } from '../models/ClubMember.js';
import { CommentSchema } from '../models/Comment';
import { ValueSchema } from '../models/Value'
import { ClubBookSchema } from '../models/ClubBook';
import { BooksIveReadSchema } from '../models/BooksIveRead';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Clubs = mongoose.model('Clubs', ClubSchema)

  ClubMembers = mongoose.model('ClubMembers', ClubMemberSchema)

  Comments = mongoose.model('Comments', CommentSchema)

  ClubBooks = mongoose.model('ClubBooks', ClubBookSchema)

  BooksIveRead = mongoose.model('BooksIveRead', BooksIveReadSchema)

}

export const dbContext = new DbContext()
