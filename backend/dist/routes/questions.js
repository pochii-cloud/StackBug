"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionroute = void 0;
const express_1 = __importDefault(require("express"));
const QuestionController_1 = require("../controllers/QuestionController");
const verifylogin_1 = require("../middleware/verifylogin");
exports.questionroute = (0, express_1.default)();
exports.questionroute.get('/questionslist', verifylogin_1.verifyLogin, QuestionController_1.getAllQuestions);
exports.questionroute.post('/add-question', verifylogin_1.verifyLogin, QuestionController_1.insertQuestion);
exports.questionroute.get('/question-details/:id', QuestionController_1.getQuestionById);
exports.questionroute.put('/update-question/:id', QuestionController_1.updateQuestion);
exports.questionroute.get('/question-by-userId/:id', QuestionController_1.getQuestionsByUserId);
exports.questionroute.get('/top-questions', QuestionController_1.getQuestionsByAnswerCountController);
exports.questionroute.delete('/delete-question/:id', QuestionController_1.deleteQuestion);
