import express from 'express'
import { deleteQuestion, getAllQuestions, getQuestionById, insertQuestion,updateQuestion,getQuestionsByUserId,getQuestionsByAnswerCountController } from '../controllers/QuestionController'

export const questionroute=express()

questionroute.get('/questionslist',getAllQuestions)
questionroute.post('/add-question',insertQuestion)
questionroute.get('/question-details/:id',getQuestionById)
questionroute.put('/update-question/:id',updateQuestion)
questionroute.get('/question-by-userId',getQuestionsByUserId)
questionroute.get('/top-questions',getQuestionsByAnswerCountController)
questionroute.delete('/delete-question/:id',deleteQuestion)

