import express from "express";
import ProductoRoute from "./routes/productos.routes.js";
import ApiRoute from "./api/productos.routes.js";
import ApiCliente from "./api/clientes.routes.js";
import connectDB from "./db/db.js"; 
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();


connectDB(); 


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/img', express.static(path.join(__dirname, 'img')));

app.use("/api", ApiRoute);
app.use("/api", ApiCliente);
app.use(ProductoRoute);

app.listen(3333, () => console.log("App funcionando"));
