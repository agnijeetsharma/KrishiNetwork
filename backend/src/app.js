import express from "express";
import authRouter  from "./routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use(express.json({ limit: "16kb" }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/users", authRouter);
export { app };
