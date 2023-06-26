import { Request, RequestHandler, Response } from 'express';
import { DatabaseHelper } from '../helpers';
import {v4 as uid} from 'uuid'
import { Answer, AnswerVote } from '../interfaces/interfaces';


export const getAllAnswersController: RequestHandler = async (req, res) => {
    try {
      const answers: Answer[] = await (await DatabaseHelper.exec('getAllAnswers', {})).recordset;
      res.status(200).json(answers);
    } catch (error: any) {
      // Server-side error
      return res.status(500).json(error.message);
    }
  };


  export const getAnswersByQuestionIdController=async(req:Request<{id:string}>,res:Response)=>{
    try {
      const { id } = req.params;
      
      const answers: Answer[] = await (await DatabaseHelper.exec('getAnswersByQuestionId', { id })).recordset;
  
      res.status(200).json(answers);
    } catch (error: any) {
      // Server-side error
      return res.status(500).json(error.message);
    }
  };
  
  export const insertAnswerController = async (req: Request, res: Response) => {
    try {
      const id = uid(); // Generate a unique ID for the answer
      const { answer, user_id, question_id } = req.body;
      const created_at = new Date() as unknown as string; // Use current date and time
  
      await DatabaseHelper.exec('insertAnswer', {
        id,
        answer,
        created_at,
        user_id:'405137fe-8ab5-4682-815a-ca91b8f406c2',
        question_id
      });
  
      res.status(200).json({ message: 'Answer inserted successfully' });
    } catch (error: any) {
      console.error('Error executing stored procedure:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  
  export const getAnswerByIdController = async (req: Request<{ id: string }>, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await DatabaseHelper.exec('getAnswerById', { id });
  
      const answer: Answer = result.recordset[0];
  
      if (answer) {
        res.status(200).json(answer);
      } else {
        res.status(404).json({ error: 'Answer not found' });
      }
    } catch (error: any) {
      console.error('Error executing stored procedure:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
   

  
  export const upvoteAnswerController = async (req: Request, res: Response) => {
    try {
      const { answer_id, user_id } = req.body;
  
      const result = await(await DatabaseHelper.exec('UpvoteAnswer', {
        answerId: answer_id,
        userId: user_id,
      })).recordset
  
      if (result && result.length>0) {
        
        res.status(200).json({ message: 'Upvote already done' });
      } else {
        console.log(result,'this is result')
        res.status(200).json({ message: 'Upvote successfull' });
      }
    } catch (error: any) {
      console.error('Error executing stored procedure:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
  
  
  
  
  
  export const downvoteAnswerController = async (req: Request, res: Response) => {
    try {
      const { answer_id, user_id } = req.body;
  
      const result = await DatabaseHelper.exec('DownvoteAnswer', {
        answerId: answer_id,
        userId: user_id,
      });
  
      if (result) {
        res.status(200).json({ message: 'Answer downvoted successfully' });
      } else {
        res.status(400).json({ message: 'User has already downvoted' });
      }
    } catch (error: any) {
      console.error('Error executing stored procedure:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  
  // Controller function for setting an answer as accepted
  export const setAnswerAsAccepted = async (req: Request<{ id: string }>, res: Response) => {
    try {
      const { id } = req.params;
  
      // Execute the SQL update statement to set is_accepted to 1
      const result = await DatabaseHelper.exec('SetAnswerAsAccepted', { id });
  
      if (result.rowsAffected[0] > 0) {
        res.status(200).json({ success: true, message: 'Answer marked as accepted' });
      } else {
        res.status(404).json({ success: false, message: 'Answer not found' });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  
  
  