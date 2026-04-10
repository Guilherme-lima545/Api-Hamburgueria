import express from "express";
import produtos from "./routes/produtos.js";

const  app = express();

app.use(express.json());

app.use("/api/produtos", produtos);

export default app 