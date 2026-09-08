import mysql from "mysql2/promise";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caPath = path.join(__dirname, 'ca.pem');


const caCert = fs.readFileSync(caPath, 'utf-8');

if (!caCert.includes("-----BEGIN CERTIFICATE-----")) {
    console.error("❌ ERRO: O arquivo ca.pem parece estar vazio ou não é um certificado válido.");
    process.exit(1);
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 17030,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: {
    ca: caCert,
    rejectUnauthorized: true,
  },
});


export default pool;   