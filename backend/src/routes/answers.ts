import express from 'express'
import { downvoteAnswerController, getAllAnswersController,getAnswerByIdController,getAnswersByQuestionIdController,insertAnswerController, setAnswerAsAccepted, upvoteAnswerController } from '../controllers/AnswerControllers'
import { verifyLogin } from '../middleware/verifylogin'
export const answerroute=express()


answerroute.post('/add-answer',verifyLogin,insertAnswerController)
answerroute.get('/answerslist',verifyLogin,getAllAnswersController)
answerroute.post('/upvote-answer',verifyLogin,upvoteAnswerController)
answerroute.post('/downvote-answer',verifyLogin,downvoteAnswerController)
answerroute.get('/question-answers/:id',verifyLogin,getAnswersByQuestionIdController)
answerroute.get('/answer-details/:id',verifyLogin,getAnswerByIdController)
answerroute.post('/answer-accepted/:id',verifyLogin,setAnswerAsAccepted)

