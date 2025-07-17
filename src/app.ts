import express from 'express';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import formRoutes from './routes/form.routes';

dotenv.config();

const app = express();

const ALLOWED_ORIGINS = [
  "https://credit.kairoshof.com/",
  "http://localhost:3000",
];

// ✅ Type-safe CORS configuration
const corsOptions: CorsOptions = {
  origin: function (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middlewares
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', formRoutes);

export default app;
