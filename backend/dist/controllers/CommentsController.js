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
exports.getAnswerCommentsController = exports.insertCommentController = void 0;
const helpers_1 = require("../helpers");
const uuid_1 = require("uuid");
const insertCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const { comment, user_id, answer_id } = req.body;
        yield helpers_1.DatabaseHelper.exec('insertComment', {
            id,
            comment,
            user_id,
            answer_id
        });
        res.status(200).json({ message: 'Comment inserted successfully' });
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.insertCommentController = insertCommentController;
const getAnswerCommentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { answer_id } = req.params;
        console.log(answer_id);
        const comments = yield (yield helpers_1.DatabaseHelper.exec('getAnswerCommentByAnswerId', { answer_id })).recordset;
        // console.log(comments);
        res.status(200).json(comments);
    }
    catch (error) {
        console.error('Error executing stored procedure:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAnswerCommentsController = getAnswerCommentsController;
