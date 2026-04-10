import express from 'express';
import db from '../db/connection.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM Produtos');
  res.json(rows);
});

router.get('/categoria/:cat', async (req, res) => {
  const [rows] = await db.query(
    'SELECT * FROM Produtos WHERE categoria = ? AND disponivel = 0',
    [req.params.cat],
  );
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { nome, descricao, preco, categoria } = req.body;

  const [resultado] = await db.query(
    'INSERT INTO Produtos (nome, descricao, preco, categoria) VALUES (?, ?, ?, ?)',
    [nome, descricao, preco, categoria],
  );

  res.status(201).json({ id: resultado.insertId, nome, preco });
});

router.put('/:id', async (req, res) => {
  const { name, descricao, preco, disponivel } = req.body;

  await db.query(
    'UPDATE Produtos SET nome=?, descricao=?, preco=?, disponivel=? WHERE id=?'[
      (nome, descricao, preco, disponivel, req.params.id)
    ],
  );

  res.json({ message: 'Produto atualizado' });
});

router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM Produtos WHERE id = ?', [req.params.id]);
  res.json({ message: 'Produto removido' });
});

export default router;
