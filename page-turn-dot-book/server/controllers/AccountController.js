import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { membersService } from '../services/MembersService.js'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      // .get('/members', this.getMyClubs)
      .put('', this.editAccount)
    // .get('', this.getProfileBooks)
  }
  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async editAccount(req, res, next) {
    try {
      const accountData = req.body
      const userId = req.userInfo
      const account = await accountService.updateAccount(userId, accountData)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getMyClubs(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const clubs = await membersService.getMyClubs(accountId)
      return res.send(clubs)
    } catch (error) {
      next(error)
    }
  }
}
