import app from "./app.js";

// ✅ Orden correcto: primero variable de entorno, luego valor por defecto
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server iniciado en : http://localhost:${port}`);
});
