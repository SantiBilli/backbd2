import { agregarProductoCarritoSVC, getCarritoSVC } from "../services/carrito.js";
import { Carrito } from "../services/schemas.js";

export const getCarrito = async (req, res) => {
    const bodyParams = req.body

    const carrito = await getCarritoSVC(bodyParams)

    if (carrito == false) return res.status(500).send("Error");

    return res.json(carrito[0]);
}

export const agregarProductoCarrito = async (req, res) => {
    const bodyParams = req.body

    const agregar = agregarProductoCarritoSVC(bodyParams)

    if (agregar == false) return res.status(500).send("Error");
    
    return res.status(200).send();


}

export const cambiarCantidad = async (req, res) => {
    
    const bodyParams = req.body

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
        return res.status(200).send();

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Error");
    }
}

export const borrarProducto = async (req, res) => {
    
    const bodyParams = req.body
    
    try {
        const borrado = await Carrito.updateOne(
            { "idUsuario": bodyParams.userId },
            { $pull: { "productos": { "idProducto": bodyParams.idProducto } } }
        );
        return res.status(200).send();

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Error");
    }

    return res.send()
}