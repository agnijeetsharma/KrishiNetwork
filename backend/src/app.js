import express from "express";
import authRouter  from "./routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
// import { server } from "./socket/index.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.json({ limit: "16kb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use("/api/v1/users", authRouter);
export { app };
