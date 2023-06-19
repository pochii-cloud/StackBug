"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerroute = void 0;
const express_1 = __importDefault(require("express"));
const AnswerControllers_1 = require("../controllers/AnswerControllers");
exports.answerroute = (0, express_1.default)();
exports.answerroute.post('/add-answer', AnswerControllers_1.insertAnswerController);
exports.answerroute.get('/answerslist', AnswerControllers_1.getAllAnswersController);
exports.answerroute.get('/question-answers/:id', AnswerControllers_1.getAnswersByQuestionIdController);
exports.answerroute.get('/answer-details/:id', AnswerControllers_1.getAnswerByIdController);
exports.answerroute.post('/upvote-answer', AnswerControllers_1.upvoteAnswerController);
exports.answerroute.post('/downvote-answer', AnswerControllers_1.downvoteAnswerController);
