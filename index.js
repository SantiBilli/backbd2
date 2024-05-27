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


app.listen(PORT, async () => {
    console.log(`Server listening on https//localhost:${PORT}`)
})

