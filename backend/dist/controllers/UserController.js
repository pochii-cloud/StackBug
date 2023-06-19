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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.deleteUser = exports.getSingleUser = exports.getAllUsersController = exports.registerusercontroller = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const joiauth_1 = require("../helpers/joiauth");
const index_1 = require("../helpers/index");
const registerusercontroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //creates users id
        let id = (0, uuid_1.v4)();
        //gets users data from the body
        const { username, email, password } = req.body;
        //validate first
        const { error } = joiauth_1.registrationSchema.validate(req.body);
        if (error) {
            return res.status(404).json(error.details[0].message);
        }
        //hashes password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        //connect to database
        yield index_1.DatabaseHelper.exec('insertUser', { id, username, email, password: hashedPassword });
        return res.status(201).json({ message: "user added" });
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
});
exports.registerusercontroller = registerusercontroller;
const getAllUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield (yield index_1.DatabaseHelper.exec('getusers', {})).recordset;
        res.status(200).json(users);
    }
    catch (error) {
        //server side error
        return res.status(500).json(error.message);
    }
});
exports.getAllUsersController = getAllUsersController;
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        //connect to database
        //  let pool=await mssql.connect(sqlConfig)
        let user = yield (yield index_1.DatabaseHelper.exec('getuser', { id })).recordset;
        if (user.length > 0) {
            res.status(200).json(user);
        }
        else {
            return res.status(404).json({ message: "user does not exist" });
        }
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.getSingleUser = getSingleUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        let user = yield index_1.DatabaseHelper.exec('deleteUser', { id });
        if (user.rowsAffected[0] > 0) {
            return res.status(200).json({ message: "user deleted successfully" });
        }
        else {
            return res.status(404).json({ message: "user does not exist" });
        }
        //await DatabaseHelper.exec('insertUser',{id,username,email,password:hashedPassword})
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.deleteUser = deleteUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const result = yield index_1.DatabaseHelper.exec('getUserByEmail', { email });
        const user = result.recordset[0];
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const { resetSuccess, username, isSent, id } = user, rest = __rest(user, ["resetSuccess", "username", "isSent", "id"]);
        const payload = rest;
        console.log(payload);
        const token = jsonwebtoken_1.default.sign(payload, 'ttttweywastring', { expiresIn: '360000s' });
        return res.json({ mesage: "Login Successfull!!", token, role: user.isAdmin, username: user.username });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.loginUser = loginUser;
