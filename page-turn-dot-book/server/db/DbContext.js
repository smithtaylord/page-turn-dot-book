import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ClubSchema } from '../models/Club.js';
import { ClubMemberSchema } from '../models/ClubMember.js';
import { CommentSchema } from '../models/Comment';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Clubs = mongoose.model('Clubs', ClubSchema)

  ClubMembers = mongoose.model('ClubMembers', ClubMemberSchema)

  Comments = mongoose.model('Comments', CommentSchema)
}

export const dbContext = new DbContext()
