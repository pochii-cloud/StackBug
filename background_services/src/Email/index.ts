
import ejs from 'ejs'
import mssql from 'mssql'
import { sqlConfig } from '../config'
import { sendMail } from '../Helpers/sendMail'
import dotenv from 'dotenv'
// import path from 'path'
// dotenv.config({path:path.resolve(__dirname, '../../.env')})


interface User{
    id:string
    username:string
    email:string
    isSent:number
    }
    
    export const sendWelcomeEmail = async()=>{
        const pool = await mssql.connect(sqlConfig)
        const users:User[]= await(await pool.request().
        query("SELECT * FROM USERDB WHERE isSent ='0'")).recordset
        // console.log(users);
    
    for(let user of users){
        ejs.renderFile('Templates/register.ejs',{name:user.username}, async(error, html)=>{
        const message = {
        from: 'johnmwanikig2000@gmail.com',
        to: user.email,
        subject: "WELCOME",
        html
    };
    
    
    
     try {
    await sendMail(message)
    await pool.request().query(`UPDATE USERDB SET isSent ='1' WHERE Id ='${user.id}'`)
     } catch (error:any) {
        console.log('Email not sent:', error.message);

        
     }  
    })
    }    
    }


    export const PrefferedAnswerEmail = async () => {
        try {
          const pool = await mssql.connect(sqlConfig);
      
          const users: User[] = await (await pool.request().query(`
            SELECT U.*
            FROM ANSWERS A
            JOIN USERDB U ON A.user_id = U.id
            WHERE A.is_accepted = 0
          `)).recordset;
          console.log(users)
      
          for (let user of users) {
            ejs.renderFile('Templates/prefferedemail.ejs', { name: user.username }, async (error, html) => {
              const message = {
                from: 'johnmwanikig2000@gmail.com',
                to: user.email,
                subject: 'PREFFERED ANSWER',
                html
              };
      
              try {
                await sendMail(message);
                await pool.request().query(`UPDATE USERDB SET isAccepted ='1' WHERE Id ='${user.id}'`);
              } catch (error: any) {
                console.log('Preffered Answer Email not sent:', error.message);
              }
            });
          }
        } catch (error: any) {
          console.log('Error:', error.message);
        }
      };
      

    
  