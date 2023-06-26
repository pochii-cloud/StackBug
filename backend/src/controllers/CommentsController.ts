import { Request, Response } from 'express';
import { DatabaseHelper } from '../helpers';
import {v4 as uid} from 'uuid'




export const insertCommentController = async (req: Request, res: Response) => {
  try {
    const id = uid();
    const { comment, user_id, answer_id } = req.body;

    await DatabaseHelper.exec('insertComment', {
      id,
      comment,
      user_id:'04a2bd4f-0077-4ad2-bc57-2d18d978fb96',
      answer_id
    });

    res.status(200).json({ message: 'Comment inserted successfully' });
  } catch (error: any) {
    console.error('Error executing stored procedure:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};





export const getAnswerCommentsController = async (req: Request<{ answer_id: string }>, res: Response) => {
    try {
      const { answer_id } = req.params;

      console.log(answer_id);
      
      
      const comments:Comment[] = await (await DatabaseHelper.exec('getAnswerCommentByAnswerId',{answer_id})).recordset
      
      // console.log(comments);
      res.status(200).json(comments);
    } catch (error: any) {
      console.error('Error executing stored procedure:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  



