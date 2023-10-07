import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import { ErrorHandlerMiddleware } from "../middlewares/errorhandler.middleware";
import ErrorHandler from "../utils/errorhandler";
import morgan from "morgan";
import enviroment from "../utils/validateenv";
import compression from "compression";
import { connectdb } from "../config/connect.database";
import allRoute from "../routes/index";
import helmet from "helmet";
import hpp from "hpp";
import expressSession from "express-session";

export const app = express();
connectdb();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors());
app.use(mongoSanitize());
app.use(compression());
app.use(helmet());
app.use(hpp());
app.use(morgan("dev"));
app.use(expressSession({ 
    secret: "test123#",
    resave: true,
    saveUninitialized: true,
    cookie:{secure:true}

  })
);



// routes
app.use("/api/v1", allRoute);

app.use(ErrorHandlerMiddleware);
