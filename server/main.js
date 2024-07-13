import cors from "cors";
import express from "express";
import http from "http";
import mongoose from "mongoose";

import ViteExpress from "vite-express";
import { MONGO_URI, PORT, isDev } from "./constants.js";

const app = express();

// Enable cors only on development
if (isDev) {
  app.use(cors());
}

app.use(express.json());

const server = http.createServer(app);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Database connected Successfully"))
  .catch(() => console.log("Database Not connected"));

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

// Start the frontend server on production
if (!isDev) {
  ViteExpress.bind(app, server);
}

server.listen(PORT, () => console.log(`Running on port ${PORT}`));
