import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import formsRoute from './routes/forms.js'

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use('/', formsRoute)



const url = "mongodb+srv://ayushi1997:shubham1997@cluster0.lqwaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = 4000

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => {app.listen(PORT, ()=>{console.log(`server is running at ${PORT}`)})})
.catch((error)=>{console.log(error)})

mongoose.set('useFindAndModify', false)


