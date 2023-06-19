"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const questions_1 = require("./routes/questions");
const answers_1 = require("./routes/answers");
const comments_1 = require("./routes/comments");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_2.json)());
app.use('/questions', questions_1.questionroute);
app.use('/answers', answers_1.answerroute);
app.use('/comments', comments_1.commentroutes);
app.use('/user', user_1.userroute);
app.listen(5000, () => {
    console.log('server running now');
});
