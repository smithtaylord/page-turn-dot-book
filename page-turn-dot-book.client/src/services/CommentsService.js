import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"




class CommentsService {
    async createComment(commentData) {
        logger.log(commentData)
        const res = api.post('api/comments', commentData)
        AppState.comments.push(new Comment(res.data))
        return res.data
    }

}

export const commentsService = new CommentsService()