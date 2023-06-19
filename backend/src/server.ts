import cors from 'cors'
import express from  'express'
import {json} from 'express'
import { questionroute } from './routes/questions'
import { answerroute } from './routes/answers'
import { commentroutes } from './routes/comments'
import { userroute } from './routes/user'
const app=express()

app.use(cors())
app.use(json())


app.use('/questions',questionroute)
app.use('/answers',answerroute)
app.use('/comments',commentroutes)
app.use('/user',userroute)

app.listen(5000,()=>{
    console.log('server running now')
})






