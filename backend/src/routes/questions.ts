import { Router } from 'express'
import { deleteQuestion, getAllQuestions, getQuestionById, insertQuestion,updateQuestion,getQuestionsByUserId,getQuestionsByAnswerCountController, searchQuestions } from '../controllers/QuestionController'
import { verifyLogin } from '../middleware/verifylogin'

export const questionroute=Router()

questionroute.get('/questionslist',getAllQuestions)
questionroute.post('/add-question',insertQuestion)
questionroute.get('/search', searchQuestions);
questionroute.get('/question-details/:id',verifyLogin,getQuestionById)
questionroute.put('/update-question/:id',updateQuestion)
questionroute.get('/question-by-userId/:id',verifyLogin,getQuestionsByUserId)
questionroute.get('/top-questions',verifyLogin,getQuestionsByAnswerCountController)
questionroute.delete('/delete-question/:id',deleteQuestion)

