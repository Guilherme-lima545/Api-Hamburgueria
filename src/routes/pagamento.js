import express from "express";
import cliente from "../config/mercadopago.js";
import { Payment } from "mercadopago";

const router = express.Router();

router.post("/", async (req, res) => {
  const { nome, email, total } = req.body;

  const pagamento = new Payment(cliente);
  const resultado = await pagamento.create({
    body: {
      transaction_amount: total,
      payment_method_id: "pix",
      description: nome,
      payer: { email, email: nome },
    },
  });

  res.json({
    id: resultado.body.id,
    status: resultado.body.status,
    qr_code: resultado.body.point_of_interaction.transaction_data.qr_code,
    qr_code_base64: resultado.body.point_of_interaction.transaction_data.qr_code_base64,
  });
});

router.get("/:id", async (req, res) => {
  const pagamento = new Payment(cliente);
  const resultado = await pagamento.get(req.params.id);

  res.json({ id: resultado.body.id, status: resultado.body.status });
});

router.post("/cartao", async (req, res) => {
  const { total, nome, email, token, installments } = req.body;

  const pagamento = new Payment(cliente);
  const resultado = await pagamento.create({
    body: {
      transaction_amount: total,
      token,
      description: nome,
      installments,
      payment_method_id: "visa",
      payer: { email, nome },
    },
  });

  res.json({ id: resultado.body.id, status: resultado.body.status });
});

export default router;