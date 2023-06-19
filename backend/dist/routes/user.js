"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userroute = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
exports.userroute = (0, express_1.default)();
exports.userroute.post('/adduser', UserController_1.registerusercontroller);
exports.userroute.get('/getusers', UserController_1.getAllUsersController);
exports.userroute.post('/loginuser', UserController_1.loginUser);
exports.userroute.get('/getuser/:id', UserController_1.getSingleUser);
exports.userroute.delete('/deleteuser/:id', UserController_1.deleteUser);
