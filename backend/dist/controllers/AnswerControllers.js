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
exports.setAnswerAsAccepted = exports.downvoteAnswerController = exports.upvoteAnswerController = exports.getallanswervotes = exports.getAnswerByIdController = exports.insertAnswerController = exports.getAnswersByQuestionIdController = exports.getAllAnswersController = void 0;
const helpers_1 = require("../helpers");
const uuid_1 = require("uuid");
const getAllAnswersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answers = yield (yield helpers_1.DatabaseHelper.exec('getAllAnswers', {})).recordset;
        res.status(200).json(answers);
    }
    catch (error) {
        // Server-side error
        return res.status(500).json(error.message);
    }
});
exports.getAllAnswersController = getAllAnswersController;
const getAnswersByQuestionIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const answers = yield (yield helpers_1.DatabaseHelper.exec('getAnswersByQuestionId', { id })).recordset;
        res.status(200).json(answers);
    }
    catch (error) {
        // Server-side error
        return res.status(500).json(error.message);
    }
});
exports.getAnswersByQuestionIdController = getAnswersByQuestionIdController;
const insertAnswerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)(); // Generate a unique ID for the answer
        const { answer, user_id, question_id } = req.body;
        const created_at = new Date(); // Use current date and time
        yield helpers_1.DatabaseHelper.exec('insertAnswer', {
            id,
            answer,
            created_at,
            user_id,
            question_id
        });
        res.status(200).json({ message: 'Answer inserted successfully' });
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.insertAnswerController = insertAnswerController;
const getAnswerByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield helpers_1.DatabaseHelper.exec('getAnswerById', { id });
        const answer = result.recordset[0];
        if (answer) {
            res.status(200).json(answer);
        }
        else {
            res.status(404).json({ error: 'Answer not found' });
        }
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAnswerByIdController = getAnswerByIdController;
const getallanswervotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield helpers_1.DatabaseHelper.exec('getAllAnswerVotes', {});
        const votes = result.recordset;
        res.json(votes);
    }
    catch (error) {
        console.error('Error executing stored procedure:', error);
        res.status(500).json({ error: error });
    }
});
exports.getallanswervotes = getallanswervotes;
const upvoteAnswerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { answer_id, user_id } = req.body;
        const result = yield (yield helpers_1.DatabaseHelper.exec('UpvoteAnswer', {
            answerId: answer_id,
            userId: user_id,
        })).recordset;
        if (result && result.length > 0) {
            res.status(200).json({ message: 'Answer upvoted successfully' });
        }
        else {
            res.status(400).json({ message: 'User has already downvoted' });
        }
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.upvoteAnswerController = upvoteAnswerController;
const downvoteAnswerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { answer_id, user_id } = req.body;
        const result = yield helpers_1.DatabaseHelper.exec('DownvoteAnswer', {
            answerId: answer_id,
            userId: user_id,
        });
        if (result) {
            res.status(200).json({ message: 'Answer downvoted successfully' });
        }
        else {
            res.status(400).json({ message: 'User has already downvoted' });
        }
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.downvoteAnswerController = downvoteAnswerController;
// Controller function for setting an answer as accepted
const setAnswerAsAccepted = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Execute the SQL update statement to set is_accepted to 1
        const result = yield helpers_1.DatabaseHelper.exec('SetAnswerAsAccepted', { id });
        if (result.rowsAffected[0] > 0) {
            res.status(200).json({ success: true, message: 'Answer marked as accepted' });
        }
        else {
            res.status(404).json({ success: false, message: 'Answer not found' });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
exports.setAnswerAsAccepted = setAnswerAsAccepted;
