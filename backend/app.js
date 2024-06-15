// import express from "express" ;
// import dotenv, { config } from "dotenv" ;
// import cors from "cors"
// import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";
// import userRouter from "./routes/userRouter.js"
// import applicationRouter from "./routes/applicationRouter.js"
// import jobRouter from "./routes/jobRouter.js"
// import { dbConnection } from "./database/dbConnection.js";
// import { errorMiddleware } from "./middlewares/error.js";

// const app= express() ;
// dotenv.config({path:"./config/config.env"})


// app.use(cors({
//   origin:[process.env.FRONTEND_URL],
//   methods:['GET','POST','DELETE','PUT'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// app.use(cookieParser()) ;
// app.use(express.json()) ;
// app.use(express.urlencoded({extended:true})) ;

// app.use(fileUpload({
//   useTempFiles: true,
//   tempFileDir: "/tmp/"
// }))

// app.use("/api/v1/user",userRouter);
// app.use("/api/v1/application",applicationRouter);
// app.use("/api/v1/job",jobRouter);

// dbConnection();
// app.use(errorMiddleware)

// export default app ;

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import jobRouter from "./routes/jobRouter.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";

// Initialize express app
const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Database connection
dbConnection();

// CORS configuration
const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

// Routes setup
app.use("/api/v1/user", userRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/job", jobRouter);

// Error handling middleware
app.use(errorMiddleware);

// Handle preflight requests
app.options('*', cors(corsOptions));

export default app;
