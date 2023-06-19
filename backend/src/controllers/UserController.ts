import {Response,Request, RequestHandler } from "express";
import { sqlConfig } from "../config";
import mssql from 'mssql'
import bcrypt from 'bcrypt';
import {v4 as uid} from 'uuid'
import jwt from 'jsonwebtoken'
import { registrationSchema, resetPasswordSchema } from "../helpers/joiauth";
import { DatabaseHelper } from "../helpers/index";
import { User } from "../interfaces/interfaces";
interface ExtendedRequest extends Request{
    body:{
        id:string,
        username:string,
        email:string,
        password:string,
       
        
    }
}

export const registerusercontroller= async(req:ExtendedRequest,res:Response)=>{
    try {

        //creates users id
        let id=uid()

        //gets users data from the body
        const {username,email,password} = req.body

         //validate first
         const {error}= registrationSchema.validate(req.body)
         if(error){
             return res.status(404).json(error.details[0].message)
         }
        //hashes password
        const hashedPassword = await bcrypt.hash(password,10)

        //connect to database
        await DatabaseHelper.exec('insertUser',{id,username,email,password:hashedPassword})
        
        return res.status(201).json({message:"user added"})


    } catch (err:any) {
       return res.status(500).json(err.message)
    }
}

export const getAllUsersController:RequestHandler=async(req,res)=>{
    
    try {
     
        let users:User[] = await (await DatabaseHelper.exec('getusers',{})).recordset
        res.status(200).json(users)
    } catch (error:any) {
         //server side error
         return res.status(500).json(error.message)
    }
}

export const getSingleUser=async(req:Request<{id:string}>,res:Response)=>{
    try {
        let {id}=req.params
        //connect to database
       
       //  let pool=await mssql.connect(sqlConfig)
 
        let user:User[]= await (await DatabaseHelper.exec('getuser',{id})).recordset
        
        if(user.length>0){
         res.status(200).json(user)
       }
       else{
         return res.status(404).json({message:"user does not exist"})
       }
      
 
 
    } catch (error:any) {
      res.status(500).json(error.message)
    }
 
 }


 export const deleteUser=async(req:Request<{id:string}>,res:Response)=>{

    try {
         
        let {id}=req.params
        let user= await DatabaseHelper.exec('deleteUser',{id})
        if(user.rowsAffected[0]>0){
          return res.status(200).json({message:"user deleted successfully"})
        }
        else{
          return res.status(404).json({message:"user does not exist"})
        }
        
        //await DatabaseHelper.exec('insertUser',{id,username,email,password:hashedPassword})
    } catch (error:any) {
        res.status(500).json(error.message)
    }

}


export const loginUser = async (req: Request<{ email: string; password: string }>, res: Response) => {
    try {
      const { email, password } = req.body;
  
      const result = await DatabaseHelper.exec('getUserByEmail',{email})
    
      const user = result.recordset[0];
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const { resetSuccess, username, isSent,id,...rest } = user;
      const payload = rest;
      console.log(payload)
      const token = jwt.sign(payload,'ttttweywastring' as string,{expiresIn:'360000s'})
      return res.json({mesage:"Login Successfull!!",token, role:user.isAdmin,username:user.username})
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };
  

