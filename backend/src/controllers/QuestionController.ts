import { Request, Response } from 'express';
import { DatabaseHelper } from '../helpers';
import {v4 as uid} from 'uuid'
import { sqlConfig } from '../config';
import mssql from 'mssql'
import { Question } from '../interfaces/interfaces';

export const getAllQuestions = async (req: Request, res: Response) => {
  const { page, pageSize } = req.query;

  try {
    const data = {
      page: parseInt(String(page), 10),
      pageSize: parseInt(String(pageSize), 10)
    };

    const result: any = await DatabaseHelper.exec('getAllQuestions', data);

    if (result && result.recordsets.length > 0) {
      const questions = result.recordsets[0].map((row: any) => {
        return {
          id: row.id,
          title: row.title,
          description: row.description,
          user_id:row.user_id,
          tags:row.tags,
          code:row.code
        };
      });
      const reversedQuestions = questions.reverse();
      
      for (const question of reversedQuestions) {
        const answersResult: any = await DatabaseHelper.exec('getAnswersByQuestionId', { id: question.id });
        question.answers = answersResult.recordsets[0];


        for( const answer of question.answers){
           const comments:any=await DatabaseHelper.exec('getAnswerCommentByAnswerId', { answer_id: answer.id }); 
           answer.comments=comments.recordsets[0]
           

        }
      }

      
      
      res.status(200).json(reversedQuestions);
    } else {
      res.status(200).json('No questions in array');
    }
  } catch (error) {
    console.error('Error executing stored procedure:', error);
    res.status(500).json({ error: error + 'error in fetching' });
  }
};






export const getQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result: any = await DatabaseHelper.exec('getQuestionById', { id });

    if (result && result.recordsets.length > 0) {
      const question = result.recordsets[0][0];
      res.status(200).json({ question });
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    console.error('Error executing stored procedure:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const insertQuestion = async (req: Request, res: Response) => {
  try {
    const id = uid();
    const { title,user_id, description, code, tags } = req.body;

    await DatabaseHelper.exec('insertQuestion', {
      id,
      title,
      user_id,
      description,
      code,
      tags
    });

    res.status(200).json({ message: 'Question inserted successfully' });
  } catch (error: any) {
    console.error('Error executing stored procedure:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};



export const updateQuestion = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, code, tags, views } = req.body;

    await DatabaseHelper.exec('UpdateQuestion', {
      id,
      title,
      description,
      code,
      tags
    });

    res.status(200).json({ message: 'Question updated successfully' });
  } catch (error: any) {
    console.error('Error executing stored procedure:', error.message);
    res.status(500).json({ error: error.message });
  }
};




export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Execute the deleteQuestion stored procedure
    const result:any = await DatabaseHelper.exec('deleteQuestion', { id });

    // Check if any rows were affected
    if (result.rowsAffected[0] > 0) {
      // Return the deleted question
      const question = result.recordsets[0][0];
      res.json({ message: 'Question deleted successfully', question });
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    console.error('Error executing stored procedure:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getQuestionsByUserId = async (req: Request<{user_id:string}>, res: Response) => {
  try {
    const { user_id } = req.params;

    const questions = await(await DatabaseHelper.exec('GetQuestionsByUserId', { user_id })).recordset;

    res.status(200).json(questions);
  } catch (error: any) {
    console.error('Error executing stored procedure:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getQuestionsByAnswerCountController = async (req: Request, res: Response) => {
  try {
    const questions: Question[] = await((await DatabaseHelper.exec('GetQuestionsByAnswerCount', {}))).recordset;

    res.status(200).json(questions);
  } catch (error: any) {
    console.error('Error executing stored procedure:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
