import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { AppDataSource } from './database/AppDataSource';
import { personRouter } from './routes/PersonRoutes';

const app = express();

app.use(express.json());

app.use('/api/person', personRouter);
app.use('/api', (req, res) => {
   return res.json({ message: 'Hello world!' })
});

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
   return res.status(500).json({
       message: err.message,
       stack: err.stack
   });
});

AppDataSource.initialize()
   .then(() => console.log('Data Source has been initialized!'))
   .catch((e) => console.error('Error during Data Source inicialization', e));

export { app }