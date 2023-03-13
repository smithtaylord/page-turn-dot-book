import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"




class CommentsService {
    async getCommentsByClubId(clubId) {
        const res = await api.get('api/clubs/' + clubId + '/comments')
        // logger.log(res.data)
        AppState.comments = res.data.map(c => new Comment(c))

    }

    async createComment(commentData) {
        // logger.log(commentData)
        const res = await api.post('api/comments', commentData)
        AppState.comments.push(new Comment(res.data))

        // return res.data
    }

}

export const commentsService = new CommentsService()