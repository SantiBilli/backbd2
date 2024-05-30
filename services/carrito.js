import { Carrito } from "./schemas.js";

export const getCarritoSVC = async (bodyParams) => {

    try {
        const carrito = await Carrito.find({'idUsuario':bodyParams.userId});
        
        return carrito;
    } catch (error) {
        return false;
    }
}

export const agregarProductoCarritoSVC = async (bodyParams) => {

    console.log("Params", bodyParams.descuento);

    try {
        const carrito = await Carrito.updateOne({'idUsuario':bodyParams.userId},{$push:{productos:{idProducto:bodyParams.idProducto, nombreProducto:bodyParams.nombreProducto, precio:bodyParams.precio, cantidad:bodyParams.cantidad, descuento: bodyParams.descuento}}});
        return true;
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
}

export const cambiarCantidadSVC = async (bodyParams) => {
    try {
        const cambioCantidad = await Carrito.updateOne(
            { "idUsuario": bodyParams.userId, "productos.idProducto": bodyParams.idProducto},
            { "$set": { "productos.$[element].cantidad": bodyParams.cantidad } },
            { "arrayFilters": [
                {
                    "element.idProducto": bodyParams.idProducto
                }
            ] }
        );
        return true;

    } catch (error) {
        return false;
    }
}

export const borrarProductoSVC = async (bodyParams) => {
    try {
        const borrado = await Carrito.updateOne(
            { "idUsuario": bodyParams.userId },
            { $pull: { "productos": { "idProducto": bodyParams.idProducto } } }
        );
        return true;

    } catch (error) {
        return false;
    }
}