import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

// setting up our app
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

// every route will start with /posts prefix
app.use('/posts', postRoutes); // every route inside postRoutes will start from posts

const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery',false);
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

