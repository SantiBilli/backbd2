import express from 'express';
import "dotenv/config";
import pingRouter from "./routes/Ping.js";
import cors from 'cors'
import registerRouter from './routes/Register.js';
import loginRouter from './routes/Login.js';
import checkEmailRouter from './routes/CheckEmail.js';
import "./services/schemas.js";
import fileRouter from './routes/Files.js';
import carritoRouter from './routes/Carrito.js';
import checkRolRouter from './routes/CheckRol.js';
import datosUsuarioRouter from './routes/DatosUsuario.js';
import crearPedidoRouter from './routes/CrearPedido.js';
import obtenerPedidosRouter from './routes/ObtenerPedidos.js';
import crearFacturaRouter from './routes/CrearFactura.js';
import obtenerFacturasRouter from './routes/ObtenerFacturas.js';

const app = express()
const PORT = process.env.PORT || 3550

app.disable("x-powered-by")
app.use(cors())
app.use(express.json({limit: "10mb"}))


app.use("/api", loginRouter)
app.use("/api", registerRouter)
app.use("/api", checkEmailRouter)
app.use("/api", fileRouter)
app.use("/api", pingRouter)
app.use("/api", carritoRouter)
app.use("/api", checkRolRouter)
app.use("/api", datosUsuarioRouter)
app.use("/api", crearPedidoRouter)
app.use("/api", obtenerPedidosRouter)
app.use("/api", crearFacturaRouter)
app.use("/api", obtenerFacturasRouter)

app.use("/api/images/products", express.static('C:\\Users\\santi\\Desktop\\TP BD2\\backbd2\\uploads'))

app.listen(PORT, async () => {
    console.log(`Server listening on https//localhost:${PORT}`)
})

