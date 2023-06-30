import  { Router } from 'express'
import { deleteUser, getAllUsersController, getSingleUser, loginUser, registerusercontroller, updateUser } from '../controllers/UserController'

export const userroute=Router()

userroute.post('/adduser',registerusercontroller)
userroute.get('/getusers',getAllUsersController)
userroute.post('/loginuser',loginUser)
userroute.get('/getuser/:id',getSingleUser)
userroute.delete('/deleteuser/:id',deleteUser)
userroute.post('/updateuser',updateUser)