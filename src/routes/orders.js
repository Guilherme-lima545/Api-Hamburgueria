import express from 'express';
import db from '../db/connection.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { items } = req.body;

  const conn = await db.getConnection();

  try {
    await conn.beginTransaction();

    const ids = items.map((i) => i.produtoid);
    const [produtos] = await conn.query(
      'SELECT id, preco FROM products WHERE id IN (?)',
      [ids],
    );

    const total = items.reduce((sum, item) => {
      const produto = produtos.find((p) => p.id === item.produtoid);
      return sum + produto.preco * item.quantidade;
    }, 0);

    const [resultado] = await conn.query(
      'INSERT INTO ordem (total) VALUES (?)',
      [total],
    );
    const ordemid = resultado.insertId;

    for (const item of items) {
      await conn.query(
        'INSERT INTO ordem_items (ordem_id, produto_id, quantidade) VALUES (?, ?, ?)',
        [ordemid, item.produtoid, item.quantidade],
      );
    }

    await conn.commit();
    res.status(201).json({ ordemid, total });
  } catch (err) {
    await conn.rollback();
    res.status(500).json({ error: 'Erro ao criar pedido' });
  } finally {
    conn.release();
  }
});

router.get('/', async (req, res) => {
  const [ordens] = await db.query(
    'SELECT * FROM ordens ORDER BY created_at DESC',
  );

  for (const ordem of ordens) {
    const [items] = await db.query(
      `SELECT oi.quantity, p.name, p.price
       FROM order_items oi
       JOIN products p ON p.id = oi.product_id
       WHERE oi.order_id = ?`,
       [ordem.id],
    );
    ordem.items = items;
  }

  res.json(ordens);
});

router.patch('/:id/status', async (req, res) => {
  await db.query('UPDATE ordens SET status = ? WHERE id = ?', [
    req.body.status,
    req.params.id,
  ]);
  res.json({ message: 'Status atualizado' });
});

export default router;
