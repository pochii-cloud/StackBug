import express from 'express'
import { deleteQuestion, getAllQuestions, getQuestionById, insertQuestion,updateQuestion,getQuestionsByUserId,getQuestionsByAnswerCountController } from '../controllers/QuestionController'
import { verifyLogin } from '../middleware/verifylogin'

export const questionroute=express()

questionroute.get('/questionslist',verifyLogin,getAllQuestions)
questionroute.post('/add-question',verifyLogin,insertQuestion)
questionroute.get('/question-details/:id',getQuestionById)
questionroute.put('/update-question/:id',updateQuestion)
questionroute.get('/question-by-userId/:id',getQuestionsByUserId)
questionroute.get('/top-questions',getQuestionsByAnswerCountController)
questionroute.delete('/delete-question/:id',deleteQuestion)

