import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import bookRoutes from './app/modules/book/book.router';


const app:Application = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));


app.use('/api/v1/books/',bookRoutes)

export default app;