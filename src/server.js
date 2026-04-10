import "dotenv/config";
import app from "./app.js";


const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor hospedado em: http://localhost:${PORT}`)
})