import express from "express";
import { Payment } from "mercadopago";
import db from "../db/connection.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { data, tipo } = req.body;

  if(tipo === "payment") {
    const paymentId = data.id;
    
    const pagamento = new Payment(cliente);
    const resultado = await pagamento.get(paymentId);
  

  if(resultado.status === "approved") {
    const ordemId = resultado.body.external_reference;

    await db.query(
      "UPDATE Pedidos SET status = 'Pago' WHERE id = ?",
      [ordemId],
    );
  }
}

  res.sendStatus(200);
});

export default router;