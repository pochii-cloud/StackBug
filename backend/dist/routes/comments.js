"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentroutes = void 0;
const express_1 = require("express");
const CommentsController_1 = require("../controllers/CommentsController");
const verifylogin_1 = require("../middleware/verifylogin");
exports.commentroutes = (0, express_1.Router)();
exports.commentroutes.post('/add-comment', CommentsController_1.insertCommentController);
exports.commentroutes.get('/answer-comments/:id', verifylogin_1.verifyLogin, CommentsController_1.getAnswerCommentsController);
