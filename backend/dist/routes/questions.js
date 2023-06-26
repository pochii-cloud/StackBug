"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionroute = void 0;
const express_1 = require("express");
const QuestionController_1 = require("../controllers/QuestionController");
const verifylogin_1 = require("../middleware/verifylogin");
exports.questionroute = (0, express_1.Router)();
exports.questionroute.get('/questionslist', QuestionController_1.getAllQuestions);
exports.questionroute.post('/add-question', QuestionController_1.insertQuestion);
exports.questionroute.get('/question-details/:id', verifylogin_1.verifyLogin, QuestionController_1.getQuestionById);
exports.questionroute.put('/update-question/:id', verifylogin_1.verifyLogin, QuestionController_1.updateQuestion);
exports.questionroute.get('/question-by-userId/:id', verifylogin_1.verifyLogin, QuestionController_1.getQuestionsByUserId);
exports.questionroute.get('/top-questions', verifylogin_1.verifyLogin, QuestionController_1.getQuestionsByAnswerCountController);
exports.questionroute.delete('/delete-question/:id', QuestionController_1.deleteQuestion);
