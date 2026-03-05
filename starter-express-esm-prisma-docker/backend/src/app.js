import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import usersRouter from './routes/users.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// prefix API
app.use('/api/users', usersRouter);

app.get('/health', (req, res) => res.json({ ok: true }));

app.use((req, res) => res.status(404).json({ error: 'Not Found' }));
app.use(errorHandler);

export default app;
