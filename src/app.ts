import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import formRoutes from './routes/form.routes';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', formRoutes);

export default app;
