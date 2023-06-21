import express from 'express'
import { downvoteAnswerController, getAllAnswersController,getAnswerByIdController,getAnswersByQuestionIdController,insertAnswerController, setAnswerAsAccepted, upvoteAnswerController } from '../controllers/AnswerControllers'
export const answerroute=express()


answerroute.post('/add-answer',insertAnswerController)
answerroute.get('/answerslist',getAllAnswersController)
answerroute.post('/upvote-answer',upvoteAnswerController)
answerroute.post('/downvote-answer',downvoteAnswerController)
answerroute.get('/question-answers/:id',getAnswersByQuestionIdController)
answerroute.get('/answer-details/:id',getAnswerByIdController)
answerroute.post('/answer-accepted/:id',setAnswerAsAccepted)

