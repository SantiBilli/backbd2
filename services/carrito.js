import { Carrito } from "./schemas.js";

export const getCarritoSVC = async (bodyParams) => {
    try {
        const carrito = await Carrito.find({'usuarioId':bodyParams.idUsuario});
        return carrito;

    } catch (error) {
        return false;
    }
}

export const agregarProductoCarritoSVC = async (bodyParams) => {
    try {
        const carrito = await Carrito.updateOne({'idUsuario':bodyParams.idUsuario},{$push:{productos:{idProducto:bodyParams.idProducto, nombreProducto:bodyParams.nombreProducto, precio:bodyParams.precio, cantidad:bodyParams.cantidad}}});
        
        return true
    } catch (error) {
        console.error("Error:", error);
        return false
    }
}