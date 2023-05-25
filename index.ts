// Import the express in typescript file
import * as dotenv from 'dotenv';
dotenv.config()

import express from 'express';
 
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000;

import routes from './src/routes/index';
import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);
// Handling '/' Request

 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});