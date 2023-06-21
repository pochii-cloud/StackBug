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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = exports.verifyLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers['token'];
        if (!token) {
            return res.status(401).json({ message: 'Unathorized' });
        }
        //token  i need to check two things: is it expired, is it valid token
        const dedodedData = jsonwebtoken_1.default.verify(token, 'ttttweywastring');
        console.log(dedodedData);
        req.info = dedodedData;
    }
    catch (error) {
        return res.status(403).json({ message: error.message });
    }
    next();
});
exports.verifyLogin = verifyLogin;
const verifyAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers['token'];
        if (!token) {
            return res.status(401).json({ message: 'Unathorized' });
        }
        //token  i need to check two things: is it expired, is it valid token
        const dedodedData = jsonwebtoken_1.default.verify(token, 'ttttweywastring');
        req.info = dedodedData;
        if (req.info.isAdmin !== 1) {
            return res.status(401).json({ message: 'is not an admin' });
        }
    }
    catch (error) {
        return res.status(403).json({ message: error.message });
    }
    next();
});
exports.verifyAdmin = verifyAdmin;
