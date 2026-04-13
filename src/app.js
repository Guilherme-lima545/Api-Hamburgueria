import express from "express";
import cors from "cors";
import produtos from "./routes/produtos.js";
import pagamento from "./routes/pagamento.js";
import webhook from "./routes/webhook.js";



const  app = express();

app.use(cors());
app.use(express.json());

app.use("/api/produtos", produtos);

app.use("/api/pagamento", pagamento);

app.use("/api/webhook", webhook);


export default app 