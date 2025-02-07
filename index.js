import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.json({limit:"25mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"25mb",extended:true}));
app.use(cors());
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 4000;

mongoose.connect(DATABASE_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on ${PORT}`);
    })
})
.catch((err)=>{
    console.log("Database Error",err.message);
})


