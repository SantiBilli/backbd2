import { Carrito } from "../services/schemas.js";

export const getCarrito = async (req, res) => {
    const bodyParams = req.body

    try {
        const carrito = await Carrito.find({'usuarioId':bodyParams.idUsuario});
        return res.json(carrito[0]);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const agregarProductoCarrito = async (req, res) => {
    const bodyParams = req.body

    console.log(bodyParams);

    try {
        const carrito = await Carrito.updateOne({'idUsuario':bodyParams.idUsuario},{$push:{productos:{idProducto:bodyParams.idProducto, nombreProducto:bodyParams.nombreProducto, precio:bodyParams.precio, cantidad:bodyParams.cantidad}}});
        
        return res.status(200).send();
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}