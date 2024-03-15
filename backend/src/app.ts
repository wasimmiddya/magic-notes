import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import cookieParser from "cookie-parser";

const app: Application = express();

// ***configuration option for cross origin***
const options: CorsOptions = {
	origin: process.env.CROSS_ORIGIN,
	credentials: true,
};

/* ----use middlewares---- */ 
app.use(cors(options));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


/* ----import the routes---- */




/* -----define routes---- */



export {app}