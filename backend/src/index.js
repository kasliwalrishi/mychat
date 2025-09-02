import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "https://mychat-cuj6.onrender.com",
//     credentials: true,
//   })
// );
const allowedOrigins = [
  "https://mychat-cuj6.onrender.com", // Your deployed frontend
  "http://localhost:5173",           // Your local development frontend
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests from the allowed origins
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // This is important for cookies, authorization headers, etc.
};

app.use(express.json());
app.use(cookieParser());

// 2. Use the new cors options
app.use(cors(corsOptions));

// =======================================================
// END OF CHANGES
// =======================================================


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
