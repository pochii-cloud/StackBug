import { Router } from 'express'
import { getAnswerCommentsController, insertCommentController } from '../controllers/CommentsController'
import { verifyLogin } from '../middleware/verifylogin'
export const commentroutes=Router()


commentroutes.post('/add-comment',insertCommentController)
commentroutes.get('/answer-comments/:id',verifyLogin,getAnswerCommentsController)