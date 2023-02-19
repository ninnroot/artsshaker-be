import { Express, Request, Response } from "express";  

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScrver');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});