import errorMiddleware from './src/middlewares/error-middleware.js';
import routeInit from './src/presentation-layer/routes/index.js';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({
  path: __dirname + `/../.${process.env.NODE_ENV}.env`,
});
const { PORT, CLIENT_URL, PAYMENT_DOMEN, JWT_AC_SECRET, JWT_RF_MA } =
  process.env;
const sessionMaxAge = parseInt(JWT_RF_MA || 2592000000, 10);
const app = express();
const server = http.createServer(app);

const allowedOrigins = [
  ...(CLIENT_URL.split(',') || 'http://localhost:3000'),
  'https://memory.pp.ua',
  'https://static.memory.pp.ua',
  PAYMENT_DOMEN || 'https://www.liqpay.ua',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  exposedHeaders: ['Access-Control-Allow-Credentials'],
};

app.use(cors(corsOptions));

app.use('/uploads', express.static('uploads'));
app.use(cookieParser());
app.use(
  session({
    secret: JWT_AC_SECRET || 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: sessionMaxAge,
    },
  }),
);

routeInit(app, express);

app.use(errorMiddleware);

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

server.listen(PORT | 4040, () => {
  console.log(`Server is running on port ${PORT | 4040}.`);
});
