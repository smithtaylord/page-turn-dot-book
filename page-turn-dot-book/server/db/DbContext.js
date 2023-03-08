import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ClubSchema } from '../models/Club.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Clubs = mongoose.model('Clubs', ClubSchema)
}

export const dbContext = new DbContext()
