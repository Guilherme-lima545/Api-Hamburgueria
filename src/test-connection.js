// test-connection.js
import pool from './db/connection.js';

async function test() {
  let conn;
  try {
    console.log('Tentando obter conexão...');
    conn = await pool.getConnection();
    console.log('✅ Conexão obtida com sucesso!');
    
    console.log('Executando query de teste...');
    const [rows] = await conn.query('SELECT 1 as teste');
    console.log('✅ Query executada:', rows);
    
  } catch (err) {
    console.error('❌ ERRO DETALHADO:', err.message);
    console.error('Código:', err.code);
    console.error('Fatal:', err.fatal);
  } finally {
    if (conn) conn.release();
    process.exit(0);
  }
}

test();   