import { booksIveReadService } from '../services/BooksIveReadService.js'
import { profileService } from '../services/ProfileService.js'
import BaseController from '../utils/BaseController'
import { membersService } from '../services/MembersService.js'
import { commentsService } from '../services/CommentsService.js'
export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:id', this.getProfile)
      .get('/:profileId/booksIveRead', this.getProfileBooks)
      .get('/:profileId/profileBookClubs', this.getProfileBookClubs)
      .get('/:parentId/comments', this.getProfileComments)
  }

  async getProfileComments(req, res, next) {
    try {
      const parentId = req.params.parentId
      const comments = await commentsService.getCommentbyParentId(parentId)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async getProfileBookClubs(req, res, next) {
  const accountId = req.params.profileId
  const clubs = await  membersService.getProfileBookClubs(accountId)
  return res.send(clubs)    
  }
 async getProfileBooks(req, res, next) {
    try {
      const accountId = req.params.profileId
      const books = await booksIveReadService.getProfileBooks(accountId)
      return res.send(books)
    } catch (error) {
      next(error)
    }
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }
}
