"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchQuestions = exports.getQuestionsByAnswerCountController = exports.getQuestionsByUserId = exports.deleteQuestion = exports.updateQuestion = exports.insertQuestion = exports.getQuestionById = exports.getAllQuestions = void 0;
const helpers_1 = require("../helpers");
const uuid_1 = require("uuid");
const getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, pageSize } = req.query;
    try {
        const data = {
            page: parseInt(String(page), 10),
            pageSize: parseInt(String(pageSize), 10)
        };
        const result = yield (yield helpers_1.DatabaseHelper.exec('getAllQuestions', data)).recordset;
        if (result && result.length > 0) {
            const questions = result.map((row) => {
                const question = {
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    user_id: row.user_id,
                    tags: row.tags,
                    code: row.code,
                    answers: [],
                    comments: []
                };
                return question;
            });
            const reversedQuestions = questions.reverse();
            for (const question of reversedQuestions) {
                const answersResult = yield (yield helpers_1.DatabaseHelper.exec('getAnswersByQuestionId', { id: question.id })).recordset;
                question.answers = answersResult;
                for (const answer of question.answers) {
                    const commentsResult = yield (yield helpers_1.DatabaseHelper.exec('getAnswerCommentByAnswerId', { answer_id: answer.id })).recordset;
                    answer.comments = commentsResult;
                }
            }
            res.status(200).json(reversedQuestions);
        }
        else {
            res.status(200).json('No questions in array');
        }
    }
    catch (error) {
        console.error('Error executing stored procedure:', error);
        res.status(500).json({ error: error + 'error in fetching' });
    }
});
exports.getAllQuestions = getAllQuestions;
const getQuestionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield helpers_1.DatabaseHelper.exec('getQuestionById', { id });
        if (result && result.recordsets.length > 0) {
            const question = result.recordsets[0][0];
            res.status(200).json({ question });
        }
        else {
            res.status(404).json({ error: 'Question not found' });
        }
    }
    catch (error) {
        console.error('Error executing stored procedure:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getQuestionById = getQuestionById;
const insertQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const { title, user_id, description, code, tags } = req.body;
        yield helpers_1.DatabaseHelper.exec('insertQuestion', {
            id,
            title,
            user_id,
            description,
            code,
            tags
        });
        res.status(200).json({ message: 'Question inserted successfully' });
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.insertQuestion = insertQuestion;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description, code, tags, views } = req.body;
        yield helpers_1.DatabaseHelper.exec('UpdateQuestion', {
            id,
            title,
            description,
            code,
            tags
        });
        res.status(200).json({ message: 'Question updated successfully' });
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: error.message });
    }
});
exports.updateQuestion = updateQuestion;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Execute the deleteQuestion stored procedure
        const result = yield helpers_1.DatabaseHelper.exec('deleteQuestion', { id });
        // Check if any rows were affected
        if (result.rowsAffected[0] > 0) {
            // Return the deleted question
            const question = result.recordsets[0][0];
            res.json({ message: 'Question deleted successfully', question });
        }
        else {
            res.status(404).json({ error: 'Question not found' });
        }
    }
    catch (error) {
        console.error('Error executing stored procedure:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteQuestion = deleteQuestion;
const getQuestionsByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.params;
        const questions = yield (yield helpers_1.DatabaseHelper.exec('GetQuestionsByUserId', { user_id })).recordset;
        res.status(200).json(questions);
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getQuestionsByUserId = getQuestionsByUserId;
const getQuestionsByAnswerCountController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield ((yield helpers_1.DatabaseHelper.exec('GetQuestionsByAnswerCount', {}))).recordset;
        res.status(200).json(questions);
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getQuestionsByAnswerCountController = getQuestionsByAnswerCountController;
const searchQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.query.term;
    try {
        const result = yield helpers_1.DatabaseHelper.exec('SearchQuestions', { searchTerm });
        // Assuming the stored procedure returns a result set
        const questions = result.recordset;
        res.json(questions);
    }
    catch (error) {
        console.error('Error searching questions:', error);
        res.status(500).json({ message: 'Error searching questions' });
    }
});
exports.searchQuestions = searchQuestions;
