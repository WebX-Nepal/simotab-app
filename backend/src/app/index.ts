import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import { ErrorHandlerMiddleware } from "../middlewares/errorhandler.middleware";
import morgan from "morgan";
import enviroment from "../utils/validateenv";
import compression from "compression";
import { connectdb } from "../config/connect.database";
import allRoute from "../routes/index";
import helmet from "helmet";
import hpp from "hpp";
// import './passport'
import oauthroute from "../routes/oauth.route";
import expressSession from "express-session";
import { passportInitialize } from "../middlewares/passport.middleware";

export const app = express();
connectdb();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
const allowedOrigins = ["https://simotap.com", "http://localhost:5173/"];

// const corsOptions = {
//   // origin: allowedOrigins,
//   origin: "https://www.simotap.com",
//   methods: "GET,POST,PUT,PATCH,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(
  cors({
    origin: "*",
  })
);

app.use(mongoSanitize());
app.use(compression());
app.use(helmet());
app.use(hpp());
app.use(morgan("dev"));
// creating the session
app.use(
  expressSession({
    secret: "test123#",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passportInitialize();

// routes
app.use("/api/v1", allRoute);
app.use("/auth", oauthroute);
app.use(ErrorHandlerMiddleware);
