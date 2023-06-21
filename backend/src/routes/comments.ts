import express from 'express'
import { getAnswerCommentsController, insertCommentController } from '../controllers/CommentsController'
import { verifyLogin } from '../middleware/verifylogin'
export const commentroutes=express()


commentroutes.post('/add-comment',verifyLogin,insertCommentController)
commentroutes.get('/answer-comments/:id',verifyLogin,getAnswerCommentsController)