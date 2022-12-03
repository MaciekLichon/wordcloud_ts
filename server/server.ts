import express, { Express, Response, Request } from 'express';
import cors from 'cors';

import { router as questionsRoutes } from './routes/questions.routes';

const app: Express = express();

/* MIDDLEWARE */
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(cors());

/* ENDPOINTS */
app.use('/api', questionsRoutes);

/* MIDDLEWARE */
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found...' })
});

/* SERVER PORT */
app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
