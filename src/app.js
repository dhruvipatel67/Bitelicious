import express from "express";
import userRouter from './routes/user.route.js';
import bodyparser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyparser.json());

app.use(cors());

app.use(express.urlencoded());

app.use(express.static("frontend"));

app.use("/api/users", userRouter);

export { app };
