import express from 'express'
import { getAnswerCommentsController, insertCommentController } from '../controllers/CommentsController'
export const commentroutes=express()


commentroutes.post('/add-comment',insertCommentController)
commentroutes.get('/answer-comments',getAnswerCommentsController)